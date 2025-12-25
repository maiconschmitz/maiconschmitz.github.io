---
layout: post
title: "Unindo um SSD com um HD para Criar um Fusion Drive no Mac"
date: 2017-07-03 13:00:00.000000000 -03:00
categories:
- blog
tags:
- ssd
- hdd
- hd
- fusion
- drive
- "mac os x"
- macos
status: publish
type: post
published: true
alias: /blog/2017/07/03/unindo-um-ssd-com-um-hdd-e-criando-um-fusion-drive-no-mac/
---

Após a adição de um segundo disco a um MacBook Pro (veja o passo a passo em [Instalando um segundo HD em um MacBook Pro](http://www.maiconschmitz.com.br/blog/2017/04/28/instalando-2-hd-em-macbook-pro-mid-2011 "Instalando um segundo HD em um MacBook Pro mid 2011")), uma excelente opção é a criação de um **Fusion Drive**.

O **Fusion Drive** é um recurso disponível no macOS que possibilita a junção de dois discos físicos (geralmente um SSD rápido e um HD de grande capacidade) para que apareçam como um único **volume lógico** no sistema.

Ao unir um SSD com um HD, você obtém os benefícios da velocidade do SSD para o sistema operacional e aplicativos, com a grande capacidade de armazenamento do HD para arquivos maiores e menos acessados. O macOS gerencia o uso deste volume de forma inteligente e transparente, movendo os arquivos entre os discos conforme a frequência de uso, sem nenhuma intervenção necessária do usuário.

Neste procedimento, demonstro como juntar um SSD com um HD para criar um Fusion Drive.

## Criando o Fusion Drive

**Atenção:** Criar um Fusion Drive apagará permanentemente todo o conteúdo dos discos selecionados para a criação. Faça um backup completo de seus dados antes de prosseguir.

1.  **Inicie no Modo de Recuperação:**
    Reinicie ou ligue o Mac mantendo pressionadas as teclas **Command (`⌘`) + R** até ver o logo da Apple. Isso iniciará o Mac no Modo de Recuperação.

2.  **Abra o Terminal:**
    Após o carregamento da interface, na barra de menus superior, selecione a opção **Utilitários > Terminal**.

3.  **Liste os discos disponíveis:**
    Com o Terminal aberto, execute o comando `diskutil list` para obter uma lista de todos os discos e volumes conectados ao seu Mac.

    ```bash
    diskutil list
    ```

    Este comando irá listar todos os discos físicos. Identifique os identificadores dos discos que você deseja unir (geralmente `/dev/disk0` para o disco interno principal e `/dev/disk1` para o segundo disco no lugar do SuperDrive).

4.  **Crie o grupo de volumes lógicos (Core Storage):**
    Execute o comando abaixo, substituindo `disk0` e `disk1` pelos identificadores corretos dos seus discos.

    ```bash
    diskutil coreStorage create 'NomeDoGrupo' /dev/disk0 /dev/disk1
    ```
    *`'NomeDoGrupo'` pode ser qualquer nome, como `'FusionDriveGroup'`.*

    Após alguns instantes, o processo será concluído. Observe a saída que será impressa no Terminal. Procure por uma linha que começa com `Core Storage LVG UUID:` e copie o UUID (um valor longo com hifens, como `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`).

5.  **Crie o volume lógico:**
    Agora, use o UUID que você copiou para criar o volume lógico que será usado pelo sistema.

    ```bash
    diskutil coreStorage createVolume SEU_UUID_AQUI jhfs+ 'Macintosh HD' 100%
    ```
    *   Substitua `SEU_UUID_AQUI` pelo UUID copiado no passo anterior.
    *   `jhfs+` é o formato do sistema de arquivos (Mac OS Expandido com Journaling).
    *   `'Macintosh HD'` é o nome que o seu novo disco terá.
    *   `100%` indica que você quer usar 100% do espaço do grupo de volumes.

Novamente, após alguns instantes, o processo será concluído. A partir deste ponto, o seu novo **volume virtual** estará criado e pronto para uso. Você pode fechar o Terminal e prosseguir com a instalação do macOS, selecionando o novo volume "Macintosh HD" como destino.
