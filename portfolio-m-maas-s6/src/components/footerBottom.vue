<template>
  <div class="footer_background">
    <div class="container">
      <div class="container_grid_footer">
        <div class="footer_container">
          <div class="footer_links_container">
            <router-link class="footer_link" to="/">Over</router-link>
            <router-link class="footer_link" to="/portfolio">Portfolio</router-link>
            <router-link class="footer_link" to="/cv/0">Cv</router-link>
            <router-link class="footer_link" to="/contact">Contact</router-link>
          </div>
        <div class="footer_IMGSlogan">
          <p>Ontworpen en gecodeerd door Midas Maas, 2022</p>
          <img src="../assets/FooterLogo.png">
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerBottom",
};
</script>
