<template>
<div class="DoelstellingContext_container">
        <div class="DoelstellingContext_container_background_shadow"></div>

        <div class="DoelstellingContext_container_background_outline">
          <div class="DoelstellingContext_container_background_bar">
            <div
              class="DoelstellingContext_container_background_bar_dot __right"
            ></div>
            <div class="DoelstellingContext_container_background_bar_dot"></div>
            <div class="DoelstellingContext_container_background_bar_dot"></div>
          </div>

          <div class="DoelstellingContext_text_container">
            <div class="Conclusie_div">
              <div class="DoelstellingContext_text">
                <h1>DE</h1>
                <h1>CONCLUSIE</h1>

                <div class="Conclusie_bar"></div>

                <p>{{dataForConclusie.productConclusie.productConclusieDescription}}</p>
              </div>

              <div class="DeDoelStelling_list" v-html="dataForConclusie.productConclusie.productConclusieSummary">
                
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'conclusieBanner',
  props: {
    dataForConclusie: Object
  }
}
</script>