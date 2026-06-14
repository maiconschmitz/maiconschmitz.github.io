import { getSortedPosts, getPostUrl, getAllTags } from '@/utils/posts'
import type { APIContext } from 'astro'

export async function GET(ctx: APIContext) {
  const posts = await getSortedPosts()
  const tags = getAllTags(posts)
  const topTags = tags.slice(0, 12).map(([t]) => t).join(', ')
  const siteUrl = ctx.site!.toString().replace(/\/$/, '')

  const postLines = posts.map(p => {
    const url = `${siteUrl}${getPostUrl(p.slug, p.data.date)}`
    return `- [${p.data.title}](${url})`
  }).join('\n')

  const body = `# Maicon Schmitz

> Blog pessoal de Maicon Schmitz — Arquiteto de Software Sênior.
> Conteúdo técnico em português sobre desenvolvimento Web, Mobile, DevOps e IoT.

## Sobre o autor

- Nome: Maicon Schmitz
- Profissão: Arquiteto de Software Sênior / Desenvolvedor Freelancer
- Localização: Rio Grande do Sul, Brasil
- Tecnologias: JavaScript, Node.js, Vue.js, Python, Go, Flutter, Docker, IoT

## Contato

- GitHub: https://github.com/maiconschmitz
- Twitter: https://twitter.com/maiconschmitz
- E-mail: contato@maiconschmitz.com.br

## Navegação

- Home: ${siteUrl}/
- Arquivos: ${siteUrl}/arquivos/
- Sobre: ${siteUrl}/sobre/
- RSS: ${siteUrl}/rss.xml
- Atom: ${siteUrl}/atom.xml

## Tags principais

${topTags}

## Posts (${posts.length} artigos, 2013–2022)

${postLines}
`

  return new Response(body.trim(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
