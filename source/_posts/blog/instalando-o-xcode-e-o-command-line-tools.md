---
layout: post
title: Instalando o Xcode e o Command Line Tools
date: 2015-01-09 12:30:26.000000000 -02:00
categories:
- Blog
tags:
- App Store
- Apple
- gcc
- MAC OS X
- Terminal
- Xcode
status: publish
type: post
published: true
alias: blog/2015/01/09/instalando-o-xcode-e-o-command-line-tools.html
---
O Xcode é o ambiente/plataforma de desenvolvimento da Apple.

Se você não possui o Xcode, instale-o a partir da AppStore, ou obtenha o link para o mesmo na página de Download: 


[https://developer.apple.com/xcode/downloads/](https://developer.apple.com/xcode/downloads/ "https://developer.apple.com/xcode/downloads/").

## Instalando o Command Line Tools

O Command Line Tools é um conjunto de ferramentas de linha de comando, parte integrante do Xcode.

Se você já possui o Xcode ou acabou de instala-lo, bastará acessar o terminal e executar o seguinte comando:

	xcode-select --install

O comando acima irá disparar a instalação do Command Line Tools.

Caso ocorra algum erro, outra alternativa será executar a instalação do Command Line Tools através do Download manual.

Para isto, basta executar o Xcode.app e no menu "Xcode", selecionar "Open Developer Tool" / "More Developer Tools".

Isto irá abrir uma página ([https://developer.apple.com/downloads/index.action?name=for%20Xcode%20-](https://developer.apple.com/downloads/index.action?name=for%20Xcode%20- "https://developer.apple.com/downloads/index.action?name=for%20Xcode%20-"){:target="_blank"}) com a lista de Downloads, na qual você deve selecionar a versão correta do instalador desejado.

Uma vez que o Command Line Tools esteja instalado, você poderá utilizar, por exemplo, o compilador gcc, o qual se faz necessário para a instalação (compilar) de diversas ferramentas open source.

Para verificar se o GCC esta corretamente instalado, basta executar:

	$ which gcc

Se o resultando retornar algo como:

	/usr/bin/gcc

Então isto sinifica que esta tudo ok.