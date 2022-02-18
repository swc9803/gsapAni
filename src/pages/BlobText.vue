<template>
  <!-- test7 -->
  <div class="container">
    <div class="wrapper">
      <h2>Sung Woo</h2>
    </div>
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
* {
  margin: 0;
  padding: 0;
}
.container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .wrapper {
    position: relative;
    height: 100vh;
    background: #000;
    filter: contrast(30);
    h2 {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      color: #fcf4ed;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 160px;
      white-space: nowrap;
      filter: blur(5px);
    }
  }
}
</style>
