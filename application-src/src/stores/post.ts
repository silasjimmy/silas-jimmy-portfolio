import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { BlogPostContent } from '@/utils/types'

export const usePostStore = defineStore('post', () => {
  const posts = ref<BlogPostContent[]>([])

  /**
   * Fetches the blog posts from the backend
   */
  async function getPosts() {
    try {
      const res = [
        {
          date: 'Jan 6, 2026',
          title: 'Building a CI/CD Pipeline from Scratch: VPC',
          description:
            'An overview of the network architecture i built and used to implement the CI/CD pipeline.',
          image: '/images/blog/header/amazon-vpc.png',
          id: '1',
          readTime: 8,
          author: 'Silas Jimmy',
          authoImage: '/images/silas-jimmy-half.jpg',
        },
      ]

      posts.value = res
    } catch (error) {
      console.log(error)
    }
  }

  return { posts, getPosts }
})
