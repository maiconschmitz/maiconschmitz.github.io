---
layout: post
title: Fazendo Backup de Pendrives e Cartões SD no Mac OS X
date: 2015-12-23 18:00:00.000000000 -03:00
categories:
- Blog
tags:
- Backup
- MAC OS X
- Pendrive
- SD
- macOS
status: publish
type: post
published: true
alias: blog/2015/12/23/fazendo-backup-de-pendrive-e-sd-no-mac-os-x.html
---

Ao trabalhar com Pendrives e cartões SD, para testar distribuições à serem executadas no **Raspberry Pi**, por exemplo, pode ser útil, fazer cópias de segurança (backup) de imagens que você já tenha configurado, executado e atualizado.

Neste caso, algo bastante útil e simples de ser feito, é efetuar uma cópia (criar uma imagem) do Pendrive ou Cartão SD, de tal forma que você possa recupera-la posteriormente, ou até então replicar para diversos Pendrives ou Cartões SD.

## Efetuando a cópia...

Insira o Pendrive ou Cartão SD no Mac

Acesse o aplicativo Terminal.app, pelo Spotlight (⌘ + Tecla Espaço) ou diretamente através do diretório /Applications/Utilities/

Execute o comando "**diskutil list**", para obter uma lista de discos disponíveis:

	$diskutil list

O retorno do **diskutil list**, poderá ser semelhante à isto:

	/dev/disk0
	   #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:      GUID_partition_scheme                        *120.0 GB   disk0
       1:                        EFI EFI                     209.7 MB   disk0s1
       2:          Apple_CoreStorage OSX                     119.2 GB   disk0s2
       3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
    /dev/disk1 (internal, virtual):
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:                  Apple_HFS OSX                    +118.8 GB   disk1
                                 Logical Volume on disk0s2
                                 B34DD1A2-6928-4216-9B11-76DDF772B04F
                                 Unlocked Encrypted
	/dev/disk2
	   #:                       TYPE NAME                    SIZE       IDENTIFIER
	   0:     FDisk_partition_scheme                        *4.0 GB     disk2
	   1:                 DOS_FAT_32 RASPBPI                 4.0 GB     disk2s1


Identifique o disco relativo ao dispositivo, neste caso, é o /dev/disk2

Desmonte o disco, com o comando "**diskutil unmountDisk**"

	$diskutil unmountDisk /dev/disk2

Uma vez que o disco esteja desmontado, você poderá acessa-lo e altera-lo diretamente.

Para efetuar a cópia, iremos utilizar o utilitário **dd**, o qual já se encontra disponível no Mac OS X.

Para saber mais sobre o dd, basta consultar o Manual, digitando "**man dd**" no Terminal.

A sintaxe básica do dd é:

	dd if=origem of=destino

Substitua **origem** e **destino**, pelo disco de origem e pelo caminho e nome do arquivo de destino, respectivamente.

O nome do arquivo de destino pode possuir qualquer nome e extensão, bem como pode ser salvo onde você bem entender, logo teremos algo semelhante à:

	dd if=/dev/rdisk2 of=~/imagens/2015-12-23-backup-raspbian.img bs=128m

Note que, para acelerar o processo de cópia, complementamos o comando, definindo o parâmetro block size (bs) como 128m e alteramos o disco de destino incluindo um "**r**" antes de "**disk2**".

O **bs** indica que os **blocos** de leitura e escrita devem possuir o mesmo tamanho, enquanto que o "**r**" define que o disco deve ser acessado no modo **raw**.

Quando o processo de cópia for concluído, você receberá uma mensagem informando o tempo decorrido e a quantidade de bytes transferidos.

## Restaurando a cópia...

Quando desejar restaurar a cópia, bastará efetuar o procedimento reverso, definindo o arquivo de origem em if= e o dispositive de destivo em of=, algo como:

	dd if=~/imagens/2015-12-23-backup-raspbian.img of=/dev/rdisk2 bs=128m

Quando o processo de cópia for concluído, bastará utilizar o Cartão ou Pendrive normalmente...