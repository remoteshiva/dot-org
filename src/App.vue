<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style lang="scss">
@import 'assets/styles/tailwind.postcss';
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,300&display=swap');

body {
  font-family: 'Merriweather', serif;
}

</style>
