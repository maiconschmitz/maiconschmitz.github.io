---
layout: post
title: Compilando e Instalando o Node.js no CentOS 7
date: 2014-08-26 11:30:56.000000000 -03:00
categories:
- Blog
tags:
- centos
- nodejs
- terminal
status: publish
type: post
published: true
alias: blog/2014/08/26/compilando-e-instalando-o-nodejs-no-centos-7.html
---
Para poder compilar e instalar o **Node.js** no CentOS 7, você deverá executar alguns passos.

Primeiramente, prepare um local para baixar o Node.js.

Pode ser na sua pasta home:

	$ cd ~
	$ mkdir node
	$ cd node/

## Baixe e Descompacte o Node

	$ wget http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
	$ tar xzvf node-v* && cd node-v*

À título de curiosidade, atualmente a versão estável é a v0.10.31.

Para poder compilar, será necessário possuir o **GCC**, caso você não o possua instalado, então intale-o:

	$ sudo yum install gcc gcc-c++

## Compilando e Instalando o Node.js

Para compilar e instalar o Node, execute a sequência de comandos abaixo:

	$ ./configure
	$ make
	$ sudo make install

Quando o processo de instalação estiver concluído, você poderá verificar se tudo ocorreu normalmente, testando por exemplo, a versão do node que você acabou de instalar.

Para isto, bastará executar o seguinte comando:

	$ node --version

O qual, neste exemplo, resultou em:

	v0.10.31

Com isto você tem o **Node.js** instalado e pronto para usar.