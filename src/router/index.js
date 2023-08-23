import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/HomeDonaite',
      name: 'HomeDonaite',
      component: () => import('../views/HomeDonaite.vue')
    },
    {
      path: '/Loging',
      name: 'Loging',
      component: () => import('../views/Loging.vue')
    },
    {
      path: '/mealplain',
      name: 'mealplain',
      component: () => import('../views/mealplain.vue')
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: () => import('../views/adminhome.vue')
    },
    {
      path: '/adminhome1',
      name: 'adminhome1',
      component: () => import('../views/adminhome1.vue')
    },
    {
      path: '/adminhome2',
      name: 'adminhome2',
      component: () => import('../views/adminhome2.vue')
    },
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: () => import('../views/adminlogin.vue')
    },
    {
      path: '/Moderatehome',
      name: 'Moderatehome',
      component: () => import('../views/Moderatehome.vue')
    },
    {
      path: '/Moderatehome1',
      name: 'Moderatehome1',
      component: () => import('../views/Moderatehome1.vue')
    },
  ]
})

export default router
