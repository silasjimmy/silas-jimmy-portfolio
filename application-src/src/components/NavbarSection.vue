<template>
  <Menubar
    :model="navItems"
    class="rounded-4xl fixed top-2 text-sm font-light left-1/2 transform -translate-x-1/2"
  >
    <template #item="{ item }">
      <router-link v-if="item.route" :to="item.route">{{ item.label }}</router-link>

      <i v-else class="pi pi-check">i</i>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Menubar from 'primevue/menubar'

const navItems = ref([
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About Me',
    route: '/about-me',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
  {
    label: 'Volunteer Work',
    route: 'volunteer-work',
  },
  {
    label: 'Art',
    route: '/art',
  },
  {
    label: 'd',
    command: () => {
      document.documentElement.classList.toggle('app-dark-mode')
    }
  },
])
</script>
