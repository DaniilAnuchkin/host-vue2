import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import userProfileRoutes from 'userProfile/UserProfileRoutes'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/docs',
    name: 'Docs',
    children: []
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [...routes, ...userProfileRoutes]
})

export default router
