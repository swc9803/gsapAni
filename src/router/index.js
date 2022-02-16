import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Darkmode from '@/pages/Darkmode'
import Test1 from '@/pages/Test1'
import Test2 from '@/pages/Test2'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/darkmode',
      name: 'Darkmode',
      component: Darkmode
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    }
  ]
})

export default router
