<script>
import { weDoIcons } from "../data";

import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      weDoIcons,
    };
  },

  components: { AppCard },
};
</script>

<template>
  <section class="what-we-do">
    <div class="what-we-do__title">
      <h6>PELICULA STUDIO</h6>
      <h1>THIS IS WHAT WE DO</h1>
    </div>
    <div class="what-we-do__cards">
      <AppCard :weDoIcons="weDoIcons"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
