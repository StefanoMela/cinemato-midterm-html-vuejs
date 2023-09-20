<script>
export default {

  props: {
    content: Object,
  },
};
</script>

<template>
  <div class="card">
    <img
    :src="content.image"/>
    <div class="card-body">
      <h5 class="card-title">{{ content.title }}</h5>
      <p class="card-text">
        {{ content.text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
