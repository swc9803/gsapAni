<template>
  <div class="switch">
    <div class="switch__button">
      <svg class="airplane" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.351 139.63">
        <path fill="var(--color-off)" d="M45.851,139.316s13.2-12.046,11.842-49.753c-41.162-3.584-41.285-3.448-41.285-3.448L10.1,97.9H0L7.725,69.815h0L0,41.729H10.1l6.308,11.785s.123.136,41.285-3.449C59.047,12.359,45.851.314,45.851.314s15.674-.706,17.187,0c.364.169,2.2,3.17,4.789,7.635H82.858a6,6,0,0,1,0,12H74.635c1.651,2.949,3.352,6.007,5.009,9h21.213a6,6,0,1,1,0,12h-14.6C89.473,46.806,91.7,50.9,91.7,50.9s15.527.144,31.431,1.838S140.347,69.48,140.347,69.48v.32c0,.01,0,.02,0,.031l0,.206s-1.31,15.163-17.215,16.856S91.7,88.73,91.7,88.73s-2.228,4.093-5.442,9.95h14.6a6,6,0,1,1,0,12H79.645c-1.658,2.993-3.358,6.051-5.009,9h8.222a6,6,0,1,1,0,12H67.828c-2.587,4.465-4.426,7.465-4.79,7.636a22.453,22.453,0,0,1-5.128.313C52.817,139.63,45.851,139.316,45.851,139.316Z"/>
      </svg>
      <svg class="airplane -on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.351 139.63">
        <path fill="var(--color-on)" d="M45.851,139.316s13.2-12.046,11.842-49.753c-41.162-3.584-41.285-3.448-41.285-3.448L10.1,97.9H0L7.725,69.815h0L0,41.729H10.1l6.308,11.785s.123.136,41.285-3.449C59.047,12.359,45.851.314,45.851.314s15.674-.706,17.187,0c.364.169,2.2,3.17,4.789,7.635H82.858a6,6,0,0,1,0,12H74.635c1.651,2.949,3.352,6.007,5.009,9h21.213a6,6,0,1,1,0,12h-14.6C89.473,46.806,91.7,50.9,91.7,50.9s15.527.144,31.431,1.838S140.347,69.48,140.347,69.48v.32c0,.01,0,.02,0,.031l0,.206s-1.31,15.163-17.215,16.856S91.7,88.73,91.7,88.73s-2.228,4.093-5.442,9.95h14.6a6,6,0,1,1,0,12H79.645c-1.658,2.993-3.358,6.051-5.009,9h8.222a6,6,0,1,1,0,12H67.828c-2.587,4.465-4.426,7.465-4.79,7.636a22.453,22.453,0,0,1-5.128.313C52.817,139.63,45.851,139.316,45.851,139.316Z"/>
      </svg>
    </div>
    <div class="airport-wrapper">
    </div>
    <div class="sky" />
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      const switchContainer = document.querySelector('.switch')
      const airplanes = switchContainer.querySelectorAll('.airplane')
      const switchButton = switchContainer.querySelector('.switch__button')
      const sky = document.querySelector('.sky')
      const airport = document.querySelector('.airport')

      const getStyleVariable = (property, element = document.documentElement) => {
        return getComputedStyle(element).getPropertyValue(`--${property}`)
      }

      let isAnimating = false
      const switchButtonFinalX = switchContainer.clientWidth - switchButton.clientWidth
      const airplanesFinalX = airplanes[0].clientWidth + switchButton.clientWidth / 2 - airplanes[0].clientWidth / 2
      const airplanesInitialX = -1 * (switchButton.clientWidth / 2 - airplanes[0].clientWidth / 2)

      const toggleAnimation = isOn => {
        const ease = 'power2.inOut'
        const duration = 0.5
        const nextState = isOn ? 'off' : 'on'
        const boxShadow = getStyleVariable(`shadow-${nextState}`)
        const switchButtonX = isOn ? 0 : switchButtonFinalX
        const airplanesX = isOn ? airplanesInitialX : airplanesFinalX
        const airportX = isOn ? -110 : -20
        const opacity = isOn ? 0 : 1

        gsap.to(switchContainer, duration, { boxShadow, ease })
        gsap.to(switchButton, duration, {
          x: switchButtonX,
          ease
        })
        gsap.to(airplanes, duration, {
          x: airplanesX,
          ease
        })
        gsap.to(airport, duration, {
          x: airportX,
          ease
        })
        gsap.to(sky, duration, {
          opacity,
          ease,
          onComplete () {
            isAnimating = false
          }
        })
      }
      const toggleSwitch = ({ currentTarget }) => {
        if (isAnimating) return
        isAnimating = true
        const isCurrentlyOn = currentTarget.classList.contains('-on')
        currentTarget.classList.toggle('-on')
        toggleAnimation(isCurrentlyOn)
      }
      switchContainer.addEventListener('click', toggleSwitch)
    })
  }
}
</script>

<style lang="scss" scoped>
.switch {
  width: 31.1rem;
  height: 13.8rem;
  border-radius: 10rem;
  position: relative;
  cursor: pointer;
}

.switch__button {
  width: 13.8rem;
  height: 13.8rem;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
  background: #fff;
  z-index: 3;
}

.airplane {
  position: absolute;
  top: 50%;
  width: calc(13.8rem / 2);
  height: calc(13.8rem / 2);
}

.airplane:not(.-on) {
  left: 50%;
  transform: translate(-50%, -50%);
}

.airplane.-on {
  transform: translateY(-50%);
  right: 100%;
}

.airport-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #848484;
  overflow: hidden;
}

/* Sky Background */

.sky {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: inherit;
  background: #78c7fe;
  opacity: 0;
  z-index: 2;
  overflow: hidden;
}
</style>
