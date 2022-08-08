<template>
<div class="CVInfo_container CVInfo_banner">
        <div class="CVInfo_container_background_shadow"></div>

        <div class="CVInfo_container_background_outline">
          <div class="CVInfo_Banner__text">
            <h2>{{dataForBanner.jobTitle}}</h2>
            <div class="_TagLine">
              <p class="_TagLine_Text"><span>{{dataForBanner.jobSubTitle}}</span></p>
              <span class="bar"></span>
            </div>
            <p>{{dataForBanner.jobDescription}}</p>
          </div>
          
        </div>
        <div class="CVInfo_bottomBar_container">
          <div class="CVInfo_bottomBar _BasisInfo">
            <div class="CV_Info_bottomBar_alignDiv">
              <p><span>Basis</span></p>
            <p>{{dataForBanner.jobBasis}}</p>
            </div>
          </div>
          <div class="CVInfo_bottomBar _DuurInfo">
            <div class="CV_Info_bottomBar_alignDiv">
            <p><span>Duur</span></p>
            <p>{{dataForBanner.jobDuur}}</p>
            </div>
          </div>
          <a :href="dataForBanner.jobLink" target="_blank" rel="noopener noreferrer" class="CheckIt_button__child">
            <p>> Check it!</p>
        </a>
        </div>

        <p class="CVInfo_banner_Year">
          {{dataForBanner.jobJaar}}
        </p>
      </div>
</template>

<script>
export default {
  name: "footerBottomCopy",
  props: {
    dataForBanner: Object,
  }
};
</script>
