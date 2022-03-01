<template>
  <div class="dd">
    <nav>
      <a href=".section1" class="anchor">section 1</a>
      <a href=".section2" class="anchor">section 2</a>
      <a href=".section3" class="anchor">section 3</a>
      <a href=".section4" class="anchor">section 4</a>
    </nav>

    <div ref="sectionWrap" class="sectionWrap">
      <div ref="section1" class="section section1">
        <h2>section 1</h2>
      </div>
      <div ref="section2" class="section section2">
        <h2>section 2</h2>
      </div>
      <div ref="section3" class="section section3">
        <h2>section 3</h2>
      </div>
      <div ref="section4" class="section section4">
        <h2>section 4</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default {
  setup () {
    const sectionWrap = ref()
    const section1 = ref()
    const section2 = ref()
    const section3 = ref()
    const section4 = ref()
    onMounted(() => {
      document.querySelectorAll('.anchor').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const targetElem = document.querySelector(e.target.getAttribute('href'))
          let y = targetElem
          if (targetElem && sectionWrap.value.isSameNode(targetElem.parentElement)) {
            const totalScroll = scrollAni.scrollTrigger.end - scrollAni.scrollTrigger.start
            const totalMovement = (sections.length - 1) * targetElem.offsetWidth
            y = Math.round(scrollAni.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll)
          }
          gsap.to(window, {
            scrollTo: {
              y: y,
              autoKill: false
            },
            duration: 1
          })
        })
      })
      const sections = gsap.utils.toArray([section1.value, section2.value, section3.value, section4.value])
      const scrollAni = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionWrap.value,
          pin: true,
          start: 'top top',
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
          },
          end: () => '+=' + (sectionWrap.value.offsetWidth - innerWidth)
        }
      })
    })
    return {
      sectionWrap,
      section1,
      section2,
      section3,
      section4
    }
  }
}
</script>

<style lang="scss" scoped>
.dd {
  height: 100%;
  nav {
    position: fixed;
    z-index: 9;
  }
  .sectionWrap {
    width: 400%;
    height: 100vh;
    display: flex;
    .section {
      position: relative;
      width: 100%;
      height: 100vh;
    }
  }
}

</style>
