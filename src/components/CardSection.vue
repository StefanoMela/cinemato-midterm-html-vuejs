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
      <AppCard :weDoIcons="weDoIcons" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 80vh;
  text-align: center;
  padding-inline: 2rem;

  .what-we-do__title {
    margin: 5rem 0;

    h6 {
      letter-spacing: 5px;
      font-weight: bold;
    }
    h1 {
      margin-top: 2rem;
      font-weight: bolder;
      letter-spacing: 6px;
    }
  }

  .what-we-do__cards {
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 1.5rem;
   }
}
</style>
