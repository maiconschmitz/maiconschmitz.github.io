---
layout: post
title: Instalar Raspberry Pi OS sem teclado, mouse e monitor
date: 2020-06-15 06:00:00.000000000 -03:00
categories:
- Blog
tags:
- macOS
- Linux
- Windows
- Pendrive
- SD
- Raspberry Pi
- Raspbian
- Raspberry Pi OS
- SSH
status: publish
type: post
published: true
---

O processo de instalação do **Raspberry Pi OS** é bastante simples.

Uma vez que você tenha gravado o cartão SD com o instalador, você deverá inseri-lo na Raspberry, conectar um teclado e mouse às entradas USB, bem como um display (monitor) à entrada HDMI e por fim, bastará ligar a alimentação à entrada Micro USB ou USB-C (dependendo do modelo da sua Raspberry Pi) e pronto.

Neste momento, a **Raspberry Pi** irá ligar automaticamente e o boot ocorrerá à partir do cartão SD.

Mas e se você desejar instalar o Raspberry Pi OS em sua Raspberry, sem precisar de um teclado, mouse ou até mesmo um display?

# Instalar Raspberry Pi OS sem teclado, mouse e monitor

Para efetuar a instalação do Raspberry Pi OS sem a necessidade de um teclado, mouse e monitor, você deverá seguir alguns pequenos passos.

Logo após a gravação do instalador, antes de remover o cartão SD do seu computador, siga com os passos abaixo, de acordo com a sua realidade.

Após concluídos os passos abaixo, remova o cartão SD do computador, insira-o na Raspberry e conecte o cabo de energia. Se sua Raspberry não possuir conexão WiFi, também será necessário conectar um cabo de rede.

## Habilitando o acesso Remoto via SSH

Para efetuar o acesso e a instalação de forma remota, você deverá habilitar o acesso via SSH, que por padrão esta inativo.

Logo após a gravação da imagem no cartão SD, sem remove-lo do computador, basta acessar a unidade do cartão SD, que possuirá o nome "boot" e então, você deverá criar em sua raiz, um arquivo de nome "**SSH**", sem extensão, sem conteúdo.

Para fazer isto no Terminal do macOS, por exemplo, basta acessar o volume:

    cd /Volumes/boot

E criar o arquivo:

    touch SSH

## Configuração do WiFi

Para que sua Raspberry Pi conecte-se automaticamente à uma rede WiFi no primeiro boot, você precisará informar as credenciais de acesso em um arquivo apropriado.

Após a gravação da imagem no cartão SD, sem remove-lo do computador, bastará acessar a unidade do cartão SD, que possuirá o nome "boot" e então, deverá criar em sua raiz, um arquivo de nome "**wpa_supplicant.conf**".

Uma vez que tenha criado o arquivo **wpa_supplicant.conf**, abra-o para edição em seu editor de preferência e insira o conteúdo abaixo no mesmo, alterando os pontos adequados.


    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1
    country=<Insira aqui as duas letras correspondentes ao código ISO 3166-1 do seu país>

    network={
      ssid="<Insira aqui o Nome da sua rede Wireless>"
      psk="<Insira aqui a Senha da sua rede Wireless>"
    }

Para saber o código do seu país, você poderá consultar a [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1 "Lista ISO 3166-1").

Para o **Brasil**, basta preencher com **BR**.

# Conectando-se à Raspberry Pi via SSH

Uma vez que sua Raspberry Pi tenha sido ligada, em no máximo 1 minuto, já será possível conectar-se à mesma via SSH.

Por padrão, o **Raspberry Pi OS** define o nome da sua Raspberry Pi em sua rede local, com o nome **raspberrypi.local**.

Isto significa que, você poderá disparar um **ping** contra sua **Raspberry**, utilizando o endereço **raspberrypi.local**, como por exemplo:

    ping raspberrypi.local

Para conectar-se via SSH, você deverá utilizar o usuário: **pi** e a senha: **raspberry**

Se você estiver no Linux ou macOS, acesse o terminal e execute:

    ssh raspberrypi.local -l pi

Se você estiver no Windows, poderá utilizar o [Putty](https://www.putty.org/ "Putty").