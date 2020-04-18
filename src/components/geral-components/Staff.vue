<template>
  <section class="container" id="staff-section">
    <h2>Staff</h2>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <card-staff></card-staff>
      </div>
      <div class="col-md-4 col-sm-12">
        <card-staff></card-staff>
      </div>
      <div class="col-md-4 col-sm-12">
        <card-staff></card-staff>
      </div>
      <div class="col-md-4 col-sm-12">
        <card-staff></card-staff>
      </div>
      <div class="col-md-4 col-sm-12">
        <card-staff></card-staff>
      </div>
      <div class="col-md-4 col-sm-12">
        <card-staff></card-staff>
      </div>
    </div>
  </section>
</template>

<script>
import cardStaff from './deep-components/cardStaff.vue';

export default {
  name: 'staff-section',
  components: {
    'card-staff': cardStaff,
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

  #staff-section {
    h2 {
      color: $grey-text;
    }
  }
</style>
