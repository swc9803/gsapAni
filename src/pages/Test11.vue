<template>
  <div  @click="countPlus">
    {{ count }}
  </div>
  <button>countPlus</button>
</template>

<script>
// import gsap from 'gsap'
import { ref } from 'vue'
export default {
  setup () {
    const count = ref(0)

    const countPlus = () => {
      count.value++
    }

    return {
      count,
      countPlus
    }
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
