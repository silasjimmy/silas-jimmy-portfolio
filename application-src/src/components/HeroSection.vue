<template>
  <div class="hero-section">
    <div class="hero-text flex flex-col gap-4 items-center pt-[100px] mb-[50px]">
      <Avatar size="xlarge" shape="circle" />

      <div class="w-3/4 flex flex-col gap-2 items-center">
        <div class="title-wrapper w-1/2">
          <div class="bg-gray-100 h-14">title</div>
        </div>

        <div class="bg-gray-100 h-10">subtitle</div>
      </div>

      <div class="bg-gray-100 h-4">small text</div>

      <div class="bg-gray-100 h-6">icons</div>
    </div>

    <div class="hero-carousel">
      <div class="bg-gray-100 h-[200px]">carousel</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
</script>

<style scoped></style>
