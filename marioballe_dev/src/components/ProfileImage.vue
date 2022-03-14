<template>
  <figure class="logo image is-256x256 is-centered">
    <img class="" src="@/assets/profile.png" />
  </figure>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.image.is-256x256 {
  width: 256px;
  height: 256px;
}
.image.is-centered {
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
  .image.is-256x256 {
    width: 400px;
    height: 256px;
  }
}
</style>
