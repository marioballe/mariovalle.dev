<template>
  <figure class="image is-200x200 is-centered">
    <img class="" src="@/assets/noBackground.png" />
  </figure>
</template>

<style scoped>
.image.is-200x200 {
  width: 200px;
  height: 200px;
}
.image.is-centered {
  margin: 0 auto;
  padding: 10px;
}
@media (min-width: 1024px) {
  .image.is-200x200 {
    width: 200px;
    height: 200px;
  }
  .image.is-centered {
    margin: 0 auto;
    padding: 0px;
  }
}
</style>
