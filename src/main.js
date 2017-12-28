// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/animate.css'
import '../static/css/common.css'
import '@/assets/fonts/iconfont.css'

import Request from '@/libs/ajax'
import Utils from '@/libs/utils'
import Url from '@/libs/url'
import NativeSDK from '@/libs/sdk-native'
import WxSDK from '@/libs/sdk-wx'
import Student from '@/libs/student'


import  { LoadingPlugin,ToastPlugin, DatetimePlugin,ConfirmPlugin  } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(DatetimePlugin)
Vue.use(ConfirmPlugin)

Vue.config.productionTip = false

// 全局变量
// 后台请求数据接口
import urls from '@/libs/url.js'
Vue.prototype.globalurl = urls;

import util from '@/libs/util.js'
Vue.prototype.Util = util;

import vueResource from 'vue-resource'
Vue.use(vueResource);
import VueScroller from 'vue-scroller'
Vue.use(VueScroller);

/*vue-socket*/
// import VueSocketio from 'vue-socket.io'
// Vue.use(VueSocketio, 'http://localhost:8080')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
