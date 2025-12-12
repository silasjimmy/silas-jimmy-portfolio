<template>
  <nav
    class="bg-gray-100 shadow-md fixed top-4 left-[50%] translate-x-[-50%] rounded-3xl px-[18px] py-2.5 md:rounded-[36px] md:px-[26px] md:py-3 flex items-center gap-6 z-999"
  >
    <RouterLink to="/" class="text-xs md:text-sm">Home</RouterLink>

    <RouterLink to="/about" class="text-xs md:text-sm">About</RouterLink>

    <RouterLink to="/projects" class="text-xs md:text-sm">Projects</RouterLink>

    <RouterLink to="/volunteer" class="text-xs md:text-sm">Volunteer</RouterLink>

    <RouterLink to="/blog" class="text-xs md:text-sm">Blog</RouterLink>

    <span class="pi pi-sun text-xs md:text-base"></span>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
