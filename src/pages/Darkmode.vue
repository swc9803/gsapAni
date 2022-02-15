<template>
  <div class="toggle">
    <p>hi</p>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      gsap.to('p', {
        yPercent: 100, duration: 1, repeat: -1, ease: 'none'
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
