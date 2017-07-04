---
layout: post
title: Exibindo Notificações Desktop via Shell script
date: 2016-03-30 08:00:00.000000000 -03:00
categories:
- Blog
status: publish
type: post
published: true
alias: blog/2016/03/30/exibindo-notificacoes-desktop-via-shell-script.html
---

O **Shell script** é uma linguagem de script, usada nos mais diversos sistemas operacionais, mas o mundo **GNU/Linux** é que é a sua casa.

Poderoso e flexível, o **Shell script** lhe permiter fazer praticamente qualquer coisa que seria possível de ser feita via terminal, incluindo aí, exibir notificações diretamente no Desktop.

Neste post, exemplifico de forma rápida, como exibir Notificações no Desktop, para os ambientes gráficos do [Unity](https://unity.ubuntu.com/) (Ubuntu) e do KDE, bem como no OS X.


## Linux

Exibir as notificações no Unity e no KDE, é bastante simples, uma vez que ambos ambientes gráficos, já oferecem ferramentas para exibir tais notificações.


### Notificação no Ubuntu

No Ubuntu, temos disponível o **notify-send**

Exemplo de uso:

~~~ shell
notify-send "Mensagem"
~~~

### Notificação no KDE

No KDE, temos disponível o **kdialog**

Exemplo de uso:

~~~ shell
kdialog --title "Mensagem"
~~~

## OS X

Para que as Notificações via Shell possam ser exibidas no Desktop do OS X, é necessário utilizar o Growl ou a Central de Notificações, nativa a partir do Mountain Lion.


### Notificação no Mac OS X Mountain Lion ou superior

A notificação no OS X Mountain Lion ou mais recente, se utiliza da Central de Notificações e para utiliza-la, precisamos do Terminal Notifier, um wrapper escrito em Ruby e disponível no RubyGems.


#### Instalando o Terminal Notifier

Você pode instalar o wrapper via [Homebrew](https://github.com/Homebrew/homebrew):

~~~ shell
$ brew install terminal-notifier
~~~

Caso você não possua o HomeBrew instalado, pode verificar [aqui, como Instalar o HomeBrew](http://www.maiconschmitz.com.br/blog/2015/01/09/instalando-o-gerenciador-de-pacotes-brew.html).

Ou, caso deseje utilizar o mesmo também via 
[Ruby](https://github.com/alloy/terminal-notifier/tree/master/Ruby), efetue a instalação via RubyGems:

~~~ shell
$ [sudo] gem install terminal-notifier
~~~

Uma vez que o Terminal Notifier esteja instalado, você terá a sua disposição o **terminal-notifier**.

Exemplo de uso:

~~~ shell
terminal-notifier -message "Mensagem" -title "Titulo"
~~~

### Notificação no Mac OS X, anterior ao Mountain Lion

Em versões anteriores ao Mac OS X Mountain Lion, onde a Central de Notificações ainda não existia, também é possível utilizar notificações no Desktop.
Neste caso porém, será necessário utilizar uma ferramenta adicional, o Growl.


#### Notificação com Growl

O Growl é um software livre, utilizado para exibir notificação no Mac OS X.


#### Instalando o Growl

Para instalar o Growl, basta visitar a página de [Download do Growl](http://growl.info/downloads)

#### Exibindo notificação

Uma vez que o Growl esteja instalado, você terá a sua disposição o **growlnotify**.

Exemplo de uso:

~~~ shell
/usr/local/bin/growlnotify Titulo -m 'Mensagem'
~~~
