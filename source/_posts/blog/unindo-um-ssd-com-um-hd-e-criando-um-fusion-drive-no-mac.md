---
layout: post
title: Unindo um SSD com um HD e criando um Fusion Drive no Mac
date: 2017-07-03 13:00:00.000000000 -03:00
categories:
- blog
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
alias: blog/2017/07/03/Unindo-um-SSD-com-um-HDD-e-criando-um-Fusion-Drive-no-Mac/
---
Após a adição de um segundo HD ao MacBook Pro mid 2011, o qual você pode ver o passo a passo em [Instalando um segundo HD em um MacBook Pro mid 2011](http://www.maiconschmitz.com.br/blog/2017/04/28/instalando-2-hd-em-macbook-pro-mid-2011 "Instalando um segundo HD em um MacBook Pro mid 2011"), uma opção, é efetuar a criação de um **Fusion Drive**.

O **Fusion Drive**, é um recurso disponível nas versões mais recentes do macOS, que possibilita efetuar a junção de um ou mais discos, da tal forma à lhe disponibilizar apenas um **volume virtual**.

Assim, é possível juntar 2 SSDs de tamanhos diferentes em apenas um volume aparente, ou então um SSD e um HDD (HD).
Ao efetuar a junção de um SSD com um HD, você terá os benefícios da velocidade do SSD, com a capacidade de armazenamento do HD.
O macOS irá gerenciar o uso deste volume, da melhor forma possível, mantendo arquivos que são mais acessados no SSD, enquanto arquivos que são menos requisitados, serão mantidos no HD. Tudo isso se dá de forma transparente para o usuário, onde o macOS irá mover os arquivos de um disco para o outro, conforme necessário e nenhuma ação da parte do usuário se fará necessária, uma vez que aparentemente, existirá apenas um único volume visível.

Neste procedimento que apresento agora, demonstro como juntar um SSD com um HD, resultando em um Fusion Drive, o qual utilizei posteriormente, para efetuar a [Instalação Limpa do macOS Sierra](http://www.maiconschmitz.com.br/blog/2017/06/02/instalacao-limpa-do-mac-os-sierra "Instalação Limpa do macOS Sierra").

## Criando o Fusion Drive

**Atenção:** Criar um Fusion Drive, fará com que todo o conteúdo dos discos selecionados para a criação do Fusion Drive sejam perdidos/apagados. 

Reinicie, ou ligue o Mac, mantendo a tecla "Option" pressionada.

Após o carregamento da interface, selecione a opção de menu "Utilitários" / "Terminal".

Com o Terminal aberto, execute o comando "**diskutil list**", para obter uma lista de discos disponíveis:

	$diskutil list

Este comando irá listar todos os discos, volumes e dispositivos existentes no seu Mac.
Os principais, à serem observados, são os iniciais com caminhos como: **dev/disk0**, **dev/disk1**, **dev/disk2**, etc.
Observe que estes volumes, são os mesmos referentes aos tamanhos do seu SSD, HD, Pendrive/SD (se algum estiver conectado), etc.

Verifique o caminho dos discos que deseja "juntar" e execute o comando de criação do Fusion Drive.

    $diskutil coreStorage create 'Fusion' /dev/disk0 /dev/disk1

No comando acima, defini o nome do meu novo 'disco' como 'Fusion' e juntei os meus 2 primeiros discos, os quais são respectivamente /dev/disk0 e /dev/disk1, sendo disk0 o SSD e disk1, o meu HD.

Após alguns instantes, o processo será concluído.
Observe o resultado que será impresso no Terminal.
Atente para uma das linhas finais, iniciada com: **Core Storage LVG UUID:**.
Anote o UUID (conteúdo após o :, com estrutura semelhante à: XXXXXX-XXX-XXX-XXXXXX), pois ele será utilizado no comando em seguida:

    $diskutil coreStorage createVolume XXXXXX-XXX-XXX-XXXXXX jhfs+ 'Fusion' 100%

No comando acima, XXXXXX-XXX-XXX-XXXXXX deve ser substituído pelo UUID que você copiou do resultado de execução do comando **diskutil coreStorage create ...**.
O restante dos parâmetros deve ser mantido como no comando original.

Novamente, após alguns instantes, o processo será concluído.
Deste ponto em diante, o seu novo **volume virtual** já está criado e pronto para uso.
Agora o seu Mac poderá desfrutar da velocidade do SSD e da capacidade de armazenamento do HD, tudo em um único volume.