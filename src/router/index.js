import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Darkmode from '@/pages/Darkmode'
import Gooey from '@/pages/Gooey'
import TwinkleStar from '@/pages/TwinkleStar'
import ReboundImg from '@/pages/ReboundImg'
import WaveBtn from '@/pages/WaveBtn'
import Unveil from '@/pages/Unveil'
import SpreadText from '@/pages/SpreadText'
import BlobText from '@/pages/BlobText'
import Test8 from '@/pages/Test8'
import Test9 from '@/pages/Test9'
import FallingToWater from '@/pages/FallingToWater'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Darkmode',
      component: Darkmode
    },
    {
      path: '/test1',
      name: 'Gooey',
      component: Gooey
    },
    {
      path: '/test2',
      name: 'TwinkleStar',
      component: TwinkleStar
    },
    {
      path: '/test3',
      name: 'ReboundImg',
      component: ReboundImg
    },
    {
      path: '/test4',
      name: 'WaveBtn',
      component: WaveBtn
    },
    {
      path: '/test5',
      name: 'Unveil',
      component: Unveil
    },
    {
      path: '/test6',
      name: 'SpreadText',
      component: SpreadText
    },
    {
      path: '/test7',
      name: 'BlobText',
      component: BlobText
    },
    {
      path: '/test8',
      name: 'Test8',
      component: Test8
    },
    {
      path: '/test9',
      name: 'Test9',
      component: Test9
    },
    {
      path: '/test10',
      name: 'FallingToWater',
      component: FallingToWater
    }
  ]
})

export default router
