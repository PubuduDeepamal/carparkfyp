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
      path: '/Slots',
      name: 'Slots',
      component: () => import('../views/Slots.vue')
    },
    {
      path: '/Contactus',
      name: 'Contactus',
      component: () => import('../views/Contactus.vue')
    },
    {
      path: '/Loging',
      name: 'Loging',
      component: () => import('../views/Loging.vue')
    },
    {
      path: '/Booking',
      name: 'Booking',
      component: () => import('../views/Booking.vue')
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: () => import('../views/adminhome.vue')
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
