import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/login.vue'
import register from '@/views/register/register.vue'
import forget from '@/views/login/forget.vue'
import dynamic from '@/views/notice/dynamic.vue'
import serviceDeal from '@/views/notice/serviceDeal.vue'
import payAndSell from '@/views/notice/payAndSell.vue'
import apply from '@/views/notice/apply.vue'
import index from '@/views/index/index.vue'
import home from '@/views/index/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/serviceDeal',
      name: 'serviceDeal',
      component: serviceDeal
    },
    {
      path: '/payAndSell',
      name: 'payAndSell',
      component: payAndSell
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
