<template>
  <div class="fixed top-2 mx-auto left-1/2 transform -translate-x-1/2 z-10 sm:top-4">
    <nav
      class="relative flex gap-1.5 [&>div]:min-w-0 items-center justify-between backdrop-blur-sm rounded-full px-2 shadow-lg shadow-neutral-950/5 bg-gray-50 border border-gray-200 sm:px-4"
    >
      <div class="relative">
        <ul class="isolate min-w-0 flex items-center text-muted-color">
          <li class="min-w-0 py-2">
            <router-link
              class="relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md hover:text-gray-900 transition-colors px-2 py-1"
              to="/"
            >
              Home
            </router-link>
          </li>

          <li class="min-w-0 py-2">
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
          </li>

          <li class="min-w-0 py-2">
            <router-link
              class="relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md hover:text-gray-900 transition-colors px-2 py-1"
              to="/blog"
            >
              Blog
            </router-link>
          </li>
        </ul>
      </div>

      <Button rounded size="small" severity="contrast" variant="text" icon="pi pi-sun"></Button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
