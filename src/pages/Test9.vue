<template>
  <!-- test9 -->
  <div ref="background" class="container" @mousemove="cursorMove">
    <Bubble />
    <p ref="textMove">hi</p>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import Bubble from '@/components/Bubble'

export default {
  setup () {
    const background = ref()
    const velocity = ref()
    const textMove = ref()
    const windowW = outerWidth / 2
    const windowH = outerHeight / 2

    const cursorMove = (e) => {
      const x = e.pageX - windowW
      const y = e.pageY - windowH
      textMove.value.style.transform = 'translate(' + x / -10 + 'px,' + y / -10 + 'px) rotateY(' + (x / 20) + 'deg) rotateX(' + (y / 10) + 'deg)'
    }
    setTimeout(() => {
      textMove.value.style.opacity = 1
      background.value.style.pointerEvents = 'auto'
    }, 3000)

    onMounted(() => {
      gsap.from(background.value, {
        yPercent: 100,
        duration: 0.3,
        ease: 'none'
      })
    })
    return {
      background,
      velocity,
      textMove,
      cursorMove
    }
  },
  components: {
    Bubble
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  background: #2d70ff;
  perspective: 400px;
  pointer-events: none;
  // 컴포넌트 화 할때 상위에 overflow hidden
  p {
    position: relative;
    top: 38%;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 5rem;
    font-weight: 800;
    margin: 0;
    color: rgb(190, 220, 255);
    opacity: 0;
    transition: opacity 1.5s;
    letter-spacing: 3px;
    text-shadow: 1px 1px 1px #bed2ff,
    1px 2px 1px #78a3ff,
    1px 3px 1px #719eff,
    1px 4px 1px #7da6ff,
    1px 5px 1px #4d85ff,
    1px 6px 1px #4d85ff,
    1px 7px 1px #4d85ff,
    1px 8px 1px #4d85ff,
    1px 9px 1px #4d85ff,
    1px 18px 6px rgba(16,16,16,0.3),
    1px 25px 35px rgba(16,16,16,0.1),
    1px 30px 60px rgba(16,16,16,0.3);
  }
  .bubbles {
    position: absolute;
    z-index: 2;
    width: 10%;
    top: 110%;
  }
}
@media screen and (max-width: 900px) {
  .container {
    p {
      font-size: 4rem;
    }
  }
}
@media screen and (max-width: 650px) {
  .container {
    p {
      font-size: 3rem;
    }
  }
}
@media screen and (max-width: 480px) {
  .container {
    p {
      font-size: 2.3rem;
    }
  }
}
</style>
