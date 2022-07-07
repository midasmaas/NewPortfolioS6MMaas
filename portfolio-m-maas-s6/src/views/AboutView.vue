<template>
  <div class="container">
    <div class="container_grid">
        <!--banner BEGIN-->
        <div class="headline_banner_container">
        <div class="headline_container_background_shadow"></div>

        <div class="headline_container_background_outline">
          <div class="headline_container_background_bar">
            <div class="headline_container_background_bar_dot __right"></div>
            <div class="headline_container_background_bar_dot"></div>
            <div class="headline_container_background_bar_dot"></div>
          </div>
          <div class="headline__text">
            <h2 class="accent">Aangenaam, ik ben Midas</h2>
            <h1>Een webkoning onderweg naar</h1> 
            <h2>
              Tijdens de reis heb ik veel gedaan om te raken waar ik nu ben. Ik
              vertel je graag hoe ik daar gekomen ben.
            </h2>
          </div>
          <div class="headline_IMG">
            <img src="../assets/goudKlompje.png">
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
      <div class="avatar_container">
        <img class="avatar_IMG" src="../assets/avatar.png">
      </div>
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>
