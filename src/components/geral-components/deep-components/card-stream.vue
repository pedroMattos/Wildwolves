<template>
  <div class="card-stream">
    <img src="../../images/img-person.png" alt="person">
    <div class="row text-field">
      <div>
        <p>LOL 25 de Março</p>
        <h3>Thaywowzk1</h3>
      </div>
      <span id="fb">
        <social-fb></social-fb>
        <p>Facebook</p>
      </span>
      <span id="tt">
        <social-tt></social-tt>
        <p>Twitter</p>
      </span>
      <span id="is">
        <social-is></social-is>
        <p>Instagram</p>
      </span>
    </div>
    <div class="border-card"></div>
  </div>
</template>

<script>
import socialFb from '../../svg/social-fb.vue';
import socialTt from '../../svg/social-tt.vue';
import socialIs from '../../svg/social-is.vue';

export default {
  name: 'card-stream',
  components: {
    'social-fb': socialFb,
    'social-tt': socialTt,
    'social-is': socialIs,
  },
};
</script>
