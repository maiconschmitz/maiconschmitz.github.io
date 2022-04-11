---
layout: post
title: Criando uma Stack de Desenvolvimento LNMP
date: 2018-04-20 17:00:00.000000000 -03:00
categories:
- Blog
tags:
- stack
- desenvolvimento
- lnmp
- docker
- macos
status: publish
type: post
published: true
---

Uma Stack **LNMP**, é aquela formada pela junção do **L**inux com **N**ginx, **M**ySQL e **P**HP.
Nesta Stack em especial, que é destinada ao uso durante o desenvolvimento de projetos, optei por utilizar o PHP na versão 7, bem como rodar tudo em cima do **Docker**.

É importante saber que o Docker já deve estar instalado previamente.
Se precisar de uma ajuda com o Docker, veja este post: [Iniciando com Docker no macOS](http://www.maiconschmitz.com.br/blog/2016/05/21/iniciando-com-docker-no-os-x "Iniciando com Docker no macOS")

## Stack de Desenvolvimento

`Atenção:` Nenhum tipo de configuração de segurança foi aplicada nesta Stack!

## Banco de Dados centralizado em uma Imagem em Separado

Esta Stack possui uma particularidade, que é a utilização de um único Servidor MySQL para todos os projetos, centralizando assim, todas as bases de dados em uma única imagem Docker (um só local).

### Criando uma única Rede para as suas Imagens

Acesse o terminal e execute o seguinte comando:

    docker network create rede-local-docker

Onde **rede-local-docker** é o nome da sua rede.

Mantenha este nome, para que você não precise editar os arquivos de configuração!

### Criando um único Servidor MySQL

Acesse o terminal e execute o comando abaixo, para rodar um container com MySQL na Rede previamente criada:

    docker run --name servidor-mysql --network=rede-local-docker -v ˜/projetos/mysql/data/db:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql/mysql-server:5.7

Onde **˜/projetos/mysql/data/db** é uma estrutura de diretórios, onde as bases de dados serão salvas.

Altere este caminho de acordo com a sua necessidade!

Lembre-se, quando precisar rodar o servidor MySQL novamente, bastará que você execute o seguinte comando:

    docker start servidor-mysql

### Copiando e Rodando

Os arquivos de configuração necessários, podem ser encontrados no repositório [Docker LNMP](https://github.com/maiconschmitz/docker-lnmp "Docker LNMP") no Github.

Os arquivos de configuração são simples e autoexplicativos.

Efetue o clone do projeto, ou apenas baixe o conteúdo como Zip.
Para rodar o seu projeto, bastará copiar os arquivos abaixo listados, para a raiz do seu projeto.

Arquivos necessários:
- app.docker
- docker-compose.yml
- host.conf
- web.docker

Acesse o diretório do seu projeto através do terminal e execute o seguinte comando:

    docker-compose up

Visualize o projeto pelo browser em:

    http://localhost

