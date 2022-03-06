<template>
  <!-- test9 -->
  <div>

  </div>
</template>

<script>
import getBackgound from '@/library/getBackgound'
import { onBeforeUnmount } from 'vue'
export default {
  setup () {
    const { animateId, rendererDom } = getBackgound()

    onBeforeUnmount(() => {
      cancelAnimationFrame(animateId) // 애니메이션 제거

      document.body.removeChild(rendererDom) // 돔에서 제거
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
