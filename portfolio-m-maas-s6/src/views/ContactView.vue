<template>
<div class="container">
    <div class="container_grid">
  <contact-banner></contact-banner>
</div>
</div>

</template>

<script>
import ContactBanner from '../components/ContactBanner.vue';

export default {
  components: { ContactBanner },
  name: 'ContactView',
};
</script>

