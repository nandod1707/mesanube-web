---
id: 6ac54ad08ead5334e32a325d
title: Cuándo se descuenta el stock de un pedido
slug: descuento-de-stock-al-crear-el-pedido
section: pedidos
summary: El stock se descuenta cuando cargás o editás el pedido, no cuando lo cobrás, y vuelve solo si el pedido se reduce o se anula antes de cobrarse.
order: 8
updated: 2026-10-06
status: published
---
El stock de los items con control de stock se descuenta en el momento en que cargás o editás un pedido, no al cobrarlo. Así los niveles de stock reflejan lo que ya se pidió, aunque la mesa lleve horas abierta. No hay nada para configurar.

## Cómo funciona

- **Al crear un pedido**, se descuenta el stock de lo que lleva cada plato según su receta, o del producto si tiene stock propio.
- **Al editar un pedido sin cobrar**, el sistema ajusta por la diferencia: descuenta si el pedido creció y devuelve si bajó.
- **Al anular un pedido sin cobrar**, vuelve todo el stock descontado. Lo mismo pasa si [reducís items hasta vaciarlo](/soporte/pedidos/anular-o-reducir-items-de-un-pedido-enviado).
- **Al cobrar**, no se descuenta de nuevo.

Para ver cada movimiento, andá a **Control de stock → Niveles y movimientos** y abrí **Movimientos**. Las devoluciones por edición o anulación aparecen como **Devolución de venta**, separadas de una venta común.

## Problemas frecuentes

### Cargué un pedido sin stock suficiente
El pedido se crea igual. Cargar o editar un pedido nunca se bloquea por falta de stock: el nivel queda en negativo y salta el aviso de stock bajo.

### El costo del plato no coincide con el costo actual del ingrediente
El costo (CMV) de cada plato se congela cuando se descuenta el stock, es decir al cargar o editar el pedido. Si el costo de un ingrediente cambió mientras la mesa estaba abierta, el reporte usa el costo del momento en que se pidió.

### Un pedido viejo no devolvió stock al anularlo
Los pedidos abiertos antes de este cambio siguen con el comportamiento anterior, donde el stock se descuenta al cobrar. Los pedidos nuevos usan la mecánica actual.

### Cobré un pedido como Consumo interno
El momento del descuento no cambia. Solo cambia cómo queda etiquetado: como consumo interno. Ver [Consumo interno](/soporte/stock/consumo-interno).

## Relacionados

- [Cómo ver el stock de tu local](/soporte/stock/control-de-stock)
- [Cómo anular un pedido](/soporte/pedidos/anular-un-pedido)
- [Cómo ver cuánto consumiste de cada ingrediente](/soporte/stock/consumo-de-ingredientes)
- [Cómo leer el reporte de variación de CMV, real contra teórico](/soporte/reportes/reporte-rvt-variacion-cmv)
