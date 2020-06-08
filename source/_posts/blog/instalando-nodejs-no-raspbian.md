---
layout: post
title: Instalando Node.js no Raspbian
date: 2015-11-25 18:00:00.000000000 -03:00
categories:
- Blog
tags:
- Node.js
- Raspberry Pi
- Raspbian
status: publish
type: post
published: true
alias: blog/2015/11/25/instalando-nodejs-no-raspbian.html
---

A forma mais simples de instalar o **Node.js** no **Raspbian** é através da utilização do repositório da **Adafruit**, o qual se utiliza dos pacotes do projeto **node-arm**.

O repositório da Adafrui é compatível, tanto com a versão **wheezy**, quanto com a versão **jessie** do Raspbian.

Uma vez que você esteja conectado ao Raspberry Pi, via SSH, ou diretamente no terminal do mesmo, basta executar os seguintes comandos:


Adicionando o repositório da Adafruit:

	$curl -sLS https://apt.adafruit.com/add | sudo bash

Instalando o Node.js

	$sudo apt-get install node

Para testar o Node, basta executar:

	$node -v

O repositório da Adafruit também possui outros pacotes que podem ser interessantes, então, dê uma olhada lá:
[Adafruit's Raspberry Pi Package Repository](https://learn.adafruit.com/apt-adafruit-com/installing-packages "Adafruit's Raspberry Pi Package Repository")

E se você não conhece o projeto node-arm, pode dar uma conferida em:
[Node ARM: Node.js + Raspberry Pi](http://node-arm.herokuapp.com/ "node-arm - An easy way to install node.js on the Raspberry Pi")


