---
layout: post
title: Desfazendo um Fusion Drive no macOS
date: 2018-11-25 13:00:00.000000000 -03:00
categories:
- Blog
tags:
- ssd
- hdd
- hd
- fusion
- drive
- mac-os-x
- macos
status: publish
type: post
published: true
---

O **Fusion Drive**, é um recurso que se encontra disponível nas versões mais recentes do macOS e que possibilita efetuar a junção de um ou mais discos, da tal forma à lhe disponibilizar apenas um único **volume virtual**.

Desta forma, é possível juntar 2 SSDs, ou então um SSD e um HDD (HD) em apenas um volume aparente.

Ao efetuar a junção de um SSD com um HD, você terá os benefícios da velocidade do SSD, com a capacidade de armazenamento do HD.

O macOS gerencia o uso deste volume, da melhor forma possível, mantendo arquivos que são mais acessados no SSD, enquanto arquivos que são menos acessados, são mantidos no HD. Tudo isso se dá de forma transparente, sem qualquer intervenção do usuário.

Se você deseja criar um Fusion Drive no macOS, pode verificar o post: [Unindo um SSD com um HD e criando um Fusion Drive no Mac](http://www.maiconschmitz.com.br/blog/2017/07/03/unindo-um-ssd-com-um-hd-e-criando-um-fusion-drive-no-mac "Unindo um SSD com um HD e criando um Fusion Drive no Mac").

Obviamente um Fusion Drive traz benefícios, porém em contra partida, pode trazer o malefício do conjunto ser mais lento do que o uso exclusivo de um SSD.

Nestes casos, pode ser interessante desfazer um Fusion Drive.

## Desfazendo o Fusion Drive

**Atenção:** Desfazer um Fusion Drive, fará com que todo o conteúdo do volume seja perdido/apagado.

Reinicie, ou ligue o Mac, mantendo a tecla "Option" pressionada.

Após o carregamento da interface, selecione a opção de menu "Utilitários" / "Terminal".

Com o Terminal aberto, execute o comando "**diskutil cs list**", para obter uma lista de volumes lógicos:

	$diskutil cs list

Este comando irá listar todos os volumes lógicos existentes no seu Mac.

A informação principal, à ser observada, é o UUID que é listado logo após o título: **Logical Volume Group**.
O UUID é um conjunto de caracteres formado por 5 blocos separados por hífens, algo como:  **XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX**.

Para desfazer o volume lógico, basta executar *diskutil cs delete XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX*, onde XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX é o UUID anteriormente listado pelo comando **diskutil cs list**:

    $diskutil cs delete XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

Após alguns instantes, o processo será concluído.

Deste ponto em diante, o seu **volume virtual** já está desfeito e você pode voltar à utilizar os discos individualmente.
