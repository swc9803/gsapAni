<template>
<!-- test18 -->
<section class="scene">
  <h1 class="scene__heading">
    <span>
      Grab the pupper
      <br>
      by the yapper
    </span>
  </h1>
  <svg class="scene__illustration" viewBox="0 0 2100 455">
    <defs>
      <filter id="static">
        <feTurbulence id="noise" type="fractalNoise" result="noise" baseFrequency="1" numOctaves="1"></feTurbulence>
        <feColorMatrix in="noise" result="desaturate" type="saturate" values="0.25" />
        <feBlend in="SourceGraphic" in2="desaturate" mode="multiply"></feBlend>
      </filter>
    </defs>

    <ellipse cx="919.9" cy="227.569" rx="131.068" ry="227.312" class="tube__back" />
    <g class="dog">
      <path class="dog__body dog__body--main" d="M99.921 292.724h995.47" stroke="none" />
      <path d="M1105.33 292.724h760.066" class="dog__body dog__body--extended" />
      <g class="dog__butt">
        <path d="M78.661 380.327l1.273-49.094" class="dog--stroke dog--stroke-light" />
        <path d="M17.391 302.763s18.207 112.542 21.443 124.263c2.253 8.158 6.973 27.594 17.955 27.314 10.982-.281 15.802-20.406 16.623-29.56.978-10.921 3.471-54.499 3.471-54.499l-59.492-67.518z" />
        <path d="M99.586 376.047s4.012 34.258 7.248 45.979c2.253 8.158 6.973 27.594 17.955 27.314 10.982-.281 15.802-20.406 16.623-29.56.978-10.921 2.782-43.728 2.782-43.728l-44.608-.005z" class="dog--shadow" />
        <path d="M50.577 225.572c-3.302-.689-6.618-1.381-9.825-2.428-6.575-2.145-13.853-5.626-19.133-10.13-5.701-4.865-9.958-11.531-13.293-18.132-1.813-3.589-3.294-7.339-4.77-11.078 0 0-.67-4.637-2.351-4.485-2.588.235-.226 12.111-.067 12.819 2.103 9.398 5.758 18.836 10.974 26.955 3.423 5.329 8.796 11.442 13.146 16.021 2.529 2.662 5.21 5.261 7.846 7.817 0 0 4.476-5.496 8.378-9.409 3.552-3.563 9.095-7.95 9.095-7.95z" class="dog__tail dog--shadow" />
      </g>
      <g class="dog__face">
        <path d="M1137.39 370.205s5.343 42.1 8.579 53.821c2.252 8.158 6.972 27.594 17.954 27.314 10.982-.281 15.803-20.406 16.623-29.56.979-10.921 6.262-70.506 6.262-70.506l-49.418 18.931z" class="dog--shadow" />
        <path d="M1143.89 375.731s40.528-3.786 68.864-38.363c31.404-38.322 51.22-88.607 67.828-127.696 9.139-21.509 24.004-65.939 27.679-88.522 3.674-22.584-3.926-26.123-13.309-31.359-9.383-5.235-23.387-2.288-36.004 8.155-12.616 10.443-28.577 15.397-44.367 5.188-15.79-10.209-46.286-43.149-86.075-27.006-39.789 16.144-58.491 47.722-61.502 73.476-3.01 25.753-.542 27.504-14.492 65.073-13.95 37.569 9.206 161.268 9.206 161.268l82.172-.214z" />
        <path d="M1067.39 373.205s5.343 42.1 8.579 53.821c2.252 8.158 6.972 27.594 17.954 27.314 10.982-.281 15.803-20.406 16.623-29.56.979-10.921 3.471-54.499 3.471-54.499l-46.627 2.924z" />
        <path d="M1269.21 130.336c6.808 4.386 35.373 13.397 39.048-9.186 3.674-22.584-3.926-26.123-13.309-31.359-9.383-5.235-23.387-2.288-36.004 8.155-12.616 10.443 3.622 28.109 10.265 32.39z" class="dog--dark" />
        <path d="M1052.94 207.255s-5.536 14.371 2.902 34.459c9.063 21.576 39.02 32.443 56.063 25.087 17.044-7.356 30.059-27.555 33.736-56.909 3.676-29.355-9.734-67.762-19.006-77.838" class="dog--stroke dog--stroke-light" />
        <path d="M1115.62 380.339l1.463-49.237" class="dog--stroke dog--stroke-light" />
        <path d="M1178.07 125.717s-4.388-7.099-10.646-6.812c-5.993.275-6.834 6.279-6.17 9.34.664 3.061 3.056 7.853 6.827 10.172 3.552 2.183 10.347 2.817 12.334-.967 2.533-4.824-2.345-11.733-2.345-11.733z" class="dog--dark dog__eye" />
        <path d="M1200.71 104.859s-3.959-6.407-9.607-6.148c-5.408.248-6.168 5.667-5.568 8.429.599 2.762 2.758 7.087 6.161 9.18 3.205 1.971 9.337 2.542 11.131-.873 2.286-4.353-2.117-10.588-2.117-10.588z" class="dog--dark dog__eye" />
        <path d="M1261.27 169.24s6.318 2.908 11.875-1.112c5.329-3.855 3.815-11.176 3.815-11.176" class="dog--stroke dog--stroke-dark" />
      </g>
    </g>
    <g class="tube">
      <ellipse cx="290.002" cy="227.312" rx="131.068" ry="227.312" />
      <path d="M921.356.276l-.456-.02c-72.339 0-131.068 101.682-131.068 226.926 0 125.243 58.729 226.925 131.068 226.925l.456-.02v.498H289.712V.085h631.644v.191z" />
    </g>
  </svg>
</section>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
gsap.registerPlugin(Draggable)
gsap.registerPlugin(MotionPathPlugin)
export default {
  setup () {
    onMounted(() => {
      (function () {
        // Register the plugins to use them later
        gsap.registerPlugin(MotionPathPlugin, Draggable)

        // DOM elements
        const face = document.querySelector('.dog__face')
        const butt = document.querySelector('.dog__butt')
        const path = document.querySelector('.dog__body--extended')
        const pathMain = document.querySelector('.dog__body--main')
        const dog = document.querySelector('.dog')
        const eyes = document.querySelectorAll('.dog__eye')
        const tail = document.querySelector('.dog__tail')

        // Element sizes and positions
        const pathBounds = path.getBBox()
        const dogBounds = dog.getBBox()

        // Utils
        const clamp = gsap.utils.clamp(0, 1)
        let prevProgress = 0

        // Set the starting values
        gsap.set(path, { drawSVG: '0% 0%' })
        gsap.set(eyes, { transformOrigin: '50% 100%' })
        gsap.set(tail, { transformOrigin: '100% 100%', rotate: 10 })

        // Timelines
        const faceTl = getFaceTl()
        const pathTl = getPathTl()
        // eslint-disable-next-line no-unused-vars
        const blinkTl = getBlinkTl()
        const squishTl = getSquishTl()
        const wiggleTl = getWiggleTl()

        const draggable = getDraggable()

        function getFaceTl () {
          const tl = gsap.timeline({ paused: true })

          tl.to(face, {
            motionPath: {
              path: path,
              align: path,
              alignOrigin: [0.225, 0.575]
            },
            immediateRender: true,
            ease: 'none'
          })

          return tl
        }

        function getPathTl () {
          const tl = gsap.timeline({ paused: true })

          tl.to(path, {
            drawSVG: '100%',
            ease: 'none'
          })

          return tl
        }

        function getBlinkTl () {
          const tl = gsap.timeline()

          tl.to(eyes, {
            keyframes: [
              {
                scale: 1,
                duration: 1.45
              },
              {
                scale: 0,
                duration: 0.075
              }
            ],
            yoyo: true,
            repeat: -1
          })

          return tl
        }

        function getSquishTl () {
          const tl = gsap.timeline({
            duration: 0.5,
            delay: 0,
            paused: true
          })

          tl.to([pathMain, butt], {
            x: pathBounds.width * 1.7,
            ease: 'Power4.easeInOut'
          })

          tl.to(
            '.dog__body--main',
            {
              drawSVG: '50%',
              ease: 'Power4.easeInOut'
            },
            '<'
          )

          tl.to(
            path,
            {
              drawSVG: '50% 50%',
              x: pathBounds.width / 2,
              ease: 'Power4.easeInOut'
            },
            '<'
          )

          return tl
        }

        function getWiggleTl () {
          const tl = gsap.timeline({ paused: true })

          tl.to(tail, {
            rotate: -15,
            ease: 'Bounce.easeInOut',
            duration: 0.125,
            delay: 1,
            yoyo: true,
            repeat: -1
          })

          return tl
        }

        function getDraggable () {
          return Draggable.create(face, {
            type: 'x',
            onDrag: function () {
              var progress = clamp((this.x - dogBounds.x) / pathBounds.width)
              if (progress !== prevProgress) {
                faceTl.progress(progress)
                pathTl.progress(progress)
                prevProgress = progress

                if (progress === 1) {
                  squishTl.play()
                  wiggleTl.play()

                  draggable[0].disable()
                }
              } else {
                return false
              }
            }
          })
        }
      })()
    })
  }
}
</script>

<style lang="scss" scoped>
:root {
  --color-bg: hsl(233, 10%, 95%);
  --color-dog: hsl(233, 30%, 50%);
  --color-dog-shadow: hsl(233, 30%, 40%);
  --color-dog-dark: hsl(233, 90%, 5%);
  --color-tube: hsl(0, 30%, 50%);
  --color-tube-shadow: hsl(0, 30%, 40%);
}

body {
  background: var(--color-bg);
  filter: url(#static);
}

.scene {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__heading {
    font: clamp(1.5rem, 10vh, 3rem) / 1.28 "Carter One";
    color: var(--color-dog);
    text-align: center;
    letter-spacing: -0.015em;
    transform: rotate(-5deg);
    margin-bottom: 15vh;
  }

  &__illustration {
    max-height: 50vh;
    min-width: 60vw;
  }
}

.dog {
  fill: var(--color-dog);

  &__body {
    stroke: var(--color-dog);
    stroke-width: 166.67;
    stroke-linecap: round;

    &--extended {
      stroke-dasharray: 0, 100%;
      stroke-dashoffset: 0;
    }
  }

  &--stroke {
    stroke-width: 4.17;
    fill: none;

    &-light {
      stroke: var(--color-bg);
    }

    &-dark {
      stroke: var(--color-dog-dark);
    }
  }

  &--dark {
    fill: var(--color-dog-dark);
  }

  &--shadow {
    fill: var(--color-dog-shadow);
  }
}

.tube {
  fill: var(--color-tube);

  &__back {
    fill: var(--color-tube-shadow);
  }
}

</style>
