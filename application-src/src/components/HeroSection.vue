<template>
  <div class="pt-[100px] md:pt-[150px]">
    <!-- Hero text -->
    <div class="flex flex-col gap-4 items-center mb-[50px]">
      <Avatar
        shape="circle"
        image="images/silas-jimmy.jpg"
        class="ring-2 ring-gray-200 p-0.5 h-14 w-14 md:h-18 md:w-18"
      />

      <div class="mx-6 md:mx-0 md:w-3/4 flex flex-col gap-4 items-center">
        <div class="text-center">
          <h1 class="text-3xl md:text-4xl leading-none mb-3 font-bold">Hello, I'm Silas Jimmy</h1>

          <h1 class="text-3xl md:text-4xl leading-none font-bold">Data Scientist</h1>
        </div>

        <p class="text-sm leading-[22px] text-center">
          I help organizations design scalable, user-centered products, implement automated
          architectures powered by cloud technologies, and drive data-informed decisions through
          machine learning and AI.
        </p>
      </div>

      <div class="flex items-center gap-3 mt-2 mb-3">
        <span class="w-2 h-2 bg-gray-100 rounded-full"></span>

        <small class="text-sm font-medium leading-none">Available for new projects</small>
      </div>

      <div class="flex items-center gap-6">
        <span class="pi pi-linkedin" style="font-size: 18px"></span>

        <span class="pi pi-twitter" style="font-size: 18px"></span>

        <span class="pi pi-github" style="font-size: 18px"></span>
      </div>
    </div>

    <!-- Hero carousel -->
    <div class="carousel-container overflow-hidden">
      <div class="h-[150px] md:h-[200px] py-2 flex gap-16 animate-scroll-x-left">
        <div class="w-[150px] md:w-[200px] h-full bg-gray-500 shrink-0 rounded-lg rotate-4"></div>
        <div class="w-[150px] md:w-[200px] h-full bg-gray-500 shrink-0 rounded-lg -rotate-2"></div>
        <div class="w-[150px] md:w-[200px] h-full bg-gray-500 shrink-0 rounded-lg rotate-2"></div>
        <div class="w-[150px] md:w-[200px] h-full bg-gray-500 shrink-0 rounded-lg rotate-4"></div>
        <div class="w-[150px] md:w-[200px] h-full bg-gray-500 shrink-0 rounded-lg -rotate-2"></div>
        <div class="w-[150px] md:w-[200px] h-full bg-gray-500 shrink-0 rounded-lg rotate-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
</script>

<style scoped>
.carousel-container:hover div {
  animation-play-state: paused;
}
</style>
