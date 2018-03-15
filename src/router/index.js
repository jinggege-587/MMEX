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
import user_index from '@/views/myMeans/user_index.vue'
import coinname from '@/views/myMeans/coinname.vue'
import record from '@/views/myMeans/record.vue'
import delegation from '@/views/myMeans/delegation.vue'
import my_order from '@/views/myMeans/my_order.vue'
import securitys from '@/views/myMeans/securitys.vue'
import affirm from '@/views/myMeans/affirm.vue'
import realName from '@/views/myMeans/realName.vue'
import syslist from '@/views/myMeans/syslist.vue'
import updatePsw from '@/views/myMeans/updatePsw.vue'
import updateTrade from "@/views/myMeans/updateTrade.vue"

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
    },
    {
      path: '/user_index',
      name: 'user_index',
      component: user_index
    },
    {
      path: '/coinname',
      name: 'coinname',
      component: coinname
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/delegation',
      name: 'delegation',
      component: delegation
    },
    {
      path: '/my_order',
      name: 'my_order',
      component: my_order
    },
    {
      path: '/securitys',
      name: 'securitys',
      component: securitys
    },
    {
      path: '/affirm',
      name: 'affirm',
      component: affirm
    },
    {
      path: '/realName',
      name: 'realName',
      component: realName
    },
    {
      path: '/syslist',
      name: 'syslist',
      component: syslist
    },
    {
      path: '/updatePsw',
      name: 'updatePsw',
      component: updatePsw
    },
    {
      path: '/updateTrade',
      name: 'updateTrade',
      component: updateTrade
    }
  ]
})
