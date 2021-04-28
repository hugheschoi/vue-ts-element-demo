import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
const path = require('path');

Vue.use(VueRouter)
const addRoutes:  Array<RouteConfig> = [];
const contexts:any = require.context('../views/', true, /index\.(vue|js)$/);
contexts.keys().forEach((component:string) => {
  const routerPath = path.join('../views', component);
  const name = (component.match(/\.\/(.+)\//) as any)[1];
  console.log(routerPath);
  console.log(name);
  addRoutes.push({
    path: '/' + name,
    name,
    component: () => import(routerPath)
  })
})
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/rowspan/index.vue')
  },
  ...addRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
