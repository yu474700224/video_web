import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    SET_USER_INFO(data) {
      this.state.userInfo = data
    }
  },
  actions: {
    SET_USER_INFO(context,data){
      context.commit("SET_USER_INFO",data)
    }
  }
})
