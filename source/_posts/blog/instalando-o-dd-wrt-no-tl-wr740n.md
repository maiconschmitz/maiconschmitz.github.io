---
layout: post
title: Instalando o DD-WRT no TL-WR740N
date: 2015-02-09 12:00:42.000000000 -02:00
categories:
- Blog
tags:
- dd-wrt
- linux
- DD-WRT
- Linux
status: publish
type: post
published: true
alias: blog/2015/02/09/instalando-o-dd-wrt-no-tl-wr740n.html
---
O **DD-WRT** é um firmware para roteadores, baseado em **Linux**.
A idéia por trás do **DD-WRT** é a possibilidade de utilizar todos os recursos suportados pelo harware do seu roteador, mesmo quando o firmware padrão do mesmo não o suporta. Neste caso, a alternativa é substituir o firmware de fábrica.

Dentre as principais opções temos o **DD-WRT**: [https://dd-wrt.com](https://dd-wrt.com "https://dd-wrt.com"), o **OpenWRT**: [https://openwrt.org](https://openwrt.org "https://openwrt.org") e o **Tomato**: [http://www.polarcloud.com/tomato](http://www.polarcloud.com/tomato "http://www.polarcloud.com/tomato").

## Encontrando o Firmware

Encontre o Firmware para o seu dispositivo na Router Database do DD-WRT:
[https://dd-wrt.com/support/router-database/](https://dd-wrt.com/support/router-database/ "https://dd-wrt.com/support/router-database/").

Tenha a certeza de selecionar a versão correta para o seu dispositivo.

Em nosso exemplo utilizamos um equipamento da TP-Link, modelo TL-WR740N, versão 4.x.
A informação do modelo e versão (o mais importante), poderá ser encontrada na etiqueta do produto (na parte inferior) ou então na seção administrativa do equipamento (ao efetuar login).

## Especificações do TL-WR740N

O Roteador TL-WR740N da TP-Link, possui as seguintes especificações:

	Chipset: AR9331
	Memória RAM: 32 MB
	Memória FLASH: 4 MB

Na lista de arquivos disponíveis para Download na Router Database você irá encontrar o seguinte:

	Nome: WR740N v4.x Firmware
	Descrição: Webflash image for first installation
	Arquivo: factory-to-ddwrt.bin
	Data: 2013-04-25
	Tamaho: 3,75 MB

	Nome: WR740N v4.x Webrevert
	Descrição: Back to stock
	Arquivo: wr740nv4_webrevert.rar
	Data: 2013-04-24
	Tamaho: 3,36 MB

	Nome: WR740N v4.x Firmware
	Descrição: Webflash image
	Arquivo: tl-wr740nv4-webflash.bin
	Data: 2013-04-25
	Tamanho: 3,75 MB

## Efetuando a instalação

Após efetuar o download dos arquivos anteriormente relacionados, bastará efetuar o login no seu Routeador, através do IP padrão: **192.168.1.1** ou de outro que você tenha configurado.

Acesse a área administrativa e vá até a opção de atualização do firmware.

Neste primeiro momento você irá utilizar o arquivo: **factory-to-ddwrt.bin**.

Confirme a atualização e aguarde o procedimento ser concluído (não desligue o seu roteador enquanto o procedimento é executado).

Quando o upgrade estiver concluído, você irá acessar o IP 192.168.1.1 e já estará acessando/utilizando o DD-WRT.

Neste momento, você deverá definir o seu usuário e senha de acesso.

Feito isto, encontre a área administrativa do DD-WRT e vá até a opção de atualização do firmware.

Neste segundo momento você irá utilizar o arquivo: **tl-wr740nv4-webflash.bin**.

Confirme a atualização e aguarde o procedimento ser concluído (não desligue o seu roteador enquanto o procedimento é executado).

Quando o upgrade estiver concluído, você poderá voltar a acessar o IP 192.168.1.1 e poderá explorar todas as funcionalidades do DD-WRT.

Se desejar, você poderá voltar para o firmware antigo do seu roteador, para isto, bastará efetuar a "atualização de firmware" com o arquivo: **wr740nv4_webrevert.rar**.

Se julgar interessante, você pode configurar uma **VPN** facilmente, seguindo o guia: [https://www.comparitech.com/blog/vpn-privacy/best-vpn-dd-wrt-router/](https://www.comparitech.com/blog/vpn-privacy/best-vpn-dd-wrt-router/ "https://www.comparitech.com/blog/vpn-privacy/best-vpn-dd-wrt-router/").