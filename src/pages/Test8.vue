<template>
  <div class="container">
    <p ref="textMove">Wanna Cool?</p>
    <div ref="btn" class="btnWrap">
      <div @click="fall" class="yes">네!</div>
      <div @click="disappear" ref="no">아니요...</div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const textMove = ref()
    const btn = ref()
    const no = ref()
    const fall = () => {
      gsap.to(textMove.value, {
        top: '-100%',
        scaleY: 5,
        transformOrigin: 'bottom',
        duration: 3,
        ease: 'expo.in'
      })
      gsap.to(btn.value, {
        top: '-100%',
        scaleY: 2,
        transformOrigin: 'bottom',
        pointerEvents: 'none',
        duration: 3,
        ease: 'expo.in'
      }, '<')
    }
    const disappear = () => {
      gsap.to(no.value, {
        opacity: 0,
        yPercent: -30,
        duration: 2,
        ease: 'none',
        cursor: 'auto'
      })
    }
    onMounted(() => {
    })
    return {
      textMove,
      btn,
      no,
      fall,
      disappear
    }
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
  p {
    position: relative;
    top: 30%;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 5rem;
    font-weight: 800;
    margin: 0 3% 0 3%;
    color: #2d70ff;
    letter-spacing: 3px;
  }
  .btnWrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    div {
      cursor: pointer;
      border-radius: 0.5em;
      width: 100px;
      border: 2px black solid;
      padding: 20px;
      margin: 0 50px 0 50px;
      transition: .5s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
@media screen and (max-width: 574px) {
  .container {
    p {
      top: 20%;
    }
    .btnWrap {
      top: -10%;
    }
  }
}
</style>
