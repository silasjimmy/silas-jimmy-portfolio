<template>
  <div class="w-full border-zinc-400 max-w-(--ui-container) mx-auto pt-10 lg:border-x">
    <navbar-section></navbar-section>

    <main class="relative min-h-[calc(100vh-var(--ui-header-height))]">
      <RouterView />
    </main>

    <footer-section></footer-section>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarSection from '@/components/sections/NavbarSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // Set the site's theme when the App component is mounted
  document.documentElement.classList.toggle(
    'dark',
    localStorage.silasjimmydev === 'dark' ||
      (!('silasjimmydev' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  )
})
</script>
