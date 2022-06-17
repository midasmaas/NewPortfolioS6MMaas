<template>
  <div class="backGroundColor container" id="app">
    <div class="container_grid">
      <nav>
      <router-link to="/">OVER</router-link> |
      <router-link to="/portfolio">PORTFOLIO</router-link>  |
      <router-link to="/cv">CV</router-link>  |
      <router-link to="/contact">CONTACT</router-link>  |
    </nav>
    <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
