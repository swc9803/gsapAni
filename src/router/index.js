import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Darkmode from '@/pages/Darkmode'
import ReboundImg from '@/pages/ReboundImg'
import WaveBtn from '@/pages/WaveBtn'
import GrooveText from '@/pages/GrooveText'
import ThreeDountMask from '@/pages/ThreeDountMask'
import ThreeTear from '@/pages/ThreeTear'
import BolbAppearText from '@/pages/BolbAppearText'
import CountNumber from '@/pages/CountNumber'
import BouncingBall from '@/pages/BouncingBall'
import CanvasBackground from '@/pages/CanvasBackground'
import MatterCreateBall from '@/pages/MatterCreateBall'
import Draggable from '@/pages/Draggable'
import DraggableRotateImg from '@/pages/DraggableRotateImg'
import FocusBlurAni from '@/pages/FocusBlurAni'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test1',
      name: 'Darkmode',
      component: Darkmode
    },
    {
      path: '/test2',
      name: 'DraggableRotateImg',
      component: DraggableRotateImg
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
      name: 'MatterCreateBall',
      component: MatterCreateBall
    },
    {
      path: '/test6',
      name: 'GrooveText',
      component: GrooveText
    },
    {
      path: '/test7',
      name: 'Draggable',
      component: Draggable
    },
    {
      path: '/test8',
      name: 'ThreeDountMask',
      component: ThreeDountMask
    },
    {
      path: '/test9',
      name: 'ThreeTear',
      component: ThreeTear
    },
    {
      path: '/test10',
      name: 'BolbAppearText',
      component: BolbAppearText
    },
    {
      path: '/test11',
      name: 'CountNumber',
      component: CountNumber
    },
    {
      path: '/test12',
      name: 'BouncingBall',
      component: BouncingBall
    },
    {
      path: '/test13',
      name: 'CanvasBackground',
      component: CanvasBackground
    },
    {
      path: '/test14',
      name: 'FocusBlurAni',
      component: FocusBlurAni
    }
  ]
})

export default router
