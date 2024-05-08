import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routerss: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerss,
})

export default router
