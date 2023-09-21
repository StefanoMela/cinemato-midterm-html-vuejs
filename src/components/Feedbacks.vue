<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      activeImg: 0,
    };
  },

  methods: {
    goNext() {
      if (this.activeImg < store.customerFeedbacks.length - 1) {
        this.activeImg++;
      } else {
        this.activeImg = 0;
      }
    },

    goPrev() {
      if (this.activeImg == 0) {
        this.activeImg--;
      } else {
        this.activeImg = store.customerFeedbacks.length - 1;
      }
    },
    setAutoplay() {
      if (!this.autoplay) {
        this.autoplay = setInterval(() => {
          this.goNext();
        }, 5000);
      }
    },
  },

  created() {
    this.setAutoplay();
  },
};
</script>

<template>
  <section
    :style="{
      backgroundImage: `url(${store.customerFeedbacks[activeImg].image})`,
    }"
    class="customer-feedback"
  >
    <div class="feedback-wrapper">
      <div @click="goPrev()" class="left-arrow">
        <img src="/img/left-arrow.svg" alt="" />
      </div>
      <div
        v-for="index in store.customerFeedbacks"
        :key="index"
        class="feedback-slider"
      >
        <img src="/img/image(20).svg" alt="" class="quotation-mark" />
      </div>
      <p>{{ store.customerFeedbacks[activeImg].text }}</p>
      <div class="cst-feedback-wrapper">
        <img
          :src="store.customerFeedbacks[activeImg].icon"
          alt=""
          class="cst-img"
        />
        <div class="cst-info">
          <h6>{{ store.customerFeedbacks[activeImg].name }}</h6>
          <h6>{{ store.customerFeedbacks[activeImg].job }}</h6>
        </div>
      </div>
      <div @click="goNext()" class="right-arrow">
        <img src="/img/right-arrow.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.customer-feedback {
  height: 60vh;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  .feedback-wrapper {
    max-width: 750px;
    position: relative;

    text-align: justify;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    p,
    * {
      color: white;
    }

    .quotation-mark {
      position: absolute;
      z-index: 10;
      translate: 700%;
      top: -2rem;

      filter: white;
    }

    .cst-feedback-wrapper {
      align-self: center;

      display: flex;
      align-items: flex-start;

      gap: 1rem;

      .cst-img {
        border-radius: 50%;
      }
    }

    position: relative;

    .left-arrow,
    .right-arrow {

        cursor: pointer;
        
      position: absolute;
      top: 50%;

      background-color: rgba(27, 26, 26, 0.911);
      padding: 0.3rem;

      margin-inline: 3rem;
    }

    .left-arrow {

        left: -250px;
    }

    .right-arrow {

        right: -250px;
        position: absolute;
    }
  }
}
</style>
