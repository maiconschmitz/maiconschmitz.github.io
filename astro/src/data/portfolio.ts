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
  role: 'Tech Lead & Senior Backend Engineer',
  /** Frase curta, logo abaixo do nome no hero. */
  tagline: 'Tecnologia só tem valor quando resolve problemas reais de negócio.',
  location: 'Rio Grande do Sul, Brasil',
  /** Texto focado e enxuto para a página inicial */
  intro: [
    'Escrevo código há mais de 20 anos e nesse tempo aprendi que tecnologia só tem valor quando resolve problemas reais de negócio. Atuo como Tech Lead e Engenheiro Backend Sênior, transformando problemas complexos em arquiteturas robustas, manuteníveis e de alta disponibilidade.',
  ],
  /** Biografia completa e direcionada para a página Sobre */
  about: {
    paragraphs: [
      'Escrevo código há mais de 20 anos e nesse tempo aprendi que tecnologia só tem valor quando resolve problemas reais de negócio.',
      'Comecei no desenvolvimento de sistemas ERP, onde aprendi a traduzir regras de negócio complexas em software funcional. Esse fundamento moldou minha forma de trabalhar: entender o problema antes de escrever a primeira linha de código.',
      'Hoje atuo como Tech Lead & Senior Backend Engineer, especializado em arquiteturas escaláveis com Python e Go, rodando em ambientes Docker/Kubernetes. Minha stack inclui PostgreSQL, MySQL, MongoDB, Redis e mensageria com RabbitMQ, com pipelines de CI/CD via GitHub Actions.',
      'Ao longo da carreira, passei por todo o ciclo de desenvolvimento, de aplicações Desktop, Web e Mobile até sistemas distribuídos com microsserviços. Já levei produtos do zero à produção, incluindo aplicações Mobile, nas lojas App Store e Google Play.',
      'Tenho experiência em ambientes de alto volume, onde decisões de arquitetura impactam diretamente a performance e os resultados do produto.',
    ],
    deliverables: [
      'Arquitetura de sistemas backend robustos e de alta disponibilidade',
      'Liderança técnica em times de desenvolvimento',
      'Integração de sistemas e automação de processos',
      'Ambientes cloud estruturados, monitorados e escaláveis',
    ],
  },
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
    items: ['Python', 'Go', 'SQL', 'TypeScript / JavaScript', 'Shell / Bash', 'PHP'],
  },
  {
    category: 'Back-end & Arquitetura',
    items: [
      'Microsserviços',
      'Sistemas Distribuídos',
      'Alta Disponibilidade',
      'APIs REST',
      'RabbitMQ (Mensageria)',
      'Integração de Sistemas',
    ],
  },
  {
    category: 'Bancos de Dados & Cache',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines',
      'GitHub Actions',
      'Linux',
      'Monitoramento & Métricas',
      'Nginx',
    ],
  },
  {
    category: 'Mobile & Front-end',
    items: [
      'Flutter',
      'Ionic',
      'Publicações App Store & Google Play',
      'Vue.js',
      'Angular',
      'Astro',
    ],
  },
  {
    category: 'Liderança & Especialidades',
    items: [
      'Liderança Técnica (Tech Lead)',
      'Arquitetura de Software',
      'Sistemas ERP & Negócios Complexos',
      'Automação de Processos',
      'IoT & Hardware',
    ],
  },
]

/* ── Filosofia de Engenharia / Como Trabalho ────────────────────────────── */
export type Principle = {
  title: string
  subtitle: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Entender o problema antes de codificar',
    subtitle: 'Regra de Negócio & Domínio',
    description:
      'Fundamento cultivado em sistemas ERP: tecnologia só tem valor real quando resolve problemas concretos de negócio. Antes da primeira linha de código ou escolha de ferramentas, o foco é compreender a fundo os processos, regras e objetivos do produto.',
  },
  {
    title: 'Arquitetura pragmática e escalável',
    subtitle: 'Simplicidade & Alto Volume',
    description:
      'Sistemas distribuídos desenhados para alta disponibilidade e manutenção sustentável. Microsserviços e mensageria assíncrona (com Python, Go e RabbitMQ) aplicados onde há real ganho de escala e desacoplamento, evitando complexidade acidental.',
  },
  {
    title: 'Automação e resiliência por padrão',
    subtitle: 'DevOps, Cloud & CI/CD',
    description:
      'Pipelines automatizados no GitHub Actions, conteinerização com Docker e Kubernetes, testes e observabilidade não são etapas tardias. São a base que garante entregas contínuas, estáveis e com confiança em produção.',
  },
  {
    title: 'Liderança técnica e cultura de engenharia',
    subtitle: 'Alinhamento & Mentoria',
    description:
      'Como Tech Lead, atuo na ponte entre as necessidades do produto e a excelência técnica da equipe. Fomento padrões consistentes, decisões arquiteturais transparentes e a evolução técnica contínua do time.',
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
