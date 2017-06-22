---
layout: post
title: Gerenciando o Ubuntu pelo browser, com Webmin
date: 2013-01-11 10:00:18.000000000 -02:00
categories:
- Blog
tags:
- Ubuntu
- Webmin
status: publish
type: post
published: true
---
Este passo-a-passo, tem como objetivo apresentar uma ferramenta simples e eficaz para gerenciamento de uma distribuição Ubuntu, através de uma interface web.

Sem adentrar em detalhes técnicos específicos, esta é uma ótima opção para criar um servidor para um pequeno ambiente de testes e desenvolvimento.

Neste passo-a-passo foi utilizado o **Webmin 1.590**, sobre um **Ubuntu Server 12.04**.

A instalação do **Ubuntu Server** utilizada, é uma instalação padrão, na qual optou-se apenas pela instalação dos pacotes adicionais: _OpenSSH server_, _LAMP server_, _PostgreSQL database_ e _Samba file server_.

Com o **Webmin**, é possível instalar, atualizar e configurar de forma centralizada, intuitiva e amigável, praticamente todos os serviços necessários em um servidor de desenvolvimento básico.

## Instalação do Webmin no Ubuntu Server

Para efetuar a instalação do Webmin através do repositório APT, é necessário primeiramente, adicionar o repositório do Webmin à lista de sources do APT.

Para isto, edita-se o arquivo de sources e adiciona-se as linhas:

	deb http://download.webmin.com/download/repository sarge contrib
	deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib

Estando no terminal, utilize o Vim e siga os passos:

	sudo vim /etc/apt/sources.list
	shift + g
	o
	deb http://download.webmin.com/download/repository sarge contrib
	deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
	:wq

Após isto, deve-se proceder com a instalação das chaves

Como por padrão não se utiliza o usuário root no ubuntu, não será possível entrar na pasta **/root**, então execute o comando: **sudo su**

E após isto, execute os seguintes comandos:

	cd /root
	wget http://www.webmin.com/jcameron-key.asc
	apt-key add jcameron-key.asc

Feito isto, é hora de efetivamente instalar o Webmin através do repositório APT:

	apt-get update
	apt-get install webmin

Uma vez tendo executado e concluído a instalação do Webmin, será possível acessa-lo através de **https**, na porta **10000**.

Por exemplo, para um servidor com hostname ubuntu, acessaríamos: https://ubuntu:10000

Para logar, basta utilizar algum usuário que você já possua no Ubuntu.

Com uma interface web simples e de fácil utilização, o ubuntu permite efetuar uma infinidade de tarefas administrativas, sem a necessidade de qualquer software cliente específico, bastando para isto, um simples web browser, que habilita acesso remoto a partir de qualquer lugar.

Para automatizar a instalação, que já é bastante simples por sinal, criei um script bash, que esta no Gist abaixo:

https://gist.github.com/3062661#file_instalar_wm.sh

Para efetuar o Download deste Gist, basta acessar a URL: [https://gist.github.com/raw/3062661/a565ff650a3655f9d31c37b72855669214ad10e8/instalar_wm.sh](https://gist.github.com/raw/3062661/a565ff650a3655f9d31c37b72855669214ad10e8/instalar_wm.sh "Script Bash para Instalar o Webmin")  
Ou então, utilize a versão da URL encurtada: [http://goo.gl/q0PPR](http://goo.gl/q0PPR "Script Bash para Instalar o Webmin")

Vá ao terminal e execute na sequencia abaixo, para efetuar o download e efetuar a instalação:

	wget http://goo.gl/q0PPR -O instalar_wm.sh
	chmod 777 instalar_wm.sh
	sudo ./instalar_wm.sh