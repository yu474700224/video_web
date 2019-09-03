<template>
  <div>
    <div class="indexCss">
      <el-card class="box-card">
        <div slot="header" class="clearfix" style="display: flex;justify-content: center">
          <span>登录</span>

        </div>
        <div>
          <div>
            <span>账号：</span>
            <el-input style="width: 300px"
                      placeholder="邮箱/电话/用户名"
                      v-model="loginInfo.name">
            </el-input>
          </div>
          <div style="margin-top: 20px">
            <span>密码：</span>
            <el-input style="width: 300px"
                      placeholder="密码"
                      v-model="loginInfo.pwd">
            </el-input>
          </div>
          <div style="margin-top: 20px;display: flex;justify-content: center">
            <el-button type="primary" round @click="Login">登录</el-button>
            <el-button type="primary" round @click="goToRegister">注册</el-button>

          </div>
        </div>

      </el-card>
    </div>
  </div>

</template>

<script>
  import { Login } from '../api/api'

  export default {
    data () {
      return {
        loginInfo: {}
      }
    },
    methods: {
      goToRegister: function () {
        this.$router.push('/register')
      },
      Login: function () {
        Login(this.loginInfo).then(res => {
          console.log(res)
          this.$store.dispatch('SET_USER_INFO', res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .indexCss {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .box-card {
    width: 400px;
  }

</style>
