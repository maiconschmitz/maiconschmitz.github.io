---
layout: post
title: Atualizando o Ruby no macOS
date: 2018-08-04 18:30:00.000000000 -02:00
categories:
- Blog
tags:
- ruby
- mac-os-x
- macos
- Ruby
- MAC OS X
- macOS
status: publish
type: post
published: true
---

Por padrão o macOS Sierra vem com o Ruby na versão 2.0 instalado.

Para utilizar as **gems** mais atuais do **Ruby**, se faz necessário atualizar o Ruby para alguma versão mais recente.

## Verifique a versão do Ruby instalada.

Vá até o terminal e execute o seguinte comando:

	$ ruby -v

## Baixando o Ruby

Para efetuar a atualizaão do Ruby, estando no Terminal, execute:

	$ curl -sSL https://get.rvm.io | bash -s stable

Após a instalação, feche o terminal que utilizou e abra-o novamente.

Agora, você pode verificar as versões disponíveis do Ruby para upgrade.

Para isto, execute:

	$ rvm list known

O seu retorno, será algo semelhante à isto:

	# MRI Rubies
	[ruby-]1.8.6[-p420]
	[ruby-]1.8.7[-head] # security released on head
	[ruby-]1.9.1[-p431]
	[ruby-]1.9.2[-p330]
	[ruby-]1.9.3[-p551]
	[ruby-]2.0.0[-p648]
	[ruby-]2.1[.10]
	[ruby-]2.2[.10]
	[ruby-]2.3[.7]
	[ruby-]2.4[.4]
	[ruby-]2.5[.1]
	[ruby-]2.6[.0-preview2]
	ruby-head

	# for forks use: rvm install ruby-head-<name> --url https://github.com/github/ruby.git --branch 2.2

	# JRuby
	jruby-1.6[.8]
	jruby-1.7[.27]
	jruby-9.1[.17.0]
	jruby[-9.2.0.0]
	jruby-head

	# Rubinius
	rbx-1[.4.3]
	rbx-2.3[.0]
	rbx-2.4[.1]
	rbx-2[.5.8]
	rbx-3[.100]
	rbx-head

	# TruffleRuby
	truffleruby[-1.0.0-rc2]

	# Opal
	opal

	# Minimalistic ruby implementation - ISO 30170:2012
	mruby-1.0.0
	mruby-1.1.0
	mruby-1.2.0
	mruby-1.3.0
	mruby-1[.4.0]
	mruby[-head]

	# Ruby Enterprise Edition
	ree-1.8.6
	ree[-1.8.7][-2012.02]

	# Topaz
	topaz

	# MagLev
	maglev-1.0.0
	maglev-1.1[RC1]
	maglev[-1.2Alpha4]
	maglev-head

	# Mac OS X Snow Leopard Or Newer
	macruby-0.10
	macruby-0.11
	macruby[-0.12]
	macruby-nightly
	macruby-head

	# IronRuby
	ironruby[-1.1.3]
	ironruby-head

Como neste momento, a versão do Ruby 2.6.0 estava ainda em preview, optei pela última versão da 2.5, no caso a 2.5.1.

Para instalar, apenas execute:

	$ rvm install ruby-2.5.1

Ao final da instalação, execute:

	$ ruby -v

Se ainda não estiver exibindo a versão recem instalada, então execute:

	$ rvm use ruby-2.5.1 --default
