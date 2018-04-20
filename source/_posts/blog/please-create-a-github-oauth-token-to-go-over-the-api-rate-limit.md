---
layout: post
title: Please create a GitHub OAuth token to go over the API rate limit
date: 2015-07-09 12:30:10.000000000 -03:00
categories:
- Blog
tags:
- API
- Github
- Composer
- PHP
status: publish
type: post
published: true
alias: 
- blog/2015/07/09/please-create-a-GitHub-OAuth-token-to-go-over-the-API-rate-limit.html
- blog/2015/07/09/please-create-a-github-oauth-token-to-go-over-the-api-rate-limit/
- blog/2015/07/09/please-create-a-GitHub-OAuth-token-to-go-over-the-API-rate-limit/

---
As vezes, durante o uso do composer install, ou composer update, é possível que você se depare com uma mensagem semelhante à esta:

	...please create a GitHub OAuth token to go over the API rate limit...

Esta mensagem é exibida, devido ao fato de o Github possuir um limite no número de requisições, que podem ser feitas por um usuário não autenticado, no período de 1 hora.

Maiores informações aqui: [https://developer.github.com/changes/2012-10-14-rate-limit-changes/](https://developer.github.com/changes/2012-10-14-rate-limit-changes/ "Rate Limit")

Para resolver este problema, você deve criar uma Personal access tokens.

## Criando uma Personal access tokens
Para criar uma Personal access tokens basta seguir alguns simples passos:

- Acesse o link: [https://github.com/settings/tokens](https://github.com/settings/tokens "Personal access tokens")
- Clique em "Generate new token"
- Defina um nome para "Token description", por exemplo: Composer Install
- Em "Select scopes", mantenha as permissões padrões
- Clique em "Generate token"
- Neste momento, copie e guarde a sua Token, pois você não poderá vê-la novamente no futuro

## Configurando e usando a sua Token
Uma vez que a sua Token esteja criada, você pode configura-la para ser utilizada automaticamente ou pode simplesmente digita-la, quando for solicitada.

Para o primeiro caso, existem duas possibilidades.

Definir a Token de forma global no composer:

	sudo composer config -g github-oauth.github.com <TOKEN>

Ou então, definir a Token por projeto, diretamente no composer.json:

	{  
	  "config": {
	    "github-oauth": {
	      "github.com": "<TOKEN>"
	      }
	    }
	}

Efetuadas as devidas configurações, basta passar à efetuar o acesso à API novamente, agora sem se preocupar com o limite no número de requisições.