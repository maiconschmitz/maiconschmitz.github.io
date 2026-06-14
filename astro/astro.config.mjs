import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.maiconschmitz.com.br',
  integrations: [sitemap()],
  redirects: {
    // Paginação antiga (home era o blog) → nova localização do blog
    '/pagina/[page]': '/blog/pagina/[page]',
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
})
