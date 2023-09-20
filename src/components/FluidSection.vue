<script>
export default {};
</script>

<template>
  <section class="container-fluid about-us" id="about-us">
    <div class="about-us__text">
      <h6>ABOUT US</h6>
      <h2>HIGH QUALITY CINEMATICS</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        architecto nemo tempora voluptatum adipisci a beatae animi quia
        perspiciatis voluptatem inventore velit odit placeat est quibusdam, sit
        explicabo eveniet ex officiis aliquam ab ratione perferendis iste?
        Itaque dolorum quo eius.
      </p>
      <button class="call-to-action">READ MORE</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-us {
  height: 60vh;

  background-image: url("../../public/img/About-Us.jpg");
  background-size: cover;

  display: flex;
  justify-content: flex-end;
  .about-us__text {
    max-width: 800px;
    align-self: center;
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
