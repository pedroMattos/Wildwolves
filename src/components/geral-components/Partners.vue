<template>
  <div class="container">
    <div class="row">
      <card-part></card-part>
      <card-part></card-part>
      <card-part></card-part>
      <card-part></card-part>
      <card-part></card-part>
      <card-part></card-part>
    </div>
  </div>
</template>

<script>
import cardPartners from './deep-components/card-parceiros.vue';

export default {
  name: 'sec-partners',
  components: {
    'card-part': cardPartners,
  },
};
</script>
