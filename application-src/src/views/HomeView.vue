<template>
  <main>
    <navbar-section></navbar-section>

    <hero-section></hero-section>

    <div class="grid grid-cols-2">
      <about-me-section></about-me-section>

      <work-experience-section></work-experience-section>
    </div>

    <article-section></article-section>

    <faq-section></faq-section>

    <footer-section></footer-section>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutMeSection from '@/components/AboutMeSection.vue'
import WorkExperienceSection from '@/components/WorkExperienceSection.vue'
import ArticleSection from '@/components/ArticleSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
