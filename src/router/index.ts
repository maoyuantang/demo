/*
 * @Author: zqg
 * @Date: 2019-11-25 15:49:06
 * @LastEditors: zqg
 * @LastEditTime: 2019-11-25 16:56:12
 * @Description: Do not edit
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
