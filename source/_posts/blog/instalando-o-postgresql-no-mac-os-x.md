---
layout: post
title: Instalando o PostgreSQL no MAC OS X
date: 2015-03-23 15:00:43.000000000 -03:00
categories:
- Blog
tags:
- mac-os-x
- postgresql
- macos
status: publish
type: post
published: true
alias: blog/2015/03/23/instalando-o-postgresql-no-mac-os-x.html
---
O PostgreSQL é um Banco de Dados Objeto Relacional, desenvolvido como projeto de código aberto, atualmente na versão 9.4.1.

## Instalando o PostgreSQL
Para efetuar a instalação do PostgreSQL você deverá ter o [Homebrew instalado](http://www.maiconschmitz.com.br/instalando-o-gerenciador-de-pacotes-brew/)

Estando o Homebrew instalado e funcional, basta seguir os seguintes passos:

Acesse o terminal e execute:

	brew install postgres

Quando a instalação do Homebrew estiver concluída, efetue a criação da base de dados padrão, executando:

	initdb /usr/local/var/postgres

## Configurando o PostgreSQL para iniciar com o Mac OS X

Para que o PostgreSQL seja iniciado automaticamente, sempre que você inicia o sistema operacional, basta executa os seguintes comandos:

	mkdir -p ~/Library/LaunchAgents
	ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
	launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist

## Criando a base de dados para o seu usuário

Para criar uma base de dados para o seu usuário, basta executa o comando **createdb**:

	createdb `whoami`
