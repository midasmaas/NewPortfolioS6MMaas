<template>
  <div class="container">
    <div class="container_grid">
      <!--banner BEGIN-->
      <div class="Banner_container headline_banner">
        <div class="Banner_container_background_shadow"></div>

        <div class="Banner_container_background_outline">
          <div class="Banner_container_background_bar">
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
            <div class="Banner_container_background_bar_dot"></div>
          </div>
          <div class="Banner__text">
            <h2 class="accent">Aangenaam, ik ben Midas</h2>
            <h1>Een webkoning onderweg naar</h1>
            <h2>
              Tijdens de reis heb ik veel gedaan om te raken waar ik nu ben. Ik
              vertel je graag hoe ik daar gekomen ben.
            </h2>
          </div>
          <div class="headline_IMG">
            <img src="../assets/goudKlompje.png" />
            <p>GOUD</p>
          </div>
        </div>

        <a class="scrollVerder_button__parent">
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
      <!--Journalistiek IMG EINDE-->

      <!--Journalistiek BANNER BEGIN-->
      <banner-text
        class="journalistiek_banner"
        :textForBanner="journalstiekText"
      ></banner-text>
      <!--Journalistiek BANNER EINDE-->

      <!--ICT BANNER BEGIN-->
      <banner-text class="ICT_banner" :textForBanner="ICTText"></banner-text>
      <!--ICT BANNER EINDE-->

      <!--ICT IMG BEGIN-->
      <div class="ICT_IMG_container">
        <img src="../assets/ICTIMG.png" />
      </div>
      <!--ICT IMG EINDE-->

      <!--Stage IMG BEGIN-->
      <div class="Stage_IMG_container">
        <img src="../assets/win98.png" />
      </div>
      <!--Stage IMG EINDE-->

      <!--Stage BANNER BEGIN-->
      <banner-text
        class="Stage_banner"
        :textForBanner="StageText"
      ></banner-text>
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
export default {
  name: "AboutView",
  data() {
    return {
      journalstiekText:
        "<h2>Voor ik mij bezighield met het web, had ik de ambitie om journalist te worden. Een diploma heb ik daar niet aan overgehouden, maar wel <span>gouden</span> ervaringen in de muziekjournalistiek, bij media als The Daily Indie en Aardschok. Hier leerde ik mijn ijver en brede interesse te smeden. Ik nam <span>schrijfvaardigheid</span> en <span>communicatieve vaardigheden</span> mee.</h2>",
      ICTText:
        "<h2>Het <span>goud</span> blonk echter niet zoals ik had gehoopt. Om ervoor te zorgen dat ik ooit een beetje als een vorst kan leven, ging ik andere paden verkennen. Dit verleide mij om ICT & Media Design te gaan studeren aan de Fontys in Tilburg, vanwege de interessante combinatie tussen techniek en creativiteit. Design tot leven brengen met code, is waar het bij mij van gaat kriebelen.</h2>",
      StageText:
        "<h2>Waar ik dan stiekem wel met tevredenheid op terugkijk, is mijn tijd als stagiair bij Partout Digital Agency. Hier had ik mijn bureau tussen de design- en developmentafdelingen in, waar ik mijn eigen projecten had, waarvan ik het meest trots ben op <span>deze</span> onboardingwebsite, die ik zelf ontwierp en vervolgens heb gerealiseerd in Vue.js.</h2>",
      SlotText:
        "<h3>Mijn streven is om mijn studie af te ronden met een griffel en daarom zoek ik de afstudeerstage waar gouden kennis te halen valt.</h3>",
    };
  },
  components: {
    BannerText,
  },
};
</script>
