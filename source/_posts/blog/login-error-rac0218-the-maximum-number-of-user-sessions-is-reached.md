---
layout: post
title: Login Error RAC0218 - The maximum number of user sessions is reached
date: 2016-07-02 13:30:10.000000000 -03:00
categories:
- Blog
tags:
- idrac
- ssh
status: publish
type: post
published: true
alias: blog/2016/07/02/login-error-rac0218-the-maximum-number-of-user-sessions-is-reached.html
---

Publicado originalmente em 15/07/2015, com reedição em 02/07/2016 para adicionar possibilidades extras.

As vezes, ao tentar acessar o iDrac, através da interface Web, é possível que você se depare com uma mensagem semelhante à esta:

~~~ shell
...Login Error RAC0218: The maximum number of user sessions is reached....
~~~

Esta mensagem é exibida, devido ao fato do iDrac já ter atingido o limite no número de sessões, ou, por algum bug, caso seu iDrac não esteja 100% atualizado.

Para resolver este problema, você deve resetar o iDrac.

## Resetando o iDrac
Para resetar o iDrac, você deve se conectar ao mesmo através do SSH:

	Acesse o iDrac via SSH
	Execute o comando: racadm racreset

Caso o a acesso via SSH lhe retorne uma mensagem semelhante à esta:

	No more sessions are available for this type of connection!

Então você deverá resetar o iDrac de outra forma:

	Localize no painel do iDrac (no hardware físico), o botão 'i'.
	Pressione o botão por 30 segundos e após isto, solte-o
	O iDrac (apenas o iDrac e não o equipamento) será reiniciado
	A Fan do equipamento irá aumentar a sua rotação momentaneamente (não se assunte)
	Após alguns segundos, a Fan irá voltar para a rotação original e o iDrac estará reiniciado, mantendo a mesma configuração e IP de rede.

Em último caso, caso o item anterior não funcione, você poderá optar por desligar completamente o equipamento.

Desligue e desconecte o equipamento da energia elétrica (reiniciar não basta).

Ligue tudo novamente e ao concluir a inicialização, o iDrac estará funcionando normalmente.