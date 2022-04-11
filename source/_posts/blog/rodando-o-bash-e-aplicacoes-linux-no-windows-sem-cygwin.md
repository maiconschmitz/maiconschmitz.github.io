---
layout: post
title: Rodando o bash e aplicações Linux no Windows sem Cywin
date: 2018-07-03 12:00:00.000000000 -03:00
categories:
- Blog
tags:
- bash
- windows
- powershell
- cygwin
status: publish
type: post
published: true
---

Recentemente, o **Windows 10** em sua versão mais atualizada, incorporou o **WSL**, Subsistema Windows para Linux (do inglês Windows Subsystem for Linux).

Com isto, você pode optar por utilizar o **bash** e uma infinidade de pacotes e aplicações Linux, diretamente no Windows.

O Subsistema Windows para Linux não suporta aplicações gráficas, pois este não é o seu propósito, mas com ele, você pode rodar **Python**, **PHP**, **Node.js**, **Apache**, **Nginx** e uma infinidade de outros recursos, como **grep**, **sed**, etc e tudo isso, sem precisar instalar o **Cygwin**.

Antes de efetuar a instalação do **WSL**, não se esqueça de habilitar o recurso.
Para isto, abra o **PowerShell** como Administrador e execute:

    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

Feito isto, basta acessar a Windows Store e efetuar a instalação da distribuição de sua preferência.

Eu optei por instalar o [Ubuntu](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot%3aoverviewtab "Ubuntu"), mas você é livre para escolher qualquer uma das [distribuições](https://aka.ms/wslstore "distribuições") disponíveis.

Caso você não possua o Windows 10, pode optar por utilizar o [Cygwin](https://www.cygwin.com/ "Cygwin"), o que já é de grande ajuda!