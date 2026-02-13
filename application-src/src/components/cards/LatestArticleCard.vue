<template>
  <article
    class="border-b border-zinc-200 dark:border-zinc-500 flex flex-col overflow-hidden pb-4 lg:grid-cols-2 gap-x-8 transition relative lg:items-start lg:flex ring-0 hover:ring-0"
  >
    <router-link :to="`/blog/${props.id}`" class="py-4 sm:py-6">
      <div class="mb-2">
        <span class="text-sm text-muted-color">{{ props.date }}</span>
      </div>

      <h2 class="text-xl text-pretty font-semibold">
        {{ props.title }}
      </h2>

      <p class="mt-1 text-base text-pretty text-muted-color">
        {{ props.description }}
      </p>
    </router-link>

    <router-link :to="`/blog/${props.id}`"  class="text-xs text-green-500 dark:text-green-400 hover:text-green-400 dark:hover:text-green-500 transition-colors">Read Article</router-link>
  </article>
</template>

<script setup lang="ts">
import type { BlogPostContent } from '@/utils/types'

const props = defineProps<BlogPostContent>()
</script>
