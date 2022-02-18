<template>
    <!-- test6 -->
  <div class="container">
    <h1>Hi I am Sung Woo</h1>
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
  background: #000;
  text-align: center;
  z-index: -2;
  overflow: hidden;
  h1 {
    position: relative;
    transform: translate(0, -50%);
    top: 50%;
    display: inline-block;
    color: rgba(0, 0, 0, 0);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 5rem;
    font-weight: 700;
    &::after {
      content: 'Hi I am SungWoo';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(35deg, rgba(0, 0, 0, 0) 10%, #fff 40%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0 ) 100%);
      background-size: 15px 15px;
      color: rgba(0, 0, 0, 0);
      background-clip: text;
      animation: shad 100s infinite linear;
      filter: blur(5px);
      letter-spacing: 1px;
      text-shadow: none;
      @keyframes shad {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 100% 0;
        }
      }
    }
  }
}
</style>
