<template>
  <figure class="logo image is-125x125 is-centered">
    <img src="@/assets/profile.png" />
  </figure>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.image.is-125x125 {
  width: 400px;
  height: 200px;
}
.image.is-centered {
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
