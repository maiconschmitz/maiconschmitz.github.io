---
title: Atualizando o Node.js via npm
date: 2014-09-11 11:30:42.000000000 -03:00
tags:
- nodejs
- npm
published: true
alias: blog/2014/09/11/atualizando-o-node-js-via-npm.html
---

Para atualizar o **Node.js**, é possível utilizar o **npm**.

Independentemente da forma como o **Node.js** foi instalado (seja via pacote ou compilado), é possível efetuar a atualização através do npm.

Este método foi testado no Ubuntu (com o **Node.js** instalado via `apt`), no CentOS (compilado) e também no macOS (instalado pelos métodos padrões).

Os passos para atualizar o **Node.js** são extremamente simples e estão exemplificados abaixo.

Primeiramente, verifique a versão do **Node.js** executando:

```shell
node -v
```

## Partindo para a atualização

Execute a seguinte sequência de comandos:

```shell
sudo npm cache clean -f
sudo npm install -g n
```

Agora, para atualizar o **Node.js**, você tem duas opções:

Pode escolher instalar o **Node.js** na sua versão mais atual e estável, executando:

```shell
sudo n stable
```

Ou pode instalar uma versão específica do **Node.js** (neste exemplo, a versão `0.11.x`). Para isso, basta executar:

```shell
sudo n 0.11
```

Com isso, você terá o **Node.js** atualizado na versão desejada.