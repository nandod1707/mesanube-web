---
id: 6ac54ac48ead5334e32a3155
title: Cómo hacer que cada caja imprima sus propias comandas
slug: impresora-local-por-caja
section: cocina
summary: Configurá un Sector para que sus comandas salgan por la impresora de la computadora que tomó el pedido, en lugar de una impresora fija.
order: 4
updated: 2026-10-06
status: published
---
Si tenés varias cajas, cada una con su impresora, podés hacer que la comanda de un Sector, por ejemplo la Barra, salga en la impresora de la computadora que tomó el pedido. La cerveza de la caja 1 sale en la impresora de la caja 1, y la de la caja 2 en la suya.

## Antes de empezar

- Lo configuran el **Dueño** y el **Encargado**.
- Cada computadora tiene que tener la app de impresión de Mesanube abierta y conectada.
- Los Sectores que no usan impresora local, como Cocina, siguen saliendo por su impresora fija.

## Pasos

1. En la computadora de cada caja, entrá a **Configuración → Cajas**.
2. En la tarjeta **Configuración de esta terminal**, abrí **Impresora para esta terminal** y elegí la impresora de esa computadora. No elijas **Usar la impresora de recibos del local**.
3. Entrá a **Configuración → Comandas** y abrí el Sector, por ejemplo "Barra".
4. Encendé **Usar impresora local**.
5. En **Impresora de respaldo**, elegí una impresora para los pedidos que no vengan de una caja.
6. Guardá.

## Qué pasa después

La comanda de ese Sector la imprime solo la computadora que tomó el pedido, así que nunca se duplica.

## Problemas frecuentes

### La comanda salió por la impresora de respaldo
Pasa cuando el pedido no viene de una caja, por ejemplo si lo cargó un mesero desde su dispositivo. También si esa computadora no tiene la app de impresión abierta, o si eligió **Usar la impresora de recibos del local**.

### Una computadora no imprime sus comandas
Revisá **Impresora para esta terminal** en **Configuración → Cajas**. Si esa computadora no tiene impresora de tickets, la app de impresión puede haber elegido una virtual, como Microsoft Print to PDF. Elegí la impresora correcta.

### La app avisa que la impresora no está disponible
La impresora elegida ya no está en la computadora. Elegí otra en **Configuración → Cajas**.

## Relacionados

- [Cómo configurar los Sectores de cocina](/soporte/cocina/sectores-de-cocina)
- [Cómo asignar una caja a cada computadora y un perfil fiscal a cada caja](/soporte/caja/caja-por-terminal-y-perfil-fiscal)
- [Cómo configurar dónde se imprimen la precuenta, la factura y la nota de crédito](/soporte/caja/impresion-precuenta-factura)
