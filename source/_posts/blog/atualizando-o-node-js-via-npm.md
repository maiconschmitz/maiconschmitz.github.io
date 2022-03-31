---
layout: post
title: Atualizando o Node.js via npm
date: 2014-09-11 11:30:42.000000000 -03:00
categories:
- Blog
tags:
- nodejs
- npm
- Node.js
status: publish
type: post
published: true
alias: blog/2014/09/11/atualizando-o-node-js-via-npm.html
---
Para atualizar o **Node.js**, é possível utilizar o **npm**.

Independente da forma como o **Node.js** foi instalado, seja via pacote ou até mesmo compilado, é possível efetuar a atualização do mesmo via npm.

Este formato de atualização foi testado no Ubuntu, com o **Node.js** tendo sido instalado via apt, no CentOS, tendo sido compilado e também no Mac OS X, tendo sido instalado pelas vias padrões.

Os passos para atualizar o **Node.js** são extremamente simples e são exemplificados logo abaixo.

Primeiramente, iremos verificar a versão do **Node.js**, executando:

	node -v

## Partindo para a atualização propriamente dita

Execute a seguinte sequência de comandos:

	sudo npm cache clean -f
	sudo npm install -g n

Agora, para atualizar o **Node.js**, você tem duas opções:

Pode escolher istalar o **Node.js** na sua versão mais atual e estável, executando:

	sudo n stable

Ou pode istalar o **Node.js** em uma versão mais específica, neste exemplo, a versão 0.11.x.
Para isto, basta executar:

	sudo n 0.11

Com isto você tem o **Node.js** atualizado na versão desejada.