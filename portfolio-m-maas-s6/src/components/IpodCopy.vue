<template>
  <div class="Ipod_container">
    <img class="Ipod_banner" src="../assets/IpodBanner.png" />
    <img class="Ipod_banner_mobile" src="../assets/IpodBannerMobile.png" />

    <div class="Ipod_menu_background"></div>
    <div class="Ipod_menu">
      <div class="Ipod_menu_status_bar">
        <div class="Ipod_menu_status_bar_alignment">
          <p>cvPod</p>
          <img src="../assets/IpodBattery.png" />
        </div>
      </div>
      <div class="Ipod_menu_list_container">
      <ul class="Ipod_menu_list" v-for="(link, key) in dataForIpod" :key="key">
        <router-link
          active-class="active-ipod"
          class="Ipod_menu_link"
          :to="{ name: 'CVView', params: { jobid: key } }"
        >
          {{ link.jobTitle }}
        </router-link>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IpodCopy",
  props: {
    dataForIpod: Array,
  },
};
</script>
