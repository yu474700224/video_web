<template>
  <div>
    <el-card class="box-card "  v-for="comment,key in commentList" :key="key">
      <div style="display: flex">
        <div class="comment-user-info">
          {{comment.author}}:
        </div>
        <div class="comment-content">
          {{comment.content}}
        </div>
        <div>2019-01-01</div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    props:{
      commentList:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .box-card {
    margin-top: 10px;
  }



  .comment-user-info {
    width: 60px;
  }

  .comment-content {
    width: 80%;
  }
</style>
