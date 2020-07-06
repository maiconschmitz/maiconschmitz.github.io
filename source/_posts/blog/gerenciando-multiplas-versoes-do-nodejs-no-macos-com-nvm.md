---
layout: post
title: Gerenciando multiplas versões do Node.js no macOS com o NVM
date: 2020-07-06 12:00:00.000000000 -03:00
categories:
- Blog
tags:
- Node.js
- npm
status: publish
type: post
published: true
---
O Node Version Manager (NVM), é um ferramenta que permite gerenciar multiplas versões do **Node.js**, em seu sistema operacional.

Independentemente da forma como o **Node.js** foi instalado inicialmente, é possível fazer uso do **nvm**, para passar a gerenciar as atualizações e instalações de outras versões do mesmo.

Especialmente útil, quando você precisa testar e rodar aplicações em diferentes versões do **Node.js**, seja ele tendo sido instalado via algum gerenciador de pacotes, ou até mesmo compilado à partir dos fontes.

## Instalando o NVM

Primeiramente, você deve instalar o **NVM** através do **Brew**:

	brew install nvm

Se você nunca utilizou o **Brew**, você pode saber mais sobre ele em: [Instalando o gerenciador de pacotes Brew](https://www.maiconschmitz.com.br/blog/2015/01/09/instalando-o-gerenciador-de-pacotes-brew/).

Após a instalação, você deve atualizar o seu profile (.profile, .zshrc ou .zprofile).
Para isto, execute:

	export NVM_DIR=~/.nvm
	source $(brew --prefix nvm)/nvm.sh

Para verificar se a instalação ocorreu normalmente, você pode checar a versão do nvm com o comando:

	nvm --version

## Instalando uma versão do Node.js com o NVM

Agora que NVM esta instalado e acessível, você pode listar as versões disponíveis, executando:

	nvm ls-remote

Assim, uma lista de versões lhe será apresentada.

Neste momento, recomenda-se que seja instalado o **Node.js Erbium**.

Portanto, execute:

	nvm install --lts=Erbium

Após a instalação, você pode checar a versão do Node.js que esta instalada, com:

	nvm ls

Por fim, você pode definir a versão atual, como a versão padrão (global), executando:

	nvm use default

Com isto você tem o **Node.js** instalado na versão desejada.