<template>
  <!-- test3 -->
  <img width="600" height="600" src="https://picsum.photos/600/600?random=1" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=2" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=3" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=4" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=5" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=6" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=7" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=8" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=9" alt="" class="skewElem">
  <img width="600" height="600" src="https://picsum.photos/600/600?random=10" alt="" class="skewElem">
  <header>
     <a href="https://greensock.com/scrolltrigger">
       <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
    </a>
  </header>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      const proxy = { skew: 0 }
      const skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg') // fast
      const clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300)
          // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew
            gsap.to(proxy, { skew: 0, duration: 0.8, ease: 'power3', overwrite: true, onUpdate: () => skewSetter(proxy.skew) })
          }
        }
      })
      // make the right edge "stick" to the scroll bar. force3D: true improves performance
      gsap.set('.skewElem', { transformOrigin: 'right center', force3D: true })
    })
  }
}
</script>

<style lang="scss" scoped>
body {
  text-align: center;
  background-color: #111;
}
body > img {
  margin-bottom: 20vh;
}

h1 {
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
  display: none;
}

header .name {
  color: white;
}
</style>
