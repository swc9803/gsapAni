<template>
  <div class="container">
    <div class="content">
      <section class="description panel blue">
        <div>
          <h1>Basic Pin</h1>
          <p>You can <strong>pin</strong> an element while the ScrollTrigger is active which basically make it stick in place while the scroll position is between the <code>start</code> and <code>end</code> elements/values</p>
          <div class="scroll-down">Scroll down<div class="arrow"></div></div>
        </div>
    </section>

    <section class="comparisonSection">
      <div class="pinContainer">
        <div class="comparisonImage beforeImage">
          <img src="https://assets.codepen.io/16327/before.jpg" alt="before">
        </div>
        <div class="comparisonImage afterImage">
          <img src="https://assets.codepen.io/16327/after.jpg" alt="after">
        </div>
      </div>
    </section>

    <section class="panel" style="background: black">
      Easy Peasy!
    </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  setup () {
    onMounted(() => {
      gsap.utils.toArray('.comparisonSection').forEach(section => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.comparisonSection',
            start: 'center center',
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => '+=' + section.offsetWidth,
            scrub: true,
            pin: '.content'
          },
          defaults: { ease: 'none' }
        })
        // animate the container one way...
        tl.fromTo(section.querySelector('.afterImage'), { xPercent: 100, x: 0 }, { xPercent: 0 })
        // ...and the image the opposite way (at the same time)
          .fromTo(section.querySelector('.afterImage img'), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: #111;
  color: white;
}
h1, h2 {
  margin: 0;
  font-weight: 400;
  max-width: none;
}

.comparisonSection {
  position: relative;
  padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
}
.comparisonImage {
  width: 100%;
  height: 100%;
}
.afterImage {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}
.afterImage img {
  transform: translate(-100%, 0px);
}
.comparisonImage img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.panel {
  height: 100vh;
}
</style>
