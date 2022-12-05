---
layout: post
title: Instalando SSD em MacBook Pro mid 2011
date: 2015-11-11 18:00:00.000000000 -03:00
categories:
- blog
tags:
- mac-os-x
- macos
status: publish
type: post
published: true
alias: blog/2015/11/11/instalando-ssd-em-macbook-pro-mid-2011.html
---

Recentemente efetuei um upgrade em um MacBook Pro de 2011, substituindo o HD magnético por um SSD.

Este procedimento é bastante simples e pode ser feito utilizando qualquer SSD, de qualquer marca.

Diferente de como era à algum tempo atrás, a partir do OS X Yosemite 10.10.4, a Apple traz suporte total ao TRIM para SSDs de terceiros.

## Substituindo o hardware

O procedimento é bastante simples e consiste do seguinte passo-a-passo:

* Com o MacBook Pro desligado, posicione-o de cabeça para baixo, sobre uma superfície plana
* Remova os **parafusos**, são **10** no total (4 no topo, 1 em cada lateral e 4 na parte inferior)
* Ao remover os parafusos, posicione-os de forma organizada, para que possa recoloca-los posteriormente, na mesma ordem.
* Remova a tampa de alumínio
* Na lateral inferior esquerda, você encontrará seu **HD**
* Remova-o com cuidado, desconectando antes o **cabo flat**
* Remova os parafusos **laterais do HD**, pois você irá precisar dos mesmos para prender o SDD
* Prenda os parafusos removidos do HD, no **SSD**
* Insira o SSD no lugar do antigo HD, conectando o cabo flat
* Feche a tampa e prenda os parafusos novamente

## Reinstalando o software

Uma vez que tenha inserido um novo disco, será necessário reinstalar o sistema operacional:

* Dê boot no MacBook, com a tecla **Option** pressionada
* No menu Utilitários, acesse o **Utilitário de Disco**
* Selecione o seu Disco, na lateral esquerda e clique na opção Apagar
* Defina o nome como **OSX**, em formato selecione **OS X Expandido (Reg. Cronológico)** e em Esquema, selecione **Mapa de Partição GUID**
* Clique em Apagar

Quando isto estiver concluído, reinicie o MacBook com a tecla **Option** pressionada e efetue a instalação do OS X.

## Ativando o TRIM para o SSD

Após a conclusão da instalação do OS X, o último passo a ser efetuado, á a ativação do TRIM.

Para tal, basta abrir uma janela do Terminal e digitar o comando **sudo trimforce enable** e confirmar quando solicitado.

Seu Mac será reiniciado e feito isto, tudo estará concluído.

