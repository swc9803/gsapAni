<template>
  <!-- test3 -->
  <img src="https://picsum.photos/600/600?random=1" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=2" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=3" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=4" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=5" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=6" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=7" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=8" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=9" alt="" class="skewElem">
  <img src="https://picsum.photos/600/600?random=10" alt="" class="skewElem">
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      scrollTo(0, 0)
      const proxy = { skew: 0 }
      const skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg') // fast
      const clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300)
          // only do something if the skew is MORE severe.Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: 'power3',
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew)
            })
          }
        }
      })
      gsap.set('.skewElem', { transformOrigin: 'right center', force3D: true })
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
