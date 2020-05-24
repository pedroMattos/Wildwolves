<template>
  <section class="container" id="single-teams">
    <h1 class="centered"><img src="@/components/images/lol-logo.png" alt="Logo League Team"></h1>
    <div class="cards-area">
      <card-person></card-person>
      <card-person></card-person>
      <card-person></card-person>
      <card-person></card-person>
    </div>
  </section>
</template>

<script>
import card from './geral-components/deep-components/card-stream.vue';

export default {
  name: 'teams-single',
  components: {
    'card-person': card,
  },
};
</script>
