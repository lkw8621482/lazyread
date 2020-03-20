// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//配置mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//配置axios
import api from "./api/api"
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$ajax = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
