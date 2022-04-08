---
layout: post
title: Criando cartão SD de Instalação do Raspberry Pi OS no macOS, Linux e Windows
date: 2020-06-08 06:00:00.000000000 -03:00
categories:
- Blog
tags:
- mac-os-x
- macos
- linux
- windows
- pendrive
- sd
- raspberry-pi
- raspbian
- raspberry-pi-os
- MAC OS X
- macOS
- Linux
- Windows
- Pendrive
- SD
- Raspberry Pi
- Raspbian
- Raspberry Pi OS
status: publish
type: post
published: true
---

O **Raspberry Pi** dispensa apresentações, mas basicamente é um mini computador com arquitetura **ARM**, composto por um hardware que integra tudo em um única placa, que à depender das suas versões, possui conexão de Audio, HDMI, USB, SD, Ethernet, GPIO, dentre outras.

De tamanho diminuto, comparável ao tamanho de um cartão de crédito, ou até mesmo menor, na versão Raspberry Pi Zero/W.

Diversos são os sistemas operacionais disponíveis para o Raspberry Pi, tais como o Ubuntu, OSMC, Mozilla WebThings, RISC OS e o agora oficial Raspberry Pi OS.

O Raspberry Pi OS é a versão oficial do sistema operacional do Raspberry Pi, sendo até o momento, compatível apenas com 32bits, mas é claro, por pouco tempo, visto que esforços estão sendo aplicados, para compatibiliza-lo com 64bits, o que irá possibilitar um maior aproveitamento da memória RAM (endereçamento acima de 3 GB), importante principalmente para a nova Raspberry Pi 4, que recentemente recebeu uma atualização, que em uma de suas versões que passa à vir equipada com 8GB de RAM.

Acessando o site da [https://www.raspberrypi.org](https://www.raspberrypi.org/downloads/ "https://www.raspberrypi.org"), é possível baixar na seção [Downloads](https://www.raspberrypi.org/downloads/ "Download Raspberry Pi OS"), a última versão do Raspberry Pi OS, o qual anteriormente era conhecido por Raspbian e que estava em sua versão Buster.

| Raspberry Pi 3  | Raspberry Pi 4  |
| --------------- |:---------------:|
| <a href="https://www.amazon.com.br/gp/product/B01CD5VC92?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=4f2021a2a4c1b0a33eec617fd9541a9a&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CD5VC92&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B01CD5VC92" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> | <a href="https://www.amazon.com.br/gp/product/B07TC2BK1X?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=a1723e2362521127a480ceb4a9860096&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TC2BK1X&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B07TC2BK1X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> |

## Criando o cartão SD

O [Etcher](https://www.balena.io/etcher/ "https://www.balena.io/etcher/"), é um softwate [OpenSource](https://github.com/balena-io/etcher "https://github.com/balena-io/etcher"), multiplataforma (macOS, Linux e Windows), que permite efetuar a gravação de imagens em cartões SD e Drives USB de forma bastante rápida, simples e intuitiva.

Após baixar e executar o [Etcher](https://www.balena.io/etcher/ "https://www.balena.io/etcher/"), bastará selecionar a imagem anteriormente baixada do site da Raspberry Pi. Não é preciso descompactar a imagem e inclusive é possível apenas informar uma URL para a imagem.

Uma vez que a gravação da imagem estiver concluída, é possível partir para a instalação.

### Alternativa ao Etcher

Uma alternativo ao [Etcher](https://www.balena.io/etcher/ "https://www.balena.io/etcher/"), é que é possível de ser executada via linha de comando, seja no macOS ou Linux, é através do comando **dd**.

Se quiser saber mais, sobre como instalar desta forma, poderá ler o artigo [Criando cartão SD com Raspbian no Mac OS X](https://www.maiconschmitz.com.br/blog/2015/08/24/criando-sd-com-raspbian-no-mac-os-x/).