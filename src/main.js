import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'

Vue.use(ElementUI)
Vue.use(VideoPlayer)
Vue.config.productionTip = false

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
