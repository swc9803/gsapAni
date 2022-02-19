<template>
  <div class="container" @mousemove="cursorMove">
    <p ref="textMove">Wanna Cool?</p>
    <div ref="velocity" class="velocity" />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const velocity = ref()
    const textMove = ref()
    const windowW = outerWidth / 2
    const windowH = outerHeight / 2

    const cursorMove = (e) => {
      const x = e.pageX - windowW
      const y = e.pageY - windowH
      textMove.value.style.transform = 'translate(' + x / -10 + 'px,' + y / -10 + 'px) rotateY(' + (x / 40) + 'deg) rotateX(' + (y / 20) + 'deg)'
    }
    onMounted(() => {
      gsap.fromTo(velocity.value, { top: '90%', left: 'random(0, 100)%' }, {
        top: '-300%',
        scaleY: 4,
        transformOrigin: 'bottom',
        duration: 3,
        repeat: -1,
        ease: 'expo.in'
      })
      gsap.fromTo(velocity.value, { opacity: 0 }, {
        opacity: 1,
        duration: 3,
        repeat: -1,
        ease: 'expo'
      })
    })
    return {
      velocity,
      textMove,
      cursorMove
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
  perspective: 400px;
  p {
    position: relative;
    top: 38%;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 5rem;
    font-weight: 800;
    margin: 0;
    color: #2d70ff;
    letter-spacing: 3px;
    text-shadow: 1px 1px 1px #4d85ff,
    1px 2px 1px #568cff,
    1px 3px 1px #4580ff,
    1px 4px 1px #4d85ff,
    1px 5px 1px #4d85ff,
    1px 6px 1px #4d85ff,
    1px 7px 1px #4d85ff,
    1px 8px 1px #4d85ff,
    1px 9px 1px #4d85ff,
    1px 18px 6px rgba(16,16,16,0.3),
    1px 25px 35px rgba(16,16,16,0.1),
    1px 30px 60px rgba(16,16,16,0.3);
  }
  .velocity {
    position: absolute;
    width: 2px;
    height: 30px;
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
