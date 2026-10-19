---
id: 6ac54ac48ead5334e32a3161
title: Cómo configurar los Sectores de cocina
slug: sectores-de-cocina
section: cocina
summary: Creá Sectores como Cocina, Barra y Postres para que cada estación reciba solo los productos de sus categorías, en pantalla, en impresora o en ambas.
order: 3
updated: 2026-10-06
status: published
---
Un **Sector** es una estación de la cocina, como Cocina, Barra o Postres. Con Sectores, cada estación recibe solo lo que le corresponde según la categoría de cada producto, y un pedido de solo bebidas no molesta a la cocina.

## Antes de empezar

- Lo configuran el **Dueño** y el **Encargado**.
- Las categorías son las de tu menú. Se crean en **Categorías**, en el menú **Carta**.
- Cada local arranca con un Sector llamado **Sector principal**, marcado como **EXPO**. Si tu local tiene una sola estación, no hace falta crear más.

## Pasos

1. Entrá a **Configuración → Comandas**. Ves la lista de **Sectores de cocina** del local elegido.
2. Tocá **Agregar Sector**.
3. Escribí el **Nombre**, por ejemplo "Cocina" o "Barra".
4. Encendé **Mostrar en pantalla (KDS)** si una pantalla tiene que mostrar los pedidos de este Sector.
5. Si querés que imprima, elegí una **Impresora**. Para un Sector solo de pantalla, dejala en **Sin impresora**.
6. En **Categorías**, elegí las que prepara este Sector.
7. Guardá.

Repetí por cada estación. Una barra con cocina suele tener tres Sectores: **Sector principal** (Expo), **Cocina** con la categoría Comida y **Barra** con la categoría Bebidas.

## Cómo se envía cada producto

Cuando entra un pedido, o se modifica uno, Mesanube mira la categoría de cada producto:

- Si la categoría está asignada a uno o más Sectores, el producto va a esos Sectores.
- Si la categoría no está asignada a ningún Sector, o el producto no tiene categoría, va al Sector **Expo**. Así nunca se pierde un producto.

Un **Expo** recibe, además de las categorías que le asignes, las que ningún otro Sector cubre. Ve las tarjetas de todo el local para coordinar la salida, pero solo puede mover las suyas.

Una actualización de un pedido llega solo al Sector afectado.

## Cómo se ve en pantalla y en impresora

- **En la pantalla de cocina**, si el local tiene más de un Sector, aparece el selector **Sector** arriba del tablero. Cada terminal recuerda su elección, así que la pantalla del bar puede quedar en "Barra". Con un solo Sector, el selector no aparece.
- **En la impresora**, cada Sector imprime en su propia impresora. Un pedido de una milanesa y una gaseosa sale en la impresora de la Cocina solo con la milanesa, y en la de la Barra solo con la gaseosa.

La impresora de recibos al cliente es independiente. Ver [dónde se imprimen la precuenta, la factura y la nota de crédito](/soporte/caja/impresion-precuenta-factura).

## Reglas

- Todo local necesita al menos un Sector **Expo**. No se puede borrar el último Sector, ni quitar la marca al único Expo.
- Cada Sector necesita al menos un dispositivo: una impresora o la pantalla.

## Problemas frecuentes

### Veo el aviso "Categorías no asignadas"
Aparece en **Configuración → Comandas** con una lista de categorías que ningún Sector cubre. Sus productos van al Expo. Asignalas a un Sector si querés que salgan en otra estación.

### Tengo varios locales y no veo todas las categorías
Cada local muestra solo las categorías con productos en las cartas que tiene asignadas. Si el local no tiene cartas asignadas, ve todas.

### Quiero que cada caja imprima las comandas de la barra
Ver [cómo hacer que cada caja imprima sus propias comandas](/soporte/cocina/impresora-local-por-caja).

## Relacionados

- [Cómo se ven en cocina los cambios de un pedido](/soporte/cocina/comandas-de-actualizacion)
- [Cómo hacer que cada caja imprima sus propias comandas](/soporte/cocina/impresora-local-por-caja)
- [Cómo usar el tablero de cocina](/soporte/cocina/tablero-de-cocina)
