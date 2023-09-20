<script>
import { store } from "../data/store";
import { heroImgs } from "../data/index";

import FluidSection from "./FluidSection.vue";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
      heroImgs,
    };
  },

  components: { FluidSection, AppCard },
};
</script>

<template>
  <main>
    <section class="jumbotron-carousel">
      <div class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="heroImgs.hero1" class="d-block w-100" alt="..." />
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="what-we-do icons">
      <div class="what-we-do__title icons">
        <h6>PELICULA STUDIO</h6>
        <h1>THIS IS WHAT WE DO</h1>
      </div>
      <div class="what-we-do__cards icons">
        <AppCard
          v-for="weDoCard in store.weDoIcons"
          :content="weDoCard"
        />
      </div>
    </section>
    <FluidSection 
    :content="store.aboutUs"
    :style="{backgroundImage: `url(/public/${store.aboutUs.image})`}"
    />
    <section class="what-we-do">
      <div class="what-we-do__title">
        <h6>YOUR WATCHLIST</h6>
        <h1>BEST HITS MOVIES</h1>
      </div>
      <div class="what-we-do__cards full">
        <AppCard 
        v-for="weDoFull in store.weDoImages"
        :content="weDoFull"/>
      </div>
    </section>
  </main>
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

  h6 {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }

}

// WHAT WE DO ICON SECTION
.what-we-do {
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;

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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }


  .what-we-do__cards > .card {
    border: none;
    width: calc((100% / 3) - 1rem);
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

// WHAT WE DO CARDS SECTION
</style>
