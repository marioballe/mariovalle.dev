<template>
  <article class="media">
    <div class="column has-text-centered">
      <figure class="image is-64x64">
        <img :src="articleInfo.imgPath" :alt="articleInfo.title + ' Image'" />
      </figure>
      <p class="title is-4">
        <strong>{{ articleInfo.title }}</strong>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "tileArticle",
  props: ["articleInfo"],
};
</script>

<style>
.has-text-centered > .image {
  margin: 0 auto;
}
.card.is-centered {
  margin: 0 auto;
  -webkit-box-shadow: 7px 7px 24px -7px rgba(61, 61, 61, 1);
  -moz-box-shadow: 7px 7px 24px -7px rgba(61, 61, 61, 1);
  box-shadow: 7px 7px 24px -7px rgba(61, 61, 61, 1);
}
</style>
