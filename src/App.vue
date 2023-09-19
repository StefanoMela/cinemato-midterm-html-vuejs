<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from './components/Appjumbo.vue'
import CardSection from './components/CardSection.vue'
import FluidSection from './components/FluidSection.vue'


export default {
  data(){
    return{
    }
  },

  components: {AppHeader, AppJumbo, CardSection, FluidSection}
};
</script>

<template>
  <AppHeader/>
  <main>
    <AppJumbo />
    <CardSection />
    <FluidSection />
  </main>
</template>

<style lang="scss" scoped></style>