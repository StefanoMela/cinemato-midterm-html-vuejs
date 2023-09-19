<script>

export default {
};
</script>

<template>
<nav class="navbar">
  <a href="#"><img class="logo" src="../assets/img/logo.svg" alt=""></a>
  <ul class="navbar nav">
    <li class="nav-item"><a class="nav-link" href="">home</a></li>
    <li class="nav-item"><a class="nav-link" href="">home</a></li>
    <li class="nav-item"><a class="nav-link" href="">home</a></li>
    <li class="nav-item"><a class="nav-link" href="">home</a></li>
    <li class="nav-item"><a class="nav-link" href="">home</a></li>
    <li class="nav-item"><a class="nav-link" href="">home</a></li>
    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
  </ul>
  <form class="d-flex" role="search">
    <div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
</div>
      </form>
</nav>
</template>

<style lang="scss" scoped>

.navbar {

  justify-content: space-around;
  align-items: center;

  li>a {
      text-transform: uppercase;
      font-size: bolder;
      color: black;
  }
}
.logo {

  height: 2.5rem;
}

.input-group>* {
  border: none;
  background-color: transparent;
}
</style>