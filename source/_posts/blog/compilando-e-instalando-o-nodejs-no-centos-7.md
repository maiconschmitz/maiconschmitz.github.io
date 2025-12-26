---
layout: post
title: Compilando e instalando o Node.js no CentOS 7
date: 2014-08-26 11:30:56.000000000 -03:00
categories:
- blog
tags:
- centos
- nodejs
- terminal
status: publish
type: post
published: true
alias: blog/2014/08/26/compilando-e-instalando-o-nodejs-no-centos-7.html
---

Para compilar e instalar o **Node.js** no CentOS 7, você precisará executar alguns passos.

Primeiramente, prepare um local para baixar o Node.js. Pode ser na sua pasta `home`:

```shell
cd ~
mkdir node
cd node/
```

## Baixe e descompacte o Node.js

```shell
wget http://nodejs.org/dist/v0.10.31/node-v0.10.31.tar.gz
tar xzvf node-v* && cd node-v*
```

No momento da escrita deste artigo, a versão estável era a `v0.10.31`.

Para compilar, é necessário ter o **GCC**. Caso não o possua, instale-o com o seguinte comando:

```shell
sudo yum install gcc gcc-c++
```

## Compilando e instalando o Node.js

Para compilar e instalar o Node.js, execute a sequência de comandos abaixo:

```shell
./configure
make
sudo make install
```

Quando o processo de instalação for concluído, você pode verificar se tudo ocorreu corretamente testando a versão do Node.js que acabou de instalar.

Para isso, execute o seguinte comando:

```shell
node --version
```

O que, neste exemplo, resultará em:

```shell
v0.10.31
```

Com isso, você tem o **Node.js** instalado e pronto para usar.