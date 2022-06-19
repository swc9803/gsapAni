<template>
  <!-- test14 -->
  <!-- @focus @blur, fade test -->
  <div class="auth">
    <div class="em">
      <label>Email</label>
      <input type="email" @focus="emfo = true" @blur="emfo = false">
      <transition name="emfade">
        <p v-show="emfo">이메일 형식을</p>
      </transition>
    </div>
    <div>
      <label>Password</label>
      <input type="password" @focus="pafo = true" @blur="pafo = false" @keyup.enter="dd">
      <transition name="pafade">
        <p v-show="pafo">최소 7자리의</p>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup () {
    const emfo = ref(false)
    const pafo = ref(false)

    const dd = () => {
      alert('hi')
    }
    return {
      emfo, pafo, dd
    }
  }
}
</script>

<style lang="scss" scoped>
.emfade-enter-from,
.emfade-leave-to {
  opacity: 0;
  transform: translate(300px, 300px);
}
.emfade-enter-active,
.emfade-leave-active {
  transition: .3s
}

.pafade-enter-from,
.pafade-leave-to {
  opacity: 0;
}
.pafade-enter-active,
.pafade-leave-active {
  transition: .3s
}

.em {
  margin: 50px 0 50px 0;
}
p {
  position: absolute;
  color: red;
}

</style>
