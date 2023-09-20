<script>

export default {

  props: {
    weDoIcons: Object
  }
};
</script>

<template>

<div
 v-for="icon in this.weDoIcons"
 class="card">
  <img :src="icon.icon" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{icon.title}}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pellentuesque ultricies justo tellus</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {

  height: 250px;
  border: none;
  max-width: 500px;

  img {
    max-height: 30%;
  }
}
</style>