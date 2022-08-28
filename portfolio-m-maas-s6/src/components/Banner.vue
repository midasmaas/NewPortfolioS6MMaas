<template>
  <div class="Banner_container">
        <div class="Banner_container_background_shadow"></div>

        <div class="Banner_container_background_outline">
          <div class="Banner_container_background_bar">
            <div class="Banner_container_background_bar_dot __right"></div>
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
          </div>
          <p v-html="textForBanner" class="Banner__texts">
          </p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'BannerText',
  props: {
    textForBanner: String,
  }
}
</script>