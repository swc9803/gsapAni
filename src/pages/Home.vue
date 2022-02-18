<template>
  <div class="home">
    <p>home</p>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      gsap.to('p', {
        yPercent: 100, duration: 1, yoyo: true, repeat: -1, ease: 'none'
      })
    })
  }
}
</script>

<style lang="scss" scoped>
div {
  p {
    color: green;
  }
}
</style>
