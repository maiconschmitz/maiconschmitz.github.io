---
layout: post
title: Instalação Limpa do macOS High Sierra
date: 2018-05-08 11:30:00.000000000 -03:00
categories:
- blog
tags:
- mac-os-x
- macos
status: publish
type: post
published: true
---

Fazendo uma instalação limpa (do zero) do macOS High Sierra.

Com o seu OS X/macOS ainda em funcionamento, efetue o download da Instalação do [**macOS High Sierra**](https://www.apple.com/br/macos/high-sierra/ "macOS High Sierra") através da **App Store**.

Com o download concluído, cancele a instalação.

Conecte um HD Externo, Pen drive ou Cartão SD, de no mínimo 8 GB ao Mac.

Acesse o "Utilitário de Disco" pelo **Spotlight** ou através do diretório "/Applications/".

Estando no "Utilitário de Disco", selecione o Dispositivo, na lista de Drives e clique sobre a aba "Apagar".

Em "Nome", defina para "MACOS", em "Formato" selecione a opção "Mac OS Expandido (Journaling)", em "Esquema", escolha "Mapa de Partição Apple" e clique no botão "Apagar...".

Quando a formatação estiver concluída, feche o "Utilitário de Disco".

Acesse o "Terminal" pelo **Spotlight** ou através do diretório "/Applications/".

Execute o seguinte comando:

	sudo /Applications/Install\ macOS\ High\ Sierra.app/Contents/Resources/createinstallmedia  --volume /Volumes/MACOS --applicationpath /Applications/Install\ macOS\ High\ Sierra.app/ --nointeraction

O processo de cópia será efetuado e a seguinte mensagem será exibida:

	Erasing Disk: 0%... 10%... 20%... 30%...100%...
	Copying installer files to disk...
	Copy complete.
	Making disk bootable...
	Copying boot files...
	Copy complete.
	Done.


## Hora da Instalação

Com o Dispositivo conectado ao Mac, reinicie, ou ligue-o, mantendo pressionada ou pressionando repetidas vezes, a tecla "Option".

Após o carregamento, deverá ser exibida uma "lista", na qual você deverá selecionar o dispositivo para o qual copiou a instalação.

Deste ponto em diante, você possui as seguinte opções:

* Iniciar
* Reinstalar o macOS
* Instalar o macOS

Os processos de Reinstalar e Instalar o macOS, são praticamente os mesmos, com a diferença de a reinstalação manter seus arquivos, programas e algumas configuração, enquanto a instalação limpa, obviamente irá lhe obrigar à reconfigurar e instalar novamente todos os seus programas, serviços, etc...

## APFS (Apple File System) X Mac OS Expandido

Com o macOS High Sierra, temos um novo sistema de arquivos, o APFS (Apple File System), o qual é a opção padrão e ideal à ser utilizada caso você possua uma unidade de estado sólido (SSD).

Caso tenha dúvidas entre APFS (Apple File System) ou Mac OS Expandido, consulte [Como escolher entre APFS e Mac OS Expandido ao formatar um disco para o Mac](https://support.apple.com/pt-br/HT208033 "Como escolher entre APFS e Mac OS Expandido ao formatar um disco para o Mac")

## Instalar o macOS
### Instalaçao Limpa do macOS com SSD

* Selecione o "Utilitário de Disco" e escolha a opção "Continuar".
* Selecione o "Disco Principal" e clique na opção "Apagar", no topo da janela.
	* Defina um nome para o Disco, exemplo: "OSX"
	* Em Formato, selecione/mantenha a opção: "APFS (Distinção de maiúsculas)"
	* Confirme as opções acima, clicando em "Apagar".
* Aguarde e conclusão do processo.
* Feche o "Utilitário de Disco".
* Selecione a opção "Instalar o macOS" e siga o passo-a-passo.
