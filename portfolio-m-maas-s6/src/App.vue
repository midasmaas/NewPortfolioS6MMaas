<template>
<div id="app">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Midas</title>
</head>  
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
  
}

</style>

