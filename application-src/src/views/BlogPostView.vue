<template>
  <div class="mt-20 px-2">
    <div class="w-full mx-auto px-4 relative min-h-screen sm:px-6 lg:px-8">
      <!-- Back button -->
      <div>
        <Button as-child>
          <router-link
            to="/blog"
            class="text-sm text-gray-500 flex items-center gap-1 transition-colors hover:text-gray-900"
          >
            <i class="pi pi-chevron-left" style="font-size: 14px"></i>

            <span>Blog</span>
          </router-link>
        </Button>
      </div>

      <!-- Blog heading section -->
      <div class="flex flex-col gap-3 mt-8">
        <div class="text-xs text-gray-600 flex items-center justify-center gap-2">
          <span>{{ post?.date }}</span>

          <span>-</span>

          <span>{{ post?.readTime }} MIN READ</span>
        </div>

        <div class="border rounded-lg h-[300px]">
          <img
            class="ring-1 ring-gray-400 rounded-lg w-full h-full object-cover object-center"
            :src="post?.image"
            :alt="post?.title"
          />
        </div>

        <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
          {{ post?.title }}
        </h1>

        <p class="text-gray-500 text-center max-w-2xl mx-auto">
          {{ post?.description }}
        </p>

        <div class="flex items-center justify-center gap-2 mt-2">
          <div class="relative flex flex-col gap-2 justify-center items-center text-center">
            <Avatar
              class="p-overlay-badge"
              image="/images/silas-jimmy-headshot.jpg"
              shape="circle"
            />

            <p class="font-medium text-sm text-gray-900">{{ post?.author }}</p>
          </div>
        </div>
      </div>

      <!-- Blog content -->
      <div class="mt-8 pb-24 space-y-12 max-w-3xl mx-auto"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/post'
import type { BlogPostContent } from '@/utils/types'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  id: String,
})
const postsStore = usePostStore()
const { posts } = storeToRefs(postsStore)
const post = ref<BlogPostContent>()

onMounted(async () => {
  // Initialize the posts store if not containing any posts
  if (posts.value.length === 0) await postsStore.getPosts()

  // Retrieve the relevant post from the array of posts
  post.value = posts.value.find((post) => post.id === props.id)
})
</script>
