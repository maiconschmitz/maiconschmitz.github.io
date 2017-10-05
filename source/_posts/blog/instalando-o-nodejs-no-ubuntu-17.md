---
layout: post
title: Instalando o Node.js no Ubuntu 17
date: 2017-10-05 17:30:00.000000000 -03:00
categories:
- Blog
tags:
- Ubuntu
- Node.js
- npm
- Terminal
status: publish
type: post
published: true
---
Instalar o **Node.js** no **Ubuntu 17** é extremamente simples.

É bastante comum, que você encontre instruções nos mais diversos sites, que indiquem que você deve instalar o Node.js a partir do repositório do APT. 
Porém, o que ocorre, é que ao instalar o Node.js a partir desta fonte, fará com que você instale a versão mais antiga e estável suportada.

Caso deseje fazer um simples teste, basta executar:

	sudo apt-get install nodejs -y

Ao instalar o Node, você poderá verificar que a versão que será instalada, é a v4.7.2.

Execute:

	$ nodejs -v

E o retorno será:

	v4.7.2

Isto ocorre, pois conforme já mencionado anteriormente, é instalada a versão mais antiga e estável suportada, algo que é conhecido como **Long Term Support (LTS)**.

Caso deseje ver mais sobre as versões do Node.js, consulte: [https://nodejs.org/en/download/releases/](https://nodejs.org/en/download/releases/).

## Instalando a versão mais recente no Node.js

Para instalar a versão mais recente do Node.js, você pode simplesmente adicionar o **PPA (arquivo de pacotes pessoais)** do NodeSource.

Para into, basta seguir os seguintes passos:

	cd ~
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	sudo apt-get install -y nodejs

Após a instalação, você terá à disposição o comando **node** e o seu alias **nodejs**.

Se desejar consultar a versão, bastará executar:

	$ nodejs -v

Que neste momento, resultará em:

	v8.6.0

Agora você possui o **Node.js** instalado e pronto para usar, assim como o gerenciador de pacotes **npm**, que também foi instalado.

