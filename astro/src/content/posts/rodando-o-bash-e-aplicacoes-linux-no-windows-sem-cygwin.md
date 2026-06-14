---
title: "Rodando o Bash e Aplicações Linux no Windows com WSL"
date: 2018-07-03 12:00:00.000000000 -03:00
tags:
- bash
- windows
- powershell
- wsl
- cygwin
- linux
published: true
---

Recentemente, o **Windows 10** (e agora o **Windows 11**) incorporou o **WSL (Windows Subsystem for Linux)**, ou Subsistema Windows para Linux.

Com o WSL, você pode utilizar o **bash** e uma infinidade de pacotes e aplicações Linux diretamente no Windows, de forma nativa e com alta performance, sem a necessidade de uma máquina virtual tradicional ou ferramentas de compatibilidade como o Cygwin.

O WSL 1 não suportava aplicações gráficas, mas com o advento do **WSL 2** e o **WSLg**, agora é possível rodar até mesmo aplicações gráficas do Linux diretamente no Windows. Com ele, você pode rodar ambientes de desenvolvimento completos com **Python**, **PHP**, **Node.js**, **Docker**, **Apache**, **Nginx** e uma infinidade de outras ferramentas de linha de comando, como `grep`, `sed`, `awk`, etc.

## Habilitando o WSL

Antes de instalar uma distribuição Linux, você precisa habilitar o recurso do WSL.

1.  **Abra o PowerShell como Administrador:**
    Clique com o botão direito no menu Iniciar e selecione "Windows PowerShell (Admin)" ou "Terminal (Admin)".

2.  **Execute o comando de instalação:**
    O processo foi simplificado. Para instalar o WSL e a distribuição padrão (Ubuntu), basta executar:

    ```powershell
    wsl --install
    ```

    Este comando irá habilitar os recursos necessários, baixar a versão mais recente do kernel do Linux, definir o WSL 2 como padrão e instalar a distribuição Ubuntu para você.

    Se preferir o método mais antigo (manual), execute:
    ```powershell
    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
    ```
    E, para o WSL 2, habilite também a "Plataforma de Máquina Virtual":
    ```powershell
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    ```
    Após habilitar os recursos, reinicie o computador quando solicitado.

## Instalando uma Distribuição Linux

Feito isso, basta acessar a **Microsoft Store** e procurar pela distribuição de sua preferência.

Eu optei por instalar o [Ubuntu](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6), mas você é livre para escolher qualquer uma das [distribuições disponíveis](https://aka.ms/wslstore).

Após a instalação, abra a distribuição a partir do menu Iniciar. Na primeira vez, ela pedirá para você criar um nome de usuário e uma senha, que serão suas credenciais para o ambiente Linux.

Caso você utilize uma versão mais antiga do Windows que não suporte o WSL, ainda pode optar pelo [Cygwin](https://www.cygwin.com/), que, embora seja menos integrado, ainda é de grande ajuda.
