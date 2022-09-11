<template>
  <div class="AlignBanner_div">
      <div class="product_banner_container">
        <div class="product_banner_container_background_shadow"></div>

        <div class="product_banner_container_background_outline">
          <div class="Banner__text">
            <h2>{{dataForProductBanner.productTitle}}</h2>
            <div class="_TagLine">
              <p class="_TagLine_Text"><span>{{dataForProductBanner.productSubTitle}}</span></p>
              <span class="bar"></span>
            </div>
            <p>
              {{dataForProductBanner.productDescription}}
            </p>
          </div>

          <div id="square" class="product_banner_IMG">
            <img src="../assets/goudKlompje.png" />
          </div>
        </div>
        <div class="product_banner_bottomBar_container">
          <div class="product_banner_bottomBar _ClientInfo">
            <div class="product_banner_bottomBar_alignDiv">
              <p><span>Client</span></p>
              <p>{{dataForProductBanner.productClient}}</p>
            </div>
          </div>
          <div class="product_banner_bottomBar _SkillsInfo">
            <div class="product_banner_bottomBar_alignDiv">
              <p><span>Skills</span></p>
              <p>{{dataForProductBanner.productSkills}}</p>
            </div>
          </div>
          <div class="product_banner_bottomBar _EmptyInfo"></div>
        </div>

        <p class="product_banner_Year">2022</p>
      </div>
      </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'productBanner',
  props: {
    dataForProductBanner: Object
  },
  methods: {
    startSpin(){
    var square = document.getElementById('square')

    gsap.from(square, 3, {rotation:"10", repeat:-1, yoyo: true});
  },
},
mounted(){
    this.startSpin()
  }
}
</script>