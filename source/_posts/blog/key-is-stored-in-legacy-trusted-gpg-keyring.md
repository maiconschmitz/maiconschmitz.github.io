---
layout: post
title: "Resolvendo o Aviso de Chave GPG Legada no APT (apt-key deprecated)"
date: 2022-12-05 18:30:00.000000000 -03:00
categories:
- blog
tags:
- ubuntu
- linux
- apt
- gpg
status: publish
type: post
published: true
---

Este guia explica como resolver o aviso de depreciação `Key is stored in legacy trusted.gpg keyring`, que aparece ao executar o comando `sudo apt update` em versões mais recentes do Ubuntu (acima da 20.04) e outras distribuições baseadas em Debian.

O aviso completo geralmente se parece com isto:

> `W: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.`

A origem desta mensagem vem da necessidade de instalar algum software de terceiro que não está presente no repositório oficial. Nestes casos, é comum adicionar uma chave GPG (chave pública) para verificar a autenticidade dos pacotes.

No passado, a chave pública era geralmente baixada e adicionada diretamente ao chaveiro principal com `apt-key add`. No entanto, este método agora é considerado inseguro e obsoleto, pois uma chave adicionada a este local é considerada confiável para *todos* os repositórios configurados no sistema.

## Corrigindo o Problema

O método moderno consiste em mover a chave GPG legada do chaveiro principal (`/etc/apt/trusted.gpg`) para um arquivo individual dentro do diretório `/etc/apt/trusted.gpg.d/`.

### 1. Liste as chaves legadas

Primeiro, liste as chaves que estão no chaveiro legado com o comando:

```bash
sudo apt-key list
```

Você terá uma saída semelhante à listada abaixo, mostrando todas as chaves, incluindo as legadas e as que já estão no formato correto:

```
/etc/apt/trusted.gpg
--------------------
pub   rsa4096 2020-05-07 [SC]
      E8A0 32E0 94D8 EB4E A189  D270 DA41 8C88 A321 9F7B
uid           [ desconhecida] HashiCorp Security (HashiCorp Package Signing) <security+packaging@hashicorp.com>
sub   rsa4096 2020-05-07 [E]

/etc/apt/trusted.gpg.d/ubuntu-keyring-2012-cdimage.gpg
------------------------------------------------------
pub   rsa4096 2012-05-11 [SC]
      8439 38DF 228D 22F7 B374  2BC0 D94A A3F0 EFE2 1092
uid           [ desconhecida] Ubuntu CD Image Automatic Signing Key (2012) <cdimage@ubuntu.com>
...
```

Neste caso, a chave da **HashiCorp**, que está em `/etc/apt/trusted.gpg`, é a que está causando o aviso.

### 2. Exporte a chave para o formato correto

Para corrigir, você precisa exportar a chave do chaveiro legado. Para identificar a chave, você pode usar os últimos 8 caracteres da sua impressão digital (fingerprint).

No exemplo acima, a impressão digital é `E8A0 32E0 94D8 EB4E A189 D270 DA41 8C88 A321 9F7B`. Os últimos 8 caracteres (sem espaços) são **`A3219F7B`**.

Agora, execute o comando `apt-key export` no terminal, passando esses 8 caracteres. O resultado será a chave em formato ASCII, que precisa ser convertida para um arquivo GPG binário (dearmored) e salva no diretório `/etc/apt/trusted.gpg.d/`.

Neste caso, por se tratar de um repositório da HashiCorp, o comando fica assim:

```bash
sudo apt-key export A3219F7B | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/hashicorp.gpg
```
*(Certifique-se de dar um nome de arquivo `.gpg` descritivo)*

### 3. (Opcional) Remova a chave legada

Após exportar a chave, você pode removê-la do chaveiro legado para confirmar que o sistema está usando o novo arquivo.

```bash
sudo apt-key del A3219F7B
```

Agora, ao executar `sudo apt update` novamente, o aviso não deverá mais aparecer.
