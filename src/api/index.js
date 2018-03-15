import Vue from 'vue'
import axios from 'axios'
import querystring from 'querystring'
import { hexMd5 } from '@/assets/js/md5.js' // MD5加密
import { Promise } from 'es6-promise-polyfill'
window.Promise = Promise
Vue.prototype.$ajax = axios // 挂载到全局
// axios.defaults.baseURL = 'http://dev.agent.wanbiwang.com/' // 访问路径
axios.defaults.withCredentials = true // 跨域带sension
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.transformRequest = function (data) {
  return querystring.stringify(data)
}
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)   // 返回接口返回的错误信息
  })


// 图片上传
export const uploadImage = (data, success, failure) => {
  let conf = {
    url: '/file/uploadImg',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    transformRequest: function (data) {
      return data
    }
  }
  ajax(conf, success, failure)
}
// 图片上传
export const upload = (param, success, failure) => {
  let conf = {
    url: '/file/upload',
    method: 'post',
    params: param,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    transformRequest: function (data) {
      return data
    }
  }
  ajax(conf, success, failure)
}

/**
 * 登录
 * @param data
 * @param success
 * @param failure
 */
export const login = (data, success, failure) => {
  let conf = {
    url: '/client/login',
    method: 'post',
    data: {
      identifier: data.identifier,
      password: data.password ? hexMd5(data.password) : null,
      sms: data.sms,
      validate: data.validate,
      refreshToken: data.refreshToken
    }
  }
  ajax(conf, success, failure)
}
/**
 * __captcha__get
 * @param data
 * @param success
 * @param failure
 */
export const __captcha__get = (data, success, failure) => {
  let conf = {
    url: '/public/__captcha__get',
    method: 'get'
  }
  ajax(conf, success, failure)
}

/**
 * 获取验证码
 * @param phone
 * @param success
 * @param failure
 */
export const __sms__get = (phone, success, failure) => {
  let conf = {
    url: '/public/__sms__get',
    method: 'get',
    params: {
      phone: phone.phone
    }
  }
  ajax(conf, success, failure)
}

/* 邮箱找回密码 */
export const __email__password__change = (param, success, failure) => {
  let conf = {
    url: '/public/__email__password__change',
    method: 'get',
    params: param
  }
  ajax(conf, success, failure)
}

/* 手机修改密码 */
export const __user__password__update__phone = (param, success, failure) => {
  let conf = {
    url: '/public/__user__password__update__phone',
    method: 'get',
    params: param
  }
  ajax(conf, success, failure)
}

/* 获取某种币种绘制K线图的数据 */
export const __trade__chart = (param, success, failure) => {
  let conf = {
    url: '/public/__trade__chart',
    method: 'get',
    params: param
  }
  ajax(conf, success, failure)
}


// 统一处理返回数据
export const allHandle = {
    handleSuccess (res, success, failure) {
        if(res.error){
            failure && failure(res)
        }else{
            success && success(res)
        }
  },
  handleCatch (err) {

  }
}

/**
 * 过滤空值的属性
 * @param obj
 * @constructor
 */
function FilterData (obj) {
  for (var key in obj) {
    if (obj[key] == null || obj[key] === '') {
      delete obj[key]
    }
  }
}

function ajax (conf, success, failure) {
  FilterData(conf.params) // 过滤空属性;
  FilterData(conf.data)  // 过滤空属性;
  
  axios(conf)
    .then((res) => {
      allHandle.handleSuccess(res, success, failure)
    })
    .catch((err) => {
      allHandle.handleCatch(err)
    })
}
