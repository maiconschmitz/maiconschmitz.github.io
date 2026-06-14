---
title: "Migrando do Gerador de Sites Estáticos Jekyll para Hexo"
date: 2017-07-27 18:30:00
tags:
- site
- wordpress
- estatico
- gerador
- jekyll
- ruby
- hexo
- nodejs
- "github pages"
---

Em suas primeiras versões, este site foi desenvolvido em WordPress. Com o passar do tempo e o advento dos geradores de sites estáticos, optei por migrar do **WordPress** para o **Jekyll** e, agora, do Jekyll para o **Hexo**.

## Jekyll

O Jekyll é um gerador de sites estáticos bastante rápido, escrito em Ruby. Ele é também o gerador "oficial" utilizado pelo [GitHub Pages](https://pages.github.com/), principal motivo que me levou a migrar para ele inicialmente.

## Hexo

O Hexo, assim como o Jekyll, também é um gerador de sites estáticos, porém este é escrito em **Node.js**. Bastante semelhante ao Jekyll em funcionalidade, efetuar a migração é um processo simples, sendo necessário tomar cuidado apenas com pequenos detalhes.

## Instalando o Hexo

Acesse o Terminal e execute o seguinte comando para instalar a CLI do Hexo globalmente:

```bash
npm install hexo-cli -g
```

Para maiores esclarecimentos sobre a instalação, você pode acessar a [documentação oficial do Hexo](https://hexo.io/docs/).

## Migrando do Jekyll para o Hexo

1.  **Crie um novo projeto com o Hexo:**

    ```bash
    hexo init <nome-do-projeto>
    cd <nome-do-projeto>
    npm install
    ```
    *Lembre-se de substituir `<nome-do-projeto>` pelo nome do seu projeto.*

2.  **Configure o projeto:**
    Edite o arquivo `_config.yml` que se encontra na raiz do diretório. Este arquivo de configuração é bastante intuitivo e segue o padrão YAML.
    *   Defina os valores para as principais tags, como `title`, `description` e `author`.
    *   Defina `language` com o valor `pt-BR`.
    *   Insira a URL do seu site em `url`.
    *   Ajuste os padrões de data e hora em `date_format` (ex: `DD/MM/YYYY`) e `time_format` (ex: `HH:mm:ss`).

3.  **Migre os Posts:**
    Copie os arquivos de post do Jekyll, que estão na pasta `_posts` (no formato Markdown, `*.md`), para a pasta `source/_posts/` do Hexo.

4.  **Ajuste a estrutura de permalinks:**
    Volte ao seu arquivo de configuração (`_config.yml`) e ajuste o valor da tag `new_post_name` e `permalink` para utilizar o mesmo padrão que você possuía no Jekyll. No meu caso, o valor definido foi:
    ```yaml
    permalink: blog/:title/
    ```
    Isso garante que as URLs dos seus posts permaneçam as mesmas.

## Gerando os Arquivos Estáticos

Para gerar as páginas estáticas do seu site com o Hexo, execute o comando:

```bash
hexo generate
```

Este comando irá processar todos os seus arquivos `.md` e gerar os respectivos arquivos HTML, além de criar a paginação, arquivos de índice de posts e páginas de tags. O `generate` também se encarrega de copiar quaisquer arquivos estáticos (como imagens e CSS) da pasta `source` para a pasta de destino, que é o diretório `public`.

**Importante:** Não efetue qualquer alteração manual no conteúdo do diretório `public`, pois ele é completamente recriado sempre que o comando `generate` é executado.

## Servindo as Páginas Localmente

Para visualizar seu site localmente, você pode usar o servidor nativo do Hexo:

```bash
hexo server
```

Acesse [http://localhost:4000](http://localhost:4000) no seu navegador para visualizar o site.

## Fazendo o Deploy

O Hexo provê um sistema bastante simples e efetivo para fazer o deploy. Para fazer o deploy via Git (por exemplo, para o GitHub Pages), adicione as seguintes informações ao seu arquivo `_config.yml`:

```yaml
deploy:
  type: git
  repo: <url-do-seu-repositorio.git>
  branch: <nome-do-branch-de-deploy> # ex: gh-pages ou master
```

Feita esta configuração, instale o plugin de deploy para Git:

```bash
npm install hexo-deployer-git --save
```

Finalmente, para efetuar o deploy, execute o comando:

```bash
hexo clean && hexo generate && hexo deploy
```

Caso ainda possua dúvidas, não deixe de consultar a seção de [Deployment](https://hexo.io/docs/deployment.html) na documentação.

## Usando o Hexo com GitHub Pages

Para publicar seu site com Hexo no GitHub Pages, siga algumas boas práticas:

1.  **Crie um Branch para os Fontes:**
    É uma prática comum manter o código-fonte do seu site Hexo em um branch separado (ex: `source` ou `develop`) e deixar o branch `master` (ou `gh-pages`) ser gerenciado apenas pelo `hexo deploy`.
2.  **Arquivo `CNAME`:**
    Se você utiliza um domínio customizado com o GitHub Pages, crie um arquivo chamado `CNAME` na raiz da pasta `source` do seu projeto Hexo. Dentro dele, coloque apenas o seu domínio (ex: `www.meusite.com`). O Hexo irá copiar este arquivo para a raiz do diretório `public` a cada build.

## Fluxo de Trabalho com Hexo

*   **Criar um novo post:**
    ```bash
    hexo new post "Título do Post"
    ```
    *Edite o arquivo gerado em `source/_posts/titulo-do-post.md`.*

*   **Gerar e visualizar localmente:**
    ```bash
    hexo server
    ```
    *Acesse [http://localhost:4000](http://localhost:4000).*

*   **Efetuar o deploy:**
    ```bash
    hexo deploy
    ```
