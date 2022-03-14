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
.button-twitter {
  color: var(--vt-c-white);
  background-color: var(--color-twitter-official);
  border-color: var(--color-twitter-official);
  margin: 0px auto;
  height: 5em;
}
.button-twitter:hover {
  color: var(--color-twitter-official);
  background-color: var(--vt-c-white);
  border-color: var(--vt-c-white);
}
.button-linkedin {
  color: var(--vt-c-white);
  background-color: var(--color-linkedin-official);
  border-color: var(--color-linkedin-official);
  margin: 0px auto;
  height: 5em;
}
.button-linkedin:hover {
  color: var(--color-linkedin-official);
  background-color: var(--vt-c-white);
  border-color: var(--vt-c-white);
}
.button-twitch {
  color: var(--vt-c-white);
  background-color: var(--color-twitch-official);
  border-color: var(--color-twitch-official);
  margin: 0px auto;
  height: 5em;
}
.button-twitch:hover {
  color: var(--color-twitch-official);
  background-color: var(--vt-c-white);
  border-color: var(--vt-c-white);
}
.button-github {
  color: var(--vt-c-white);
  background-color: var(--color-github-official);
  border-color: var(--color-github-official);
  margin: 0px auto;
  height: 5em;
}
.button-github:hover {
  color: var(--color-github-official);
  background-color: var(--vt-c-white);
  border-color: var(--vt-c-white);
}
.button-discord {
  color: var(--vt-c-white);
  background-color: var(--color-discord-official);
  border-color: var(--color-discord-official);
  margin: 0px auto;
  height: 5em;
}
.button-discord:hover {
  color: var(--color-discord-official);
  background-color: var(--vt-c-white);
  border-color: var(--vt-c-white);
}
.button-spotify {
  color: var(--vt-c-white);
  background-color: var(--color-spotify-official);
  border-color: var(--color-spotify-official);
  margin: 0px auto;
  height: 5em;
}
.button-spotify:hover {
  color: var(--color-spotify-official);
  background-color: var(--vt-c-white);
  border-color: var(--vt-c-white);
}
.button-youtube {
  color: var(--vt-c-white);
  background-color: var(--color-youtube-official);
  border-color: var(--color-youtube-official);
  margin: 0px auto;
  height: 5em;
}
.button-youtube:hover {
  color: var(--color-youtube-official);
  background-color: var(--vt-c-white);
  border-color: var(--vt-c-white);
}
</style>
