---
layout: post
title: Instalando o gerenciador de pacotes PIP
date: 2015-04-09 13:30:52.000000000 -03:00
categories:
- Blog
tags:
- PIP
- Python
- Terminal
status: publish
type: post
published: true
---
O PIP, é um sistema de gerenciamento de pacotes para Python.
Como o PIP funciona através de uma interface de linha de comando, efetuar a instalação de pacotes de software Python, se torna uma tarefa bastante simples.

## Instalando o PIP

Vá até o terminal e execute o seguinte comando:

	$ curl -O https://bootstrap.pypa.io/get-pip.py

Executando o comando acima, você irá efetuar o download do script de instalação do PIP.
Agora, basta efetuar a instalação em si.

	$ sudo python get-pip.py

Lembre-se de executar o comando como super usuário.
Após alguns instantes, a instalação será concluída.
