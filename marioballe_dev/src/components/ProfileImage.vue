<template>
  <figure class="image is-250x250 is-centered">
    <img class="" src="@/assets/hello.svg" />
  </figure>
</template>

<style scoped>
.image.is-250x250 {
  width: 250px;
  height: 250px;
}
.image.is-centered {
  margin: 0 auto;
  padding: 10px;
}
@media (min-width: 1024px) {
  .image.is-250x250 {
    width: 250px;
    height: 250px;
  }
  .image.is-centered {
    margin: 0 auto;
    padding: 0px;
  }
}
</style>
