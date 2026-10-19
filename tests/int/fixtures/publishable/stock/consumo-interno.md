---
id: 6ac54ada8ead5334e32a3341
title: Cómo cerrar una mesa como consumo interno
slug: consumo-interno
section: stock
summary: Cerrá un pedido como consumo interno, por ejemplo comida del personal o una prueba, para descontar stock y costo sin registrar una venta.
order: 6
updated: 2026-10-06
status: published
---
Cuando el personal come, probás un plato nuevo o invitás a alguien, esa mercadería sale del inventario. Con **Consumo interno**, el stock y el costo se descuentan, pero no se registra ningún ingreso. Tus ventas y tu rentabilidad quedan limpias.

## Antes de empezar

- Pueden usarlo el **Dueño** y el **Encargado**. El **Cajero** también, con la aprobación de un encargado. No está disponible para el mesero ni para la cocina.
- El servidor también lo bloquea para esos roles: no se puede saltear desde la app.

## Pasos

1. Tomá el pedido como siempre.
2. Abrí la ventana de cobro: **Cerrar Mesa** en un pedido de mesa, o **Cobrar** en **Mostrador**.
3. En la lista de medios de pago, elegí **Consumo interno**. Aparece último.
4. Si sos cajero, elegí al encargado y escribí su contraseña.
5. Confirmá con **Confirmar Pago**.

## Qué pasa después

- El pedido se cierra con total **$0**.
- Se descuenta el stock de lo consumido, igual que en una venta, y se congela el costo. En **Movimientos** figura con el motivo **Consumo interno**.
- No genera ingreso ni entra al arqueo de caja, y no cuenta como venta.
- En el detalle del turno aparece en su propia tarjeta **Consumo interno**, con la cantidad de pedidos y el costo consumido. No es una fila en $0 dentro de las ventas.
- El costo de lo consumido se registra, así podés medir cuánto se va en consumo interno. La venta es $0, el costo no.

## Problemas frecuentes

### Me di cuenta después de cobrar
Un pedido ya cobrado se puede pasar a Consumo interno, o sacar de Consumo interno, desde su detalle. Ver [cómo pasar un pedido cobrado a Consumo interno](/soporte/pedidos/pasar-un-pedido-cobrado-a-consumo-interno).

### Quiero combinar Consumo interno con otro medio de pago
No se puede. Es todo o nada, así que no aparece en el cobro con varios medios de pago.

### Es lo mismo que un descuento del 100%
El total también queda en $0, pero Consumo interno descuenta el stock y el costo sin generar ingreso, y se informa aparte de las ventas.

## Relacionados

- [Cómo pasar un pedido cobrado a Consumo interno, o sacarlo](/soporte/pedidos/pasar-un-pedido-cobrado-a-consumo-interno)
- [Cómo configurar cuentas y medios de pago](/soporte/caja/cuentas-y-medios-de-pago)
- [Cómo ver el stock de tu local](/soporte/stock/control-de-stock)
- [Cómo leer el reporte de variación de CMV, real contra teórico](/soporte/reportes/reporte-rvt-variacion-cmv)
