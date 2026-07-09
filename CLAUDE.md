# CLAUDE.md — Contexto do Projeto

## O que é este repositório

Blog pessoal de **Maicon Schmitz** (`www.maiconschmitz.com.br`), hospedado no GitHub Pages.

**Situação atual:** migração do Hexo 6 para Astro 5, em andamento na branch `claude/project-analysis-CeIUG` (PR #3).

- `master` — HTML gerado pelo Hexo (site atual em produção)
- `source` — fontes do Hexo (Markdown, templates EJS, tema anodyne)
- `claude/project-analysis-CeIUG` — nova versão em Astro ← branch de trabalho

---

## O que foi implementado nesta sessão

### Projeto Astro em `/astro/`

Projeto Astro 5 completo, buildado e testado localmente (`165 páginas geradas, build limpo`).

**Conteúdo migrado:**
- 57 posts em Markdown (de `origin/source:source/_posts/blog/`) em `astro/src/content/posts/`
- Frontmatter Hexo-específico removido (`layout`, `status`, `type`, `categories`) — ficou só `title`, `date`, `tags`, `published`

**Estrutura de arquivos:**
```
astro/
├── astro.config.mjs               Astro 5 + @astrojs/sitemap
├── tsconfig.json
├── package.json                   Scripts: dev / build (inclui pagefind) / preview
├── public/
│   ├── CNAME                      www.maiconschmitz.com.br
│   ├── ads.txt                    Google AdSense pub ID
│   └── images/logo.svg|png
└── src/
    ├── content/
    │   ├── config.ts              Schema: title, date, tags, description, published
    │   └── posts/                 57 arquivos .md
    ├── layouts/
    │   ├── Base.astro             HTML base: meta OG, anti-FOUC dark mode, GA, AdSense
    │   └── Post.astro             Layout post: reading time, nav anterior/próximo
    ├── components/
    │   ├── Header.astro           Gradient header + nav
    │   ├── Footer.astro           Social links com SVG inline
    │   ├── ThemeToggle.astro      Toggle dark/light (sol/lua)
    │   ├── PostCard.astro         Card de post na listagem
    │   ├── TagList.astro          Pills de tags linkadas
    │   └── Pagination.astro
    ├── pages/
    │   ├── index.astro            Homepage (10 posts/página)
    │   ├── pagina/[page].astro    /pagina/2/ … /pagina/6/
    │   ├── blog/[...slug].astro   /blog/YYYY/MM/DD/slug/ (URLs preservadas)
    │   ├── tags/[tag].astro       /tags/ubuntu/, /tags/docker/ etc.
    │   ├── arquivos.astro         Cronologia por ano
    │   ├── sobre.astro
    │   ├── 404.astro
    │   ├── rss.xml.ts             RSS 2.0
    │   ├── rss2.xml.ts            Alias do RSS (compatibilidade)
    │   ├── atom.xml.ts            Atom feed
    │   └── llms.txt.ts            LLMS.txt dinâmico com todos os posts
    ├── styles/global.css          Design system (CSS custom properties, dark/light)
    └── utils/posts.ts             getSortedPosts, getPostUrl, formatDate, readingTime
```

**GitHub Actions em `.github/workflows/deploy.yml`:**
- Dispara em push na `master`, `source` ou `claude/project-analysis-CeIUG` (se arquivo em `astro/` mudar)
- Roda `npm ci && npm run build` dentro de `./astro`
- Publica `astro/dist/` no GitHub Pages via `actions/deploy-pages`

---

## Decisões tomadas (e por quê)

| Decisão | Escolha | Motivo |
|---|---|---|
| Localização do projeto | `/astro/` (subpasta) | Convivência com o HTML legado do Hexo durante transição |
| Comentários | Removidos | Usuário optou por não ter (nem Disqus nem giscus) |
| Google Analytics | Mantido (`G-8LCK8K1NZR`) | Rastreamento existente |
| Google AdSense | Mantido (`ca-pub-6275576875601893`) | Monetização existente |
| OneSignal push | Removido | Datado, não adequado para blog clean/moderno |
| Tachyons CSS | Substituído | CSS custom properties puro, mais maintainable |
| Font Awesome | Substituído | SVG inline nos componentes Footer e ThemeToggle |
| Busca | Pagefind | Roda no build, zero JS de servidor, fulltext nativo |
| Deploy | GitHub Actions → gh-pages | CI/CD automático; branch `master` deixa de ser editada à mão |
| Fonte tipográfica | System font stack | Performance máxima, sem web fonts externas |
| Dark mode | CSS custom properties + localStorage | Sem FOUC (script inline no `<head>` antes do CSS) |
| Permalinks | Preservados exatamente | SEO — `/blog/YYYY/MM/DD/slug/` idêntico ao Hexo |
| Tags com espaço | Normalizadas com hífen na URL | Ex: `"mac os x"` → `/tags/mac-os-x/` |

---

## Credenciais e IDs de serviços

| Serviço | ID / valor |
|---|---|
| Google Analytics | `G-8LCK8K1NZR` |
| Google AdSense | `ca-pub-6275576875601893` |
| Google Site Verification | `MTo6E4sAMMHSyi4nYC308ZPAlN0hZdu72yDYTe0wI1k` |
| Domínio | `www.maiconschmitz.com.br` |
| Twitter | `@maiconschmitz` |

---

## Como rodar localmente

```bash
cd astro
npm install       # só na primeira vez
npm run dev       # http://localhost:4321 com hot-reload
```

Para testar como produção (inclui busca Pagefind):
```bash
npm run build
npm run preview
```

> **Nota:** a busca não funciona em `dev`, só após `build`.

---

## O que ainda falta fazer

### Obrigatório antes de ir para produção

- [ ] **Ativar GitHub Actions no Pages:** ir em `Settings → Pages` do repositório e mudar source para **"GitHub Actions"** (atualmente aponta para branch `master`). Sem isso o deploy não funciona.
- [ ] **Merge do PR #3** (`claude/project-analysis-CeIUG` → `master`) após validação local.

### Funcionalidades ausentes (presentes no Hexo, ainda não migradas)

- [ ] **Página de busca** — Pagefind está indexando, mas não há página `/busca` com a UI. Criar `src/pages/busca.astro` com `<link rel="stylesheet" href="/pagefind/pagefind-ui.css">` e o componente `PagefindUI`.
- [ ] **Página `/categorias`** — o Hexo tinha uma página listando categorias. Baixo valor (só havia 1 categoria: `blog`), mas pode ser criada como alias para `/`.
- [ ] **`/arquivos` com paginação** — a página de arquivo existe (`/arquivos`) mas não tem paginação (todos os 57 posts aparecem de uma vez). Para o volume atual não é problema, mas pode melhorar.
- [ ] **Redirecionamentos de aliases** — alguns posts antigos têm campo `alias` no frontmatter Hexo (URLs legadas pré-2014). Verificar se há necessidade de redirecionamentos 301 para esses slugs via `astro.config.mjs` (`redirects: {}`).

### Melhorias opcionais (futuras)

- [ ] **OG Image dinâmica** — gerar imagens Open Graph por post com Satori ou `@astrojs/og` para melhor preview em redes sociais.
- [ ] **Reading progress bar** — barra de progresso de leitura no topo da página de post.
- [ ] **Table of Contents** — sumário automático para posts longos (>3 headings).
- [ ] **Busca no header** — campo de busca acessível direto no header (Pagefind já está disponível).
- [ ] **Página de tags** (`/tags`) — listagem de todas as tags com contagem de posts (similar ao `/categorias` do Hexo).

---

## Paleta de cores e design

```css
/* Cores de marca (preservadas do Hexo/Tachyons) */
--accent-1: #36b1da;   /* azul */
--accent-2: #29c6cd;   /* ciano */
--gradient: linear-gradient(135deg, #36b1da, #29c6cd);

/* Light mode */
--bg: #ffffff;  --text: #111827;  --border: #e5e7eb;

/* Dark mode */
--bg: #0d1117;  --text: #c9d1d9;  --border: #21262d;
```

O dark mode segue o padrão GitHub (`[data-theme="dark"]` no `<html>`), persistido em `localStorage`.

---

## Arquitetura de URLs

```
/                           Home = portfólio (apresentação) + últimos posts
/blog                       Listagem do blog (pág. 1)
/blog/pagina/2/ … /6/       Paginação do blog
/pagina/2/ … /pagina/6/    Redirect 301 → /blog/pagina/N (compatibilidade)
/blog/YYYY/MM/DD/slug/      Posts (URL idêntica ao Hexo)
/tags/[tag]/                Por tag
/arquivos/                  Cronologia
/sobre/                     Sobre
/rss.xml                    Feed RSS 2.0
/rss2.xml                   Alias do RSS (compatibilidade)
/atom.xml                   Feed Atom
/llms.txt                   Descrição do site para LLMs
/sitemap.xml                Sitemap (gerado por @astrojs/sitemap)
/ads.txt                    AdSense
/404                        Página de erro customizada
```

---

## Redesign: home como portfólio (jun/2026)

A home deixou de ser a lista de posts e virou uma **landing de apresentação** (híbrida: portfólio + seção "Do blog" com os últimos posts). O blog completo passou para `/blog`.

- **Conteúdo central:** `astro/src/data/portfolio.ts` — perfil, links sociais (inclui **LinkedIn**), skills, experiências, projetos e open source. Editar conteúdo é só mexer nesse arquivo.
- **Componentes novos:** `Icon.astro` (SVGs inline, inclui LinkedIn), `ProjectCard.astro`, `RepoCard.astro`.
- **Logotipo descartado:** header agora usa wordmark + monograma "MS"; favicon novo em `public/favicon.svg` (`public/images/logo.svg|png` ficaram órfãos, podem ser removidos).
- **Identidade visual renovada (tom mais sóbrio/dev):** paleta azul `#2563eb` + ciano `#06b6d4`, header neutro com blur (não mais gradiente cheio), dark mode mais profundo. Dark/light mantidos.
- **Open source** alimentado com repositórios públicos reais do GitHub.

### ⚠️ Falta você preencher

- **`experiences` em `portfolio.ts`** estão como **placeholders** (`20XX`, "Empresa anterior", TODO). Ajuste cargos, empresas, datas e descrições reais.
- Conferir/expandir `projects` (vitrine) com os trabalhos que quiser destacar.

---

## Histórico cronológico da sessão (rastro das decisões)

Sequência de pedidos do usuário e o que resultou de cada um — para reconstruir o raciocínio numa sessão futura.

1. **"Analise este projeto e entenda ao que ele se propõe."**
   → Levantamento: blog pessoal em Hexo 6, tema `anodyne`, 58 posts (2013–2022), Tachyons CSS, GitHub Pages. Constatado que a branch `master` só tinha o HTML gerado.

2. **"Gere um plano de migração do Hexo para o Astro."** Motivação: unificar stack com outro projeto que também usará Astro. Pedido de tema clean/moderno com dark mode, RSS, LLMS.txt e recursos "mais novos".
   → Plano em 6 fases. Nesse momento eu ainda achava que os Markdown fonte não existiam e propus uma "Fase 0" para reconstruir os posts a partir do HTML (via `atom.xml` + turndown).

3. **"Por que reconstruir o Markdown se temos os fontes na branch `source` em `source/_posts/blog`?"**
   → Correção minha: confirmei que a branch `source` tinha tudo (Markdown, `_config.yml`, tema EJS). **Fase 0 eliminada.** Erro de origem: eu não tinha checado outras branches na análise inicial.

4. **"Você analisou toda a branch `source`? Analise para ver o que mais pode ser simplificado."**
   → Análise completa da `source`: frontmatter real dos posts, `_config.yml`, tema `anodyne`, IDs de serviços (GA, AdSense, Disqus, OneSignal). Cronograma reduzido (~30%), risco de perda de conteúdo eliminado.

5. **"Efetue as implementações."** (goal)
   → Perguntei 4 decisões-chave (ver tabela abaixo) e implementei o projeto Astro completo. Build de 165 páginas, commit e push. `.gitignore` do Astro tinha ficado de fora → corrigido em commit seguinte (feedback do stop-hook).

6. **"Como testo o site localmente?"**
   → Instruções `npm run dev` / `build` / `preview`; ressalva de que o Pagefind só funciona após `build`.

7. **PR #3 criado pela UI do Claude Code** para esta branch.

8. **"Como transfiro o desenvolvimento para minha máquina e mantenho o histórico?"** → **"Crie o CLAUDE.md agora."**
   → Este arquivo foi criado (commit `977e536`).

9. **Redesign home → portfólio** (commit `c3c3182`, feito fora desta sessão / na máquina do usuário): home virou landing de apresentação, blog movido para `/blog`, `portfolio.ts` criado, identidade visual renovada.

10. **"Como continuo a sessão no meu ambiente local mantendo o histórico?"** → **"Adicione o rastro cronológico ao CLAUDE.md."**
    → Esta seção.

### Decisões respondidas no passo 5 (via AskUserQuestion)

| Pergunta | Resposta do usuário |
|---|---|
| Onde construir o projeto Astro? | Subpasta `/astro` |
| Quais serviços legados manter? | Google Analytics + AdSense (removidos: OneSignal e comentários) |
| Tecnologia de comentários? | **Sem comentários** |
| Deploy no GitHub Pages? | GitHub Actions → `gh-pages` |

> **Nota sobre continuidade:** o histórico literal do chat **não** transfere entre ambientes (as sessões do Claude Code são locais a cada máquina/container). Este `CLAUDE.md` é o mecanismo de continuidade — ao abrir o Claude Code no diretório do repo, ele lê este arquivo automaticamente. Numa nova sessão, basta pedir *"leia o CLAUDE.md e me diga o que falta"*.

> **Nota sobre o ambiente remoto:** o container remoto é efêmero e pode ser recriado com uma cópia antiga do repo. Sempre rode `git fetch origin <branch>` e sincronize antes de editar — em jun/2026 o container voltou apontando para o commit Hexo de 2022 enquanto o remoto já tinha 4 commits novos.

---

## Contexto do PR

- **PR #3:** `claude/project-analysis-CeIUG` → `master`
- URL: https://github.com/maiconschmitz/maiconschmitz.github.io/pull/3
- Qualquer commit novo nesta branch atualiza o PR automaticamente.
