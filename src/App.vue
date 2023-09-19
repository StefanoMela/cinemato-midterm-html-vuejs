<script>
import { weDoIcons } from './data';
import AppHeader from './components/AppHeader.vue'


export default {
  data(){
    return{
      weDoIcons,
    }
  },

  components: {AppHeader}
};
console.log(weDoIcons);
</script>

<template>
  <AppHeader/>
</template>

<style lang="scss" scoped></style>