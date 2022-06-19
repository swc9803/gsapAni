<template>
  <div class="container" @mouseover="move" @mouseout="back">
    <div class="box" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  setup () {
    // 일정시간 이상 호버 시 애니메이션 재생
    const move = () => {
      const timer = setTimeout(function () {
        gsap.to('.box', {
          yPercent: 50, opacity: 0
        })
      }, 1000)
      addEventListener('mouseout', () => {
        clearTimeout(timer)
      })
    }

    const back = () => {
      setTimeout(function () {
        gsap.set('.box', {
          yPercent: 0
        })
        gsap.to('.box', {
          opacity: 1
        })
      }, 1000)
    }

    return {
      move, back
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  height: 300px;
  background: blue;
}
.box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
