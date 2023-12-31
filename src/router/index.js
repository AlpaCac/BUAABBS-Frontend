import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register/index.vue'),
    }
  ]
})

export default router
