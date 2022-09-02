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
        <a @click="hamburgerOpen = true" class="hamburger_button__parent">
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
    <div :class="hamburgerAnim" class="hamburger_container_OPEN">
      <div :class="hamburgerAnimOpacity" class="hamburger_background_background"></div>
      <div class="hamburger_background_shadow"></div>
      <div class="hamburger_background_container">
        <div class="hamburger_background_outline">
          <div class="hamburger_background_bar">
            <div
              @click="hamburgerOpen = false"
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
            <router-link to="/">OVER</router-link>
            <router-link :class="routePortfolioActive" to="/portfolio">PORTFOLIO</router-link>
            <router-link :class="routeCVActive" to="/cv/0">CV</router-link>
            <router-link to="/contact">CONTACT</router-link>
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
  data() {
    return {
      hamburgerOpen: false,
    };
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.hamburgerOpen = false;
      }
    },
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
    hamburgerAnim(){
      if(this.hamburgerOpen == true){
        return 'hamburgerDown'
      } else return 'hamburgerUp'
    },
    hamburgerAnimOpacity(){
      if(this.hamburgerOpen == true){
        return 'hamburgerDownOpacity'
      } else return 'hamburgerUpOpacity'
    },
  },
};
</script>
