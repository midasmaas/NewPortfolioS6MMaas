<template>
  <div>
    <!--Hamburgermenu gesloten BEGIN-->
    <div class="hamburger_container_GESLOTEN">
      <div class="hamburger_container_grid">
        <img
          class="hamburger_container_GESLOTEN__img"
          src="../assets/LogoHamburgerSVG.svg"
        />
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
    <div v-if="hamburgerOpen" class="hamburger_container_OPEN">
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
            <router-link to="/portfolio">PORTFOLIO</router-link>
            <router-link to="/cv">CV</router-link>
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
};
</script>
