<template>
  <div>
    <hero-section></hero-section>

    <about-me-section></about-me-section>

    <work-experience-section></work-experience-section>

    <latest-articles-section></latest-articles-section>

    <testimonials-section></testimonials-section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutMeSection from '@/components/sections/AboutMeSection.vue'
import WorkExperienceSection from '@/components/sections/WorkExperienceSection.vue'
import LatestArticlesSection from '@/components/sections/LatestArticlesSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import GetInTouchSection from '@/components/GetInTouchSection.vue'
</script>
