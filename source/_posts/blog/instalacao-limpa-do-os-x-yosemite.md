---
layout: post
title: Instalação limpa do OS X Yosemite
date: 2014-12-30 19:00:36.000000000 -02:00
categories:
- Blog
tags:
- app-store
- mac-os-x
- pendrive
- terminal
- macos
- App Store
- MAC OS X
- Pendrive
- Terminal
- macOS
status: publish
type: post
published: true
alias: blog/2014/12/30/instalacao-limpa-do-os-x-yosemite.html
---
Neste passo-a-passo irei mostrar como efetuar uma instalação limpa do OS X (clean install)

Com o OS X ainda em funcionamento, efetue o download da Instalação do **OS X Yosemite** através da **Mac App Store**.

Quando o download estiver concluído, cancele o processo de instalação.

Conecte um **Disco**, **PenDrive** ou **Cartão SD**, de no mínimo **8 GB** ao MAC.

Acesse o "Utilitário de Disco" pelo **Spotlight** ou através do diretório "/Applications/".

Estando no "Utilitário de Disco", selecione o Dispositivo, na lista de Drives e clique sobre a aba "Apagar".

Em "Formato" selecione a opção "Mac OS Expandido (Reg. Cronológico)" e em "Nome", defina o nome para "PENDRIVE".

Feito isto, clique no botão "Apagar...".

Quando a formatação estiver concluída, feche o Finder.

Acesse o "Terminal" e execute o Seguinte Comando:

	sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/PENDRIVE --applicationpath /Applications/Install\ OS\ X\ Yosemite.app --nointeraction

O processo de cópia será efetuado e a seguinte mensagem será exibida:

	Erasing Disk: 0%... 10%... 20%... 30%...100%...
	Copying installer files to disk...
	Copy complete.
	Making disk bootable...
	Copying boot files...
	Copy complete.
	Done.

## Partindo para a Instalação

Com o Dispositivo conectado ao MAC, reinicie, ou ligue-o, mantendo a tecla "Option" pressionada.

Deverá ser exibida uma "lista", na qual você deverá selecionar o Pendrive para seguir com a instalação.

Deste ponto em diante, você possui duas opções:

*   Efetuar uma Instalação Limpa
*   Reinstalar o OS X

### Efetuar uma Instalação Limpa:

Selecione o "Utilitário de Disco" e escolha a opção "Continuar".

Selecione o "Disco Principal", vá até a aba "Apagar" e escolha a opção "Apagar".

Aguarde e conclusão do processo.

Feche o "Utilitário de Disco".

Prossiga com uma instalação do zero...

### Reinstalar o OS X:

Bastará selecionar a opção "Reinstalar OS X" e escolher a opção "Continuar".

O processo de instalação e reinstalação, é praticamente o mesmo, com a diferença de a reinstalação manter seus arquivos, programas e algumas configuração, ao passo que a instalação limpa, obviamente irá lhe obrigar à reconfigurar e instalar novamente todos os seus programas, serviços, etc...