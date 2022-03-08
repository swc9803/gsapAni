<template>
  <!-- test15 -->
  <div class="container" ref="mainContainer">
    <Brush class="draw"
      @scaleDoor="scaleDoor"
    />
    <div ref="restitution" />
  </div>
</template>

<script>
import Brush from '@/components/Brush'
import Matter from 'matter-js'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
export default {
  components: {
    Brush
  },
  setup () {
    const restitution = ref()
    const mainContainer = ref()
    const scaleDoor = () => {
      gsap.to(mainContainer.value, {
        scale: 10,
        transformOrigin: '66%',
        ease: 'expo.in',
        duration: 5
      })
    }
    onMounted(() => {
      var Engine = Matter.Engine
      var Render = Matter.Render
      var Runner = Matter.Runner
      var MouseConstraint = Matter.MouseConstraint
      var Mouse = Matter.Mouse
      var Composite = Matter.Composite
      var Bodies = Matter.Bodies
      var wWidth = innerWidth
      var wHeight = innerHeight

      // create engine
      var engine = Engine.create()
      engine.world.gravity.y = 0.7
      var world = engine.world

      // create renderer
      var render = Render.create({
        element: restitution.value,
        engine: engine,
        options: {
          width: wWidth,
          height: wHeight,
          wireframes: false
        }
      })
      Render.run(render)
      var runner = Runner.create()
      Runner.run(runner, engine)
      var space = wWidth / 5
      Composite.add(world, [
        Bodies.rectangle(100 + 0, 150, 70, 70, { restitution: 0.95, render: { fillStyle: 'darkgray' } }),
        Bodies.rectangle(100 + space * 1, 150, 40, 40, { restitution: 0.95, angle: -Math.PI * 0.15, render: { fillStyle: '#cccccc' } }),
        Bodies.circle(100 + space * 1.5, 150, 15, { restitution: 0.95, render: { fillStyle: '#ececec' } }),
        Bodies.rectangle(100 + space * 2, 150, 50, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: '#adadad' } }),
        Bodies.rectangle(100 + space * 2.1, 150, 30, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: 'darkgray' } }),
        Bodies.polygon(100 + space * 2.4, 150, 3, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: '#cccccc' } }),
        Bodies.polygon(100 + space * 2.8, 150, 3, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: '#ececec' } }),
        Bodies.polygon(100 + space * 2.6, 150, 6, 30, { restitution: 0.95, angle: -Math.PI * 0.24, render: { fillStyle: '#adadad' } }),
        Bodies.circle(100 + space * 3, 150, 25, { restitution: 0.95, render: { fillStyle: '#cccccc' } }),
        Bodies.circle(100 + space * 3.5, 150, 25, { restitution: 0.95, render: { fillStyle: '#cccccc' } }),
        Bodies.rectangle(100 + space * 4.2, 150, 180, 20, { restitution: 0.95, angle: -Math.PI * 0.25, render: { fillStyle: '#adadad' } }),
        Bodies.rectangle(100 + space * 4, 170, 180, 20, { restitution: 0.95, angle: -Math.PI * 0.25, render: { fillStyle: '#adadad' } }),
        // walls
        Bodies.rectangle(wWidth / 2, wHeight, wWidth - 50, 50, { isStatic: true, render: { fillStyle: '#333333' } }),
        Bodies.rectangle(wWidth, wHeight / 2, 50, wHeight, { isStatic: true, render: { fillStyle: '#333333' } }),
        Bodies.rectangle(0, wHeight / 2, 50, wHeight, { isStatic: true, render: { fillStyle: '#333333' } })
      ])
      // add mouse control
      var mouse = Mouse.create(render.canvas)
      var mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })
      Composite.add(world, mouseConstraint)
      render.mouse = mouse
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: wWidth, y: wHeight }
      })
    })
    return {
      restitution,
      mainContainer,
      scaleDoor
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #14151f;
}
// .draw {
//   display: none;
// }
</style>
