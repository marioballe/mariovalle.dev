<template>
  <div id="skills">
    <headersection :headdata="skillsheader" />
    <div class="columns">
      <div
        v-for="skill in skillsStack"
        :key="skill.class"
        class="column is-narrow is-12-mobile is-4-tablet is-2-desktop"
      >
        <article
          class="tile is-child notification with-shadow"
          :id="skill.class"
        >
          <tileArticle :articleInfo="skill"></tileArticle>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { skillsheader, skillsStack } from "@/data/data";
import headersection from "@/components/SkillsHeader.vue";
import tileArticle from "@/components/TileArticle.vue";

export default {
  name: "skillsStack",
  components: { headersection, tileArticle },
  data() {
    return { skillsheader, skillsStack };
  },
};
</script>

<style>
@import "@/styles/skills.scss";
</style>
