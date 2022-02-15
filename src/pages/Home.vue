<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
    <g stroke="#FFEA7C" stroke-linecap="round">
      <path id="Vector 3" stroke-width="3" d="M40.6 31.1c5.4-2.1 13.5-.7 19.2 0 3.5 2.3 6.1 4.9 8.2 7.7a25 25 0 0 1 1 16.7c-1 3.5-3.2 6.2-5.7 8.8A20.1 20.1 0 0 1 46.9 71c-8.7-.4-18.1-13.5-17.9-20.6.4-12.7 5.7-14.7 11.6-19.3Z"/>
      <g id="fires" stroke-width="2">
        <path id="fire 9" d="M64.8 9c1 .4 2 .5 2.5 1.5.5.8.7 2.7.2 3.5-1 1.7-3.9 2-5.6 2.4-1.8.6-3.8 2.2-2.5 4.1"/>
        <path id="fire 8" d="M14 24c1.8-.3 3.3 0 5 .3 1.3.3 1.6 1.3 2.5 2.2.4.4.8 1.5 1.1 2 .4.9 1.7.3 2.4.3"/>
        <path id="fire 7" d="M35.1 9.6c3.7-.6 4.3 3.5 2.7 6-1.3 2-1.5 3 .2 4.7"/>
        <path id="fire 6" d="M93.5 32c-1-1-1.8-2-3-2.5-.4-.2-1-.5-1.5-.5-.9 0-1.4.8-2.3 1-2.2.8-4.3 3.8-6.7 3.8"/>
        <path id="fire 5" d="M92.9 61.7c-2-.8-3-2.1-4.6-3.4-1-.8-1.5-1.3-2.8-1.5-2-.4-3.7.6-5 2.1-1.2 1.2-.1 2-.3 3.3"/>
        <path id="fire 4" d="M71 74c0 2.7 2.5 3.6 3.5 6 .9 1.9 1.4 3.7 1.8 5.9.3 1.7 1.4 3.1 1.7 4.7.2 1.4.9 2.1 2.1 2.5"/>
        <path id="fire 3" d="M47.4 81c.5 1.1 1.2 3.6.5 4.9-.6 1-1.4 2-2.2 3l-1.4 2c-.5 1-.6 1.8-1.3 2.5"/>
        <path id="fire 2" d="M28.5 73a30.8 30.8 0 0 1-8 3.6c-1.6.4-2 2.3-2.5 3.6-1.3 3-4.7 1.9-7.2.9"/>
        <path id="fire 1" d="M20.2 54.6c-.8-1.5-1.4-2.5-3.2-2.6-2.2-.1-4.4.2-6.6.2-1 0-1.6 0-2.3-.7-.8-.8-2-3-3-3"/>
      </g>
    </g>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="squiggly1">
        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
      </filter>
      <filter id="squiggly2">
        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
      </filter>
      <filter id="squiggly3">
        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
      </filter>
      <filter id="squiggly4">
        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
      </filter>
      <filter id="squiggly5">
        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
      </filter>
    </defs>
  </svg>
</template>

<script>
import gsap from 'gsap'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      gsap.to('g', {
        stroke: '#ff9393',
        strokeWidth: 1,
        repeat: -1,
        duration: 2,
        ease: 'none',
        yoyo: true
      })
    })
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 70%;
  animation: squiggly .3s linear infinite;
}
@keyframes squiggly {
  0% {
    filter: url("#squiggly1");
  }
  25% {
    filter: url("#squiggly2");
  }
  50% {
    filter: url("#squiggly3");
  }
  75% {
    filter: url("#squiggly4");
  }
  100% {
    filter: url("#squiggly5");
  }
}

</style>
