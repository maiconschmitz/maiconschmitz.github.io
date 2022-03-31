---
layout: post
title: Rodando e monitorando aplicações Node.js com PM2
date: 2020-07-20 22:00:00.000000000 -03:00
categories:
- Blog
tags:
- pm2
- nodejs
- npm
- nodemon
- hotreload
- python
- go
- PM2
- Node.js
- npm
- nodemon
- hotreload
- Python
- GO
status: publish
type: post
published: true
---

O **PM2** é um gerenciador de processos, que irá lhe ajudar à gerenciar e manter sua aplicação sempre online.

Largamente utilizado para o gerenciamento de aplicações **Node.js**, para o qual possui inclusive, um controle mais apurado, como por exemplo o gerenciamento e a execução da aplicação em modo **cluster**.

No entanto, ele pode ser utilizado também para gerenciar de uma forma mais simples, aplicações escritas em outras linguagens, seja interpretadas ou compiladas, como **Python** e **GO**, por exemplo.


## Instalando o PM2

Primeiramente, você deve instalar o **PM2** de forma global, através do comando:

	npm install pm2@latest -g


## Registrando e/ou iniciando um processo com o PM2

Com o **PM2** instalado, vamos partir para a execução do seu processo.

De forma semelhante à qual você rodaria a sua aplicação, seja com um "npm start" ou através da execução direta do seu script de entrada, <s>normalmente index.js</s>.

O PM2 também possui um comando "start" e este serve tanto para registrar, quanto para iniciar um processo que já tenha sido "registrado" no PM2 anteriormente.

Em nosso exemplo, o script inicial da aplicação, será o entrypoint.js.

Logo, para executar a aplicação, deve-se executar o comando:

    pm2 start entrypoint.js


### Definindo um nome para a aplicação

É possível definir um nome para o processo, passando o parâmetro "--name NOME", onde NOME é o nome à ser dado para a aplicação.

Em nosso exemplo, vamos nomear nossa aplicação como "API":

    pm2 start entrypoint.js --name API

Neste caso, todos os comandos subsequentes poderão ser executados usando o nome da aplicação, devendo-se substituir "entrypoint.js" por "API".

Exemplo:

    pm2 start API

Mas não se esqueça, a primeira execução deverá ser completa, como por exemplo:

    pm2 start entrypoint.js --name API


### Recarregar ao atualizar

Se você desejar que a aplicação seja recarregada, sempre que houver uma atualização do seu conteúdo (hot reload), de forma semelhante ao que o **nodemon** faz, então você deverá roda-la com o parâmetro "--watch".

Exemplo:

    pm2 start entrypoint.js --name API --watch


## Reiniciando um processo

Se você não deseja utilizar o parâmetro "--watch" e deseja controlar quando e como reiniciar sua aplicação, você poderá utilizar o comando "restart".

    pm2 restart API


## Parando um processo

Se você desejar parar a execução da sua aplicação momentaneamente, você deverá utilizar o comando "stop".

    pm2 stop API


## Deletar um processo

Quando não houver mais a necessidade de rodar um determinado processo, você poderá efetuar a deleção do mesmo, com o comando "delete".

    pm2 delete API


## Salvando as configurações

Sempre que uma configuração for efetuada e um determinado estado precisar ser salvo, você deverá definir isto explicitamente, executando o comando "save":

    pm2 save

Rodando este comando, a lista de processos à serem inicializados ou não pelo PM2 será salva e consequentemente será "recuperada", no caso da reinicialização do sistema operacional ou outra circunstância.


## Habilitando a inicialização do PM2 como um serviço

Com relação à inicialização do PM2 junto à inicialização do sistema operacional, é importante notar que você deverá habilitar este recurso, executando o comando:

    pm2 startup


## Monitorando os processos com o PM2

Basicamente, existem 2 comandos que irão lhe apresentar o **status** das aplicações, bem como lhe ajudarão à **monitorar** a execução das mesmas.

São eles:

    pm2 status
    pm2 monit

Rode e explore estes comandos à vontade.