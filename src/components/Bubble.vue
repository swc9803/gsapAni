<template>
  <svg v-for="bubble in 15" :key="bubble" class="bubbles" :ref="bubbles"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 248 248">
    <g filter="url(#bubble_f_11_2)">
      <mask id="path-1-inside-1_11_2" fill="#fff">
        <path d="M244 124a120 120 0 1 1-240 0 120 120 0 0 1 240 0Z"/>
      </mask>
      <path fill="url(#paint0_radial_11_2)" d="M244 124a120 120 0 1 1-240 0 120 120 0 0 1 240 0Z"/>
      <path stroke="#fff" stroke-width="2" d="M244 124a120 120 0 1 1-240 0 120 120 0 0 1 240 0Z" mask="url(#path-1-inside-1_11_2)"/>
    </g>
    <defs>
      <filter id="bubble_f_11_2" width="248" height="248" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_11_2" stdDeviation="2"/>
      </filter>
      <radialGradient id="paint0_radial_11_2" cx="0" cy="0" r="1" gradientTransform="rotate(55.7 -32.7 133) scale(62.9623)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity=".6"/>
        <stop offset="1" stop-color="#fff" stop-opacity=".2"/>
      </radialGradient>
    </defs>
  </svg>
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const lineArray = ref([])
    const bubbles = (el) => lineArray.value.push(el)
    const setRandomPosition = () => {
      for (var i = 0; i < 15; i++) {
        gsap.set(lineArray.value[i], {
          left: 'random(5, 95)%',
          scale: gsap.utils.random(0.6, 1.2)
        })
      }
    }
    onMounted(() => {
      setTimeout(() => {
        for (var i = 0; i < 15; i++) {
          setRandomPosition()
          gsap.to(lineArray.value[i], {
            top: '-10%',
            duration: 'random(10, 15)',
            delay: 'random(1, 15)',
            ease: 'none',
            repeat: -1
          })
          gsap.to(lineArray.value[i], {
            xPercent: 'random(-100, 100)',
            duration: 'random(4, 5)',
            yoyo: true,
            ease: 'none',
            repeat: -1
          })
        }
      }, 1000)
    })
    return {
      lineArray,
      bubbles
    }
  }
}
</script>

<style lang="scss" scoped>
.bubbles {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 110%;
}
</style>
