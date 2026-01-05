<template>
  <article class="relative flex flex-col rounded-lg lg:grid lg:grid-cols-2 gap-x-8 lg:items-center">
    <div class="ring-1 ring-gray-200 relative aspect-video w-full shadow-lg rounded-lg sm:rotate-1">
        <img :src="props.imageUrl" :alt="props.title">
    </div>

    <div class="flex-1 flex flex-col justify-center p-4 sm:p-6 lg:px-0">
      <router-link to="/blog">
        <div class="mb-2">
          <span class="text-sm text-gray-800">{{ props.date }}</span>
        </div>

        <h2 class="text-xl text-pretty font-semibold">{{ props.title }}</h2>

        <p class="mt-1 text-base text-gray-500 text-pretty">{{ props.description }}</p>
      </router-link>
    </div>
  </article>
</template>

<script setup lang="ts">
/**
 * Component props
 */
const props = defineProps({
  date: String,
  title: String,
  description: String,
  imageUrl: String,
})
</script>
