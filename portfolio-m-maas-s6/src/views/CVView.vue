<template>
<div class="height_full_cv">
  <div class="container flex_end">
    
    <div class="container_grid ">
      
      <div class="padding_top_divider"></div>
      <footer-bottom-copy :dataForBanner="cvData"></footer-bottom-copy>
      <ipod-copy :dataForIpod="ipodData"></ipod-copy>
  
    </div>
  </div>
</div>
</template>

<script>
//Componenten
import IpodCopy from '../components/IpodCopy.vue';
import FooterBottomCopy from '../components/footerBottom copy.vue';

//Data
import cvJson from '../json-data/cv.json'

export default {
  name: "CVView",
  components: {
    FooterBottomCopy,
    IpodCopy
  },
  computed: {
    cvData () {
      return cvJson[this.$route.params.jobid ?? 0]
    },
    ipodData() {
      return cvJson
    }
  }
};
</script>
    FooterBottomCopy2