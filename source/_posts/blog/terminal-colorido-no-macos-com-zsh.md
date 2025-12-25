---
layout: post
title: "Terminal Colorido e Personalizado no macOS com Zsh e Oh My Zsh"
date: 2018-12-02 14:00:00.000000000 -03:00
categories:
- blog
tags:
- "mac os x"
- terminal
- zsh
- "oh my zsh"
- macos
status: publish
type: post
published: true
---

O **Zsh** (Z shell) é um shell interativo e também um poderoso interpretador de scripts, semelhante ao bash, porém oferece uma gama muito maior de recursos, configurações e temas. Desde o macOS Catalina, o Zsh é o shell padrão para novas contas de usuário.

Uma das melhores maneiras de começar a usar o Zsh e aproveitar todo o seu potencial é através do **"Oh My Zsh"**, um framework de código aberto, orientado pela comunidade, para gerenciar a configuração do Zsh. Ele vem com milhares de funções auxiliares, plugins e temas que tornam a linha de comando mais agradável e produtiva.

## Instalando o Zsh com "Oh My Zsh!"

Para instalar o **Oh My Zsh** (que também instalará o Zsh se necessário e o definirá como seu shell padrão), basta abrir o **Terminal** e executar um simples comando:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

O processo de instalação é rápido e simples. O script fará um backup do seu arquivo de configuração existente (`.zshrc`, se houver) e criará um novo com as configurações padrão do Oh My Zsh.

Ao final, basta reiniciar o Terminal (feche-o e abra novamente).

Com isso, o Zsh, gerenciado pelo Oh My Zsh, já estará disponível como seu shell padrão sempre que você abrir o Terminal.

## Personalizando o Zsh

Toda a configuração do seu shell agora está no arquivo `~/.zshrc`. Você pode editá-lo para alterar temas, adicionar plugins e personalizar o comportamento do seu terminal.

*   **Temas:** Para alterar o tema, encontre a linha `ZSH_THEME="robbyrussell"` no seu `~/.zshrc` e substitua `"robbyrussell"` pelo nome de outro tema. Você pode encontrar a lista de temas na [wiki do Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes). Após salvar a alteração, reinicie o terminal.
*   **Plugins:** Oh My Zsh vem com um vasto conjunto de plugins. Para ativá-los, adicione seus nomes à lista `plugins=(git)` no seu `~/.zshrc`. Por exemplo: `plugins=(git docker npm)`.
