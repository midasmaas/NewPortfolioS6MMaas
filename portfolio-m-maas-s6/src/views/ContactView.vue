<template>
  <div class="container">
    <div class="container_grid height_full">
      <contact-banner></contact-banner>
     
        <img class="Contact_avatar_IMG" src="../assets/HoofdFoto.png" />


        <img class="Contact_phone_IMG" src="../assets/ContactPhone.png" />
    
    </div>
  </div>
</template>

<script>
import ContactBanner from "../components/ContactBanner.vue";

export default {
  components: { ContactBanner },
  name: "ContactView",
};
</script>
