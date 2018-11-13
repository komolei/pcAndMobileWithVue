// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../App'
import router from '../router'
import Vuex from 'vuex'
import store from '../store/index'

// 全部加载

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 部分加载
// import { Button, Cell } from 'vant';
// import 'vant/lib/button/style';


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
