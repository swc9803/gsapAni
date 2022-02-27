<template>
  <!-- test1 -->
  <div class="container" @mousemove="dd">
    <div class="blobs">
      <div class="blob">2</div>
      <div ref="el" class="blob s2">1</div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="46" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const el = ref()
    const dd = (e) => {
      const x = e.clientX
      const y = e.clientY
      el.value.style.top = y + 'px'
      el.value.style.left = x + 'px'
    }
    return {
      el,
      dd
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
}
.blobs {
  filter: url('#goo');
  position: absolute;
  top: 0;
  left: 0;
}
.blob {
  position: absolute;
  background: crimson;
  left: 140px;
  top: 120px;
  width: 110px;
  height: 110px;
  line-height: 100px;
  text-align: center;
  color: white;
  font-size: 40px;
  border-radius: 100%;
  margin-top: -50px;
  margin-left: -50px;
}
.s2 {
  position: absolute;
  left: 260px;
  background: rgb(255, 255, 255);
  mix-blend-mode: difference;
  color: black;
}
</style>
