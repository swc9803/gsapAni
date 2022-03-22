<template>
  <!-- test19 -->
  <div ref="sc" class="sc" />
  <div class="con">
    <svg class="goTrip" viewBox="0 0 558 120">
      <path stroke="#000" d="m61.9 50.75 27.55-.33m-27.56.33a19.4 19.4 0 0 0-.08-.33m.08.33a22.8 22.8 0 0 1-.5 12.11m28.06-12.44H61.81m27.64 0V24L90 61.43V94.5l-.55-31.97-28.05.33m.4-12.44a17.04 17.04 0 0 0-5.16-8.47c-5.84-5.2-13.37-6.61-20.92 0-7.55 6.6-7.7 20.91 0 28.18 8.92 4.78 9.68 6.6 20.92 0 1.88-1.1 3.67-3.82 4.76-7.27"/>
      <path stroke="#000" d="M61.33 62.9c1.32-4.5 1.52-7.17.44-12.36M112 54.5c-.5-4.5 3.84-7.4 11-8 6.28 1.24 8 4 7.5 7.5s-2.99 5.6-7.5 6.5c-6.4.62-10.5-1.5-11-6ZM121 26.5v11h-18 35.5M145.5 26v19.5m0 19.5V45.5m0 0H158V26v39M117.5 84c.5-6 6.5-9.58 16-9.5 12.16.1 16 2.5 17 9.5-1.5 6.5-6.01 7.6-17 8-10.17.81-15-1.5-16-8ZM182.06 41.91c-.75-6.7 5.77-11.01 16.54-11.91 9.44 1.84 12.03 5.96 11.28 11.17-.75 5.2-4.5 8.33-11.28 9.67-9.63.92-15.79-2.23-16.54-8.93ZM176 60h39M180.5 70H211v9.63h-29V91h31M268 47h-12v25h12M282.4 47h-12v25h12M282.4 60H298V25v69M323 41.5V72h27M360.2 27v34.25m0 34.25V61.25m0 0H378M390 81.5c5.93-13.73 7.73-22.99 9-41.5 2.45 18.64 5.8 27.82 16 41.5M416 57.5h17V29v61.5M445 26v66M473.09 48.75c-1.1-8.3 8.45-13.64 24.22-14.75 13.82 2.28 17.61 7.37 16.51 13.82-1.1 6.46-6.58 10.32-16.51 11.99-14.1 1.13-23.12-2.77-24.22-11.06ZM485 67v24.5h-24 44.5m23.5 0h-23.5m0 0V67"/>
      <g ref="group" />
    </svg>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  setup () {
    const sc = ref()
    const group = ref()
    const delay = 0
    onMounted(() => {
      const items = document.querySelectorAll('.goTrip > path')
      const sceneryTextAni = gsap.timeline()
      ScrollTrigger.create({
        animation: sceneryTextAni,
        trigger: sc.value,
        start: '1% top',
        end: '100% 100%',
        scrub: 2
      })
      items.forEach(item => {
        const length = item.getTotalLength()
        for (let i = 0; i < length; i += 1) {
          const pointLength = Math.random() * length
          const point = item.getPointAtLength(pointLength)
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
          circle.setAttribute('cx', point.x)
          circle.setAttribute('cy', point.y)
          circle.setAttribute('r', Math.random() * 3 + 1)
          group.value.appendChild(circle)
          sceneryTextAni.to(circle, {
            cx: point.x + (Math.random() - 0.5) * 60,
            cy: point.y + (Math.random() - 0.5) * 60,
            opacity: 0,
            delay: (delay + pointLength) * 0.002
          }, 0)
        }
      })
    })
    return {
      sc,
      group
    }
  }
}
</script>

<style lang="scss" scoped>
.sc {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 200vh;
}
.con {
  // overflow: hidden;
  width: 50%;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
path {
  opacity: 0;
}

</style>
