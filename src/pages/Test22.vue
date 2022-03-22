<template>
  <div>
    <div v-for="star in stars" :key="star" class="twinkle" :ref="twinkle">★</div>
    <div v-for="heart in hearts" :key="heart" class="twinkle" :ref="htwinkle">♥</div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const array = ref([])
    const twinkle = (el) => array.value.push(el)
    const stars = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 4 }])

    const harray = ref([])
    const htwinkle = (el) => harray.value.push(el)
    const hearts = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 4 }])
    onMounted(() => {
      for (var i = 0; i < stars.value.length; i++) {
        gsap.to(array.value[i], {
          opacity: 0,
          scale: 3,
          repeat: -1,
          duration: 0.5
        })
      }

      gsap.from(harray.value, {
        xPercent: 100,
        yPercent: 100,
        opacity: 0,
        scale: 3,
        repeat: -1,
        stagger: 0.5,
        duration: 1
      })
    })
    return {
      array,
      twinkle,
      stars,
      harray,
      htwinkle,
      hearts
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  div {
    display: flex;
  }
}
</style>
