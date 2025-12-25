---
layout: post
title: "Rodando e Monitorando Aplicações Node.js com PM2"
date: 2020-07-20 22:00:00.000000000 -03:00
categories:
- blog
tags:
- pm2
- nodejs
- npm
- nodemon
- "hot reload"
- python
- go
- "process manager"
status: publish
type: post
published: true
---

O **PM2** é um gerenciador de processos avançado, de produção, para aplicações Node.js. Ele ajuda a gerenciar e manter sua aplicação sempre online, 24/7.

Embora seja largamente utilizado para o gerenciamento de aplicações **Node.js**, para as quais possui recursos avançados como balanceamento de carga e execução em modo **cluster**, ele também pode ser utilizado para gerenciar aplicações escritas em outras linguagens, como **Python** e **Go**, por exemplo.

## Instalando o PM2

Primeiramente, você deve instalar o **PM2** de forma global através do `npm`:

```bash
npm install pm2@latest -g
```

## Registrando e iniciando um processo com o PM2

Com o **PM2** instalado, vamos partir para a execução da sua aplicação. O PM2 utiliza um comando `start`, que serve tanto para registrar e iniciar um novo processo, quanto para iniciar um processo que já foi registrado anteriormente.

Em nosso exemplo, o script inicial da aplicação será o `entrypoint.js`.

Para iniciar a aplicação, execute o comando:

```bash
pm2 start entrypoint.js
```

### Definindo um nome para a aplicação

É uma boa prática definir um nome para o processo, utilizando o parâmetro `--name`.

```bash
pm2 start entrypoint.js --name "minha-api"
```

Neste caso, todos os comandos subsequentes poderão ser executados usando o nome da aplicação (`minha-api`) em vez do nome do arquivo.

### Recarregar ao atualizar (Hot Reload)

Se você desejar que a aplicação seja recarregada automaticamente sempre que um arquivo for alterado (hot reload), de forma semelhante ao que o **nodemon** faz, utilize o parâmetro `--watch`.

```bash
pm2 start entrypoint.js --name "minha-api" --watch
```

## Gerenciando Processos

*   **Reiniciar um processo:**
    Para reiniciar sua aplicação (por exemplo, após uma atualização de código, se não estiver usando `--watch`):

    ```bash
    pm2 restart minha-api
    ```

*   **Parar um processo:**
    Para parar a execução da sua aplicação momentaneamente:

    ```bash
    pm2 stop minha-api
    ```

*   **Deletar um processo:**
    Quando não houver mais a necessidade de gerenciar um determinado processo, você pode removê-lo da lista do PM2 com o comando `delete`:

    ```bash
    pm2 delete minha-api
    ```

## Salvando a lista de processos

Para garantir que suas aplicações iniciem automaticamente após a reinicialização do servidor, você precisa salvar a lista de processos atual do PM2.

```bash
pm2 save
```

Este comando cria um "dump" da lista de processos que será restaurado na próxima inicialização.

## Habilitando a inicialização do PM2 como um serviço

Para que o PM2 inicie juntamente com o sistema operacional e restaure os processos salvos, você precisa habilitar seu script de inicialização. O PM2 detectará o `init system` da sua distribuição (como systemd, upstart, etc.) e fornecerá o comando correto.

```bash
pm2 startup
```

Siga as instruções que aparecerão na tela (geralmente, será necessário copiar e colar um comando com `sudo`).

## Monitorando os processos com o PM2

Existem dois comandos principais que irão lhe apresentar o **status** das aplicações e ajudar a **monitorar** a execução das mesmas:

*   **`pm2 status`** (ou `pm2 ls`): Mostra uma lista de todos os processos gerenciados, seus status, uso de CPU e memória.
    ```bash
    pm2 status
    ```
*   **`pm2 monit`**: Abre um painel de monitoramento em tempo real no seu terminal.
    ```bash
    pm2 monit
    ```

Explore estes comandos para ter uma visão completa da saúde de suas aplicações.
