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
      path: '/qr-generator',
      name: 'qr-generator',
      component: () => import('../views/QRGeneratorView.vue')
    },
    {
      path: '/qr-scanner',
      name: 'qr-scanner',
      component: () => import('../views/QRScannerView.vue')
    },
    {
      path: '/qr-user/:username',
      name: 'qr-user',
      component: () => import('../views/QRUserView.vue')
    }
  ]
})

export default router
