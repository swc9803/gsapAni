<template>
  <div class="container">
    <input type="button" style="position: absolute" id="button5" value="Click Me">
  </div>
</template>

<script>
// import gsap from 'gsap'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {

    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
