---
title: Migrando do gerador de sites estáticos Jekyll para Hexo
date: 2017-07-27 18:30:00
tags:
- Site
- Wordpress
- Estatico
- Gerador
- Jekyll
- Ruby
- Hexo
- Node.js
---
Em suas primeiras versões, este site havia sido desenvolvido em Wordpress, porém com o passar do tempo e do advento dos geradores de sites estáticos, optou-se por migrar do **Wordpress** para o **Jekyl** e agora, do Jekyl para o **Hexo**.

## Jekyl

O Jekyl é um gerador de sites estáticos, bastante rápido, escrito em Ruby e é também, o gerador "oficial" utilizado no [GitHub Pages](https://pages.github.com/ "GitHub Pages"), motivo principal que levou esta página à ser migrada para ele inicialmente.

## Hexo

O Hexo, assim como o **Jekyl**, também é um gerador de sites estáticos, porém este é escrito em **Nodejs**. Bastante semelhante ao Jekyl em funcionalidade, efetuar esta migração é um passo bastante simples, sendo necessário tomar cuidado apenas com pequenos detalhes.

## Instalando o Hexo

Acesse o Terminal e execute o seguinte comando:

    $npm install hexo-cli -g

Para maiores esclarecimentos sobre a instalação, você pode acessar a documentação no site do [Hexo](https://hexo.io/docs/ "Hexo").

## Migrando do Jekyl para o Hexo

Crie um novo projeto com o Hexo:

    $hexo init <nome-do-projeto>
    $cd <nome-do-projeto>
    $npm install

Lembrando que **nome-do-projeto**, deve ser substituido pelo nome do seu projeto.

Uma vez que este procedimento estiver concluído, configure o seu projeto, editando o arquivo **_config.yml** que se encontra na raiz do diretório **nome-do-projeto**.

Este arquivo de configuração é bastante intuitívo e segue o padrão de qualquel YAML.

Defina os valores para as principais **tags** como **title**, **description** e **author**. Defina **language** com o valor *pt-BR*, a URL seu site em **url** e ajuste os padrões de data e hora em **date_format**, com *DD/MM/YYY* e **time_format** com *HH:mm:ss*, respectivamente.

### Migrando os Posts

Para migrar os Posts, basta copiar os arquivos de post do Jekyll, que estão na pasta **_posts** e no formato Markdown (\*.md), para a pasta **source/_posts/** do **Hexo**.

Volte para o seu arquivo de configuração (**_config.yml**) e ajuste o valor da **tag**, **new_post_name** para utilizar o mesmo padrão que você possuia no Jekyll. No meu caso, o valor definido foi **blog/:title.md**, pois meus posts ficam todos no subdiretório **blog** e possuem como URL, apenas o **título**.

## Gerando os arquivos estáticos

Para gerar as páginas estáticas do Hexo, basta executar o comando:

    $hexo generate

Este procedimento irá processar todos os seus arquivos .md e irá gerar os devidos arquivos para cada um dos Posts, irá também, gerar a paginação, arquivos (indice de posts) e tags, caso você às utilize.

O generate também se encarrega de copiar quaisquer arquivos estáticos, como *assets* da pasta source, para a pasta de destino, no diretório **public**.

Lembre-se de não efetuar qualquer alteração no conteúdo dos arquivos do diretório **public**, pois sempre que o **generate** é executado, estes conteúdos são sustituídos/atualizados, com base no conteúdo do diretório **source** e do resultado de geração das páginas estáticas.

## Servindo as páginas estáticas

Para servir as páginas estáticas do Hexo, você pode utilizar o próprio Hexo, bastando executar o comando:

    $hexo serve

Assim, você poderá acessar o [http://localhost:4000](http://localhost:4000 "http://localhost:4000") para navegar e visualizar o seu site.

## Fazendo o deploy

O Hexo provê um sistema bastante simples e efetivo para efetuar o deploy.

Para que você possa fazer o deploy via git, por exemplo, você deverá adicionar ao arquivo **_config.yml**, as seguintes informações:

    deploy:
        type: git
        repo: <url-do-repositorio.git>
        branch: <nome-do-branch-normalmente-master>

Feita esta configuração, não se esqueça de efetuar a instalação do plugin de deploy, com o comando:

    $npm install hexo-deployer-git --save

Enfim, para efetuar o deploy, execute o comando:

    $hexo deploy

Caso você ainda possua dúvidas, não deixe de consulta a seção de [Deployment](https://hexo.io/docs/deployment.html "Deployment") na documentação.

## GitHub Pages

Para que você possa utilizar o **Hexo** no [GitHub Pages](https://pages.github.com/ "GitHub Pages"), será necessário mais alguns passos.

### Crie um Branch para os Fontes!

Para que você possa publicar o seu site no **GitHub Pages**, você deverá criar um novo branch para os fontes do seu projeto, deixando o branch **master**, apenas para o site gerado através do comando **hexo deploy**, isto por que atualmente o GitHub Pages, só serve os sites estáticos à partir do branch **master**.

No meu caso:
    Criei um repositório git
    Criei um branch **source**
    Criei o projeto do **hexo** neste branch **source**
    Efetuo **git add**, **commit** e **push** apenas neste branch
    Deixo o branch **master** nas mãos do **hexo deploy**

### CNAME

Caso você esteja apontando o seu domínio para o GitHub Pages, é bem provável que você já possui um CNAME configurado.

Se não sabe o que é isto, verifique artigo [utilizando um domínio customizado com o github pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/ "utilizando um domínio customizado com o github pages").

Para que você possa manter as configurações do CNAME funcionais, será necessário copiar o seu arquivo **CNAME** para a raiz da pasta **souce**.

## Adicionando e Gerando Posts

Passados os passos anteriores, o fluxo de utilização do Hexo será o seguinte:

### Criando um novo Post:

    $ hexo new post <titulo-do-post>

Edite o arquivo source/_posts/titulo-do-post.md

### Gerando e visualizando as páginas:

    $ hexo generate
    $ hexo serve

Acesse o link [http://localhost:4000](http://localhost:4000 "http://localhost:4000")

### Efetuando o deploy

    $hexo deploy