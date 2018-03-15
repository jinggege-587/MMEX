import Vue from 'vue'

// 日期时间格式显示
Vue.filter('date', function (value) {
  const monthsShort = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12}
  if (!value) return ''
  let dateArray = new Date(parseInt(value)).toString().split(' ')
  let year = dateArray[3]
  let month = monthsShort[dateArray[1]]
  let day = dateArray[2]
  let time = dateArray[4]
  return year + '-' + month + '-' + day + ' ' + time
})

// 首尾去空格
Vue.filter('trim', function (text) {
  let rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  return text == null ?
    "" :
    ( text + "" ).replace( rtrim, "" );
})

Vue.filter('auth', function(cb){
  if(!localStorage.mc)return false;
  let host = localStorage.mc,jwt = localStorage.jwt;
  let auth_server = require('socket.io-client')(host);
  let _this = this;
  window.auth_server = auth_server;
  auth_server.emit('user', { path: '/user/login', body: {jwt:jwt} }, (msg) => {
      console.log('登录成功0！',msg);
      if(msg.error){
          this.$message.error({
              message: msg.error
          });
      }else{
          cb && cb(msg.body);
      }
  });
});

// 是否是手机号
Vue.filter('phone', function (value) {
  return /^[1][3,4,5,8,7,9][0-9]{9}$/.test(value)
})

// 挂载到全局
Vue.prototype.$filter = {
  date: Vue.filter('date'),
  trim: Vue.filter('trim'),
  phone: Vue.filter('phone'),
  auth: Vue.filter('auth')
}
