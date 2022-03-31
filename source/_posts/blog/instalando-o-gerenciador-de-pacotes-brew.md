---
layout: post
title: Instalando o gerenciador de pacotes Brew
date: 2015-01-09 13:30:27.000000000 -02:00
categories:
- Blog
tags:
- brew
- ruby
- mac-os-x
- macos
- Brew
- Ruby
- MAC OS X
- macOS
status: publish
type: post
published: true
alias: blog/2015/01/09/instalando-o-gerenciador-de-pacotes-brew.html
---

O **Homebrew**, ou **Brew**, é um gerenciador de pacotes para OS X.

Com o **Brew**, o processo de instalação de diversos softwares, na sua maioria open source, se torna algo bastante simples.

O Brew é baseado em fórmulas, scripts Ruby, portanto, a primeira coisa a fazer, é verificar se o **Ruby** esta instalado.


## Verifique se você possui o Ruby instalado.

Vá até o terminal e execute o seguinte comando:

	$ which ruby

Se retornar algo (caminho do ruby), então significa que o Ruby esta instalado. Nomalmente o Ruby vem instalado por padrão, mas nem sempre é a versão mais atual.

Se desejar verificar a versão do Ruby, simplesmente execute:

	$ ruby -v

## Efetuando a instalação do Brew

Para efetuar a instalação do Brew, estando no Terminal, execute:

	$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Após alguns instantes, se a instalação ocorrer sem problemas, você terá o seguinte retorno:

	...
	==> Installation successful!
	==> Homebrew has enabled anonymous aggregate user behaviour analytics.
	Read the analytics documentation (and how to opt-out) here:
	http://docs.brew.sh/Analytics.html
	==> Next steps:
	- Run `brew help` to get started
	- Further documentation:
		http://docs.brew.sh

Caso ocorra algum erro, poderá ser necessário instalar o Xcode e o Command Line Tools da Apple.

Caso não saiba como, veja o passo a passo de [Instalação do Xcode Command Line Tools](https://www.maiconschmitz.com.br/blog/2015/01/09/instalando-o-xcode-e-o-command-line-tools).

Se a instalação ocorrer sem problemas, então basta executar o Brew Doctor.

	$ brew doctor

Se o retorno for "Your system is ready to brew", então o Brew estará pronto para ser utilizado.

Execute:

	brew help

E veja os comandos disponíveis para pesquisar e instalar pacotes, ou se desejar, consulte a documentação online em [http://docs.brew.sh](http://docs.brew.sh).
