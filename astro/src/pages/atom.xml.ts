import { getSortedPosts, getPostUrl } from '@/utils/posts'
import type { APIContext } from 'astro'

export async function GET(ctx: APIContext) {
  const posts = await getSortedPosts()
  const siteUrl = ctx.site!.toString().replace(/\/$/, '')
  const updated = posts[0]?.data.date.toISOString() ?? new Date().toISOString()

  const entries = posts.map(post => {
    const url = `${siteUrl}${getPostUrl(post.slug, post.data.date)}`
    return `
  <entry>
    <title><![CDATA[${post.data.title}]]></title>
    <link href="${url}"/>
    <id>${url}</id>
    <published>${post.data.date.toISOString()}</published>
    <updated>${post.data.date.toISOString()}</updated>
    ${post.data.tags.map(t => `<category term="${t}"/>`).join('\n    ')}
  </entry>`
  }).join('\n')

  const body = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Maicon Schmitz</title>
  <link href="${siteUrl}/atom.xml" rel="self"/>
  <link href="${siteUrl}/"/>
  <updated>${updated}</updated>
  <id>${siteUrl}/</id>
  <author><name>Maicon Schmitz</name></author>
${entries}
</feed>`

  return new Response(body, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  })
}
