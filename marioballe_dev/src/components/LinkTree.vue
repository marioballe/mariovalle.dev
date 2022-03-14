<template>
  <div class="container">
    <a class="button btn btn-large button-twitter margin-one-all">
      <fa icon="twitter" type="fab" class="icon icon-align"></fa>
      <span>twitter</span>
    </a>
  </div>
  <div class="container">
    <a class="button btn btn-large button-linkedin margin-one-all">
      <fa icon="linkedin" type="fab" class="icon icon-align"></fa>
      <span>linkedin</span>
    </a>
  </div>
  <div class="container">
    <a class="button btn btn-large button-twitch margin-one-all">
      <fa icon="twitch" type="fab" class="icon icon-align"></fa>
      <span>twitch</span>
    </a>
  </div>
  <div class="container">
    <a class="button btn btn-large button-github margin-one-all">
      <fa icon="github" type="fab" class="icon icon-align"></fa>
      <span>github</span>
    </a>
  </div>
  <div class="container">
    <a class="button btn btn-large button-discord margin-one-all">
      <fa icon="discord" type="fab" class="icon icon-align"></fa>
      <span>discord</span>
    </a>
  </div>
  <div class="container">
    <a class="button btn btn-large button-spotify margin-one-all">
      <fa icon="spotify" type="fab" class="icon icon-align"></fa>
      <span>spotify</span>
    </a>
  </div>

  <div class="container">
    <a class="button btn btn-large button-youtube margin-one-all">
      <fa icon="youtube" type="fab" class="icon icon-align"></fa>
      <span>youtube</span>
    </a>
  </div>
</template>

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
.button-linkedin {
  color: var(--vt-c-white);
  background-color: var(--color-linkedin-official);
  border-color: var(--color-linkedin-official);
  margin: 0px auto;
  height: 5em;
}
.button-twitch {
  color: var(--vt-c-white);
  background-color: var(--color-twitch-official);
  border-color: var(--color-twitch-official);
  margin: 0px auto;
  height: 5em;
}
.button-github {
  color: var(--vt-c-white);
  background-color: var(--color-github-official);
  border-color: var(--color-github-official);
  margin: 0px auto;
  height: 5em;
}
.button-discord {
  color: var(--vt-c-white);
  background-color: var(--color-discord-official);
  border-color: var(--color-discord-official);
  margin: 0px auto;
  height: 5em;
}
.button-spotify {
  color: var(--vt-c-white);
  background-color: var(--color-spotify-official);
  border-color: var(--color-spotify-official);
  margin: 0px auto;
  height: 5em;
}
.button-youtube {
  color: var(--vt-c-white);
  background-color: var(--color-youtube-official);
  border-color: var(--color-youtube-official);
  margin: 0px auto;
  height: 5em;
}
</style>
