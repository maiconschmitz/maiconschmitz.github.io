---
layout: post
title: Adicionando chaves SSH para conexão entre 2 Servidores
date: 2014-08-12 19:20:29.000000000 -03:00
categories:
- Blog
tags:
- Linux
- MAC OS X
- SSH
status: publish
type: post
published: true
---
Adicionar **chaves SSH** para trabalhar entre 2 **Servidores**, sem a necessidade de digitar a sua senha a cada **conexão**, é uma boa opção para automatizar tarefas.

Este processo pode ser executado em qualquer ambiente que suporte SSH, como **Linux**, **MAC OS X**, ou até mesmo **Windows**, com alguns passos adicionais.

Neste exemplo, será demonstrado um passo a passo de como efetuar a configuração de chaves SSH, entre 2 servidores Linux, com o usuário **root**.

Primeiramente, no servidor onde a conexão será originada.

Execute o seguinte comando:

	$ ssh-keygen -b 1024 -t rsa

Visualize o conteúdo do arquivo e copie a sua chave:

	~/.ssh/id_rsa.pub

A sua chave será ~~parecida~~ com:

	ssh-rsa U2Ugdm9jw6ogZGVjb2RpZmljb3Ugc8OzIHBhcmEgdmVyIG8gY29udGXDumRvLCBkZWl4ZSBzZXUgY29tZW50w6FyaW8gYWJhaXhvIDsp SEU-USUARIO@SEU-HOST

Tendo copiado a chave ssh, conecte-se ou acesse o servidor que irá receber a conexão.

Estando no terminal do mesmo, acesse o diretório .ssh da sua pasta home (~/.ssh)

	$ cd ~/.ssh

Caso o diretório não exista, crie-o

	$ mkdir ~/.ssh

E então acesse-o...

	$ cd ~/.ssh

Cole a chave anteriormente copiada ao final no arquivo:

	~/.ssh/authorized_keys

Lembre-se, que caso o arquivo não exista, ele também deverá ser criado.

Processo concluído, basta voltar ao servidor inicial e abrir a conexão com o servidor de destino.

	ssh nomedohost -l usuario

Se a senha não for solicitada, então isto significa que tudo esta funcionando normalmente.