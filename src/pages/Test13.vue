<template>
  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script>
// import { onMounted } from 'vue'
import gsap from 'gsap'
export default {
  setup () {
    const Demo = {
      data () {
        return {
          number: 0,
          tweenedNumber: 0
        }
      },
      computed: {
        animatedNumber () {
          return this.tweenedNumber.toFixed(0)
        }
      },
      watch: {
        number (newValue) {
          gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
        }
      }
    }
    return {
      Demo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
