<template>
  <Menubar :model="menuItems" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const menuItems = ref([
  {
    label: 'Home',
    },
  {
    label: 'Projects',
    },
  {
    label: 'Blog',
  },
])
</script>

<style scoped></style>
