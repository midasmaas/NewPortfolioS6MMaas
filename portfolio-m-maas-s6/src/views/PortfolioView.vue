<template>
  <div class="container">
    <div class="container_grid margin_top portfolio_product_banner__background overflowHidden">
      <!--Parralex IMG BEGIN-->
    <div class="parralex_IMG_container_portfolio_product">
      <img id="parralex" class="parralex_IMG" src="../assets/kaartGrijs.png" />
    </div>

      <!--
    <div class="parralex_IMG_container_portfolio_product">
      <img id="parralex" class="parralex_IMG_portfolio_product" src="../assets/kaartGrijs.png" />
    </div>
    -->
      <portfolio-product-banner :class="{'portfolio_product_banner_left': key % 2 === 0, 'portfolio_product_banner_right': key % 2 !== 0, 'portfolio_product_banner_left_top': key === 0 }"  v-for="(product, key) in productenData" :key="key" :dataForBanner="product" :keyForBanner="key" ></portfolio-product-banner>
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
  },
  methods:{
     parralex(){
    let background = document.getElementById('parralex')
    let value = window.scrollY;
    background.style.top = value * 0.25 + 'px'
  }
  },
  created(){
    window.addEventListener('scroll', this.parralex)
  },
  destroyed(){
    window.removeEventListener('scroll', this.parralex)
  }
};
</script>
