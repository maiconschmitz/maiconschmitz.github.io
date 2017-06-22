---
layout: post
title: Instalação Limpa do macOS Sierra
date: 2017-06-02 15:30:00.000000000 -03:00
categories:
- Blog
status: publish
type: post
published: true
alias: blog/2017/06/02/instalacao-limpa-do-mac-os-sierra.html
---
Neste procedimento, irei detalhar como efetuar a instalação limpa do macOS Sierra.

Com o OS X/macOS ainda em funcionamento, efetue o download da Instalação do **macOS Sierra** através da **Mac App Store**.

Quando o download estiver concluído, cancele o processo de instalação.

Conecte um Disco, PenDrive ou Cartão SD, de no mínimo 8 GB ao Mac.

Acesse o "Utilitário de Disco" pelo **Spotlight** ou através do diretório "/Applications/".

Estando no "Utilitário de Disco", selecione o Dispositivo, na lista de Drives e clique sobre a aba "Apagar".

Em "Formato" selecione a opção "Mac OS Expandido (Reg. Cronológico)" e em "Nome", defina o nome para "MACOS".

Feito isto, clique no botão "Apagar...".

Quando a formatação estiver concluída, feche o "Utilitário de Disco".

Acesse o "Terminal" pelo **Spotlight** ou através do diretório "/Applications/".

Execute o seguinte comando:

	sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MACOS --applicationpath /Applications/Install\ macOS\ Sierra.app --nointeraction


O processo de cópia será efetuado e a seguinte mensagem será exibida:

	Erasing Disk: 0%... 10%... 20%... 30%...100%...
	Copying installer files to disk...
	Copy complete.
	Making disk bootable...
	Copying boot files...
	Copy complete.
	Done.


## Hora da Instalação

Com o Dispositivo conectado ao Mac, reinicie, ou ligue-o, mantendo a tecla "Option" pressionada.

Após o carregamento, deverá ser exibida uma "lista", na qual você deverá selecionar o dispositivo para o qual copiou a instalação.

Deste ponto em diante, você possui duas opções:

* Instalar o macOS
* Reinstalar o macOS

Os processos de Instalar e Reinstalar o macOS, são praticamente os mesmos, com a diferença de a reinstalação manter seus arquivos, programas e algumas configuração, enquanto a instalação limpa, obviamente irá lhe obrigar à reconfigurar e instalar novamente todos os seus programas, serviços, etc...

## Instalar o macOS
### Instalaçao Limpa do macOS

* Selecione o "Utilitário de Disco" e escolha a opção "Continuar".
* Selecione o "Disco Principal" e clique na opção "Apagar", no topo da janela.
	* Defina um nome para o Disco, exemplo: "Sierra"
	* Em Formato, mantenha a opção: "OS X Expandido (Reg. Cronológico)" 
	* E em Esquema, mantenha "Mapa de Partição GUID".
	* Confirme as opções acima, clicando em "Apagar".
* Aguarde e conclusão do processo.
* Feche o "Utilitário de Disco".
* Prossiga com uma instalação do zero...

## Reinstalar o macOS

Bastará selecionar a opção "Reinstalar macOS" e escolher a opção "Continuar".
