<template>
  <!-- test9 -->
  <div class="container" ref="background">
    <Board
      @yellow="changeToYellow"
      @green="changeToGreen"
      @brown="changeToBrown"
    />
  </div>
</template>

<script>
import gsap from 'gsap'
import Board from '@/pages/Board'
import { ref } from 'vue'

export default {
  components: {
    Board
  },
  setup () {
    const background = ref()
    const changeToYellow = () => {
      gsap.to(background.value, {
        background: '#f4ffb480',
        duration: 1,
        ease: 'none'
      })
    }
    const changeToGreen = () => {
      gsap.to(background.value, {
        background: '#54dd5280',
        duration: 1,
        ease: 'none'
      })
    }
    const changeToBrown = () => {
      gsap.to(background.value, {
        background: '#dab37980',
        duration: 1,
        ease: 'none'
      })
    }
    return {
      background,
      changeToYellow,
      changeToGreen,
      changeToBrown
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #dab37980;
}
</style>
