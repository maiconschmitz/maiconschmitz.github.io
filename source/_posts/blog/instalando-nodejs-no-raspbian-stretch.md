---
layout: post
title: Instalando Node.js no Raspbian Stretch
date: 2018-11-28 12:00:00.000000000 -03:00
categories:
- Blog
tags:
- Node.js
- Raspberry Pi
- Raspbian
status: publish
type: post
published: true
---

A forma mais simples de instalar o **Node.js** no **Raspbian Stretch** é através do repositório oficial do Node.js.

Atualmente, as seguintes versões do Node.js estão disponíveis:

	Versão 06: https://deb.nodesource.com/setup_6.x
	Versåo 08: https://deb.nodesource.com/setup_8.x
	Versão 10: https://deb.nodesource.com/setup_10.x
	Versão 11: https://deb.nodesource.com/setup_11.x

Neste caso, optei por instalar a versão 10 do Node.js, adicionando o repositório que segue:

	$curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

Em seguida, basta instalar o Node.js

	$sudo apt-get install -y nodejs

Ao final, para testar o Node.js, basta executar:

	$node -v
