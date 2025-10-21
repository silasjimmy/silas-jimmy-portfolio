<template>
  <div class="border">
    <h1>Navbar section</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
