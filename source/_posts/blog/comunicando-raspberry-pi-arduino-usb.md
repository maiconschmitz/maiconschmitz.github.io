---
layout: post
title: Comunicando Raspberry Pi com Arduino via USB (Serial)
date: 2016-02-29 18:00:00.000000000 -03:00
categories:
- Blog
tags:
- raspberry-py
- raspbian
- arduino
- usb
- Raspberry Py
- Raspbian
- Arduino
- USB
status: publish
type: post
published: true
alias: blog/2016/02/29/comunicando-raspberry-pi-arduino-usb.html
---

Umas das formas mais simples de comunicar o **Raspberry Pi** com **Arduino**, onde uma conexão física é possível, é através da comunicação Serial.

É possível conectar o Raspberry Pi e o Arduino através da **GPIO**, nas portas **RX** e **TX**, porém uma forma mais simples ainda, de fazer tal conexão, é utilizando a própria porta **USB** de ambos os dispositivos.

Para efetuar tal conexão, pode-se utilizar o próprio cabo do Arduino, ou então um Cabo USB 2.0 com conectores Macho "A" e Macho "B", de uso comum em impressoras.

## Arduino

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=schmitz-20&language=pt_BR&marketplace=amazon&region=BR&placement=8575224042&asins=8575224042&linkId=da1857cf81595d2ebdb1d94a049bba4d&show_border=true&link_opens_in_new_window=true"></iframe>

Para testar tal conexão, abra a IDE do Arduino e crie um novo projeto, com o seguinte código:

~~~ c
void setup() {
  Serial.begin(9600);
}

void loop() {
  delay(5000);
  Serial.println("COMUNICACAO SERIAL VIA USB");
}
~~~

Feito isto, carregue esta Sketch para o Arduino.

## Raspberry Pi

| Raspberry Pi 3  | Raspberry Pi 4  |
| --------------- |:---------------:|
| <a href="https://www.amazon.com.br/gp/product/B01CD5VC92?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=4f2021a2a4c1b0a33eec617fd9541a9a&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CD5VC92&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B01CD5VC92" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> | <a href="https://www.amazon.com.br/gp/product/B07TC2BK1X?ie=UTF8&linkCode=li2&tag=schmitz-20&linkId=a1723e2362521127a480ceb4a9860096&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TC2BK1X&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=schmitz-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=schmitz-20&language=pt_BR&l=li2&o=33&a=B07TC2BK1X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> |

No Raspberry Pi, você irá primeiramente verificar qual é o endereço da porta USB.

Para isto, com o cabo USB desconectado do RPi, execute o seguinte comando no terminal:

	ls /dev/tty*

Agora, conecte o cabo USB do Arduino ao RPi e execute o mesmo comando novamente, para verificar a nova porta que aparece na lista.

Normalmente, a nova porta é a **ttyACM0**

Sendo, assim, crie um novo arquivo Python, com o seguinte código:

~~~ python
import serial
comunicacaoSerial = serial.Serial('/dev/ttyACM0', 9600)

while 1 :
  print comunicacaoSerial.readline()
~~~

No nosso exemplo, foi criado o arquivo **testeserial.py**

Antes de rodar o projeto, não esqueça de instalar o pacote pySerial

	$sudo pip install pyserial

Para testar, basta executar:

	$python testeserial.py

Se tudo ocorrer sem erros, à cada 5 segundos, você verá a mensagem **COMUNICACAO SERIAL VIA USB** sendo impressa no Terminal, vindo diretamente do **Arduino**.

Agora basta expandir seu projeto!
