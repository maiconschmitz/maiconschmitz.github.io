---
layout: post
title: Instalando Node.js no Raspbian
date: 2015-11-25 18:00:00.000000000 -03:00
categories:
- Blog
tags:
- nodejs
- raspberry-pi
- raspbian
- Node.js
- Raspberry Pi
- Raspbian
status: publish
type: post
published: true
alias: blog/2015/11/25/instalando-nodejs-no-raspbian.html
---

| Raspberry Pi 3  | Raspberry Pi 4  |
| --------------- |:---------------:|
| <a href="https://www.amazon.com.br/gp/product/B01CD5VC92?ie=UTF8&linkCode=li2&tag=maiconschmitz-20&linkId=f78888f06dce5d5c188975d236d5588a&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CD5VC92&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=maiconschmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=maiconschmitz-20&language=pt_BR&l=li2&o=33&a=B01CD5VC92" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> | <a href="https://www.amazon.com.br/gp/product/B07TC2BK1X?ie=UTF8&linkCode=li2&tag=maiconschmitz-20&linkId=339987b89111e149a1cb0e347288dd44&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TC2BK1X&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=maiconschmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=maiconschmitz-20&language=pt_BR&l=li2&o=33&a=B07TC2BK1X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> |

A forma mais simples de instalar o **Node.js** no **Raspbian** é através da utilização do repositório da **Adafruit**, o qual se utiliza dos pacotes do projeto **node-arm**.

O repositório da Adafrui é compatível, tanto com a versão **wheezy**, quanto com a versão **jessie** do Raspbian.

Uma vez que você esteja conectado ao Raspberry Pi, via SSH, ou diretamente no terminal do mesmo, basta executar os seguintes comandos:


Adicionando o repositório da Adafruit:

	$curl -sLS https://apt.adafruit.com/add | sudo bash

Instalando o Node.js

	$sudo apt-get install node

Para testar o Node, basta executar:

	$node -v

O repositório da Adafruit também possui outros pacotes que podem ser interessantes, então, dê uma olhada lá:
[Adafruit's Raspberry Pi Package Repository](https://learn.adafruit.com/apt-adafruit-com/installing-packages "Adafruit's Raspberry Pi Package Repository")

E se você não conhece o projeto node-arm, pode dar uma conferida em:
[Node ARM: Node.js + Raspberry Pi](http://node-arm.herokuapp.com/ "node-arm - An easy way to install node.js on the Raspberry Pi")


