---
layout: post
title: "Resolvendo o Erro no iDRAC: Login Error RAC0218 - The maximum number of user sessions is reached"
date: 2016-07-02 13:30:10.000000000 -03:00
categories:
- blog
tags:
- idrac
- dell
- ssh
- racadm
status: publish
type: post
published: true
alias: /blog/2016/07/02/login-error-rac0218-the-maximum-number-of-user-sessions-is-reached.html
---

*Publicado originalmente em 15/07/2015, com reedição em 02/07/2016 para adicionar possibilidades extras.*

Às vezes, ao tentar acessar a interface web do **iDRAC** (Integrated Dell Remote Access Controller), é possível que você se depare com a seguinte mensagem de erro:

> **Login Error RAC0218: The maximum number of user sessions is reached.**

Esta mensagem é exibida porque o iDRAC já atingiu o limite no número de sessões ativas ou por algum bug, caso o firmware do seu iDRAC não esteja 100% atualizado.

Para resolver este problema, você deve reiniciar o iDRAC.

## Reiniciando o iDRAC

Existem algumas maneiras de reiniciar o iDRAC, dependendo do seu nível de acesso ao sistema.

### Método 1: Via SSH

Se você ainda conseguir se conectar ao iDRAC via SSH, esta é a maneira mais rápida.

1.  **Acesse o iDRAC via SSH:**
    Use um cliente SSH para se conectar ao endereço IP do iDRAC.

2.  **Execute o comando de reset:**
    Faça login com suas credenciais e execute o seguinte comando:

    ```bash
    racadm racreset
    ```

    Isso irá reiniciar o módulo do iDRAC sem afetar o sistema operacional do servidor.

No entanto, se o acesso via SSH também estiver indisponível e retornar uma mensagem como `No more sessions are available for this type of connection!`, você precisará usar um método físico.

### Método 2: Botão de Identificação do Sistema (Botão 'i')

Este método permite reiniciar o iDRAC diretamente do painel frontal do servidor.

1.  Localize no painel do servidor (geralmente na frente ou atrás) o botão **'i'** (identificação do sistema).
2.  Pressione e segure o botão por cerca de 30 segundos.
3.  Após soltá-lo, o iDRAC será reiniciado (apenas o iDRAC, não o servidor).
4.  É normal que as ventoinhas (fans) do servidor aumentem sua rotação para o máximo momentaneamente. Não se assuste.
5.  Após alguns segundos, as ventoinhas voltarão à rotação normal, e o iDRAC estará reiniciado, mantendo a mesma configuração de rede e IP.

### Método 3: Desligar o Servidor da Energia

Em último caso, se nenhum dos métodos anteriores funcionar, você pode optar por um "cold boot".

1.  Desligue o servidor completamente.
2.  Desconecte os cabos de energia do servidor. **Apenas reiniciar o sistema operacional não é suficiente**, pois o iDRAC continua energizado.
3.  Aguarde cerca de um minuto.
4.  Reconecte os cabos de energia e ligue o servidor novamente.

Ao concluir a inicialização do hardware, o iDRAC estará funcionando normalmente.
