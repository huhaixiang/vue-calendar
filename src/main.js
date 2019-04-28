// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Calendar from './components/calendar'
import Login from './components/Login.js'

Vue.config.productionTip = false

Vue.component(Calendar.name, Calendar)
Vue.use(Login);
/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  data() {
    return {
      msg: '10086'
    }
  },
  components: { App },
  template: '<App/>'
})
