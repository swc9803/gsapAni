<template>
  <div class="blobs">
    <div class="blob">2</div>
    <div class="blob s2">1</div>
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
</template>

<script>
// import gsap from 'gsap'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      var svgElem = document.querySelector('.s2')

      window.addEventListener('mousemove', function (e) {
        const x = e.clientX
        const y = e.clientY
        svgElem.style.top = y + 'px'
        svgElem.style.left = x + 'px'
      })
    })
  }
}
</script>

<style lang="scss" scoped>
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
  left: 260px;
  background: rgb(217, 255, 0);
}
</style>
