---
title: "Instalando um SSD em um MacBook Pro (Mid 2011)"
date: 2015-11-11 18:00:00.000000000 -03:00
tags:
- ssd
- hd
- "mac os x"
- macos
published: true
alias: /blog/2015/11/11/instalando-ssd-em-macbook-pro-mid-2011.html
---

Recentemente, efetuei um upgrade em um MacBook Pro de 2011, substituindo o HD magnético original por um SSD. Este é um dos melhores upgrades que você pode fazer para dar uma nova vida a um Mac mais antigo.

Este procedimento é bastante simples e pode ser feito utilizando qualquer SSD SATA de 2.5 polegadas, de qualquer marca.

A partir do OS X Yosemite 10.10.4, a Apple incluiu uma ferramenta nativa (`trimforce`) que permite a ativação do TRIM para SSDs de terceiros, o que é crucial para manter a performance do drive a longo prazo.

## Substituindo o Hardware

O procedimento é bastante simples e consiste no seguinte passo a passo:

1.  Com o MacBook Pro desligado, posicione-o de cabeça para baixo sobre uma superfície plana e limpa.
2.  Remova os **10 parafusos** da tampa inferior. Lembre-se que alguns deles têm tamanhos diferentes.
3.  Ao remover os parafusos, posicione-os de forma organizada para que possa recolocá-los posteriormente na mesma ordem.
4.  Remova a tampa de alumínio com cuidado.
5.  Na lateral inferior esquerda, você encontrará o **HD**. Ele é preso por uma pequena barra plástica com dois parafusos. Remova essa barra.
6.  Desconecte o **cabo flat SATA** do HD com cuidado e remova o disco do compartimento.
7.  O HD original possui quatro parafusos Torx nas laterais, que servem como pinos de montagem. Remova-os, pois você precisará deles para prender o SSD.
8.  Instale esses quatro parafusos no seu novo **SSD**.
9.  Conecte o cabo flat SATA ao SSD e posicione-o no lugar do antigo HD.
10. Recoloque a barra plástica para prender o SSD e feche a tampa do MacBook, recolocando todos os parafusos.

## Reinstalando o Sistema Operacional

Com o novo disco instalado, será necessário reinstalar o macOS:

1.  Inicie o MacBook pressionando as teclas **Command (`⌘`) + R** para entrar no Modo de Recuperação.
2.  Na janela de "Utilitários do macOS", acesse o **"Utilitário de Disco"**.
3.  Selecione o seu novo SSD na barra lateral esquerda e clique na opção **"Apagar"**.
4.  Configure as opções:
    *   **Nome:** `Macintosh HD` (ou o nome que preferir)
    *   **Formato:** `Mac OS Expandido (Reg. Cronológico)` (para o El Capitan ou anterior) ou `APFS` (para o High Sierra ou posterior).
    *   **Esquema:** `Mapa de Partição GUID`.
5.  Clique em **"Apagar"** para formatar o disco.
6.  Após a formatação, feche o "Utilitário de Disco", volte para a janela principal e selecione **"Reinstalar o macOS"**. Siga as instruções, escolhendo o SSD recém-formatado como destino.

## Ativando o TRIM para o SSD

Após a conclusão da instalação do macOS, o último passo a ser efetuado é a ativação do TRIM.

Para tal, basta abrir o **Terminal** (em `Aplicações > Utilitários`) e digitar o seguinte comando:

```bash
sudo trimforce enable
```

Você precisará confirmar a ação e digitar sua senha. Seu Mac será reiniciado e, feito isso, o TRIM estará ativado e tudo estará concluído.
