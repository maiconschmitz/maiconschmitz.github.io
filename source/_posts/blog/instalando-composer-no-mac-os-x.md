---
layout: post
title: Instalando Composer no MAC OS X
date: 2015-03-04 11:30:09.000000000 -03:00
categories:
- Blog
tags:
- MAC OS X
- PHP
- Terminal
- macOS
status: publish
type: post
published: true
alias: blog/2015/03/04/instalando-composer-no-mac-os-x.html
---
O Composer é um gerenciador de dependências para PHP.

Com o Composer, você pode definir uma lista de bibliotecas e as versões, das quais o seu projeto depende.

O Composer se encarrega da instalação, organização e também da disponibilização das mesmas no seu projeto.

## Instalando o Composer

Para efetuar a instalação do Composer você deve executar os seguintes passos.

Acesse o terminal e execute:

	curl -s https://getcomposer.org/installer | php

Caso o Composer retorne uma mensagem como a seguinte:

	Some settings on your machine make Composer unable to work properly.
	Make sure that you fix the issues listed below and run this script again:

	The detect_unicode setting must be disabled.
	Add the following to the end of your `php.ini`: detect_unicode = Off

	A php.ini file does not exist. You will have to create one.


Então significa que o php.ini para o PHP CLI deve ser configurado!

Sendo assim, você deve descobrir onde esta o php.ini, executando:

	php -i | grep 'Configuration File'

Neste caso, o retorno foi:

	Configuration File (php.ini) Path => /etc
	Loaded Configuration File => (none)

Indicando que o o php.ini não existia!

Então, execute os seguintes passos:

	cd /etc
	sudo touch php.ini
	sudo vim php.ini

Adicione o seguinte conteúdo ao arquivo:

	; Adicionado por ser um requisito do Composer
	detect_unicode = Off

Se o seu arquivo php.ini existir, então, simplesmente edite-o e adicione o conteúdo anterior ao final do mesmo.

Se você não desejar criar um php.ini, você poderá simplesmente executar a instalação do Composer, da seguinte forma:

	curl -s getcomposer.org/installer | php -d detect_unicode=Off

Com o php.ini criado/alterado, volte ao seu diretório raiz:

	cd ~/

Execute o comando de download/instalação novamente:

	curl -s https://getcomposer.org/installer | php

Caso o retorno seja semelhante à:

	#!/usr/bin/env php
	All settings correct for using Composer
	Downloading...
	Composer successfully installed to: /Users/maiconschmitz/composer.phar
	Use it: php composer.phar

Então significa que tudo ocorreu conforme o esperado.

Para tester se o composer esta devidamente instalado, basta executar o comando:

	php composer.phar

ou

	./composer.phar

## Acesso global ao Composer

Para tornar o acesso ao Composer global, você pode criar um link simbolico para o mesmo no seguinte diretório:

	/usr/local/bin/

Para isto, execute o seguinte comando:

	sudo ln -s ~/composer.phar /usr/local/bin/composer

Onde "~/composer.phar" é a localização atual do arquivo phar do Composer.

Pronto, o acesso ao Composer será extremamente facilitado a partir de agora, bastando chamar "composer" de qualquer local do sistema.

## Atualizando o Composer

Para atualizar o Composer, basta executa-lo, passando o parâmetro "self-update"

Execute:

	./composer.phar self-update

ou

	composer self-update