<template>
  <nav
    class="bg-gray-200 shadow-md fixed top-5 left-[50%] translate-x-[-50%] rounded-[36px] px-[26px] py-2 flex items-center gap-6"
  >
    <a class="text-sm" href="#">Home</a>
    <a class="text-sm" href="#">About Me</a>
    <a class="text-sm" href="#">Projects</a>
    <a class="text-sm" href="#">Volunteer</a>
    <a class="text-sm" href="#">Blog</a>
    <Button rounded icon="pi pi-sun" variant="text" size="small" aria-label="App theme" />
  </nav>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped>
.p-button-sm {
  padding: 8px 8px;
}

.p-button-sm.p-button-icon-only.p-button-rounded {
  height: 24px;
}

.p-button-sm.p-button-icon-only {
  width: 24px;
}
</style>
