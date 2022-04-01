<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ProfileImage from "@/components/ProfileImage.vue";
import HelloCard from "@/components/HelloCard.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <ProfileImage />
      <HelloCard />
      <nav class="menu">
        <RouterLink to="/">Link Tree</RouterLink>
        <RouterLink to="/about">Skills</RouterLink>
        <a
          target="_blank"
          href="https://www.meetup.com/es-ES/Meetup-de-InnoIT-Consulting-en-Barcelona/"
          >Meetup</a
        >
      </nav>
    </div>
  </header>
  <RouterView />
  <div class="license">
    <p>
      <strong>marioballe.dev</strong> by <a>Mario Ballester Calleja</a>. The
      source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
  </div>
</template>

<style>
@import "@/styles/main.scss";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
.license {
  background-color: var(--color-background-primary) !important;
  font-size: x-small;
  margin-top: 5%;
}
a,
.green {
  text-decoration: none;
  color: white;
  transition: 0.4s;
}

.menu {
  font-size: 18px;
  margin-bottom: 18px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
  .license {
    background-color: var(--color-background-primary) !important;
    font-size: smaller;
    text-align: right;
    width: 200%;
    margin-top: 5%;
  }
  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
  .menu {
    font-size: 16px;
    margin-bottom: 16px;
  }
}
</style>
