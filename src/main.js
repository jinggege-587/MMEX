// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/less/layout.less'
import './element-variables.scss'
import '../theme/index.css'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import * as api from '@/api/index' // 导入api接口
import echarts from 'echarts'


import './filter'

Vue.config.productionTip = false
Vue.use(VueSocketio, 'http://dev.auth.wanbiwang.com');
Vue.use(ElementUI, echarts)

Vue.prototype.$echarts = echarts

Vue.prototype.$api = api // 挂载到全局，在组件里通过this.api获取

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 统一处理ajax数据返回
api.allHandle.handleSuccess = function (data, success, failure) {
  if(!data.error){
    success(data.body)
  } else {
    if (failure) {
      failure(data)
    } else {
      alert(data.message + 'code:' + data.responseCode)
    }
  }
}

// 处理ajax最后的异常
api.allHandle.handleCatch = function (err) {
  debugger
  if (err.toString().indexOf('404')) {
    vm.$messageBox({
      title: '404',
      message: '网络连接异常'
    })
  } else if (err.toString().indexOf('407')) {
    vm.$messageBox({
      title: '公告',
      message: '系统维护中',
      showConfirmButton: false,
      closeOnClickModal: false
    })
  } else {
    vm.$messageBox({
      title: '404',
      message: '网络连接失败'
    })
  }
}
