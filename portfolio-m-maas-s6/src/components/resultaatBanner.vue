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
                <h1>Het</h1>
                <h1>Resultaat</h1>

                <div class="Conclusie_bar"></div>

                <p>
                  {{dataForResultaat.productResultaat}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'resultaatBanner',
  props: {
    dataForResultaat: Object
  }
}
</script>