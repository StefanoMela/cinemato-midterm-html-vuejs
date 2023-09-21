<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from './components/AppJumbo.vue';
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue';


export default {
  data(){
    return{
    }
  },

  components: { AppHeader, AppJumbo, AppMain, AppFooter }
};
</script>

<template>
  <AppHeader
  @form-subitm="handleSearch"
  />
  <main>
    <AppJumbo />
    <AppMain />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped></style>