<template>
   <div class="portfolio_product_banner_container">
        <div class="portfolio_product_banner_container_background_shadow"></div>

        <div class="portfolio_product_banner_container_background_outline">
          <div class="portfolio_product_banner_container_background_bar">
            <div class="portfolio_product_banner_container_background_bar_dot __right"></div>
            <div class="portfolio_product_banner_container_background_bar_dot"></div>
            <div class="portfolio_product_banner_container_background_bar_dot"></div>
          </div>
          <div class="portfolio_product_banner__content">
            <div class="portfolio_product_banner__text">
            <h2>
                {{dataForBanner.productTitle}}
            </h2>
            <div class="_TagLine">
              <p class="_TagLine_Text"><span>{{dataForBanner.productSubTitle}}</span></p>
              <span class="bar"></span>
            </div>
            <p>
                {{dataForBanner.productDescription}}
            </p>
            
          </div>
            <img :src="require('../assets/portfolioProducts/thumbnails/' + dataForBanner.productThumbnail)">
          </div>
          
        </div>
        <div class="portfolio_product_banner_bottomBar_container">
        <router-link  class="portfolio_product_banner_button" :to="{ name: 'PortfolioProductView', params: { productid: keyForBanner }}" >
            <p>>Check it!</p>
        </router-link>
        </div>

        
      </div>
</template>

<script>
export default {
  name: "PortfolioProductBanner",
  props: {
    dataForBanner: Object,
    keyForBanner: Number,
  },
};
</script>
