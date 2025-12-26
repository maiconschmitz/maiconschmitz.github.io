---
layout: post
title: Comunicando Raspberry Pi com Arduino via USB (Serial)
date: 2016-02-29 18:00:00.000000000 -03:00
categories:
- blog
tags:
- raspberry-pi
- raspbian
- arduino
- usb
status: publish
type: post
published: true
alias: blog/2016/02/29/comunicando-raspberry-pi-arduino-usb.html
---

Uma das formas mais simples de comunicar o **Raspberry Pi** com o **Arduino**, quando uma conexão física é possível, é através da comunicação serial.

É possível conectar o Raspberry Pi e o Arduino através da **GPIO**, nas portas **RX** e **TX**, porém uma forma ainda mais simples de fazer essa conexão é utilizando a própria porta **USB** de ambos os dispositivos.

Para efetuar a conexão, pode-se utilizar o próprio cabo do Arduino ou um cabo USB 2.0 com conectores macho "A" e macho "B", de uso comum em impressoras.

## Arduino

Para testar a conexão, abra a IDE do Arduino e crie um novo projeto com o seguinte código:

```c
void setup() {
  Serial.begin(9600);
}

void loop() {
  delay(5000);
  Serial.println("COMUNICACAO SERIAL VIA USB");
}
```

Feito isso, carregue este sketch para o Arduino.

## Raspberry Pi

No Raspberry Pi, você irá primeiramente verificar qual é o endereço da porta USB.

Para isso, com o cabo USB desconectado do RPi, execute o seguinte comando no terminal:

```shell
ls /dev/tty*
```

Agora, conecte o cabo USB do Arduino ao RPi e execute o mesmo comando novamente para verificar a nova porta que aparece na lista.

Normalmente, a nova porta é a **ttyACM0**.

Sendo assim, crie um novo arquivo Python com o seguinte código:

```python
import serial
comunicacaoSerial = serial.Serial('/dev/ttyACM0', 9600)

while 1:
  print comunicacaoSerial.readline()
```

No nosso exemplo, o arquivo foi nomeado como **testeserial.py**.

Antes de rodar o projeto, não se esqueça de instalar o pacote `pySerial`:

```shell
sudo pip install pyserial
```

Para testar, basta executar:

```shell
python testeserial.py
```

Se tudo ocorrer sem erros, a cada 5 segundos você verá a mensagem "COMUNICACAO SERIAL VIA USB" sendo impressa no terminal, vindo diretamente do **Arduino**.

Agora, basta expandir seu projeto!
