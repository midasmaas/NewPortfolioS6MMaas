<template>
<div id="app">
<hamburger-menu></hamburger-menu>
  <div class="container">
    <div class="container_grid">
    <router-view class="container_grid__nav_view"/>
    <router-view class="container_grid__nav_view"/>
    </div>
  </div>
</div>
</template>
<script>

import HamburgerMenu from './components/HamburgerMenu.vue';

export default {
  name: 'App',

  data: () => ({
  }),
  components: {
    HamburgerMenu,
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

