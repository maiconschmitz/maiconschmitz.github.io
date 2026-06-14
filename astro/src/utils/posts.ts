import { getCollection } from 'astro:content'

export async function getSortedPosts() {
  const posts = await getCollection('posts', ({ data }) => data.published !== false)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export function getPostUrl(slug: string, date: Date): string {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const [year, month, day] = fmt.format(date).split('-')
  return `/blog/${year}/${month}/${day}/${slug}/`
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(date)
}

export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / 200)
}

export function getAllTags(posts: Awaited<ReturnType<typeof getSortedPosts>>) {
  const tagMap = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1)
    }
  }
  return [...tagMap.entries()].sort((a, b) => b[1] - a[1])
}
