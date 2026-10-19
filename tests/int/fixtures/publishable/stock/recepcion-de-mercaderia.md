---
id: 6ac54adb8ead5334e32a3365
title: Cómo registrar mercadería ítem por ítem
slug: recepcion-de-mercaderia
section: stock
summary: Cargá la mercadería que entra, con cantidad y costo de cada ítem, para que Mesanube actualice el stock y el costo promedio.
order: 7
updated: 2026-10-06
status: published
---
Cuando registrás una recepción de mercadería, el stock sube y el costo promedio de cada ítem se recalcula solo. Eso mantiene tu inventario y tus costos al día, y es lo que hace confiable el reporte de CMV real contra teórico.

## Antes de empezar

- Lo registran el **Dueño** y el **Encargado**.
- Tu cuenta tiene que incluir el módulo **Control de gastos**. Ver [planes y módulos](/soporte/cuenta/planes-y-modulos).
- Solo se cargan ítems que ya existen en tu catálogo, con el control de stock activado en ese local. Si lo que compraste no se inventaría, como una lámpara para el local, cargalo como gasto **Operativo**.

## Pasos

1. Entrá a **Control de gastos → Gastos e Ingresos** y tocá **Nuevo gasto**.
2. En **Tipo de gasto**, elegí **Mercadería**.
3. En **Detalle**, elegí **Por ítems**. Viene en **Por total**, que no mueve el stock. Ver [cómo registrar mercadería por total](/soporte/stock/registrar-mercaderia-por-total).
4. Si querés, elegí el proveedor y completá los datos del comprobante.
5. Tocá **Agregar ítem**. En **Ítem**, buscá el ingrediente. Indicá la **Cantidad**, la **Unidad** y el **Costo por** unidad.
6. Mirá la vista previa debajo de cada línea: **Stock** actual y el resultante, y el **Costo prom. estimado**. Se actualiza al instante, así una unidad equivocada salta a la vista.
7. Agregá las demás líneas de la compra.
8. Tocá **Confirmar recepción**.

## Qué pasa después

El stock sube y el costo promedio se actualiza. Mesanube usa promedio ponderado móvil: si tenías 5 kg a $1.000 y comprás 10 kg a $1.500, quedás con 15 kg a $1.333 cada uno. La vista previa es una estimación, y el valor definitivo lo calcula el servidor al confirmar.

## Aviso de cantidad inusual

Para evitar cargar 1600 kg cuando eran 1600 g, Mesanube compara la cantidad con lo que solés comprar de ese ítem:

- Si es bastante más alta, aparece un aviso ámbar debajo de la línea: "Cantidad inusual". No bloquea. Revisá la unidad y la cantidad.
- Si es enormemente más alta, al tocar **Confirmar recepción** se abre la ventana **Revisá la cantidad**. **Revisar** te lleva al campo **Unidad** de la línea marcada. Si cargaste bien, tocá **Confirmar de todas formas**.

El aviso no aparece en las primeras compras de un ítem, porque todavía no hay historial.

## Problemas frecuentes

### Me equivoqué en una cantidad o un costo
Las recepciones con ítems no se editan. Anulá la compra, que revierte el stock, y cargala de nuevo. Al abrir una compra registrada, ves su detalle de solo lectura.

### No se puede anular
Si la mercadería ya está en un conteo de inventario cerrado, la compra no se puede anular, porque ese período está congelado.

### Compré en otra unidad
Podés comprar en gramos un ingrediente que se mide en kilos: la conversión es automática. Con una unidad no compatible, como litros para algo que se mide en kilos, el sistema lo rechaza.

### Toqué dos veces sin querer
No se duplica la compra ni el stock.

### Pagué a cuenta del proveedor
La compra sube el stock igual, se pague al contado o a cuenta corriente.

## Relacionados

- [Cómo registrar mercadería cargando solo el total](/soporte/stock/registrar-mercaderia-por-total)
- [Cómo registrar un gasto](/soporte/caja/control-de-gastos)
- [Cómo ajustar el stock con un motivo](/soporte/stock/ajustar-stock)
