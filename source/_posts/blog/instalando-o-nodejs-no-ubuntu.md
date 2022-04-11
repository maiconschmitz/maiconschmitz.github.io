---
layout: post
title: Instalando o Node.js no Ubuntu
date: 2014-07-28 11:30:38.000000000 -03:00
categories:
- blog
tags:
- nodejs
- terminal
- ubuntu
status: publish
type: post
published: true
alias: blog/2014/07/28/instalando-o-nodejs-no-ubuntu.html
---
Caso você deseje instalar o **Node.js**, em sua versão disponível no canal oficial do **APT**, bastará executar um simples comando:

	$ sudo apt-get install nodejs

Com isto você irá instalar a versão mais recente disponível no canal **APT**, que atualmente é a versão v0.10.25.

Em contra partida, caso você deseja instalar a última versão corrente, então você deverá seguir os passos abaixo.

## Instalando a versão mais recente do Node.js

	$ sudo apt-get update
	$ sudo apt-get install -y python-software-properties python g++ make
	$ sudo add-apt-repository -y ppa:chris-lea/node.js
	$ sudo apt-get update
	$ sudo apt-get install nodejs

Para verificar a versão que você acabou de instalar, bastará executar o seguinte comando:

	$ nodejs -v

Neste exemplo, resultou em:

	v0.10.29

Com isto você tem o **Node.js** instalado e pronto para usar.