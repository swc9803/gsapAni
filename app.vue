<template>
  <NuxtLayout>
    <NuxtPage :transition="transition" />
    <div class="overlay js-mask" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { TransitionProps } from "vue";

const { $gsap: gsap } = useNuxtApp();

const tl: gsap.core.Timeline = gsap.timeline();
const transition: TransitionProps = {
  name: "page",
  mode: "out-in",
  onEnter: (_, done) => {
    tl.to(".js-mask", { left: "200vw" });
    done();
  },
  onBeforeLeave: () => {
    tl.set(".js-mask", { left: "-200vw" });
  },
  onLeave: (_, done) => {
    tl.to(".js-mask", {
      left: 0,
      duration: 0.3,
    });
    done();
  },
};
</script>

<style lang="scss" scoped>
$transition-mask-color: rgb(0, 59, 220);

.overlay {
  position: fixed;
  top: 0;
  left: -200vw;
  width: 100vw;
  height: 100vh;
  background: $transition-mask-color;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
  }
  &:before {
    right: 100vw;
    background: linear-gradient(
      to top left,
      $transition-mask-color 50%,
      transparent 50%
    );
  }
  &:after {
    left: 100vw;
    background: linear-gradient(
      to bottom right,
      $transition-mask-color 50%,
      transparent 50%
    );
  }
}
</style>
