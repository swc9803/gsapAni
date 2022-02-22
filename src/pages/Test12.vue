<template>
  <div class="morphing">
  <div class="word">안녕하세요</div>
  <div class="word">전</div>
  <div class="word">최성우</div>
  <div class="word">ㅎㅇ</div>
  <div class="word">ㅂㅇ</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$speed : 10s;
$wordCount: 6;

.morphing{
  font-size: 7rem;
  position: relative;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  filter: contrast(25) blur(1px);
}

.word{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: word $speed infinite ease-in-out;

  @for $i from 0 to $wordCount{
    &:nth-child(#{$i + 1}){
      animation-delay: ($speed / ($wordCount + 1) * $i)-$speed;
    }
  }

  @keyframes word{
    0%, 5%, 100% {filter: blur(0px); opacity: 1;}
    20%, 80% {filter: blur(1em); opacity: 0;}
  }
}

</style>
