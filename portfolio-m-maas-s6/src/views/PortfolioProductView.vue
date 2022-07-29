<template>
  <div class="container">
    <div class="container_grid">
      <product-banner :dataForProductBanner="currentProduct"></product-banner>

      <!--CRT IMG-->
      <banner-copy class="CVCrtIMG_container" :textForCRT="currentProduct"></banner-copy>

      <!-- Nummer -->
      <h1 class="ProductView_number">
        01.
      </h1>

      <doelstelling-context-banner :dataForDoelstellingContext="currentProduct"></doelstelling-context-banner>


      <!-- Nummer -->
      <h1 class="ProductView_number">
        02.
      </h1>

      <!--Het Proces banner-->

      <div class="Banner_container ProcesBannerContainer">
        <div class="Banner_container_background_shadow"></div>

        <div class="Banner_container_background_outline">
          <div class="Banner_container_background_bar">
            <div class="Banner_container_background_bar_dot __right"></div>
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
          </div>
          <div class="DoelstellingContext_text">
            <h1>Het</h1>
            <h1>Proces</h1>

            <div class="Doelstelling_bar"></div>

            <p>Wat ik zoal gedaan heb voor het eindresultaat:</p>
          </div>
        </div>
      </div>

      <proces-visual :dataForProcesVisual="currentProduct.procesTasks"></proces-visual>

      <!-- Nummer -->
      <h1 class="ProductView_number">
        03.
      </h1>
      <conclusie-banner :dataForConclusie="currentProduct"></conclusie-banner>

      <!-- Nummer -->
      <h1 class="ProductView_number">
        04.
      </h1>
      <resultaat-banner :dataForResultaat="currentProduct"></resultaat-banner>
      <!--CRT IMG-->
      <banner-copy class="CVCrtIMG_container_fullWidth" :textForCRT="currentProduct"></banner-copy>
    </div>
  </div>
</template>

<script>

//Components
import productBanner from '../components/productBanner.vue';
import DoelstellingContextBanner from '../components/doelstellingContextBanner.vue';
import ProcesVisual from '../components/procesVisual.vue';
import ConclusieBanner from '../components/conclusieBanner.vue';
import ResultaatBanner from '../components/resultaatBanner.vue';
import BannerCopy from '../components/windowCRT.vue';



//Data
import productJson from '../json-data/producten.json'


export default {
  components: { productBanner, BannerCopy, DoelstellingContextBanner, ProcesVisual, ConclusieBanner, ResultaatBanner },
  name: "PortfolioProductView",
  computed: {
    currentProduct () {
      return productJson[this.$route.params.productid ?? 0]
    },
  }
};
</script>
