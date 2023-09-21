<script>
import { store } from "../data/store";

import { feedbackBcg } from '../data/index'


import FluidSection from "./FluidSection.vue";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
      feedbackBcg,
      activeImg: 0,
    };
  },

  components: { FluidSection, AppCard },
};
</script>

<template>
  <main>
    <section class="what-we-do" id="about-us">
      <div class="what-we-do__title">
        <h6>PELICULA STUDIO</h6>
        <h2>THIS IS WHAT WE DO</h2>
      </div>
      <div class="what-we-do__cards">
        <AppCard v-for="weDoCard in store.weDoIcons" :content="weDoCard" />
      </div>
    </section>
    <FluidSection
      :content="store.aboutUs"
      :style="{ backgroundImage: `url(/public/${store.aboutUs.image})` }"
    />
    <section class="what-we-do" id="gallery">
      <div class="what-we-do__title">
        <h6>YOUR WATCHLIST</h6>
        <h2>BEST HITS MOVIES</h2>
      </div>
      <div class="what-we-do__cards">
        <AppCard v-for="weDoFull in store.weDoImages" :content="weDoFull" />
      </div>
    </section>
    <section class="parallax">
      <div class="stats-wrapper">
        <div class="stats__customer">
          <span class="stat__number">158</span>
          <h6 class="stat__title">Satisfied Customers</h6>
        </div>
        <div class="stats__projects">
          <span class="stat__number">3+</span>
          <h6 class="stat__title">Our projects</h6>
        </div>
        <div class="stats__coffee">
          <span class="stat__number">1,906</span>
          <h6 class="stat__title">cups of coffee</h6>
        </div>
        <div class="stats__awards">
          <span class="stat__number">2</span>
          <h6 class="stat__title">our awards</h6>
        </div>
      </div>
    </section>
    <section class="our-team">
      <h6>the pericurious</h6>
      <h2>meet the team</h2>
      <div class="team-card">
        <AppCard v-for="teamCard in store.ourTeam" :content="teamCard" />
      </div>
    </section>
    <section class="customer-feedback">
      <div class="feedback-wrapper">
        <img src="/img/image(20).svg" alt="" class="quotation-mark" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          impedit earum dolores amet, magnam maxime sit, quidem asperiores
          adipisci, eos quam quis ad dolorum saepe? Quasi fuga vero magni ab!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          impedit earum dolores amet, magnam maxime sit, quidem asperiores
          adipisci, eos quam quis ad dolorum saepe? Quasi fuga vero magni ab!
        </p>
        <div class="cst-feedback-wrapper">
          <img src="/img/01.jpg" alt="" class="cst-img" />
          <div class="cst-info">
            <h6>JOHN DOE</h6>
            <h6>Designer</h6>
          </div>
        </div>
      </div>
    </section>
    <section class="blog" id="blog">
      <h6>latest news</h6>
      <h2>articles updated daily</h2>
      <div class="container blog-card">
        <AppCard v-for="bPost in store.blogPosts" :content="bPost" />
      </div>
    </section>
    <section class="parallax due">
      <div class="icon-wrapper">
        <img src="/img/01.png" alt="" />
        <img src="/img/02.png" alt="" />
        <img src="/img/03.png" alt="" />
        <img src="/img/04.png" alt="" />
        <img src="/img/05.png" alt="" />
      </div>
    </section>
    <section class="form-section">
      <div class="collaborate-wrapper">
        <h6>collaborate</h6>
        <h2>Want to work with us ? Leave us a message</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          praesentium, id molestias voluptas eaque dolorum. Saepe non, odit
          eaque, modi repellendus praesentium porro nihil quasi quis at placeat?
          Explicabo libero corporis dignissimos, nihil et numquam porro
          expedita. Nihil explicabo sunt impedit dolores ea deleniti doloribus
          molestiae velit, harum ex fugiat.
        </p>
      </div>
      <form class="row g-3">
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Your Name" />
        </div>
        <div class="col-md-6">
          <input type="email" class="form-control" placeholder="Your Email" />
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Mobile Number" />
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Your Pincode" />
        </div>
        <div class="form-floating col-12">
          <textarea
            class="form-control"
            placeholder="Enter your message"
            id="floatingTextarea2"
            style="height: 300px"
          ></textarea>
          <label for="floatingTextarea2" class="form-placeholder"
            >Enter your message</label
          >
        </div>
        <div class="col-12">
          <button type="submit" class="form-btn">submit now</button>
        </div>
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>

// WHAT WE DO ICON SECTION
.what-we-do {
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;

  .what-we-do__title {
    margin: 5rem 0;
    font-weight: 700;

    h6,
    h2 {
      letter-spacing: 5px;
      margin-top: 2rem;
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

// PARALLAX SECTION
.parallax {
  height: 40vh;
  background-image: url("./img/Parallax-01.jpg");
  background-size: cover;
  background-position: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  .stats-wrapper {
    color: white;
    text-align: center;

    display: flex;
    gap: 20rem;

    .stat__number {
      font-size: 4rem;
      font-weight: 700;
    }

    .stat__title {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}

.parallax.due {
  background-image: url("./img/Parallax-03.jpg");
}

.icon-wrapper {
  display: flex;
  gap: 10rem;
}

// OUR TEAM SECTION
// BLOG POST SECTION

.our-team,
.blog {
  padding: 3rem;

  text-transform: uppercase;
  text-align: center;

  h6,
  h2 {
    font-weight: 700;
    letter-spacing: 5px;
    margin-top: 2rem;
  }

  .team-card,
  .blog-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    margin-top: 2rem;
  }
}

// CUSTOMER FEEDBACKS SECTION

.customer-feedback {
  height: 60vh;
  background-image: url("/img/Parallax-02.jpg");
  background-size: cover;
  background-position: top;

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
      top: -6rem;

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
  }
}

.form-section {
  padding: 3rem;
  padding-inline: 6rem;

  display: flex;
  gap: 10rem;

  .form-placeholder {
    margin-left: 0.5rem;
    color: #666666;
  }

  .form-btn {
    width: 100%;
    padding: 0.3rem;
    border: none;
    background-color: black;
    color: white;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  .collaborate-wrapper {
    max-width: 650px;

    h6,
    h2 {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 5px;
      margin-top: 2rem;
    }
  }
}
</style>
