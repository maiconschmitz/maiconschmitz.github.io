---
layout: post
title: Criando cartão SD com Raspbian no Mac OS X
date: 2015-08-24 18:15:00.000000000 -03:00
categories:
- Blog
status: publish
type: post
published: true
alias: blog/2015/08/24/criando-sd-com-raspbian-no-mac-os-x.html
---

O **Raspberry Pi** é um computador com processador **ARM**, que possui todo o seu hardware integrado em um única placa, do tamanho de um cartão de crédito e o **Raspbian** é uma versão do **Linux Debian** otimizada para executar no Raspberry Pi.

Para obter uma cópia do Raspbian, basta acessar o site de Download do mesmo, no link: [https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/ "Download Raspbian")

Uma vez que você tenha efetuado o Download da Raspbian, bastará descompactar o conteúdo do arquivo .zip e seguir com a gravação do mesmo em um cartão SD.

Prefira a escolha de um **cartão SD** de no mínimo **4 GB** e preferencialmente de **Classe 10** (maior velocidade de leitura e gravação).

Feito isto, insira o cartão SD no Mac

Acesse o aplicativo Terminal.app, pelo Spotlight (⌘ + Tecla Espaço) ou diretamente através do diretório /Applications/Utilities/

Execute o comando "**diskutil list**", para obter uma lista de discos disponíveis:

	$diskutil list

O retorno do **diskutil list**, poderá ser semelhante à isto:

	/dev/disk0
	   #:                       TYPE NAME                    SIZE       IDENTIFIER
	   0:      GUID_partition_scheme                        *320.1 GB   disk0
	   1:                        EFI EFI                     209.7 MB   disk0s1
	   2:          Apple_CoreStorage                         319.2 GB   disk0s2
	   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
	/dev/disk1
	   #:                       TYPE NAME                    SIZE       IDENTIFIER
	   0:                  Apple_HFS OSX                    *318.8 GB   disk1
	                                 Logical Volume on disk0s2
	                                 279B8133-B7A8-44B7-840F-F46450EDAC3E
	                                 Unlocked Encrypted
	/dev/disk2
	   #:                       TYPE NAME                    SIZE       IDENTIFIER
	   0:     FDisk_partition_scheme                        *4.0 GB     disk2
	   1:                 DOS_FAT_32 RASPBPI                 4.0 GB     disk2s1


Identifique o disco relativo ao cartão SD, neste caso, é o /dev/disk2

Desmonte o disco, com o comando "**diskutil unmountDisk**"

	$diskutil unmountDisk /dev/disk2

Uma vez que o disco esteja desmontado, você poderá acessa-lo e altera-lo diretamente.

Localize a imagem IMG do Raspbian, a qual deseja gravar no cartão SD ou copie-a para um local de fácil "acesso".

Para efetuar a cópia, iremos utilizar o utilitário **dd**, o qual já se encontra disponível no Mac OS X.

Para saber mais sobre o dd, basta consultar o Manual, digitando "**man dd**" no Terminal.

A sintaxe básica do dd é:

	dd if=origem of=destino


##Partindo para a cópia...

Substitua **origem** e **destino**, pelo arquivo IMG e pelo disco de destino respectivamente, logo teremos algo semelhante à:

	dd if=2015-05-05-raspbian-wheezy.img of=/dev/rdisk2 bs=128m

Note que, para acelerar o processo de cópia, complementamos o comando, definindo o parâmetro block size (bs) como 128m e alteramos o disco de destino incluindo um "**r**" antes de "**disk2**".

O **bs** indica que os **blocos** de leitura e escrita devem possuir o mesmo tamanho, enquanto que o "**r**" define que o disco deve ser acessado no modo **raw**.

Quando o processo de cópia for concluído, você receberá uma mensagem informando o tempo decorrido e a quantidade de bytes transferidos.

Tudo pronto, agora basta inserir o cartão SD no Raspberry Pi, conectar os demais periféricos e liga-lo.