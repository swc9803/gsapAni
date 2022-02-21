<template>
  <!-- test9 -->
  <div class="container">
    <Board />
  </div>
</template>

<script>
// import gsap from 'gsap'
// import { onMounted, ref } from 'vue'
import Board from '@/pages/Board'

export default {
  components: {
    Board
  },
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  p {
    position: absolute;
    width: 100%;
    margin: 0;
    // top: 10px
  }
}
</style>
