<template>
  <main class="lg:border-x lg:w-1/2 mx-auto">
    <navbar-section></navbar-section>

    <div class="mb-[100px]">
      <hero-section></hero-section>
    </div>

    <div class="mb-[100px]">
      <div class="grid grid-cols-2 gap-5">
        <about-me-section></about-me-section>

        <work-experience-section></work-experience-section>
      </div>
    </div>

    <div class="mb-[100px]">
      <article-section></article-section>
    </div>

    <div class="mb-[100px]">
      <testimonial-section></testimonial-section>
    </div>

    <div class="mb-[100px]">
      <faq-section></faq-section>
    </div>

    <footer-section></footer-section>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutMeSection from '@/components/AboutMeSection.vue'
import WorkExperienceSection from '@/components/WorkExperienceSection.vue'
import ArticleSection from '@/components/ArticleSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
