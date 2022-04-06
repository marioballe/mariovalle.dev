<template>
  <div class="section-title has-text-centered">
    <p class="title is-1">
      {{ headdata.title.text }}
      <span class="icon is-large">
        <i v-if="headdata.title.icon" :class="headdata.title.icon"></i>
      </span>
    </p>
    <p class="subtitle is-3">
      {{ headdata.subtitle.text }}
      <span class="icon is-medium">
        <i v-if="headdata.subtitle.icon" :class="headdata.subtitle.icon"></i>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "headerSection",
  props: ["headdata"],
};
</script>

<style>
@import "@/styles/main.scss";
.section-title {
  margin: 30px 0px;
  p.title,
  p.subtitle {
    span.icon {
      .is-danger {
        color: var(--color-pink);
      }
      .is-primary {
        color: var(--color-primary);
      }
    }
  }
}
.subtitle {
  font-weight: 300;
}
</style>
