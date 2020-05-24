<template>
  <div class="cards-area">
    <router-link
    class="card-teams"
    :to="{ name: 'TeamsSingle', params: { name: 'lol-masculine' } }">
      <card-team></card-team>
    </router-link>
    <router-link
    class="card-teams"
    :to="{ name: 'TeamsSingle', params: { name: 'lol-masculine' } }">
      <card-team></card-team>
    </router-link>
        <router-link
    class="card-teams"
    :to="{ name: 'TeamsSingle', params: { name: 'lol-masculine' } }">
      <card-team></card-team>
    </router-link>
        <router-link
    class="card-teams"
    :to="{ name: 'TeamsSingle', params: { name: 'lol-masculine' } }">
      <card-team></card-team>
    </router-link>
  </div>
</template>

<script>
import cards from './geral-components/deep-components/card-teams.vue';

export default {
  name: 'index-teams',
  components: {
    'card-team': cards,
  },
};
</script>
