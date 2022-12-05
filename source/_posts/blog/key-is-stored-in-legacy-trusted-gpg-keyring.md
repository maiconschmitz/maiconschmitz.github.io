---
layout: post
title: Como resolver a exibição do aviso de depreciação do 'apt-key'
date: 2022-12-05 18:30:00.000000000 -03:00
categories:
- blog
tags:
- ubuntu
- linux
status: publish
type: post
published: true
---

Como resolver a exibição do aviso `Key is stored in legacy trusted.gpg keyring`, que é disparado ao executar o **apt update** via linha de comando em versões mais recentes do Ubuntu (versões acima da 20.04).

Este warning é exibido ao executar o apt update via linha de comando:

	Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

A origem desta mensagem vem da necessidade de instalar algum software de terceiro, que não está presente no repositório oficial do Ubuntu.

Nestes casos, é comum ao adicionar o repostório de terceiros, adicionar também uma chave GPG (chave pública) emitida pelos desenvolvedores dos pacotes que iremos instalar.

No passado a chave pública era geralmente baixada e passada diretamente para o `apt-key add`. No entanto, nas versões mais recentes do Ubuntu, esse método foi definido como obsoleto.

## Siga os passos abaixo, para corrigir isto

Acesse o terminal e execute:

	sudo apt-key list

Você terá uma saída semalhante à listada abaixo:

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

	/etc/apt/trusted.gpg.d/ubuntu-keyring-2018-archive.gpg
	------------------------------------------------------
	pub   rsa4096 2018-09-17 [SC]
		F6EC B376 2474 EDA9 D21B  7022 8719 20D1 991B C93C
	uid           [ desconhecida] Ubuntu Archive Automatic Signing Key (2018) <ftpmaster@ubuntu.com>


Neste caso, o que responsável pela geração do warning é o bloco abaixo:

	/etc/apt/trusted.gpg
	--------------------
	pub   rsa4096 2020-05-07 [SC]
		E8A0 32E0 94D8 EB4E A189  D270 DA41 8C88 A321 9F7B
	uid           [ desconhecida] HashiCorp Security (HashiCorp Package Signing) <security+packaging@hashicorp.com>
	sub   rsa4096 2020-05-07 [E]


Para corrigir, você deve pegar os últimos 8 caracteres da chave.
Neste exemplo, para a chave: E8A0 32E0 94D8 EB4E A189  D270 DA41 8C88 **A321 9F7B**, os últimos 8 caracteres são: **A3219F7B**.

Agora, execute o comando **apt-key export** no terminal, passando os últimos 8 caracteres da chave, definindo o caminho `/etc/apt/trusted.gpg.d/` e um novo nome para o arquivo que conterá a chave GPG.

Neste caso, por se tratar de um repositório da **Hashicorp**, meu comando ficou assim:

	sudo apt-key export A3219F7B | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/hashicorp.gpg

Uma vez feito isto, basta voltar à executar o **apt update** e você não verá mais este warning.