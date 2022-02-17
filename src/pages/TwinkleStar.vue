<template>
  <!-- test2 -->
  <div class="stars" />
  <div class="twinkling" />
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {

    })
  }
}
</script>

<style lang="scss" scoped>
.stars, .twinkling {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.stars {
  background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index: -1;
}
.twinkling{
  background: url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index: 0;
  animation: twinkle 200s linear infinite;
}

@keyframes twinkle {
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
}
</style>
