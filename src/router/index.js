import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'

import Default from '../views/Default.vue'
import Loading from '../views/Loading.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loading',
    component: Loading
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/default',
    name: 'default',
    component: Default
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  history: process.env.IS_ELECTRON ? `hash` : `history`,
  base: process.env.BASE_URL,
  routes
})

export default router
