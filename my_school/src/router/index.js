import Router from 'vue-router'
import Vue from 'vue'

import Index from '../views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      // redirect: '/index',
    }
  ]
})