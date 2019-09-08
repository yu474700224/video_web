<template>
  <div style="margin-bottom: 10px;display: flex;" @click="RedirectVideo()">
    <div>
      <video  width="200" >
        <source :src=videoSrc>
      </video>
    </div>
    <div>
      <div>
        <span>{{videoInfo.name}}</span><br>
        <span>上传者：{{videoInfo.author_id}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'videoShow',
    props:{
      videoInfo:{
        type:Object
      }
    },
    data () {
      return {
        videoSrc:"http://127.0.0.1:9000/videos/" + this.videoInfo.name
      }
    },
    created () {
      console.log(this.videoInfo)
    },
    methods:{
      RedirectVideo(){
        this.$emit("func",this.videoInfo)
      }
    }
  }
</script>

<style scoped>

</style>
