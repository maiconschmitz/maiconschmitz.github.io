---
title: "Instalando o Raspberry Pi OS sem Teclado, Mouse e Monitor (Headless)"
date: 2020-06-15 06:00:00.000000000 -03:00
tags:
- macos
- linux
- windows
- raspberry-pi
- raspbian
- "raspberry pi os"
- ssh
- headless
published: true
---

O processo de instalação padrão do **Raspberry Pi OS** é bastante simples. Após gravar o cartão SD com o sistema, você o insere no Raspberry Pi, conecta um teclado, mouse e um monitor, e por fim, a fonte de energia. O sistema inicia automaticamente, e você segue o assistente de configuração.

Para saber como criar um cartão com o instalador, acesse o post: [Criando um cartão SD de Instalação do Raspberry Pi OS](https://www.maiconschmitz.com.br/blog/2020/06/08/criando-sd-de-instalacao-do-raspberry-pi-os-no-macos-linux-windows/).

Mas e se você desejar instalar e configurar o Raspberry Pi OS sem precisar de teclado, mouse ou monitor, em um modo conhecido como "headless"?

| Raspberry Pi 3  | Raspberry Pi 4  |
| :---: |:---:|
| <a href="https://www.amazon.com.br/gp/product/B01CD5VC92?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=4f2021a2a4c1b0a33eec617fd9541a9a&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CD5VC92&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B01CD5VC92" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> | <a href="https://www.amazon.com.br/gp/product/B07TC2BK1X?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=a1723e2362521127a480ceb4a9860096&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TC2BK1X&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B07TC2BK1X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> |

# Configuração Headless

Para efetuar a instalação do Raspberry Pi OS sem a necessidade de periféricos, você deverá seguir alguns pequenos passos logo após a gravação da imagem no cartão SD, antes de inseri-lo no Raspberry Pi.

## Habilitando o acesso remoto via SSH

Para efetuar o acesso e a configuração de forma remota, você deverá habilitar o servidor SSH, que por padrão vem inativo por razões de segurança.

Logo após a gravação da imagem no cartão SD, e antes de ejetá-lo do seu computador, acesse a partição de boot do cartão (que geralmente é montada com o nome "boot"). Na raiz desta partição, crie um arquivo vazio chamado `ssh` (sem extensão e sem conteúdo).

Para fazer isso no Terminal do macOS ou Linux, por exemplo, basta acessar o volume:

```bash
cd /Volumes/boot
```

E criar o arquivo:

```bash
touch ssh
```

## Configuração do Wi-Fi

Para que seu Raspberry Pi se conecte automaticamente a uma rede Wi-Fi no primeiro boot, você precisará fornecer as credenciais de acesso.

Ainda na partição "boot" do cartão SD, crie um arquivo chamado `wpa_supplicant.conf`.

Abra este arquivo em um editor de texto e insira o seguinte conteúdo, alterando os campos necessários:

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=<Insira aqui o código ISO 3166-1 de duas letras do seu país>

network={
  ssid="<O nome da sua rede Wi-Fi>"
  psk="<A senha da sua rede Wi-Fi>"
}
```

Para o código do país, você pode consultar a [lista ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Para o **Brasil**, utilize `BR`.

Após criar os arquivos `ssh` e `wpa_supplicant.conf`, ejete o cartão SD, insira-o no Raspberry Pi e conecte o cabo de energia. Se o seu modelo não possuir Wi-Fi (ou se o sinal for fraco), conecte também um cabo de rede.

# Conectando-se ao Raspberry Pi via SSH

Após ligar seu Raspberry Pi, aguarde cerca de um minuto para que ele inicialize e se conecte à rede.

Por padrão, o **Raspberry Pi OS** se identifica na rede local com o hostname **raspberrypi.local**.

Você pode verificar se ele está na rede com um `ping`:

```bash
ping raspberrypi.local
```

Para conectar-se via SSH, utilize o usuário padrão `pi` e a senha `raspberry` (lembre-se de alterar a senha padrão após o primeiro login por segurança).

No Linux ou macOS, acesse o terminal e execute:

```bash
ssh pi@raspberrypi.local
```

No Windows, você pode usar um cliente SSH como o [PuTTY](https://www.putty.org/) ou o próprio cliente OpenSSH nativo do Windows 10/11, com o mesmo comando acima.
