<template>
  <div style="margin-bottom: 10px;display: flex;">
    <div>
      <img src="../assets/logo.png" height="200" width="200"/>
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

      }
    },
    created () {

    }
  }
</script>

<style scoped>

</style>
