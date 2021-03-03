import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Categorizer from '../views/Categorizer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Categorizer',
    component: Categorizer
  },
  {
    path: '/established',
    name: 'Established',
    component: () => import('../views/Established.vue')
  },
  {
    path: '/actiondesign',
    name: 'ActionDesign',
    component: () => import('../views/ActionDesign.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
