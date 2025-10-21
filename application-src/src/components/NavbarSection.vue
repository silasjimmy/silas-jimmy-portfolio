<template>
  <header class="border">
    <Menubar :model="navItems" class="fixed top-2 rounded-4xl"></Menubar>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar';

const navItems = ref([
  {
    label: 'Home',
  },
  {
    label: 'About Me',
  },
  {
    label: 'Projects',
  },
  {
    label: 'Volunteer Work',
  },
  {
    label: 'Art',
  },
])
</script>
