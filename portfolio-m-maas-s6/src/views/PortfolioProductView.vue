<template>
  <div class="container">
    <div class="container_grid">
      <product-banner :dataForProductBanner="currentProduct"></product-banner>

      <!--CRT IMG-->
      <banner-copy
        class="CVCrtIMG_container"
        :textForCRT="currentProduct"
      ></banner-copy>

      

      <!-- Nummer -->
      <h1 class="ProductView_number">01.</h1>

      <doelstelling-context-banner
        :dataForDoelstellingContext="currentProduct"
      ></doelstelling-context-banner>

      <!-- Nummer -->
      <h1 class="ProductView_number">02.</h1>

      <!--Het Proces banner-->

      <div class="Banner_container ProcesBannerContainer">
        <div class="Banner_container_background_shadow"></div>

        <div class="Banner_container_background_outline">
          <div class="Banner_container_background_bar">
            <div class="Banner_container_background_bar_dot __right"></div>
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
          </div>
          <div class="DoelstellingContext_text borderTop_none">
            <h1>Het</h1>
            <h1>Proces</h1>

            <div class="Doelstelling_bar"></div>

            <p>Wat ik zoal gedaan heb voor het eindresultaat:</p>
          </div>
        </div>
      </div>

      <proces-visual
        :dataForProcesVisual="currentProduct.procesTasks"
      ></proces-visual>

      <!-- Nummer -->
      <h1 class="ProductView_number">03.</h1>
      <conclusie-banner :dataForConclusie="currentProduct"></conclusie-banner>

      <!-- Nummer -->
      <h1 class="ProductView_number">04.</h1>
      <resultaat-banner :dataForResultaat="currentProduct"></resultaat-banner>
      <!--CRT IMG-->
      <div class="Vueper_container">
        <!--<img class="CVCrtIMG_banner" src="../assets/CRTOutline.png" />-->
        <div class="Veuper_outline">
        <vueper-slides :slide-ratio="3 / 4">
          <vueper-slide
            style="heigth: 600px"
            v-for="(slide, i) in slidesPush"
            :key="i"
            :image="slide.image"
          />
        </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Components
import productBanner from "../components/productBanner.vue";
import DoelstellingContextBanner from "../components/doelstellingContextBanner.vue";
import ProcesVisual from "../components/procesVisual.vue";
import ConclusieBanner from "../components/conclusieBanner.vue";
import ResultaatBanner from "../components/resultaatBanner.vue";
import BannerCopy from "../components/windowCRT.vue";

//Data
import productJson from "../json-data/producten.json";

//Vueper
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    productBanner,
    BannerCopy,
    DoelstellingContextBanner,
    ProcesVisual,
    ConclusieBanner,
    ResultaatBanner,
    VueperSlides,
    VueperSlide,
  },
  name: "PortfolioProductView",
  computed: {
    currentProduct() {
      return productJson[this.$route.params.productid ?? 0];
    },
    /*
    currentIMGSlider () {
      return this.slidesPush.push(productJson[this.$route.params.productid ?? 0].IMGSlider)
    },
    */
  },
  data: () => ({
    slides: [
      {
        image: require("../assets/ProductIMGOmroepFlevo.png"),
      },
      {
        image: require("../assets/ProductIMGOmroepFlevo.png"),
      },
      {
        image: require("../assets/ProductIMGOmroepFlevo.png"),
      },
    ],
    slidesPush: [],
    reloadOnce: false
  }),
  methods: {
    pusToArray() {
      //console.log(this.slidesPush);
      let JSONData = productJson[this.$route.params.productid].IMGSlider;
      console.log(JSONData)
      JSONData.forEach((element) => {
        console.log(element.image + "BEFORE")
        element.image = require("@/assets/portfolioProducts/sliderImgs/" + element.imageBaseValue);
        console.log(element.image)
      });
      this.slidesPush.push(...JSONData);
    },
  },
  created() {
    this.pusToArray();
  },
};
</script>
