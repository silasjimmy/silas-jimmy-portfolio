<template>
  <div
    class="bg-gray-100 shadow-md fixed top-2 left-1/2 transform -translate-x-1/2 z-999 px-[18px] md:px-6 py-2.5 md:py-3 rounded-3xl md:rounded-[36px]"
  >
    <nav class="flex items-center gap-3 md:gap-6">
      <RouterLink to="/" class="text-xs md:text-sm">Home</RouterLink>

      <RouterLink to="/about" class="text-xs md:text-sm">About</RouterLink>

      <RouterLink to="/projects" class="text-xs md:text-sm">Projects</RouterLink>

      <RouterLink to="/volunteer" class="text-xs md:text-sm">Volunteer</RouterLink>

      <RouterLink to="/blog" class="text-xs md:text-sm">Blog</RouterLink>

      <span class="pi pi-sun text-xs md:text-base"></span>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
</style>
