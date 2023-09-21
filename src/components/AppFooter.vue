<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer class="footer" id="contact">
    <div class="link-wrapper">
      <div class="contact-info">
        <h6>contact info</h6>
        <div class="info__icons">
          <img src="/img/footer-envelope-soli.svg" alt="" />
          <p>2/45 Tower Street, New York USA</p>
        </div>
        <div class="info__icons">
          <img src="/img/footer-location-dot-solid.svg" alt="" />
          <p>2/45 Tower Street, New York USA</p>
        </div>
        <div class="info__icons">
          <img src="/img/footer-phone-solid.svg" alt="" />
          <p>2/45 Tower Street, New York USA</p>
        </div>
      </div>
      <div class="information">
        <h6>information</h6>
        <li v-for="link in store.infoLinks">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </div>
      <div class="useful-links">
        <h6>useful links</h6>
        <li v-for="link in store.usefuLinks">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </div>
      <div class="newsletter">
        <h6>newsletter</h6>
        <p>Subscribe to receive inspiration, ideas & News in your inbox</p>
        <input type="text" placeholder="Enter your email" required/>
        <button class="call-to-action">Subscribe</button>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: black;
  padding: 3.5rem;

  .link-wrapper {
    display: flex;
    justify-content: space-evenly;

    cursor: pointer;

    color: white;

    h6 {
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 5px;
      margin-bottom: 1.5rem;
    }

    .contact-info {
      img {
        max-width: 30px;
      }

      display: flex;
      flex-direction: column;
      gap: 1rem;

      .info__icons {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }
    }
    .information,
    .useful-links {
      list-style-type: none;
      line-height: 40px;
    }

    a {
      text-decoration: none;
      color: #666666;

      &:hover {
        color: white;
      }
    }

    .newsletter {
      max-width: 250px;

      display: flex;
      flex-direction: column;

      input {
        border: none;
        padding: 0.5rem;
        margin: 0.6rem 0;
        background-color: #1b1919;
      }

      .call-to-action {
        margin: 1rem 0;
        text-transform: uppercase;
        background-color: #ffffff;
        padding: 1rem 0;
        border: none;
        letter-spacing: 1.5px;
        font-weight: bolder;
      }
    }
  }
}
</style>
