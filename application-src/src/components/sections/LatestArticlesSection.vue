<template>
  <section class="relative isolate px-4 sm:px-6 lg:px-8">
    <div class="w-full flex flex-col gap-8">
      <div>
        <h2 class="text-pretty tracking-tight text-left text-xl sm:text-xl lg:text-2xl font-medium">
          Latest Articles
        </h2>

        <p class="text-balance text-left mt-2 text-sm sm:text-md text-muted-color">
          Some of my recent thoughts
        </p>
      </div>

      <div class="flex flex-col gap-4 lg:gap-y-4">
        <latest-article-card
          v-for="post in posts"
          v-bind="post"
          :key="post.id"
        ></latest-article-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import LatestArticleCard from '../cards/LatestArticleCard.vue'
import { usePostStore } from '@/stores/post'
import { onMounted } from 'vue'

const postsStore = usePostStore()
const { posts } = storeToRefs(postsStore)

onMounted(async () => {
  await postsStore.getPosts()
})
</script>

<style scoped></style>
