<template>
  <!-- test13 -->
  <canvas id="c"></canvas>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      var n = 40
      var speed = 6
      var size = 220
      var c = document.getElementById('c')
      var ctx = c.getContext('2d')
      var cw; var ch
      var bg = new Image()
      var img = new Image()
      var particles = []
      var Particle = function (index) {
        this.index = index
        this.x = this.y = this.progress = this.opacity = this.scale = 1
        this.size = size / 2 + size * (index / n)
        this.dur = gsap.utils.random(speed / 2, speed * 2)
        this.rot = gsap.utils.random(3, 5)
        if (index % 3 === 0) this.rot = -this.rot

        this.draw = () => {
          ctx.translate(this.x, this.y)
          ctx.rotate(this.rot * this.progress)
          ctx.globalAlpha = this.opacity
          ctx.globalCompositeOperation = (index > n / 2.5) ? 'lighter' : 'overlay'
          ctx.drawImage(img, -this.size * this.scale / 2, -this.size * this.scale / 2, this.size * this.scale, this.size * this.scale)
          ctx.rotate(-this.rot * this.progress)
          ctx.translate(-this.x, -this.y)
        }

        this.tl = gsap.timeline({ repeat: -1, repeatRefresh: true })
          .fromTo(this, {
            x: () => gsap.utils.random(0, cw),
            y: () => gsap.utils.random(0, ch),
            progress: 0,
            scale: (i) => (index % 2 === 0) ? 1 : gsap.utils.random(1.5, 2)
          }, {
            duration: this.dur,
            scale: (i) => (index % 2 === 0) ? gsap.utils.random(1.5, 2) : 1,
            progress: 1,
            ease: 'sine.inOut'
          }, 0)
          .fromTo(this, {
            opacity: 0.05
          }, {
            duration: this.dur / 4,
            opacity: 0.2,
            yoyo: true,
            repeat: 3,
            ease: 'back.inOut(4.5)'
          }, 0)
          .progress(Math.random())
      }

      bg.src = 'https://assets.codepen.io/721952/redBg.jpg'
      img.src = 'https://assets.codepen.io/721952/redLight.png'

      img.onload = () => {
        updateSize()
        for (var i = 0; i < n; i++) particles.push(new Particle(i))
        gsap.ticker.add(drawBg)
      }

      window.onresize = updateSize

      function updateSize () {
        cw = (c.width = window.innerWidth)
        ch = (c.height = window.innerHeight)
      }

      function drawBg () {
        ctx.globalAlpha = 1
        ctx.globalCompositeOperation = 'source-over'
        ctx.drawImage(bg, 0, 0, cw, ch)
        for (var i = 0; i < n; i++) particles[i].draw()
      }
    })
  }
}
</script>

<style scoped>
* {
  width:100%;
  height:100%;
  background:#000;
  position:absolute;
}
</style>
