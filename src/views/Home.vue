<template>
  <div>

    <el-container>
      <el-header>
        <video-hanlder></video-hanlder>
      </el-header>
      <el-main>
        <div style="display: flex;justify-content: space-between">
          <div style="width: 60%;height: 60%">
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions"
                          @waiting="onWaiting($event)"
            >
            </video-player>
            <div class="video_info">
              <span>上传者：{{videoInfo.author_id}}</span><br>
              <span>上传时间：{{videoInfo.create_time}}</span>
            </div>
            <div>
              <el-input style="margin-top: 20px;width: 89%"
                        type="textarea"
                        :rows="2"
                        placeholder="评论"
                        :disabled=isComment
                        v-model="content">
              </el-input>
              <el-button style="margin: 0 0 0 10px;height: 53px !important" type="primary" @click="addComment()">评论
              </el-button>
              <comment-car :commentList="commentList"></comment-car>
            </div>
          </div>
          <div class="video-list">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
              <li v-for="videoInfo in videoInfoList" class="infinite-list-item">
                <videoShow :videoInfo=videoInfo></videoShow>
              </li>
            </ul>
          </div>
          <div></div>

        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  import videoHanlder from '../components/videoHanlder'
  import rightHtml from '../components/rightHmtl'
  import videoShow from '../components/videoShow'
  import commentCar from '../components/comment'
  import { getVideoList, addComment,getCommentList } from '../api/api'

  export default {
    components: {
      videoHanlder,
      rightHtml,
      videoShow,
      commentCar
    },
    data () {
      return {
        videoInfoList: [],
        commentInfo:{},
        content: '',
        videoInfo:{},
        commentList:[],
        isComment: true,
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',
            src: ''//你的m3u8地址（必填）
          }],
          poster: 'http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg', //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true //全屏按钮
          }
        },
        count: 0,
      }
    },
    created () {
      axios.get('/videoapi/videos/list/1').then(res => {
        this.playerOptions.sources[0].src = "http://127.0.0.1:9000/videos/" + res.data[0].name
        this.videoInfo = res.data[0]
        console.log(this.videoInfo)
      }).catch(err => {
        console.log(err)
      })
      getVideoList().then(res => {
        this.videoInfoList = res
      }).catch(err => {
        console.log(err)
      })
      //判断当前是否登录
      if (this.$store.state.userInfo.name === undefined) {
        this.isComment = true
      }else{
        this.isComment = false
      }

    },
    methods: {
      load () {
        getVideoList().then(res => {
          this.videoInfoList = res
          this.getCommentList()
        }).catch(err => {
          console.log(err)
        })
      },
      onWaiting () {
        console.log('等待加载')
      },
      addComment () {
        let comment = { video_id:this.videoInfo.id,author:this.$store.state.userInfo.id,content: this.content }
        addComment(comment).then(res => {
          this.getCommentList()
        }).catch(err => {

        })
      },
      getCommentList(){
        getCommentList({vid:this.videoInfo.id,from:1,to:10}).then(res =>{
          this.commentList = res
        }).catch(err =>{
        })
      }
    }
  }
</script>

<style>
  .video-list {
    width: 35%;
  }

  .infinite-list {
    height: 400px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .video_info{
    margin-top: 20px;
  }
</style>
