<template>
    <!-- test5 -->
  <div class="effect" @mousemove="move" @click="active" ref="effect">
    <div class="circle" ref="circle">
    </div>
    <div class="text">
      가 나 다 라 마 바 사 아 자 차 카 타 파 하
    </div>
  </div>
</template>

<script>
// import gsap from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const circle = ref()
    const effect = ref()
    const move = (e) => {
      const moveX = e.pageX
      const moveY = e.pageY
      circle.value.style.left = moveX + 'px'
      circle.value.style.top = moveY + 'px'
    }
    const active = () => {
      circle.value.classList.add('active')
    }
    onMounted(() => {
    })
    return {
      circle, effect, move, active
    }
  }
}
</script>

<style lang="scss" scoped>
.effect {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  .circle {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: skyblue;
    filter: blur(70px);
    transform: translate(-50%, -50%);
    transition: transform .5s linear;
  }
  .text {
    font-size: 300px;
    font-weight: 800;
    color: #fff;
  }
}
.effect .circle.active {
  transform: translate(-50%, -50%) scale(2);
  filter: blur(0);
}
</style>
