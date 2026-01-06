<template>
  <main>
    <div class="w-full px-4 py-18 sm:px-6 sm:gap-y-24 sm:py-24 lg:py-32 lg:px-8">
      <h1
        class="text-3xl tracking-tight font-bold text-pretty sm:text-4xl lg:text-5xl mx-0 text-left"
      >
        Latest Articles
      </h1>

      <p class="text-md text-balance mt-6 text-left text-gray-500">
        Some of my recent thoughts on software development and system design.
      </p>
    </div>

    <section class="relative isolate">
      <div class="w-full px-4 flex flex-col gap-8 pt-0 sm:px-6 sm:gap-y-16">
        <div v-for="post in posts">
          <blog-post-card :key="post.id" v-bind="post"></blog-post-card>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlogPostCard from '@/components/cards/BlogPostCard.vue'
import type { BlogPostCardContent } from '@/utils/types'

const posts = ref<BlogPostCardContent[]>([
  {
    date: 'Jan 5, 2026',
    title: 'A very good title',
    description: 'lorem ipsum',
    image: '',
    id: '1',
  },
])
</script>
