<template>
  <div class="container" ref="container">
    <section class="section1" ref="section1">
      <Board
        @yellow="changeToYellow"
        @green="changeToGreen"
        @brown="changeToBrown"
      />
    </section>
    <section class="section2" ref="section2">
      <h1>section2</h1>
    </section>
    <section class="section3" ref="section3">
      <h1>section3</h1>
    </section>
    <section class="section4" ref="section4">
      <h1>section4</h1>
    </section>
    <section class="section5" ref="section5">
      <h1>section5</h1>
    </section>
  </div>
</template>

<script>
import Board from '@/pages/Board'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Board
  },
  setup () {
    const container = ref()
    const section1 = ref()
    const section2 = ref()
    const section3 = ref()
    const section4 = ref()
    const section5 = ref()

    onMounted(() => {
      scrollTo(0, 0)
      ScrollTrigger.matchMedia({
        '(min-width: 767px)': function () {
          const SECTIONS = gsap.utils.toArray([section1.value, section2.value, section3.value, section4.value, section5.value])
          gsap.to(SECTIONS, {
            xPercent: -100 * (SECTIONS.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: container.value,
              end: () => '+=' + container.value.offsetWidth,
              pin: true,
              scrub: 0.1,
              snap: 1 / (SECTIONS.length - 1)
            }
          })
        }
      })
    })
    return {
      container,
      section1,
      section2,
      section3,
      section4,
      section5
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 500%;
  display: flex;
  overflow: hidden;
  section {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .section2 {
    background: yellowgreen;
  }
  .section3 {
    background: firebrick;
  }
  .section4 {
    background: cornflowerblue;
  }
  .section5 {
    background: seagreen;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    display: block;
  }
}
</style>
