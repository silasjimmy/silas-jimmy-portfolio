/**
 * Defines the blog post card content
 */
export interface BlogPostContent {
  date: string
  title: string
  description: string
  image: string
  id: string
  readTime?: number
  author?: string
  authorImage?: string
  content?: string
}
