<template>
  <div class="container">
    <Brush class="brush" />
  </div>
</template>

<script>
import Brush from '@/components/Brush'
import { onMounted } from 'vue'
// import gsap from 'gsap'
export default {
  components: {
    Brush
  },
  setup () {
    onMounted(() => {

    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #14151f;
  // z-index: 9;
  overflow-x: hidden;
}
</style>
