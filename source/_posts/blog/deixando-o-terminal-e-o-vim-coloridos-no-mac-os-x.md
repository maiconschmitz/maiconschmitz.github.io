---
layout: post
title: Deixando o Terminal e o VIM Coloridos no MAC OS X
date: 2014-06-23 11:30:56.000000000 -03:00
categories:
- blog
tags:
- mac-os-x
- terminal
- vim
- macos
status: publish
type: post
published: true
alias: blog/2014/06/23/deixando-o-terminal-e-o-vim-coloridos-no-mac-os-x.html
---

O processo de configuração se inicia pelo **.bashrc** e pelo **.vimrc** e pode ser executado diretamente no **Terminal.app**.

Acesse o aplicativo **Terminal.app**, pelo **Spotlight** (⌘ + Tecla Espaço) ou diretamente através do diretório **/Applications/Utilities/**

## SHELL

Para configurar o Shell, verifique pela existência do arquivo **.bashrc** na sua pasta de usuário:

Entre na sua pasta de usuário:

	$ cd ~

Verifique pela existência do arquivo **.bashrc**:

	$ ls -la .bashrc

Caso o arquivo não exista, crie-o:

	$ touch .bashrc

Edite o arquivo e adicione o conteúdo que segue, ao final do mesmo:

	export TERM=xterm-color
	alias ls="ls -G"

Reinicie o Terminal (feche-o e abra novamente)

Carregue o conteúdo do **.bashrc**

	$ source .bashrc

Pronto, o Shell passará a exibir as listagens em cores, sempre que for aplicável.

## VIM

Para configurar o VIM, verifique pela existência do arquivo **.vimrc** na sua pasta de usuário.

Verifique pela existência do arquivo **.vimrc**:

	$ ls -la .vimrc

Caso o arquivo não exista, crie-o:

	$ touch .vimrc

Edite o arquivo e adicione o conteúdo que segue, ao final do mesmo:

	syntax on

Pronto, o VIM passará a exibir o conteúdo com highlight de sintaxe, sempre que for aplicável.