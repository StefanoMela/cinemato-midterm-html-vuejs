<script>
import { heroImgs } from "../data/index";

export default {
  data() {
    return {
      heroImgs,
      activeImg: 0,
    };
  },
};
</script>

<template>
  <main>
    <section class="jumbotron-carousel">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="heroImgs.hero1" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-caption">
            <p>CINEMATO STUDIO</p>
            <h2 class="display-4">ACTION AND INSPIRE PEOPLE</h2>
            <button class="btn btn-primary">calltoaction</button>
          </div>
          <div class="carousel-item">
            <img :src="heroImgs.hero2" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img :src="heroImgs.hero3" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.carousel-inner {
  height: 70vh;
}

.carousel-caption {
  top: 20%;
  left: 0;
 }
</style>
