---
layout: post
title: "Resolvendo o Erro de Limite de API do GitHub no Composer"
date: 2015-07-09 12:30:10.000000000 -03:00
categories:
- blog
tags:
- api
- github
- composer
- php
status: publish
type: post
published: true
---

Às vezes, durante o uso dos comandos `composer install` ou `composer update`, é possível que você se depare com uma mensagem de erro semelhante a esta:

> **Could not fetch <package>, please create a GitHub OAuth token to go over the API rate limit**

Esta mensagem é exibida porque o GitHub possui um limite no número de requisições à sua API que podem ser feitas por um usuário não autenticado dentro de um período de tempo (geralmente uma hora). Como o Composer frequentemente precisa consultar a API do GitHub para baixar pacotes e verificar versões, é comum atingir esse limite, especialmente em projetos com muitas dependências.

Para mais informações, você pode consultar a documentação oficial sobre [limites de taxa da API do GitHub](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

Para resolver este problema, você deve criar um *Personal Access Token* no GitHub e configurá-lo no Composer.

## Criando um Personal Access Token

Para criar um *Personal Access Token*, basta seguir alguns simples passos:

1.  Acesse a página de tokens nas configurações da sua conta do GitHub: [github.com/settings/tokens](https://github.com/settings/tokens).
2.  Clique em **"Generate new token"**.
3.  Dê um nome descritivo para o seu token em **"Token description"**, por exemplo: "Composer".
4.  Em **"Select scopes"**, para o uso com o Composer, geralmente não é necessário selecionar nenhum escopo adicional. As permissões padrão de acesso a repositórios públicos são suficientes.
5.  Clique em **"Generate token"**.
6.  **Copie o token gerado imediatamente.** Guarde-o em um local seguro, pois você não poderá vê-lo novamente após sair da página.

## Configurando o Token no Composer

Uma vez que o seu token esteja criado, você pode configurá-lo para ser utilizado pelo Composer. Existem duas formas principais:

### 1. Configuração Global (Recomendado)

Defina o token de forma global para que o Composer o utilize em todos os seus projetos. Abra o terminal e execute o seguinte comando, substituindo `<SEU-TOKEN>` pelo token que você copiou:

```bash
composer config -g github-oauth.github.com <SEU-TOKEN>
```

### 2. Configuração por Projeto

Se preferir, você pode definir o token apenas para um projeto específico, adicionando-o ao arquivo `composer.json` desse projeto:

```json
{
  "config": {
    "github-oauth": {
      "github.com": "<SEU-TOKEN>"
      }
    }
}
```
**Atenção:** Tenha cuidado ao usar este método, pois o token ficará visível no seu `composer.json`. **Nunca** envie este arquivo para um repositório público com o token inserido.

Efetuadas as devidas configurações, basta executar `composer install` ou `composer update` novamente, e você não deverá mais se preocupar com o limite no número de requisições.
