<script>
import { heroImgs } from "../data/index";

export default {
  data() {
    return {
      heroImgs,
    };
  },
};
</script>

<template>
  <section class="jumbotron-carousel">
    <div class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="heroImgs.hero1" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-caption">
          <h6>CINEMATO STUDIO</h6>
          <h2>ACTION AND INSPIRE PEOPLE</h2>
          <button class="call-to-action">READ MORE</button>
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
</template>

<style lang="scss" scoped>
.carousel-inner {
  height: 80vh;
}

.carousel-caption {
  max-width: 700px;
  text-align: left;
  top: 30%;
  h2 {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 6rem;
  }

  h6{
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .2rem;
  }

  .call-to-action {
    background-color: #ffffff;
    padding: 1rem;
    border: none;
    letter-spacing: 1.5px;
    font-weight: bolder;
  }
}
</style>
