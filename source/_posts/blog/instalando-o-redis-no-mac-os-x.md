---
layout: post
title: Instalando o REDIS no MAC OS X
date: 2014-12-29 18:30:49.000000000 -02:00
categories:
- Blog
tags:
- mac-os-x
- redis
- terminal
- macos
status: publish
type: post
published: true
alias: blog/2014/12/29/instalando-o-redis-no-mac-os-x.html
---
O Redis é um banco de dados NoSQL do tipo chave/valor, extremamente rápido, o que o torna um banco de dados ideal para diversas situações.

Fácil de instalar e fácil de operar, é escrito em C, o que o torna compatível com os diversos sistemas Linux, Unix, etc.

Caso você deseje instalar o **Redis**, bastará executar apenas alguns simples passos.

Abra o Terminal de sua preferência e efetue o Download do Redis:

	$ curl -O http://download.redis.io/releases/redis-2.8.19.tar.gz

Quando o Download estiver concluído, extraia o contúdo do pacote tar.gz:

	$ tar xvzf redis-2.8.19.tar.gz

Após a descompactação do conteúdo do pacote, acesse a pasta recem criada:

	$ cd redis-2.8.19

Execute um make para compilar os fontes:

	$ make

Se tudo ocorrer normalmente, bastará agora mover os binários para o local adequado:

	$ sudo mv src/redis-server /usr/bin
	$ sudo mv src/redis-cli /usr/bin


## Arquivo de Configurações

Caso você deseje efetuar alguma configuração específica para o Redis, poderá criar um arquivo de configuração nomeado **redis.conf** na sua pasta home.

Para isto, execute:

	$ mkdir ~/.redis
	$ touch ~/.redis/redis.conf


Agora basta configurar o arquivo **redis.conf**, de acordo com as suas necessidades.

Vale lembrar que para que o seu arquivo de configuração seja efetivamente utilizado, é necessário que você indique-o ao Redis.

## Rodando o Servidor no Console

Conforme visto, para executar o Redis, basta chamar o executável:

	redis-server

Com isto, você terá o **Redis** em execução.

Se desejar, poderá executar o Redis, passando como argumento, o arquivo de configurações:

	redis-server ~/.redis/redis.conf

## Acessando o Redis via Console

Caso deseje acessar o Redis via terminal, basta chamar o executável:

	redis-cli

Dois comandos bastante úteis que utilizo são:

	$ FLUSHDB

_Este comando remove todos os dados da base na qual você esta atualmente conectado._

	$ FLUSHALL

_Este comando remove todos os dados de todas as bases de dados._

Para uma lista completa dos comandos disponíveis, acesse: [http://redis.io/commands](http://redis.io/commands "http://redis.io/commands")