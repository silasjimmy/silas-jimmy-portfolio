<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import WorkSection from '@/components/WorkSection.vue';
import SkillSection from '@/components/SkillSection.vue';
import ArticleSection from '@/components/ArticleSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <div class="border-l border-r w-3/4 m-auto">
    <navbar-section></navbar-section>

    <hero-section></hero-section>

    <about-section></about-section>

    <work-section></work-section>

    <skill-section></skill-section>

    <article-section></article-section>

    <contact-section></contact-section>

    <footer-section></footer-section>
  </div>
</template>
