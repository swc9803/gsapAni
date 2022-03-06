<template>
  <!-- test15 -->
  <div class="container">
    <div ref="restitution" />
  </div>
</template>

<script>
// import gsap from 'gsap'
import Matter from 'matter-js'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const restitution = ref()
    onMounted(() => {
      var Engine = Matter.Engine
      var Render = Matter.Render
      var Runner = Matter.Runner
      var MouseConstraint = Matter.MouseConstraint
      var Mouse = Matter.Mouse
      var Composite = Matter.Composite
      var Bodies = Matter.Bodies

      // create engine
      var engine = Engine.create()
      engine.world.gravity.y = 0.8
      var world = engine.world

      // create renderer
      var wWidth = window.innerWidth
      var wHeight = window.innerHeight
      var render = Render.create({
        element: restitution.value,
        engine: engine,
        options: {
          width: wWidth,
          height: wHeight,
          wireframes: false,
          background: '#ffffff'
        }
      })
      Render.run(render)
      var runner = Runner.create()
      Runner.run(runner, engine)
      var rest = 0.9
      var space = wWidth / 5
      Composite.add(world, [
        Bodies.rectangle(100 + space * 0, 150, 50, 50, { restitution: rest }),
        Bodies.rectangle(100 + space * 1, 150, 50, 50, { restitution: rest, angle: -Math.PI * 0.15 }),
        Bodies.rectangle(100 + space * 2, 150, 50, 50, { restitution: rest, angle: -Math.PI * 0.24 }),
        Bodies.circle(100 + space * 3, 150, 25, { restitution: rest }),
        Bodies.rectangle(100 + space * 4, 150, 180, 20, { restitution: rest, angle: -Math.PI * 0.5 }),
        // walls
        Bodies.rectangle(wWidth / 2, wHeight, wWidth - 50, 50, { isStatic: true }),
        Bodies.rectangle(wWidth, wHeight / 2, 50, wHeight, { isStatic: true }),
        Bodies.rectangle(0, wHeight / 2, 50, wHeight, { isStatic: true })
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
      restitution
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
  div {
    overflow: hidden;
    height: 100vh;
  }
}
</style>
