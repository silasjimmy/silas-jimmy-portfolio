<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue';
import IntroSection from '@/components/IntroSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import WorkSection from '@/components/WorkSection.vue';
import SkillSection from '@/components/SkillSection.vue';
import ArticleSection from '@/components/ArticleSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <div class="custom-container">
    <navbar-section></navbar-section>

    <intro-section></intro-section>

    <project-section></project-section>

    <work-section></work-section>

    <skill-section></skill-section>

    <article-section></article-section>

    <contact-section></contact-section>

    <footer-section></footer-section>
  </div>
</template>

<style scoped>
.custom-container {
  border-left:  1px solid white;
  border-right: 1px solid white;
  width: 75%;
  margin: 0 auto;
}
</style>
