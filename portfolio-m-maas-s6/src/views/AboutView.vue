<template>

  <div class="container overflowHidden">
    <!--Parralex IMG BEGIN-->
    <div class="parralex_IMG_container">
      <img id="parralex" class="parralex_IMG" src="../assets/parralexBG.png" />
    </div>
      <!--Parralex IMG EINDE-->
    
    <div class="container_grid margin_top about__background">

      

      <!--banner BEGIN-->
      <div class="Banner_container headline_banner">

        <div class="Banner_container_background_outline">
          <div class="Banner_container_background_shadow"></div>
          <div class="Banner_container_background_bar">
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
          </div>
          <div class="Banner__texts">
            <h2 class="accent">Aangenaam, ik ben Midas</h2>
            <h1>Een webkoning onderweg naar</h1>
            <h2>
              Tijdens de reis heb ik veel gedaan om te raken waar ik nu ben. Ik
              vertel je graacdg hoe ik daar gekomen ben.
            </h2>
          </div>
          <div id="square" @click="startSpin" class="headline_IMG">
            <img src="../assets/goudKlompje.png" />
            <p>GOUD</p>
          </div>

          <div class="about__line_headline">
            <img src="../assets/PortfolioLijnAbout.svg" />
          </div>
        </div>

        <a @click="scrollTo" class="scrollVerder_button__parent">
        <div class="scrollVerder_button__parent_background"></div>
          <div class="scrollVerder_button__child">
            <div class="scrollVerder_button__child_left">
              <p>Scroll verder</p>
            </div>
            <div class="scrollVerder_button__child_right">
              <p>>></p>
            </div>
          </div>
        </a>
      

      </div>
      <!--banner EINDE-->

      <!--Avatar BEGIN-->
      <div class="avatar_container">
        <img class="avatar_IMG" src="../assets/avatar.png" />
      </div>
      <!--Avatar EINDE-->
       <!--Journalistiek IMG BEGIN-->
      <div class="journalistiek_IMG_container">
        <img src="../assets/journalistiekObject.png" />
      </div>

      <div class="about__line_horizontal_Journalstiek">
            <img src="../assets/PortfolioLijnAboutShort.png" />
      </div>
      <!--Journalistiek IMG EINDE-->

      <!--Journalistiek BANNER BEGIN-->
      <banner-text id="journalistiek"
        class="journalistiek_banner"
        :textForBanner="journalstiekText"
      ></banner-text>
      <div class="about__line_journalistiek">
            <img src="../assets/PortfolioLijnAboutShort.png" />
      </div>
      
      <!--Journalistiek BANNER EINDE-->

      

      <!--ICT BANNER BEGIN-->
      <banner-text class="ICT_banner" :textForBanner="ICTText"></banner-text>

      <div class="about__line_ICT">
            <img src="../assets/PortfolioLijnAboutShort.png" />
      </div>
      <!--ICT BANNER EINDE-->

      <!--ICT IMG BEGIN-->
      <div class="ICT_IMG_container">
        <img src="../assets/ICTIMG.png" />
      </div>

      <div class="about__line_horizontal_ICT">
            <img src="../assets/PortfolioLijnAboutShort.png" />
      </div>
      <!--ICT IMG EINDE-->

      <!--Stage IMG BEGIN-->
      <div class="Stage_IMG_container">
        <img src="../assets/win98.png" />
      </div>

      <div class="about__line_horizontal_stage">
            <img src="../assets/PortfolioLijnAboutShort.png" />
      </div>
      <!--Stage IMG EINDE-->

      <!--Stage BANNER BEGIN-->
      <banner-text
        class="Stage_banner"
        :textForBanner="StageText"
      ></banner-text>

      <div class="about__line_Stage">
            <img src="../assets/PortfolioLijnAboutShort.png" />
      </div>
      <!--Stage BANNER EINDE-->

      <!--Specs BANNER BEGIN-->
      <div class="Banner_container Specs_banner">
        <div class="Banner_container_background_shadow"></div>

        <div class="Banner_container_background_outline">
          <div class="Banner_container_background_bar">
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
          </div>

          <div class="Specs_banner_Title">
            <div class="Specs_banner_columns_collumn_text">
              <h1>SPECS<span>.</span>EXE</h1>
            </div>
          </div>
          <div class="Specs_banner_columns_container">
            <div class="Specs_banner_columns_collumn _left">
              <div class="Specs_banner_columns_collumn_text">
                <h2>DESIGN</h2>
                <ul role="list">
                  <li>UI/UX</li>
                  <li>Visual design</li>
                  <li>Webdesign</li>
                  <li>App design</li>
                </ul>
              </div>
            </div>
            <div class="Specs_banner_columns_collumn">
              <div class="Specs_banner_columns_collumn_text">
                <h2>DEVELOPMENT</h2>
                <ul role="list">
                  <li>Vue.js</li>
                  <li>SCSS</li>
                  <li>GIT</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Specs BANNER EINDE-->

      <!--Slot BANNER BEGIN-->
      <banner-text class="Slot_banner" :textForBanner="SlotText"></banner-text>
      <div class="about__line_Specs">
            <img src="../assets/PortfolioLijnAbout.svg" />
      </div>
      <!--Slot BANNER EINDE-->

      <!--Goudpot IMG BEGIN-->
      <div class="Goudpot_IMG_container">
        <img src="../assets/PotGoud.png" />
      </div>
      <!--Goudpot IMG EINDE-->
    </div>
  </div>
</template>

<script>
import BannerText from "../components/Banner.vue";
import gsap from 'gsap'
export default {
  name: "AboutView",
  data() {
    return {
      journalstiekText:
        "<p>Voor ik mij bezighield met het web, had ik de ambitie om journalist te worden. Een diploma heb ik daar niet aan overgehouden, maar wel <span>gouden</span> ervaringen in de muziekjournalistiek, bij media als The Daily Indie en Aardschok. Hier leerde ik mijn ijver en brede interesse te smeden. Ik nam <span>schrijfvaardigheid</span> en <span>communicatieve vaardigheden</span> mee.</p>",
      ICTText:
        "<p>Het <span>goud</span> blonk echter niet zoals ik had gehoopt. Om ervoor te zorgen dat ik ooit een beetje als een vorst kan leven, ging ik andere paden verkennen. Dit verleide mij om ICT & Media Design te gaan studeren aan de Fontys in Tilburg, vanwege de interessante combinatie tussen techniek en creativiteit. Design tot leven brengen met code, is waar het bij mij van gaat kriebelen.</p>",
      StageText:
        "<p>Waar ik dan stiekem wel met tevredenheid op terugkijk, is mijn tijd als stagiair bij Partout Digital Agency</a>. Hier had ik mijn bureau tussen de design- en developmentafdelingen in, waar ik mijn eigen projecten had, waarvan ik het meest trots ben op <span>deze</span> onboardingwebsite, die ik zelf ontwierp en vervolgens heb gerealiseerd in Vue.js.</p>",
      SlotText:
        "<p>Mijn streven is om mijn studie af te ronden met een griffel en daarom zoek ik de afstudeerstage waar gouden kennis te halen valt.</h3>",
    };
  },
  methods:{
    scrollTo(){
  document.getElementById('journalistiek').scrollIntoView({
  behavior: 'smooth'
})
    },
    startSpin(){
    var square = document.getElementById('square')

    gsap.from(square, 3, {rotation:"5", repeat:-1, yoyo: true});
  },

  parralex(){
    let background = document.getElementById('parralex')
    let value = window.scrollY;
    background.style.top = value * 0.25 + 'px'
  }
  },
  
  components: {
    BannerText,
  },
  mounted(){
    this.startSpin()
  },
  created(){
    window.addEventListener('scroll', this.parralex)
  },
  destroyed(){
    window.removeEventListener('scroll', this.parralex)
  }
  
};
</script>
