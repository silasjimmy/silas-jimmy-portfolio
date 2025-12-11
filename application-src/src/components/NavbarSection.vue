<template>
  <nav
    class="bg-gray-100 shadow-md fixed top-4 left-[50%] translate-x-[-50%] rounded-[36px] px-[26px] py-3 flex items-center gap-6 z-999"
  >
    <RouterLink to="/" class="text-sm">Home</RouterLink>
    <RouterLink to="/" class="text-sm">About Me</RouterLink>
    <RouterLink to="/" class="text-sm">Projects</RouterLink>
    <RouterLink to="/" class="text-sm">Volunteer</RouterLink>
    <RouterLink to="/" class="text-sm">Blog</RouterLink>
    <span class="pi pi-sun" style="font-size: 16px"></span>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
