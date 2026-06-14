/**
 * Dados do portfólio / apresentação.
 *
 * Este arquivo centraliza tudo que aparece na home (apresentação, skills,
 * experiências, projetos, open source) e nos links sociais (header/footer).
 *
 * 👉 Os campos marcados com TODO foram preenchidos com inferências a partir
 *    da página "Sobre" e dos repositórios públicos. Ajuste/expanda à vontade —
 *    nada aqui depende de build externo, é só conteúdo.
 */

export const profile = {
  name: 'Maicon Schmitz',
  /** Aparece como wordmark no header (sem logotipo/imagem). */
  initials: 'MS',
  role: 'Arquiteto de Software',
  /** Frase curta, logo abaixo do nome no hero. */
  tagline: 'Construo software para Web, Mobile e back-end — com gosto por DevOps, automação e IoT.',
  location: 'Rio Grande do Sul, Brasil',
  /** Parágrafos de apresentação (cada item vira um <p>). */
  intro: [
    'Sou desenvolvedor e arquiteto de software com experiência em projetos Web, Mobile e back-end. Gosto de transformar problemas em sistemas simples, manuteníveis e que escalam bem.',
    'Ao longo dos anos trabalhei de PHP/Laravel e JavaScript a Node.js, Python e Go, passando por front-end (Vue, Angular), mobile (Ionic, Flutter) e bastante infraestrutura com Docker. Atualmente me dedico a Go, automação e IoT.',
  ],
} as const

/* ── Links sociais ──────────────────────────────────────────────────────── */
// `icon` é o nome de um ícone definido em src/components/Icon.astro.
export const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maiconschmitz',
    icon: 'linkedin',
    primary: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/maiconschmitz',
    icon: 'github',
    primary: true,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/maiconschmitz',
    icon: 'twitter',
  },
  {
    label: 'E-mail',
    href: 'mailto:contato@maiconschmitz.com.br',
    icon: 'mail',
  },
  {
    label: 'RSS',
    href: '/rss.xml',
    icon: 'rss',
  },
] as const

/* ── Conhecimentos / Stack ──────────────────────────────────────────────── */
export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Linguagens',
    items: ['Go', 'Python', 'JavaScript / TypeScript', 'PHP', 'SQL', 'Shell'],
  },
  {
    category: 'Back-end',
    items: ['Node.js', 'Laravel', 'Flask', 'APIs REST', 'NATS'],
  },
  {
    category: 'Front-end',
    items: ['Vue.js', 'Angular', 'Astro', 'HTML & CSS'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Ionic'],
  },
  {
    category: 'Dados',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'DevOps & Infra',
    items: ['Docker', 'Linux', 'Nginx', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Interesses',
    items: ['IoT', 'Automação', 'Raspberry Pi'],
  },
]

/* ── Experiência ────────────────────────────────────────────────────────── */
// TODO: estes itens são placeholders — ajuste cargos, empresas e datas reais.
export type Experience = {
  role: string
  company: string
  period: string
  location?: string
  description: string
  current?: boolean
}

export const experiences: Experience[] = [
  {
    role: 'Arquiteto de Software / Desenvolvedor',
    company: 'Freelancer',
    period: '20XX — Atual', // TODO
    location: 'Remoto',
    description:
      'Desenvolvimento de aplicações Web e Mobile sob demanda — da arquitetura à entrega. Back-ends em Node.js/Python, front-end em Vue/Angular e apps em Flutter, com deploy em Docker.',
    current: true,
  },
  {
    role: 'Desenvolvedor de Software', // TODO
    company: 'Empresa anterior', // TODO
    period: '20XX — 20XX', // TODO
    description:
      'TODO: descreva aqui responsabilidades, stack e principais entregas desta experiência.',
  },
]

/* ── Projetos em destaque ───────────────────────────────────────────────── */
// TODO: troque/expanda pelos projetos que você quer mostrar como vitrine.
export type Project = {
  name: string
  description: string
  tags: string[]
  /** Link "ver projeto" (site/demo). Opcional. */
  url?: string
  /** Link do repositório. Opcional. */
  repo?: string
}

export const projects: Project[] = [
  {
    name: 'maiconschmitz.com.br',
    description:
      'Este site: blog + portfólio estático, migrado de Hexo para Astro 5. Dark mode sem FOUC, busca full-text com Pagefind e deploy contínuo via GitHub Actions.',
    tags: ['Astro', 'TypeScript', 'GitHub Actions'],
    url: 'https://www.maiconschmitz.com.br',
    repo: 'https://github.com/maiconschmitz/maiconschmitz.github.io',
  },
  {
    name: 'Estados e Municípios IBGE',
    description:
      'Datasets prontos com os estados e municípios brasileiros baseados nos dados oficiais do IBGE, em formatos fáceis de consumir.',
    tags: ['Dados', 'CSV', 'IBGE'],
    repo: 'https://github.com/maiconschmitz/estados-municipios-ibge',
  },
]

/* ── Open source ────────────────────────────────────────────────────────── */
// Curado a partir dos repositórios públicos. Edite a lista como preferir.
export type Repo = {
  name: string
  description: string
  language?: string
  href: string
}

export const openSource: Repo[] = [
  {
    name: 'go_builder',
    description:
      'Imagem Docker para build de aplicações Go, com cross-compile para linux/amd64 e linux/arm64.',
    language: 'Docker',
    href: 'https://github.com/maiconschmitz/go_builder',
  },
  {
    name: 'python_base',
    description: 'Imagem Docker otimizada para execução de aplicações Python.',
    language: 'Docker',
    href: 'https://github.com/maiconschmitz/python_base',
  },
  {
    name: 'docker-lnmp',
    description: 'Stack LNMP (Linux, Nginx, MySQL, PHP) pronta para subir com Docker.',
    language: 'PHP',
    href: 'https://github.com/maiconschmitz/docker-lnmp',
  },
  {
    name: 'shellnotification',
    description: 'Envia notificações de desktop a partir da linha de comando no Linux/macOS.',
    language: 'Shell',
    href: 'https://github.com/maiconschmitz/shellnotification',
  },
  {
    name: 'estados-municipios-ibge',
    description: 'Listas de estados e municípios brasileiros baseadas nos dados do IBGE.',
    language: 'Dados',
    href: 'https://github.com/maiconschmitz/estados-municipios-ibge',
  },
  {
    name: 'dotfiles',
    description: 'Meus arquivos de configuração (zsh, vim, shell) versionados.',
    language: 'Shell',
    href: 'https://github.com/maiconschmitz/dotfiles',
  },
]
