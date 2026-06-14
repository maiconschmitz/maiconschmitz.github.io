---
title: Adicionando chaves SSH para conexão entre 2 servidores
date: 2014-08-12 19:20:29.000000000 -03:00
tags:
- linux
- mac-os-x
- ssh
- macos
published: true
alias: blog/2014/08/12/adicionando-chaves-ssh-para-conexao-entre-2-servidores.html
---

Adicionar **chaves SSH** para trabalhar entre 2 **servidores**, sem a necessidade de digitar sua senha a cada **conexão**, é uma boa opção para automatizar tarefas.

Este processo pode ser executado em qualquer ambiente que suporte SSH, como **Linux**, **macOS**, ou até mesmo **Windows**, com alguns passos adicionais.

Neste exemplo, será demonstrado um passo a passo de como efetuar a configuração de chaves SSH entre 2 servidores Linux, com o usuário **root**.

Primeiramente, no servidor onde a conexão será originada, execute o seguinte comando:

~~~ shell
	ssh-keygen -b 1024 -t rsa
~~~

Visualize o conteúdo do arquivo e copie a sua chave:

~~~ shell
	cat ~/.ssh/id_rsa.pub
~~~

A sua chave será parecida com:

~~~ shell
	ssh-rsa U2Ugdm9jw6ogZGVjb2RpZmljb3Ugc8OzIHBhcmEgdmVyIG8gY29udGXDumRvLCBkZWl4ZSBzZXUgY29tZW50w6FyaW8gYWJhaXhvIDsp SEU-USUARIO@SEU-HOST
~~~

Tendo copiado a chave SSH, conecte-se ao servidor que irá receber a conexão.

No terminal do mesmo, acesse o diretório `.ssh` da sua pasta home (`~/.ssh`):

~~~ shell
	cd ~/.ssh
~~~

Caso o diretório não exista, crie-o:

~~~ shell
	mkdir ~/.ssh
~~~

E então acesse-o:

~~~ shell
	cd ~/.ssh
~~~

Cole a chave copiada anteriormente ao final do arquivo:

~~~ shell
	~/.ssh/authorized_keys
~~~

Lembre-se que, caso o arquivo não exista, ele também deverá ser criado.

Processo concluído. Basta voltar ao servidor inicial e abrir a conexão com o servidor de destino:

~~~ shell
	ssh nomedohost -l usuario
~~~

Se a senha não for solicitada, significa que tudo está funcionando normalmente.