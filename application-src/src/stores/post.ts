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
          date: 'Apr 23, 2025',
          title: 'From Mockup to Market: My End-to-End Product Design Process',
          description:
            'A detailed breakdown of my iterative design methodology, from initial research to final handoff, with practical tips for designers at every stage.',
          image: '',
          id: '1',
          readTime: 8,
          author: 'Silas Jimmy',
          authoImage: '',
        },
        {
          date: 'Mar 15, 2025',
          title: 'The Psychology of Color in UI Design',
          description:
            'Exploring how strategic color choices can influence user behavior, evoke emotions, and enhance the overall user experience of digital products.',
          image: '',
          id: '2',
          readTime: 8,
          author: 'Silas Jimmy',
          authoImage: '',
        },
      ]

      posts.value = res
    } catch (error) {
      console.log(error)
    }
  }

  return { posts, getPosts }
})
