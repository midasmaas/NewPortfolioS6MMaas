<template>
  <div class="container">
    <div class="container_grid">
      <portfolio-product-banner :class="{'portfolio_product_banner_left': key % 2 === 0, 'portfolio_product_banner_right': key % 2 !== 0 }"  v-for="(product, key) in productenData" :key="key" :dataForBanner="product" :keyForBanner="key" ></portfolio-product-banner>
  </div>
  </div>
</template>

<script>
//Componenten
import PortfolioProductBanner from "../components/PortfolioProductBanner.vue";

//Data
import productenJson from "../json-data/producten.json";

export default {
  components: { PortfolioProductBanner },
  name: "PortfolioView",
  computed: {
    productenData () {
      return productenJson
    },
  }
};
</script>
