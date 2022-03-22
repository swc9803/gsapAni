<template>
  <!-- test4 -->
  <div class="container">
    <div class="wrapper">
      <div class="liquid" />
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
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0c0c0c;
  .wrapper {
    position: relative;
    padding: 40px;
    width: 300px;
    overflow: hidden;
    text-align: center;
    box-sizing: border-box;
    border-radius: 40px;
    cursor: pointer;
    &:hover > .liquid{
      top: -250%;
    }
    .liquid {
      position: absolute;
      top: -100px;
      left: 0;
      width: 300px;
      height: 300px;
      background: #ffa600;
      transition: .5s;
      @mixin liquid-style {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
      }
      &::before {
        @include liquid-style;
        border-radius: 45%;
        background: rgba(20, 20, 20, 1);
        animation: wave 5s linear infinite;
      }
      &::after {
        @include liquid-style;
        border-radius: 40%;
        background: rgba(20, 20, 20, .5);
        animation: wave 10s linear infinite;
      }
      @keyframes wave {
        0% {
          transform: translate(-50%, -75%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -75%) rotate(360deg);
        }
      }
    }
  }
}

</style>
