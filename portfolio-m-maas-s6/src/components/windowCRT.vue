<template>
<div class="CVCrtIMG_container">
  <img class="CVCrtIMG_banner" src="../assets/CRTOutline.png" />
        <img
          class="CVCrtIMG_menu_background"
          :src="require('../assets/portfolioProducts/CRTImgs/' + textForCRT.productCRTIMG)"
        />

</div>
</template>

<script>
export default {
  name: 'windowCRT',
  props: {
    textForCRT: Object,
  }
}
</script>