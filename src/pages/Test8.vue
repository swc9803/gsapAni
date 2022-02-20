<template>
  <!-- test8 -->
  <div class="water">
    <div class="clip"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted } from '@vue/runtime-core'

export default {
  setup () {
    onMounted(() => {
      gsap.to('.clip', {
        top: '-40%',
        duration: 2,
        ease: 'power2',
        delay: 1
      })
      gsap.to('.clip', {
        top: '-100%',
        duration: 1,
        ease: 'none',
        delay: -0.1
      }, '>')
    })
  }
}
</script>

<style lang="scss" scoped>
.water {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(0, 47, 255);
  overflow: hidden;
  .clip {
    position: absolute;
    transform: translate(-50%);
    top: -100%;
    left: 50%;
    width: 150%;
    height: 50%;
    clip-path: ellipse(50% 70% at 50% 30%);
    background: white;
  }
}
</style>
