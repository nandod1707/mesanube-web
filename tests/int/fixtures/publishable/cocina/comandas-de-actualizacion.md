---
id: 6ac54ac38ead5334e32a3149
title: Cómo se ven en cocina los cambios de un pedido
slug: comandas-de-actualizacion
section: cocina
summary: Cuando se modifica un pedido en curso, la cocina recibe una tarjeta o una comanda aparte con solo los cambios, marcada como ACTUALIZACIÓN.
order: 1
updated: 2026-10-06
status: published
---
Cuando un mesero modifica un pedido que ya salió a cocina, la cocina no recibe la orden completa otra vez. Recibe una tarjeta en la pantalla, o una comanda corta en la impresora, con **solo los cambios**.

## Cómo se ve en la pantalla de cocina

Cada cambio entra como una tarjeta nueva en la columna **Pendiente** del [tablero de cocina](/soporte/cocina/tablero-de-cocina). Tiene:

- El número del pedido y la mesa o el nombre del cliente, iguales a los de la orden original.
- La etiqueta **ACTUALIZACIÓN**.
- Su propio reloj, que arranca cuando entra el cambio.
- Solo las líneas afectadas, con estas marcas:
  - **+1x Producto**: se agregó uno más.
  - **CANCELAR: −1x Producto**: se anuló uno.
  - **MODIFICAR: Producto**: cambió un detalle, por ejemplo "sin cebolla".
  - **NOTA ACTUALIZADA**, **NOTA AGREGADA** o **NOTA ELIMINADA**: cambió la nota de un plato.

La tarjeta de actualización recorre las cuatro columnas por su cuenta, igual que cualquier otra. La tarjeta original sigue donde estaba y su reloj vuelve a empezar, porque el plato cambió.

## Cómo se ve en la impresora

Si el local imprime las comandas, sale una comanda corta con el rótulo **ACTUALIZACION**, el número del pedido, la mesa, el mesero, la hora y las líneas que cambiaron. La comanda original no se reimprime. En un local con varios Sectores, la actualización sale por la impresora del Sector afectado. Ver [Sectores de cocina](/soporte/cocina/sectores-de-cocina).

## Qué cambios generan una actualización

Se genera una actualización solo cuando hay trabajo nuevo para la cocina:

- Agregar un producto.
- Cambiar la cantidad de un producto.
- Cancelar un producto.
- Cambiar los modificadores de un producto.
- Agregar, cambiar o borrar la nota de un plato.

No genera actualización cobrar el pedido, aplicar un descuento ni editar la nota general del pedido. Si la cocina no tiene nada que hacer, no llega tarjeta, comanda ni sonido.

## Problemas frecuentes

### Recargué la pantalla de cocina
No se pierde nada. Las tarjetas se guardan en el servidor y vuelven a la misma columna, incluso después de una caída de conexión o al abrir una segunda pantalla.

### La tarjeta original sigue ahí después de mover la actualización
Son dos unidades de trabajo distintas y se mueven por separado. El café agregado puede estar en **Listo** mientras la cena sigue en **Preparando**.

### La impresora estaba apagada cuando se modificó el pedido
Mesanube guarda el pedido de impresión pendiente durante 10 minutos. Si la computadora que imprime vuelve a conectarse en ese tiempo, la comanda sale sola. Pasado ese tiempo, se descarta. Las tarjetas de la pantalla de cocina no dependen de la impresora.

### Necesito reimprimir una comanda de actualización
No hay un botón de reimpresión. Si hace falta, editá el pedido de nuevo para generar otra comanda.

## Relacionados

- [Cómo usar el tablero de cocina](/soporte/cocina/tablero-de-cocina)
- [Cómo configurar los Sectores de cocina](/soporte/cocina/sectores-de-cocina)
- [Cómo cargar una nota por unidad de cada plato](/soporte/pedidos/notas-por-item)
