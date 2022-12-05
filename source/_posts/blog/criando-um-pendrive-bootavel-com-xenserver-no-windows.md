---
layout: post
title: Criando um Pendrive bootavel com XenServer no Windows
date: 2014-08-18 11:30:53.000000000 -03:00
categories:
- blog
tags:
- pendrive
- windows
- xenserver
status: publish
type: post
published: true
alias: blog/2014/08/18/criando-um-pendrive-bootavel-com-xenserver-no-windows.html
---

O **XenServer** é uma plataforma de virtualização open-source que pode ser utilizada para gerenciar infraestruturas virtuais em nuvem, servidor e desktop.

Através deste tutorial você irá aprender como criar um Pendrive bootavel com o XenServer, para efetuar a sua própria instalação.

Primeiramente, você deverá ter em mãos, a ISO do **XenServer**. Caso você ainda não a possua, então poderá obte-la do site do XenServer, através do link: http://xenserver.org/overview-xenserver-open-source-virtualization/download.html.
Atualmente, o XenServer encontra-se na versão 6.2.

O próximo passo, será obter uma cópia do **Universal USB Installer**, através deste link: http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/.

Com os dois pré-requisito preenchidos e estando em um equipamento rodando o sistema operacional Windows, siga os passo a seguir:

*   Conecte o **Pendrive** ao equipamento.
*   Execute o software **Universal USB Installer**.
*   Estando com o Universal USB Installer em execução, siga os seguintes passos:
*   - Em "Step 1", selecione "Other" na combo-box de opções.
*   - Em "Step 2", clique em "Browse" e selecione a ISO do XenServer.
*   - Em "Step 3", selecione o seu Pendrive (preferenciamente já formatado em (FAT32)
*   - Clique em "Create" e aguarde o processo ser concluído.

Quando o processo for concluído, bastará remover o seu Pendrive e partir para a instalação.
