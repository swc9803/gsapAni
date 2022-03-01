<template>
  <div class="dd">
    <header id="masthead">
      <a href="#" class="logo">Logo</a>
      <ul id="navmenu">
        <li><a href="#stage-1">Stage 1</a></li>
        <li><a href="#stage-2">Stage 2</a></li>
        <li><a href="#stage-3">Stage 3</a></li>
        <li><a href="#stage-4">Stage 4</a></li>
        <li><a href="#stage-5">Stage 5</a></li>
      </ul>
    </header>
    <main id="content">
      <!-- Scroll Wrapper starts -->
      <div id="hscroll">

        <section id="stage-1" class="stage purple">
          <h2>This is stage 1</h2>
        </section>

        <section id="stage-2" class="stage blue">
          <h2>This is stage 2</h2>
        </section>

        <section id="stage-3" class="stage green">
          <h2>This is stage 3</h2>
        </section>

        <section id="stage-4" class="stage yellow">
          <h2>This is stage 4</h2>
        </section>

        <section id="stage-5" class="stage red">
          <div>
            <h2>Contact Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default {
  setup () {
    onMounted(() => {
      const sections = gsap.utils.toArray('.stage')
      const scrollContainer = document.querySelector('#hscroll')

      ScrollTrigger.matchMedia({
        '(min-width: 992px)': function () {
          const scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none'
          })

          ScrollTrigger.create({
            animation: scrollTween,
            trigger: scrollContainer,
            pin: true,
            scrub: 1,
            end: () => '+=' + scrollContainer.offsetWidth
          })
        }
      })

      const wideViewport = window.matchMedia('(min-width: 992px)')

      document.querySelectorAll('#navmenu a').forEach(element => {
        element.addEventListener('click', function (e) {
          e.preventDefault()
          const id = this.getAttribute('href').split('#')[1]

          const targetElement = document.getElementById(id)
          const navBar = document.getElementById('masthead')

          if (wideViewport.matches) {
            gsap.to(window, {
              scrollTo: ((targetElement.offsetLeft + navBar.offsetWidth * sections.indexOf(targetElement)) * (scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth))),
              duration: 2
            })
          } else {
            gsap.to(window, {
              scrollTo: targetElement,
              duration: 2
            })
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.dd {
  padding-left: 100px!important;
}
#masthead {
  position: fixed;
  z-index: 9999;
  left:0;
  top: 0;
  background: #fff;
  width: 100px;
  height: 100vh;
  color: #000;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: block;
  color: #000;
  font-size: 36px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transform: rotate(90deg);
  transform-origin: left center;
  margin: 0 0 0 100px;
}
#navmenu {
  list-style: none;
  color: #000;
  padding: 0;
  margin: 0;
  text-align: center;
}
#navmenu a {
  color: #000;
  text-decoration: none;
}
#content {
  overflow-x: hidden;
}
#hscroll {
  width: calc(500vw - 100px);
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.stage {
  width: calc(100vw - 100px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  padding: 20px;
}

#btncontact {
  position: fixed;
  z-index: 9999;
  right: 0;
  bottom: 30px;
  background: #000;
  border: none;
  color: #fff;
  font-size: 24px;
  padding: 10px 15px;
  cursor: pointer;
}

/*== For DEMO Styling Only==*/
body, header, main, footer, div, section { box-sizing: border-box;}
body{
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}
a { color: #fff;}
section { text-align: center; color: #fff; font-size: 2em; }
#stage-1 {
  background: #dd3e54;
  background: linear-gradient(to right, #6be585, #dd3e54);
}
#stage-2 {
  background: #090979;
  background: linear-gradient(to right, #090979, #00d4ff);
}
#stage-3 {
  background: #833ab4;
  background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
}
#stage-4 {
  background: #009FFF;
  background: linear-gradient(to right, #009FFF, #ec2F4B);
}
#stage-5 {
  background: #8A2387;
  background: linear-gradient(to right, #8A2387, #E94057, #F27121);
}

@media only screen and (max-width: 991px) {
  .dd { padding-left: 0!important;}
  #hscroll {
    width: 100vw;
    height: auto;
    flex-direction: column;
  }
  .stage {
    width: 100vw;
    height: auto;
    min-height: 100vh;
  }
  #masthead {
    width: 100%;
    height: auto;
    padding: 10px 20px;
  }
  .logo {
    width: 106px;
    margin: 0 auto;
    transform: rotate(0deg);
    left: 0;
    top: 0;
  }
}
</style>
