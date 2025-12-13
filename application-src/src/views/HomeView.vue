<template>
  <navbar-section></navbar-section>

  <main class="2xl:w-1/2 xl:w-2/3 lg:w-3/4 lg:border-x mx-auto">
    <hero-section></hero-section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[50px] md:mt-[100px]">
      <about-section></about-section>

      <work-experience-section></work-experience-section>
    </div>

    <article-section></article-section>

    <testimonial-section></testimonial-section>

    <!-- <div class="mb-[100px] px-[30px]">
      <get-in-touch-section></get-in-touch-section>
    </div>

    <div class="px-[30px]">
      <footer-section></footer-section>
    </div> -->
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import WorkExperienceSection from '@/components/WorkExperienceSection.vue'
import ArticleSection from '@/components/ArticleSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import GetInTouchSection from '@/components/GetInTouchSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
