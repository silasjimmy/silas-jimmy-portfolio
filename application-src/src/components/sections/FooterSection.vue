<template>
  <footer class="z-10">
    <div
      class="w-full max-w-(--ui-container) mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
    >
      <div
        class="flex items-center justify-center gap-x-1.5 lg:flex-1 lg:justify-end lg:order-3"
      >
        <Button
          rounded
          size="small"
          severity="contrast"
          variant="text"
          icon="pi pi-linkedin"
        ></Button>

        <Button
          rounded
          size="small"
          severity="contrast"
          variant="text"
          icon="pi pi-twitter"
        ></Button>

        <Button
          rounded
          size="small"
          severity="contrast"
          variant="text"
          icon="pi pi-github"
        ></Button>
      </div>

      <div
        class="text-xs font-light flex items-center justify-center gap-x-1.5 mt-3 lg:justify-start lg:flex-1 lg:mt-0 lg:order-1"
      >
        <span>© 2026 Silas Jimmy.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
