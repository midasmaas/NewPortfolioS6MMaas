<template>
<div class="hamburger_container">
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

</template>

<script>

export default {
  name: 'HamburgerMenu',
};
</script>

