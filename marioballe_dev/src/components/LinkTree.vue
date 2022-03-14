<template>
  <div class="container" v-for="social in socialMedia" :key="social.title">
    <a :class="social.class" :href="social.url" target="_blank">
      <fa :icon="social.icon" type="fab" class="icon icon-align"></fa>
      <span>{{ social.title }}</span>
    </a>
  </div>
</template>

<script>
import { socialMedia } from "@/data/data";

export default {
  name: "socialMedia",
  data() {
    return { socialMedia };
  },
};
</script>

<style scoped>
@import "@/styles/socialMedia.scss";

.icon-align {
  vertical-align: middle;
}
.margin-one-all {
  margin: 1% !important;
}
.btn {
  display: inline-block;
  letter-spacing: 2px;
  border: 1px solid transparent;
  outline: none;
  font-weight: 600;
  text-decoration: none;
}
.btn:hover,
.btn:focus {
  text-decoration-color: currentcolor;
}
.btn.btn-large {
  font-size: 18px;
  height: auto;
  text-transform: uppercase;
}
.button {
  width: 100%;
  outline-color: currentcolor;
}
</style>
