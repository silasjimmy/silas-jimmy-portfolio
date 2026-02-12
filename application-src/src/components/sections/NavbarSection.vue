<template>
  <div class="fixed top-2 mx-auto left-1/2 transform -translate-x-1/2 z-10 sm:top-4">
    <nav
      class="relative flex gap-1.5 [&>div]:min-w-0 items-center justify-between backdrop-blur-sm rounded-full px-2 shadow-lg shadow-neutral-950/5 border border-zinc-400/15 bg-zinc-200/15 sm:px-4"
    >
      <div class="relative">
        <ul class="isolate min-w-0 flex items-center">
          <li class="min-w-0 py-2">
            <router-link
              class="relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md transition-colors px-2 py-1"
              to="/"
              :class="activeLink('home')"
            >
              Home
            </router-link>
          </li>

          <!-- <li class="min-w-0 py-2">
            <router-link
              class="relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md hover:text-gray-900 transition-colors px-2 py-1"
              to="/blog"
            >
              About
            </router-link>
          </li>

          <li class="min-w-0 py-2">
            <router-link
              class="relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md hover:text-gray-900 transition-colors px-2 py-1"
              to="/blog"
            >
              Projects
            </router-link>
          </li>

          <li class="min-w-0 py-2">
            <router-link
              class="relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md hover:text-gray-900 transition-colors px-2 py-1"
              to="/blog"
            >
              Volunteer
            </router-link>
          </li> -->

          <li class="min-w-0 py-2">
            <router-link
              class="relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md transition-colors px-2 py-1"
              :class="activeLink('blog')"
              to="/blog"
            >
              Blog
            </router-link>
          </li>
        </ul>
      </div>

      <Button
        rounded
        size="small"
        severity="contrast"
        variant="text"
        :icon="themeIcon"
        @click="toggleTheme"
      ></Button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const themeIcon = ref('')
const route = useRoute()

/**
 * Toggle theme when the component is mounted.
 */
onMounted(() => {
  // Initialize the theme icon in the theme toggole button
  themeIcon.value = localStorage.silasjimmydev === 'light' ? 'pi pi-moon' : 'pi pi-sun'
})

/**
 * Sets the styles for the active navbar link
 * @param name name of the view path
 * @returns (string) active navbar link styles
 */
function activeLink(name: string) {
  return name === route.name ? 'text-zinc-950 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400'
}

/**
 * Toogles the site's theme
 */
function toggleTheme() {
  // Update the local storage variable `silasjimmydev`
  localStorage.setItem('silasjimmydev', localStorage.silasjimmydev === 'light' ? 'dark' : 'light')

  // Update button icon
  themeIcon.value = localStorage.silasjimmydev === 'light' ? 'pi pi-moon' : 'pi pi-sun'

  // Set the site's theme depending on the `silasjimmydev` variable
  document.documentElement.classList.toggle('dark', localStorage.silasjimmydev === 'dark')
}
</script>

<style scoped></style>
