<template>
  <div>
    <!--Hamburgermenu gesloten BEGIN-->
    <div class="hamburger_container_GESLOTEN">
      <div class="hamburger_container_grid">
        <router-link to="/">
        <img
          class="hamburger_container_GESLOTEN__img"
          src="../assets/LogoHamburgerSVG.svg"
        />
        </router-link>
        <a @click="hamburgerAnim(true)" class="hamburger_button__parent">
          <div class="hamburger_button__parent_background"></div>
          <div class="hamburger_button__child">
            <div class="top"></div>
            <div></div>
            <div class="bottom"></div>
          </div>
        </a>
      </div>
    </div>
    <!--Hamburgermenu gesloten EINDE-->

    <!--Hamburgermenu open BEGIN-->
    <div class="hamburger_container_OPEN close">
      <div class="hamburger_background_background"></div>
      <div class="hamburger_background_shadow"></div>
      <div class="hamburger_background_container">
        <div class="hamburger_background_outline">
          <div class="hamburger_background_bar">
            <div
              @click="hamburgerAnim(false)"
              class="hamburger_background_bar_dot __right"
            >
              <div class="before"></div>
              <div class="after"></div>
            </div>
            <div class="hamburger_background_bar_dot"></div>
            <div class="hamburger_background_bar_dot"></div>
          </div>
        </div>
      </div>
      <nav class="hamburger_container_grid">
        <div class="hamburger_nav_container">
          <div class="hamburger_nav_container__items">
            <router-link class="dropdown_item-1" to="/">OVER</router-link>
            <router-link class="dropdown_item-2" :class="routePortfolioActive" to="/portfolio">PORTFOLIO</router-link>
            <router-link class="dropdown_item-3" :class="routeCVActive" to="/cv/0">CV</router-link>
            <router-link class="dropdown_item-4" to="/contact">CONTACT</router-link>
          </div>
        </div>
      </nav>
    </div>
    <!--Hamburgermenu open EINDE-->
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.hamburgerAnim(false)
      }
    },
  },
  mounted(){
  },
  methods: {
    hamburgerAnim(open){
      let openDiv = document.getElementsByClassName('hamburger_container_OPEN')[0]
      let bgDiv = document.getElementsByClassName('hamburger_background_background')[0]
      if(open){
        openDiv.classList.add('hamburgerDown', 'hamburger_stagger')
        bgDiv.classList.add('hamburgerDownOpacity')
        openDiv.classList.remove('hamburgerUp')
        openDiv.classList.remove('close')
      } else {
        openDiv.classList.add('hamburgerUp')
        openDiv.classList.remove('hamburgerDown', 'hamburger_stagger')
        bgDiv.classList.remove('hamburgerDownOpacity')
        setTimeout(() => {
          openDiv.classList.add('close')
        },300)
      }
    }
  },
  computed: {
    routeCVActive(){
    if (this.$route.params.jobid >= 0){
      return 'router-link-exact-active'
    } return ''
    },
    routePortfolioActive(){
    if (this.$route.params.productid >= 0){
      return 'router-link-exact-active'
    } return ''
    },
  },
};
</script>
