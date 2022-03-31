---
layout: post
title: Netbeans 8.2 não cria nem abre projetos no macOS
date: 2018-07-16 12:00:00.000000000 -03:00
categories:
- Blog
tags:
- macos
- netbeans
- java
- jdk
- macOS
- Netbeans
- Java
- JDK
status: publish
type: post
published: true
---

Recentemente, instalei a **JDK 10** e ao instalar o **Netbeans 8.2**, me deparei com uma aplicação que não abria, nem criava projetos.

Se o seu **Netbeans 8.2** esta apresentando este problema, então, muito provavelmente você possui uma versão incorreta da JDK instala.

A versão correta da JDK para utilizar com o **Netbeans 8.2**, é a **JDK 8**!

Então, remova a sua **JDK 10**, instale a **JDK 8** e execute o Netbeans, sem maiores problemas.

## Como remover o Java do macOS

Para remover o Java do macOS, existem algum simples passos à serem seguidos.

A JDK pode ser localizada na pasta: /Library/Java/JavaVirtualMachines

Então, abra o terminal e execute os comandos abaixo:

    cd /Library/Java/JavaVirtualMachines
    ls
    sudo rm -rf jdk*

Se desejar remover também o plugin e painel do Java, ainda no terminal, execute os seguintes comandos:

    sudo rm -fr /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
    sudo rm -fr /Library/PreferencePanes/JavaControlPanel.prefpane

## Instalação da JDK e do Netbeans

A JDK 8 pode ser encontrada no seguinte link de [Download](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html "JDK 8").

O Netbeans 8.2 pode ser encontrado no seguinte de [Download](https://netbeans.org/downloads/?pagelang=pt_BR "Netbeans 8.2").
