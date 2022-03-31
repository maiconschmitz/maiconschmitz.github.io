---
layout: post
title: Criando um Pendrive bootavel com Ubuntu no Mac OS X
date: 2013-07-24 11:00:39.000000000 -03:00
categories:
- Blog
tags:
- mac-os-x
- pendrive
- ubuntu
- macos
- MAC OS X
- Pendrive
- Ubuntu
- macOS
status: publish
type: post
published: true
alias: blog/2013/07/24/criando-pendrive-bootavel-com-ubuntu-no-mac-os-x.html
---
De posse da imagem ISO e de um Pendrive, basta seguir alguns poucos passos no terminal do Mac, para executar esta simples tarefa, seja para criar um Pendrive bootavel com Ubuntu, outra Distribuição Linux ou até mesmo outro OS qualquer.

Primeiramente, conecte o **Pendrive** ao **Mac**

Acesse o aplicativo **Terminal.app**, pelo **Spotlight** (⌘ + Tecla Espaço) ou diretamente através do diretório **/Applications/Utilities/**

Execute o comando "**diskutil list**", para obter uma lista de discos disponíveis:

	$diskutil list

O retorno do **diskutil list**, poderá ser semelhante à isto:

	/dev/disk0
	   #:                       TYPE NAME                    SIZE       IDENTIFIER
	   0:      GUID_partition_scheme                        *320.1 GB   disk0
	   1:                        EFI                         209.7 MB   disk0s1
	   2:                  Apple_HFS Macintosh HD            319.2 GB   disk0s2
	   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
	/dev/disk1
	   #:                       TYPE NAME                    SIZE       IDENTIFIER
	   0:     FDisk_partition_scheme                        *4.0 GB     disk1
	   1:                 DOS_FAT_32 SCHMITZ                 4.0 GB     disk1s1

Identifique o disco relativo ao Pendrive, neste caso, é o **/dev/disk1**

Desmonte o disco, com o comando "**diskutil unmountDisk**"

	$diskutil unmountDisk /dev/disk1

Note, que "/dev/disk1" neste caso é o Pendrive/Disco anteriormente identificado através do comando **diskutil list**.

Uma vez que o disco esteja desmontado, você poderá acessa-lo e altera-lo à baixo nível.

Localize a imagem ISO que deseja gravar no Pendrive ou copie-a para um local de fácil "acesso".

Para efetuar a cópia, iremos utilizar o utilitário **dd**, o qual já se encontra disponível no Mac OS X.

Para saber mais sobre o **dd**, basta consultar o Manual, digitando "man dd" no Terminal.

A sintaxe básica do **dd** é:

	dd if=origem of=destino

## Partindo para a cópia...

Substitua **origem** e **destino**, pelo arquivo ISO e pelo disco de destino respectivamente, logo teremos algo semelhante à:

	dd if=ubuntu-13.04-server-amd64.iso of=/dev/rdisk1 bs=128m

Note que, para acelerar o processo de cópia, complementamos o comando, definindo parâmetro **block size** (bs) como **128m** e alteramos o disco de destino incluindo um "**r**" antes de "**disk1**".

O **bs** indica que os blocos de leitura e escrita devem possuir o mesmo tamanho, enquanto que o "**r**" define que o disco deve ser acessado no modo **raw**.

Quando o processo de cópia for concluído, você receberá uma mensagem informando o tempo decorrido e a quantidade de bytes transferidos.

Tudo pronto, agora basta desconectar o Pendrive e utiliza-lo.