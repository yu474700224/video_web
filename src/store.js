import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    SET_USER_INFO(state,userInfo) {
      this.state.userInfo.name = userInfo.login_name
      this.state.userInfo.id = userInfo.id
    }
  },
  actions: {
    SET_USER_INFO(context,userInfo){
      context.commit("SET_USER_INFO",userInfo)
    }
  }
})
