<template>
    <div>
      <a href="" style="margin: 0 10px 0 0">注册</a>
      <router-link to="/login" v-if="!name">登录</router-link>
      <router-link to="/register"v-else>{{name}}</router-link>

    </div>
</template>

<script>
  export default {
    data(){
      return{
        name:this.$store.state.userInfo.name
      }
    },
    created () {
    }
  }
</script>

<style scoped>

</style>
