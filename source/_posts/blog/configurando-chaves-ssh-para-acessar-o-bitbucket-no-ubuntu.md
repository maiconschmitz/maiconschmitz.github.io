---
layout: post
title: Configurando chaves SSH para acessar o BitBucket no Ubuntu
date: 2014-07-07 11:30:54.000000000 -03:00
categories:
- Blog
tags:
- mac-os-x
- ssh
- terminal
- ubuntu
- macos
- MAC OS X
- SSH
- Terminal
- Ubuntu
- macOS
status: publish
type: post
published: true
alias: blog/2014/07/07/configurando-chaves-ssh-para-acessar-o-bitbucket-no-ubuntu.html
---
Uma boa escolha para trabalhar com o **BitBucket**, sem a necessidade de digitar a sua senha a cada **push** ou **pull** do **GIT**, é a configuração de **chaves SSH**.
Seja no **Linux**, **MAC OS X** ou até **Windows**, a configuração de chaves SSH é uma ótima e segura opção.

No exemplo abaixo, será demonstrado um passo a passo de como efetuar a configuração de chaves SSH no Ubuntu Linux.

Estando no terminal, acesse o diretório .ssh da sua home (~/.ssh)

	$ cd ~/.ssh

Caso o diretório não exista, crie-o

	$ mkdir ~/.ssh

E então acesse-o...

	$ cd ~/.ssh

Se o diretório existir, procure pela sua chave pública.
A chave pública estará em um arquivo nomeado como **id_rsa.pub** ou **id_dsa.pub**

	$ ls

Se nenhum dos arquivos: id_rsa.pub ou id_dsa.pub existir, então significa que você deverá cria-los:

## Criando sua chave pública

Para criar a sua chave publica, basta executar o comando abaixo, lembrando de alterar o endereço "ENDERECO-DE-EMAIL@DOMINIO.COM.BR" pelo seu e-mail.

	$ ssh-keygen -t rsa -C "ENDERECO-DE-EMAIL@DOMINIO.COM.BR"

Quando for solicitado o nome do arquivo a ser criado, defina um de sua preferência ou simplesmente confirme a sugestão, pressionando <Enter>
Quando solicitar uma passphrase, defina uma senha ou deixe-a em branco, simplesmente pressionando <Enter>

**Importante:**

*   Defina uma passphrase, caso você deseje que uma senha seja solicitada ao acessar o repositório.
*   Deixe a passphrase em branco, caso você deseje que nenhuma senha seja solicitada ao acessar o repositório. Este método é mais simples,
    já que nenhuma senha será solicitada, bem como é o propósito de criação das chaves neste caso.

Agora que a sua chave esta criada, liste os arquivos do diretório ~/.ssh

	$ ls ~/.ssh

Visualize e copie o conteúdo da sua chave, tomando o cuidado para não adicionar espaços extras no início ou no final do arquivo

	$ cat ~/.ssh/id_rsa.pub

Sua chave normalmente irá iniciar com a string: "ssh-rsa " e terminar com o endereço de e-mail anteriormente informado: "ENDERECO-DE-EMAIL@DOMINIO.COM.BR"

## Configurando no BitBucket

Acesse o BitBucket e efetue o login em sua conta: [http://www.bitbucket.org](http://www.bitbucket.org "http://www.bitbucket.org")

Clique no seu "Avatar" e selecione o item de menu "Gerenciar conta"

No menu esquerdo, no grupo "SECURITY" selecione "Chaves SSH"

Clique em "Adicionar Chave"

Defina um "Label" para identificar esta chave:
Exemplo: "ENDERECO-DE-EMAIL@DOMINIO.COM.BR em ubuntu"

Cole o conteúdo da chave (anteriormente copiado) no campo "Key"

Confirme, clicando em “Adicionar chave”.

Volte ao Terminal para testar se a adição das chaves funcionou de forma correta

	$ ssh -T git@bitbucket.org

Quando solicitar se você deseja realmente conectar:
_"Are you sure you want to continue connecting (yes/no)?"_

Confirme, digitando: yes

Se você definiu um passphrase, então no próximo passo, lhe será solicitada uma passphrase; Neste caso, digite a mesma que você utilizou ao criar a sua chave pública

Se no terminal lhe mostrar uma mensagem contendo: "logged in as XYZ", onde XYZ é o nome do seu usuário, então a adição da chave pública funcionou de acordo!

Processo Concluído.