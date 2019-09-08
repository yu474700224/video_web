<template>
  <div>
    <div class="indexCss">
      <el-card class="box-card">
        <div slot="header" class="clearfix" style="display: flex;justify-content: center">
          <span>注册</span>

        </div>
        <div class="register-input">
          <div>
            <span>账&nbsp;&nbsp;&nbsp;&nbsp;号：</span>
            <el-input style="width: 300px"
                      placeholder="邮箱/电话/用户名"
                      v-model="loginInfo.login_name">
            </el-input>
          </div>
          <div style="margin-top: 20px">
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
            <el-input style="width: 300px"
                      placeholder="密码"
                      v-model="loginInfo.pwd">
            </el-input>
          </div>
          <div style="margin-top: 20px">
            <span>确认密码：</span>
            <el-input style="width: 300px"
                      placeholder="确认密码"
                      v-model="comfirmPwd">
            </el-input>
          </div>
          <div style="margin-top: 20px;display: flex;justify-content: center">
            <el-button type="primary" round @click="register">注册</el-button>
          </div>
        </div>

      </el-card>
    </div>
  </div>
</template>

<script>
  import { Register } from '../api/api'

  export default {
    name: 'register',
    data () {
      return {
        loginInfo: {},
        comfirmPwd: ''
      }
    },
    methods: {
      register () {
        if (this.comfirmPwd === this.loginInfo.pwd) {
          Register(this.loginInfo).then(res => {
            debugger
          }).catch(err => {

          })
        } else {
          debugger
          this.$message.error('两次密码不一样')
        }
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
    width: 450px;
  }


</style>
