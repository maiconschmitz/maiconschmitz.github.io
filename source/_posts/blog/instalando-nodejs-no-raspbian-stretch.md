---
layout: post
title: Instalando Node.js no Raspbian Stretch
date: 2018-11-28 12:00:00.000000000 -03:00
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
---

| Raspberry Pi 3  | Raspberry Pi 4  |
| --------------- |:---------------:|
| <a href="https://www.amazon.com.br/gp/product/B01CD5VC92?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=4f2021a2a4c1b0a33eec617fd9541a9a&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CD5VC92&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B01CD5VC92" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> | <a href="https://www.amazon.com.br/gp/product/B07TC2BK1X?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=a1723e2362521127a480ceb4a9860096&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TC2BK1X&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B07TC2BK1X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> |
A forma mais simples de instalar o **Node.js** no **Raspbian Stretch** é através do repositório oficial do Node.js.

Atualmente, as seguintes versões do Node.js estão disponíveis:

	Versão 06: https://deb.nodesource.com/setup_6.x
	Versåo 08: https://deb.nodesource.com/setup_8.x
	Versão 10: https://deb.nodesource.com/setup_10.x
	Versão 11: https://deb.nodesource.com/setup_11.x

Neste caso, optei por instalar a versão 10 do Node.js, adicionando o repositório que segue:

	$curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

Em seguida, basta instalar o Node.js

	$sudo apt-get install -y nodejs

Ao final, para testar o Node.js, basta executar:

	$node -v
