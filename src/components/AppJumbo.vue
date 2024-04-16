<script>
import { heroImgs } from "../data/index";

export default {
  data() {
    return {
      heroImgs,
      activeSlide: 0,
    };
  },

  methods: {
    goNext() {
      if (this.activeSlide < heroImgs.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },

    goPrev() {
      if (this.activeSlide == 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = heroImgs.length - 1;
      }
    },

    setAutoplay() {
      if (!this.autoplay) {
        this.autoplay = setInterval(() => {
          this.goNext();
        }, 3000);
      }
    },

    stopAutoplay() {
      if (this.autoplay) {
        clearInterval(this.autoplay);
        this.autoplay = false;
      }
    },
  },

  created() {
    this.setAutoplay();
  },
};
</script>

<template>
  <div class="jumbo container-fluid px-0">
    <div class="slider">
      <div @click="goPrev()" class="left-arrow">
        <img src="/img/left-arrow.svg" alt="" />
      </div>
      <div v-for="(image, index) in heroImgs" class="slide">
        <img :src="heroImgs[activeSlide].image" alt="" class="slide-inner" />
        <div class="overlay"></div>
        <div class="carousel-caption">
          <h6>cinemato studio</h6>
          <h2>action and inspire people</h2>
          <button class="call-to-action">READ MORE</button>
        </div>
      </div>
      <div @click="goNext()" class="right-arrow">
        <img src="/img/right-arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  height: 80vh;
  overflow: hidden;

  position: relative;

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #00000017;
  }

  .left-arrow,
  .right-arrow {
    cursor: pointer;

    position: absolute;
    top: 50%;

    background-color: rgba(27, 26, 26, 0.911);
    padding: 0.3rem;

    margin-inline: 3rem;
  }

  .right-arrow {
    right: 0;
  }
}
.carousel-caption {
  color: #ffffff;

  text-transform: uppercase;

  max-width: 50%;
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

  .call-to-action {
    background-color: #ffffff;
    padding: 1rem;
    border: none;
    letter-spacing: 1.5px;
    font-weight: bolder;
  }
}
</style>
