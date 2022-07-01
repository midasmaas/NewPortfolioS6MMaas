<template>
<div id="app">
<hamburger-menu></hamburger-menu>
    <router-view class="container_grid__nav_view"/>
  <footer-bottom></footer-bottom>
</div>
</template>
<script>

import HamburgerMenu from './components/HamburgerMenu.vue';
import footerBottom from './components/footerBottom.vue';

export default {
  name: 'App',

  data: () => ({
  }),
  components: {
    HamburgerMenu,
    footerBottom
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

