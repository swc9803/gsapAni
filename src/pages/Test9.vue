<template>
  <!-- test9 -->
  <div class="container">
    <Board />
  </div>
</template>

<script>
import Board from '@/pages/Board'

export default {
  components: {
    Board
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
