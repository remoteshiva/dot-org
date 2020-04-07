<template>
  <div>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginForm from './tailwind/LoginForm.vue';

export default Vue.extend({
  name: 'LandingPage',
  components: {
    LoginForm,
  },
});

</script>
