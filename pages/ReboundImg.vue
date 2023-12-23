<template>
  <div>
    <img src="https://picsum.photos/600/600?random=1" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=2" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=3" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=4" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=5" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=6" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=7" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=8" alt="" class="skewElem" />
    <img src="https://picsum.photos/600/600?random=9" alt="" class="skewElem" />
    <img
      src="https://picsum.photos/600/600?random=10"
      alt=""
      class="skewElem"
    />
  </div>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    onMounted(() => {
      scrollTo(0, 0);
      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"); // fast
      const clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });
      gsap.set(".skewElem", { transformOrigin: "left center", force3D: true });
    });
  },
};
</script>

<style lang="scss" scoped></style>
