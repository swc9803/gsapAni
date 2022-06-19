<template>
  <div class="dd" ref="box1" @mouseover="play1" @mouseout="reverse1"></div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const box1 = ref()
    const animation1 = gsap.timeline({ paused: true })

    onMounted(() => {
      animation1.to(box1.value, { background: 'red', duration: 1 })
    })

    const play1 = () => animation1.play()
    const reverse1 = () => animation1.reverse()

    return {
      box1,
      play1,
      reverse1
    }
  }
}
</script>

<style lang="scss" scoped>
.dd {
  width: 50px;
  height: 50px;
  background: black;
}
</style>
