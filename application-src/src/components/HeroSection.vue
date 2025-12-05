<template>
  <div class="pt-[100px]">
    <div class="hero-text flex flex-col gap-4 items-center pt-[100px] mb-[50px]">
      <div class="border rounded-full flex items-center justify-center p-0.5">
        <Avatar size="xlarge" shape="circle" />
      </div>

      <div class="w-3/4 flex flex-col gap-4 items-center">
        <div class="title-wrapper w-4/5 text-center">
          <h1 class="text-[42px] leading-none mb-2.5 font-bold">Hello, I'm Silas Jimmy</h1>

          <h1 class="text-[42px] leading-none font-bold">Data Scientist</h1>
        </div>

        <p class="text-base leading-6 text-center">
          I help organizations design scalable, user-centered products, implement automated
          architectures powered by cloud technologies, and drive data-informed decisions through
          machine learning and AI.
        </p>
      </div>

      <div class="flex items-center gap-3">
        <span class="w-2 h-2 border rounded-full"></span>

        <small>Available for new projects</small>
      </div>

      <div class="flex items-center gap-6">
        <span class="pi pi-linkedin" style="font-size: 18px"></span>

        <span class="pi pi-twitter" style="font-size: 18px"></span>

        <span class="pi pi-github" style="font-size: 18px"></span>
      </div>
    </div>

    <div class="hero-carousel">
      <div class="bg-gray-100 h-[200px]">carousel</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
</script>

<style scoped>
.p-avatar-xl {
  width: 70px;
  height: 70px;
}
</style>
