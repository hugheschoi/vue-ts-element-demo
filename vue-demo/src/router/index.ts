import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/attrslistner',
    name: 'attrs-listner',
    // route level code-splitting
    component: () => import(/* webpackChunkName: "attrs-listner" */ '../views/attrs-listener/grandParent.vue'),
  },
  {
    path: '/responsive',
    name: 'responsive',
    component: () => import(/* webpackChunkName: "responsive" */ '../views/responsive/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
