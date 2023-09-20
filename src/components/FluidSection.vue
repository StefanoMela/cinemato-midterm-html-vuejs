<script>
export default {

  props: {

    content: Object
  }

};
</script>

<template>
  <section class="container-fluid about-us">
    <div class="about-us__text">
      <h6>{{ content.subt }}</h6>
      <h2>{{ content.title }}</h2>
      <p>
        {{ content.text }}
      </p>
      <button class="call-to-action">READ MORE</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-us {
  background-size: cover;
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8rem;
  .about-us__text {
    max-width: 750px;
    color: white;
    padding: 3rem;
    line-height: 2rem;

    h6 {
      font-size: larger;
    }

    h2 {
      font-size: 2.5rem;
      margin: 2.5rem 0;
      font-weight: bolder;
    }

    p {
      color: white;
    }
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
