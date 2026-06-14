import rss from '@astrojs/rss'
import { getSortedPosts, getPostUrl } from '@/utils/posts'
import type { APIContext } from 'astro'

export async function GET(ctx: APIContext) {
  const posts = await getSortedPosts()

  return rss({
    title: 'Maicon Schmitz',
    description: 'Blog pessoal de Maicon Schmitz — Arquiteto de Software Sênior. Conteúdo técnico sobre desenvolvimento Web, Mobile, DevOps e IoT.',
    site: ctx.site!,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `<atom:link href="${ctx.site}rss.xml" rel="self" type="application/rss+xml"/>`,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: getPostUrl(post.slug, post.data.date),
      categories: post.data.tags,
    })),
  })
}
