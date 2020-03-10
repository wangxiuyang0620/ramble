import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './until/ele'
import '../public/fonts/iconfont.css'
import http from './until/http'
Vue.config.productionTip = false
Vue.prototype.$http=http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
