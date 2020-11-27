---
layout: post
title: Instalando o Docker no CentOS 8
date: 2020-11-27 06:30:00.000000000 -03:00
categories:
- Blog
tags:
- CentOS
- Docker
- Terminal
status: publish
type: post
published: true

---

O **Docker CE** atualmente não é suportado pelo **Red Hat Enterprise Linux (RHEL) 8** e **CentOS 8**.

A maneira oficialmente recomendada pela **Red Hat** para gerenciar contêineres, é através do **Podman**, que é basicamente um substituto para o Docker nestas distribuições do Linux.

Se você desejar maiores informações sobre o por que desta *falta de suporte* ao Docker, você pode consultar a seção ["1.1. Running containers without Docker"](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/building_running_and_managing_containers/index) da documentação.

# Instalação do Docker

Para que se possa iniciar a instalação do Docker, primeiramente, atualize os pacotes:

	$ sudo yum update -y

## Adicionar o repositório do Docker

Para que seja possível instalar o Docker, se faz necessário adicionar o repositório do mesmo ao YUM.

	$ sudo yum install -y yum-utils
	$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

## Remover pacotes que conflitam com o Docker

Uma vez que o **Podman** é o "substituto" para o Docker no RHEL/CentOS 8, será necessário remove-los antes de prosseguir com a instalação do Docker:

	$ yum erase podman buildah -y

## Instalar o Docker

Agora, efetivamente partindo para a instalação do Docker:

	$ sudo yum install docker-ce docker-ce-cli containerd.io -y

Ao final da instalação, você pode adicionar o seu o usuário atual ao grupo do Docker:

	$ sudo usermod -a -G docker ${USER}

## Habilitar e iniciar o serviço do Docker

Para que o Docker esteja sempre disponível e rodando, habilite e rode o serviço, respectivamente:

	$ sudo systemctl enable docker
	$ sudo systemctl start docker

# Verificar a instalação e status do Docker

Para que você possa verificar o status de execução do Docker, você pode, por exemplo, executar os comandos:

	$ docker info
	$ systemctl status docker

### Rodando uma imagem de testes

Já, para verificar o sucesso da instalação, você executar a imagem **hello-world**.
Para isto, basta executar:

	$ sudo docker run hello-world


