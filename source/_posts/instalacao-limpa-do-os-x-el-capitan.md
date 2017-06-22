---
layout: post
title: Instalação Limpa do OS X El Capitan
date: 2015-10-02 12:30:00.000000000 -03:00
categories:
- Blog
status: publish
type: post
published: true
alias: blog/2015/10/02/instalacao-limpa-do-os-x-el-capitan.html
---
Abaixo irei detalhar o procedimento para efetuar a instalação limpa do recém lançado OS X El Capitan.

Com o OS X ainda em funcionamento, efetue o download da Instalação do **OS X El Capitan** através da **Mac App Store**.

Quando o download estiver concluído, cancele o processo de instalação.

Conecte um Disco, PenDrive ou Cartão SD, de no mínimo 8 GB ao MAC.

Acesse o "Utilitário de Disco" pelo **Spotlight** ou através do diretório "/Applications/".

Estando no "Utilitário de Disco", selecione o Dispositivo, na lista de Drives e clique sobre a aba "Apagar".

Em "Formato" selecione a opção "Mac OS Expandido (Reg. Cronológico)" e em "Nome", defina o nome para "ELCAPITAN".

Feito isto, clique no botão "Apagar...".

Quando a formatação estiver concluída, feche o "Utilitário de Disco".

Acesse o "Terminal" e execute o Seguinte Comando:


	sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/ELCAPITAN --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app --nointeraction


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

Deverá ser exibida uma "lista", na qual você deverá selecionar o dispositivo para o qual copiou a instalação, para assim seguir com a mesma.

Deste ponto em diante, você possui duas opções:

* Efetuar uma Instalação Limpa
* Reinstalar o OS X


## Efetuar uma Instalação Limpa:

* Selecione o "Utilitário de Disco" e escolha a opção "Continuar".
* Selecione o "Disco Principal" e clique na opção "Apagar", no topo da janela.
	* Defina um nome para o Disco, exemplo: "OSX"
	* Em Formato, mantenha a opção: "OS X Expandido (Reg. Cronológico)" 
	* E em Esquema, mantenha "Mapa de Partição GUID".
	* Confirme as opções acima, clicando em "Apagar".
* Aguarde e conclusão do processo.
* Feche o "Utilitário de Disco".
* Prossiga com uma instalação do zero...

## Reinstalar o OS X:

Bastará selecionar a opção "Reinstalar OS X" e escolher a opção "Continuar".
O processo de instalação e reinstalação, é praticamente o mesmo, com a diferença de a reinstalação manter seus arquivos, programas e algumas configuração, ao passo que a instalação limpa, obviamente irá lhe obrigar à reconfigurar e instalar novamente todos os seus programas, serviços, etc...
