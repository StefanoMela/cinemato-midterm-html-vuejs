<script>
import  { heroImgs } from '../data/index';


export default {

  data() {
    return {
      heroImgs,
      activeImg: 0,

    }
  }

};
</script>

<template>
  <main>
    <section class="jumbotron-carousel">
      <div class="slide"
      v-for="(image, index) in this.heroImgs">
        <img :src="image" alt="">
      </div>

    </section>
  </main>
</template>

<style lang="scss" scoped>
.jumbotron-carousel {
  width: 100%;
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>