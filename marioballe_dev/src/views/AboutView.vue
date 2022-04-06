<script setup lang="ts">
import skillsStack from "@/components/SkillsStack.vue";
</script>

<template>
  <div class="about">
    <skillsStack />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
