---
layout: post
title: Instalando o gerenciador de pacotes Yarn no macOS
date: 2020-08-28 11:00:00.000000000 -03:00
categories:
- Blog
tags:
- yarn
- npm
status: publish
type: post
published: true
---
O **Yarn** é um gerenciador de pacotes, alternativo ao popular e conhecido **npm**, o qual surgiu de um desconforto na forma como o npm se comportava e funcionava na época.

Embora seja uma alternativa ao **npm**, o **yarn** se utiliza dos mesmos servidores de repositório do npm, portanto, ele é 100% compatível com este e todo e qualquer módulo que estiver disponível no npm, estará disponível também no yarn.

Você pode utilizar tanto o **npm**, quanto o **yarn**, em um projeto, pois toda a estrutura é compatível, entretanto você pode verificar alguns detalhes adicionais em: [Migrando do NPM para o Yarn](https://classic.yarnpkg.com/en/docs/migrating-from-npm)

# Instalando o Yarn no macOS via Brew

Para instalar o Yarn no macOS, a forma mais fácil é através do Brew:

	brew install yarn

Se você nunca utilizou o **Brew**, você pode saber mais sobre ele em: [Instalando o gerenciador de pacotes Brew](https://www.maiconschmitz.com.br/blog/2015/01/09/instalando-o-gerenciador-de-pacotes-brew/).

## Atualizando o Yarn

Durante o uso do Yarn, caso o mesmo esteja desatualizado, ele irá lhe informar que existem atualizações disponíveis.

Assim, para atualizar, bastará executar:

	brew upgrade yarn

## Checando a versão do Yarn

Para checar a versão atual do Yarn, basta executar:

	yarn --version

# Usando o Yarn

Primeiramente, acesse o diretório do projeto onde deseja executar os comandos.

## Criando um novo projeto

	yarn init


## Adicionando módulos

	yarn add [modulo]
	yarn add [modulo]@[versao]
	yarn add [modulo]@[tag]

Diferente do **npm**, onde seria necessário passar o parâmetro **--save** caso você desejasse que o módulo fosse adicionado ao **package..json**, no Yarn, este já é o comportamento padrão!

## Adicionando módulos à diferentes categorias

Para adicionar um módulo apenas na categoria de desenvolvimento, execute:

	yarn add [modulo] --dev

No **npm**, para ter o mesmo comportamento, seria necessário passar o parâmetro **--save-dev**.

## Atualizando módulos

Para atualizar um módulo, execute:

	yarn upgrade [modulo]
	yarn upgrade [modulo]@[versao]
	yarn upgrade [modulo]@[tag]

## Removendo módulos

Para remover um módulo, execute:

	yarn remove [modulo]

## Instalando todos os módulos de um projeto

Para instalar os módulos de um projeto, basta executar:

	yarn

ou

	yarn install
