---
layout: post
title: "NetBeans 8.2 não cria nem abre projetos no macOS (após instalar o JDK 9+)"
date: 2018-07-16 12:00:00.000000000 -03:00
categories:
- blog
tags:
- macos
- netbeans
- java
- jdk
status: publish
type: post
published: true
---

Recentemente, instalei o **JDK 10** e, ao tentar usar o **NetBeans 8.2**, me deparei com um problema em que a IDE não conseguia abrir nem criar novos projetos.

Se o seu NetBeans 8.2 está apresentando este comportamento no macOS, é muito provável que você esteja utilizando uma versão incompatível do JDK.

O **NetBeans 8.2** foi lançado antes do Java 9 e, portanto, **não é oficialmente compatível com o JDK 9, 10 ou versões superiores**. A versão correta do JDK para utilizar com o NetBeans 8.2 é o **JDK 8**.

A solução é remover sua versão atual do JDK (se for superior à 8), instalar o JDK 8 e executar o NetBeans novamente.

**Alternativa:** Para usar versões mais recentes do Java, considere migrar para uma IDE mais nova, como o **Apache NetBeans** (a versão atual mantida pela Apache Software Foundation) ou outras IDEs como IntelliJ IDEA ou VS Code.

## Como remover o JDK do macOS

Para remover uma versão do JDK do macOS, siga os passos abaixo.

O JDK é instalado na pasta `/Library/Java/JavaVirtualMachines`.

1.  Abra o Terminal e execute os comandos abaixo para listar as versões instaladas:

    ```bash
    cd /Library/Java/JavaVirtualMachines
    ls
    ```

2.  Remova o diretório da versão do JDK que você deseja desinstalar (neste caso, qualquer versão superior à 8, como `jdk-10.jdk`):

    ```bash
    sudo rm -rf jdk-10.jdk
    ```
    *(Substitua `jdk-10.jdk` pelo nome correto do diretório)*

Se desejar remover também o plugin de applet (obsoleto) e o painel de controle do Java, execute os seguintes comandos no terminal:

```bash
sudo rm -fr /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
sudo rm -fr /Library/PreferencePanes/JavaControlPanel.prefpane
```

## Instalação do JDK 8 e do NetBeans 8.2

*   O **JDK 8** pode ser encontrado no site da Oracle: [Oracle JDK 8 Downloads](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html).
*   O **NetBeans 8.2** pode ser encontrado na página de download do NetBeans: [NetBeans 8.2 Download](https://netbeans.org/downloads/?pagelang=pt_BR).

Após instalar o JDK 8, a instalação e execução do NetBeans 8.2 devem funcionar sem problemas.
