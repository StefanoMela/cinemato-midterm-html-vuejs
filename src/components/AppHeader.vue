<script>

export default {

  data() {
    return {

      queryString: '',
    }
  },
  

  emits: ['form-submit'],

};
</script>

<template>
<nav class="navbar" id="home">
    <a href="#"><img class="logo" src="/img/logo.svg" alt=""></a>
    <ul class="navbar nav">
      <li class="nav-item"><a class="nav-link" href="#home">home</a></li>
      <li class="nav-item"><a class="nav-link" href="#blog">blog</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          pages
        </a>
        <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Services</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Workflow</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Video thumbnail type</a></li>
            </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#about-us">about</a></li>
      <li class="nav-item"><a class="nav-link" href="#contact">contact</a></li>
      <li class="nav-item"><a class="nav-link" href="#gallery">gallery</a></li>
      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              shop
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Services</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Workflow</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Video thumbnail type</a></li>
            </ul>
          </li>
    </ul>
    <form 
    @submit.prevent="$emit('form-submit', queryString)"
    class="d-flex" role="search">
      <div class="input-group">
    <input 
    v-model="queryString"
    type="text" class="form-control">
    <span class="input-group-text w-25">
      <img src="node_modules/bootstrap-icons/icons/search.svg" alt="">  
    </span>
  </div>
        </form>
        <div class="icons-container">
          <img src="node_modules/bootstrap-icons/icons/facebook.svg" alt="">
          <img src="node_modules/bootstrap-icons/icons/twitter.svg" alt="">
          <img src="node_modules/bootstrap-icons/icons/youtube.svg" alt="">
          <img src="node_modules/bootstrap-icons/icons/instagram.svg" alt="">
        </div>
</nav>
</template>

<style lang="scss" scoped>

.navbar {

  margin: 0 auto;
  align-items: center;
  padding: 1rem;

  li>a {
      text-transform: uppercase;
      color: black;
    }

    .dropdown-menu{

      background-color: #111111;

      .dropdown-divider,li,a{

        color: #ffffff;

        &:hover {
          color: black;
        }
      }
    }
    .logo {
    
      height: 2.5rem;
    }

    .input-group::after {

      content: '';
      display: block;
      border-right: 2px solid #f2f2f2;
      margin-right: 1rem;

    }
    .input-group>* {
      border: none;
      background-color: transparent;
    }
    
    .icons-container {
      display: flex;
      gap: 1rem;
    }
}
</style>