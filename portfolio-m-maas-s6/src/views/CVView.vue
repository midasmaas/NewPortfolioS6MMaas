<template>
  <div class="container">
    <div class="container_grid">
      <footer-bottom-copy></footer-bottom-copy>
      <ipod-copy></ipod-copy>
    </div>
  </div>
</template>

<script>
import IpodCopy from '../components/IpodCopy.vue';
import FooterBottomCopy from '../components/footerBottom copy.vue';
export default {
  name: "CVView",
  components: {
    FooterBottomCopy,
    IpodCopy
  },
};
</script>
    FooterBottomCopy2