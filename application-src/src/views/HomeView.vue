<template>
  <main class="w-1/2 mx-auto border-x">
    <navbar-section></navbar-section>
    
    <hero-section></hero-section>

    <about-section></about-section>

    <skills-section></skills-section>

    <experience-section></experience-section>

    <blog-section></blog-section>

    <contact-section></contact-section>

    <footer-section></footer-section>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import BlogSection from '@/components/BlogSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>
