<template>
  <!-- test9 -->
  <div @click="dd" class="box"></div>
</template>

<script>
import gsap from 'gsap'
// import { onMounted, ref } from 'vue'

export default {
  setup () {
    const dd = () => {
      gsap.to('.box', {
        rotate: '+=90'
      })
    }
    return {
      dd
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background: black;
}
</style>
