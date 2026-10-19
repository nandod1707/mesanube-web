---
id: 6ac54ac18ead5334e32a3125
title: Cómo configurar dónde se imprimen la precuenta, la factura y la nota de crédito
slug: impresion-precuenta-factura
section: caja
summary: Elegí la impresora de recibos del local para que la precuenta, la factura y la nota de crédito salgan por ahí desde cualquier computadora.
order: 10
updated: 2026-10-06
status: published
---
En un local con varias computadoras, la precuenta, la factura y la nota de crédito pueden salir por la impresora de recibos del local sin importar desde qué pantalla se pidan. Así un mesero con una tablet no necesita impresora propia.

## Antes de empezar

- Lo configuran el **Dueño** y el **Encargado**.
- Se hace en la computadora que tiene la impresora de recibos, con la app de impresión de Mesanube abierta y conectada.

## Pasos

### Para elegir la impresora de recibos del local

1. En la computadora que tiene la impresora, entrá a **Configuración → Cajas**.
2. En la tarjeta **Configuración de esta terminal**, abrí **Impresora de recibos del local**.
3. Elegí la impresora.

Desde ese momento, los pedidos de impresión de las demás computadoras del local salen por esa impresora. Ese equipo tiene que tener Mesanube abierto.

### Para que una computadora mande sus tickets a la impresora del local

1. En esa computadora, entrá a **Configuración → Cajas**.
2. En **Impresora para esta terminal**, elegí **Usar la impresora de recibos del local**.

Para volver a imprimir en esa computadora, elegí su impresora en el mismo campo.

## Qué pasa después

- Una computadora con la app de impresión conectada y una impresora elegida imprime sus propios tickets directo, sin pasar por el servidor.
- Una computadora sin la app de impresión, como la tablet de un mesero, manda el ticket a la impresora de recibos del local.
- Si la computadora de la impresora estaba cerrada, la impresión queda pendiente 10 minutos y sale sola al abrir Mesanube, una sola vez. Pasado ese tiempo, se descarta y hay que pedirla de nuevo. Vale también para las comandas de cocina.

## Problemas frecuentes

### Dice "No hay impresora de recibos configurada para este local"
Falta elegir la impresora en **Impresora de recibos del local**. Hacelo como en el primer paso.

### Dice "Agente de impresión no conectado"
La computadora que imprime sus propios tickets perdió la conexión con la app de impresión. Reiniciá la app o refrescá la página, y volvé a intentar. El ticket no sale por otra máquina.

### Mi computadora no tiene impresora de tickets y no imprime
La app de impresión elige una impresora sola al arrancar, aunque sea virtual, como Microsoft Print to PDF. Revisá **Impresora para esta terminal** y, si muestra una virtual, elegí **Usar la impresora de recibos del local**.

### El aviso dice que se envió, pero no salió
El aviso confirma que el pedido se envió, no que la impresora respondió. Revisá el papel y el estado de la impresora, y que la computadora que la tiene esté abierta y conectada.

### Salió un ticket viejo al abrir la computadora
Es la impresión pendiente de cuando estaba cerrada. Si el pedido se anuló mientras tanto, la comanda no se imprime.

### El ticket se corta dos veces
Apagá el corte automático de esa impresora. Ver [modo de impresión, ancho y corte](/soporte/impresoras/ancho-y-transporte-de-impresion).

## Relacionados

- [Cómo asignar una caja a cada computadora y un perfil fiscal a cada caja](/soporte/caja/caja-por-terminal-y-perfil-fiscal)
- [Cómo configurar los Sectores de cocina](/soporte/cocina/sectores-de-cocina)
- [Cómo revisar tus facturas emitidas en la página de Facturación](/soporte/facturacion/pagina-facturacion-y-notas-de-credito)
