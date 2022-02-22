<template>
  <div class="sss">
    <Test11 class="dd" />
  </div>
</template>

<script>
import Test11 from '@/pages/Test11'
export default {
  components: {
    Test11
  },
  setup () {

  }
}
</script>

<style lang="scss" scoped>
.sss {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .dd {
    width: 500%;
    height: 100%;
    overflow-x: hidden;

  }
}
</style>
