<template>
  <div class="container">
    <div class="container_grid">
      <!--Product banner-->
      <div class="AlignBanner_div">
      <div class="product_banner_container product_banner_banner">
        <div class="product_banner_container_background_shadow"></div>

        <div class="product_banner_container_background_outline">
          <div class="Banner__text">
            <h2>Redactieportaal Omroep Flevoland</h2>
            <div class="_TagLine">
              <p class="_TagLine_Text"><span>Nieuwe redactieportaal</span></p>
              <span class="bar"></span>
            </div>
            <p>
              Een nieuwe UX/UI voor het redactieportaal van Omroep Flevoland.
            </p>
          </div>

          <div class="product_banner_IMG">
            <img src="../assets/goudKlompje.png" />
          </div>
        </div>
        <div class="product_banner_bottomBar_container">
          <div class="product_banner_bottomBar _ClientInfo">
            <div class="product_banner_bottomBar_alignDiv">
              <p><span>Client</span></p>
              <p>Omroep Flevoland</p>
            </div>
          </div>
          <div class="product_banner_bottomBar _SkillsInfo">
            <div class="product_banner_bottomBar_alignDiv">
              <p><span>Skills</span></p>
              <p>UI/UX, research</p>
            </div>
          </div>
          <div class="product_banner_bottomBar _EmptyInfo"></div>
        </div>

        <p class="product_banner_Year">2022</p>
      </div>
      </div>
      <!--CRT IMG-->
      <div class="CVCrtIMG_container">
        <img class="CVCrtIMG_banner" src="../assets/CRTOutline.png" />

        <img
          class="CVCrtIMG_menu_background"
          src="../assets/ProductIMGOmroepFlevo.png"
        />
      </div>

      <!-- Nummer -->
      <h1 class="ProductView_number">
        01.
      </h1>

      <!-- Doelstelling/Context -->
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
            <div class="DoelstellingContext_rightLeft_div">
              <div class="DoelstellingContext_text">
                <h1>De</h1>
                <h1>Doelstelling</h1>

                <div class="Doelstelling_bar"></div>

                <p>Bedenk en ontwerp een nieuw redactieportaal, dat:</p>
              </div>

              <div class="DeDoelStelling_list">
                <ul role="list">
                  <li>UI/UX</li>
                  <li>Visual design</li>
                  <li>Webdesign</li>
                  <li>App design</li>
                </ul>
              </div>
            </div>

            <div
              class="DoelstellingContext_rightLeft_div DoelstellingContext_Right_div"
            >
              <div class="DoelstellingContext_text">
                <h1>De</h1>
                <h1>Context</h1>

                <div class="Doelstelling_bar"></div>
              </div>

              <div class="DeDoelStelling_list">
                <p>
                  Omroep Flevoland heeft semester 6 van de FHICT de opdracht gegeven om een nieuw redactieportaal te ontwerpen. De journalisten gebruiken dit systeem om content te produceren, werkzaamheden te plannen, draaiboeken te maken en nog veel meer. Het oude systeem stamt uit 1995 en is enorm ongebruiksvriendelijk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nummer -->
      <h1 class="ProductView_number">
        02.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioProductView",
};
</script>
