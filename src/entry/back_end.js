// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../App'
import router from '../router'
import Vuex from 'vuex'
import store from '../store/index'

import ElementUI from 'element-ui';
Vue.use(ElementUI)

import axios from 'axios';
// rxjs use 
import VueRx from 'vue-rx';
Vue.use(VueRx)


Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
