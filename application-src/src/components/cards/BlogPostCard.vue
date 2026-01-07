<template>
  <article class="relative flex flex-col rounded-lg lg:grid lg:grid-cols-2 gap-x-8 lg:items-center">
    <div class="relative aspect-video w-full max-h-70 shadow-lg rounded-lg sm:rotate-1">
        <img class="object-cover w-full h-full rounded-lg" :src="props.image" :alt="props.title">
    </div>

    <div class="flex-1 flex flex-col justify-center p-4 sm:p-6 lg:px-0">
      <router-link :to="`/blog/${props.id}`">
        <div class="mb-2">
          <span class="text-sm text-muted-color">{{ props.date }}</span>
        </div>

        <h2 class="text-xl text-pretty font-semibold">{{ props.title }}</h2>

        <p class="mt-1 text-base text-muted-color text-pretty">{{ props.description }}</p>
      </router-link>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { BlogPostContent } from '@/utils/types';
/**
 * Component props
 */
const props = defineProps<BlogPostContent>()
</script>
