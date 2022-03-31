---
layout: post
title: Utilizando o PIP
date: 2015-05-20 13:00:10.000000000 -03:00
categories:
- Blog
tags:
- pip
- python
- terminal
- PIP
- Python
- Terminal
status: publish
type: post
published: true
alias: blog/2015/05/20/utilizando-o-pip.html
---

Conforme já visto anteriormente, O PIP, é um sistema de gerenciamento de pacotes para Python.
Por funcionar através de uma interface de linha de comando, toda a iteração se faz através de alguns simples comandos no terminal.

## Instalando um módulo com o PIP

Para efetuar a instalação de um módulo com o PIP, basta executar o comando pip, passando os argumentos install e o nome do módulo.

	$ pip install <modulo>

Exemplo:

	$ pip install awscli

## Procurando módulos do PIP

Para encontrar módulos disponíveis através do PIP, é possível utilizar o próprio PIP.
Para isto basta executar o comando, passando os argumentos search e o nome ou descrição que possa conter no módulo.

	$ pip search <nome>

Exemplo:

	$ pip search awscli

## Exibindo uma lista de módulos instalados

Para exibir uma lista de módulos instalados, basta executar o comando pip, passsando o argumento list.
O list irá retornar uma lista de modulos e suas respectivas versões.

	$ pip list

Exemplo:

	botocore (0.101.0)

## Exibindo uma lista de módulos desatualizados
Para exibir uma lista de módulos desatualizados, basta executar o comando pip, passsando o argumento list, seguido de "---outdated".

	$ pip list --outdated

O list irá retornar uma lista de modulos, com suas respectivas versões instaladas a suas versões mais atuais.
Exemplo:

	botocore (Current: 0.101.0 Latest: 0.109.0 [sdist])

## Atualizando um módulos desatualizado

Para atualizar um módulos desatualizados, basta executar o comando pip, passsando o argumento install <nome&gt, seguido de "---upgrade".

	$ pip install <modulo> --upgrade

Exemplo:

	$ pip install botocore --upgrade

## Removendo um módulo

Para remover um módulo que você já não deseja mais, basta executar o comando pip, passsando o argumento uninstall  e o nome do módulo.

	$ pip uninstall <nome>

Exemplo:

	$ pip uninstall awscli

## Exibindo informações sobre um módulo do PIP
Para exibir informações sobre um módulo que já esteja instalado, basta executar o comando pip, passando os argumentos show e o nome do módulo.

	$ pip show <modulo>

Exemplo:

	$ pip show awscli

A execução deste comando trará informações tais como:

	Metadata-Version: 1.1
	Name: awscli
	Version: 1.7.20
	Summary: Universal Command Line Environment for AWS.
	Home-page: http://aws.amazon.com/cli/
	Author: Mitch Garnaat
	Author-email: garnaat@amazon.com
	License: Apache License 2.0
	Location: /Library/Python/2.7/site-packages
	Requires: botocore, bcdoc, colorama, docutils, rsa

## Gerando uma lista de módulos

Para gerar uma lista com todos os módulos que você possui atualmente instalado em seu ambiente, basta executar o comando pip, passando o argumento freeze.
Exemplo:

	$ pip freeze

Se desejar, você pode direcionar a saída do resultado, diretamente para um arquivo.
Exemplo:

	$ pip freeze > requirements.txt

## Instalando módulos com requirements.txt

O requirements.txt é um padrão para a lista de módulos que são necessários ao seu projeto.
Desta forma, ao criar um projeto, pode-se tambem criar um arquivo requirements.txt na raiz do seu projeto, onde cada linha do arquivo irá possuir um par de chave e valor.

Exemplo:

	awscli==1.7.20

Neste exemplo, a chave indica o nome do módulo e o valor, a versão do módulo a ser instalado.
