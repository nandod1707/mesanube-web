---
id: 6ac54ad98ead5334e32a3329
title: Cómo comparar el consumo entre dos conteos de inventario
slug: consumo-de-ingredientes-por-periodo
section: stock
summary: Compará lo que deberías tener de cada ingrediente contra lo que contaste entre dos conteos cerrados, y mirá la variación en unidades y en pesos.
order: 5
updated: 2026-10-06
status: published
---
Con dos conteos cerrados, este reporte arma lo que pasó en el medio: lo que había, más lo que compraste, menos lo que se consumió, más o menos los ajustes, cuánto debería quedar y cuánto contaste. La diferencia es la variación, que te muestra la merma, el robo o el error de carga.

## Antes de empezar

- Lo usan el **Dueño** y el **Encargado**, con el módulo **Control de stock**.
- Necesitás al menos dos conteos cerrados en el local. Con uno solo, el reporte avisa que falta cerrar otro. Ver [cómo hacer un conteo](/soporte/stock/conteo-de-inventario).
- Es por local. Elegí el local en el selector del menú lateral.

## Pasos

1. Abrí **Control de stock → Conteo de inventario** y entrá a la solapa **Consumo por periodo**.
2. Elegí **Desde (conteo)** y **Hasta (conteo)**. Por defecto vienen el anteúltimo y el último conteo cerrado. Los conteos no tienen que ser consecutivos.
3. Si querés, filtrá por **Categorias**.
4. Leé la tabla. Por ingrediente muestra:
   - **Inicial decl.**: lo que contaste en el conteo anterior.
   - **Compras**: lo que ingresó por compras de mercadería en el período.
   - **Consumo teorico**: lo que las ventas deberían haber descontado según las recetas.
   - **Ajustes**: mermas, desperdicios o roturas cargadas a mano.
   - **Esperado**: inicial más compras, menos consumo, más o menos ajustes.
   - **Final decl.**: lo que contaste en este cierre.
   - **Variacion**: final menos esperado, en unidades.
   - **Variacion $**: esa diferencia valuada al costo del ingrediente.
5. Tocá **Exportar** para bajar el reporte a Excel, con el filtro de categorías aplicado.

## Cómo leer la variación

- Una variación negativa significa que contaste menos de lo esperado: faltante por merma, robo o error.
- Una variación positiva significa que contaste de más, por lo general por un error de carga o una receta mal cargada.
- La tabla agrupa por categoría, con un subtotal en pesos al final de cada grupo y un **Total variacion valorizada**.

## Problemas frecuentes

### Elegí conteos separados por varios conteos intermedios
Se puede. Las compras, el consumo y los ajustes suman todo el tramo, y los conteos del medio no tapan la deriva acumulada.

### Un ingrediente no suma a la variación en pesos
No tiene costo cargado. Su variación aparece en unidades y el reporte avisa cuántos ítems quedaron sin costo.

### El ajuste de un conteo no aparece en Ajustes
Es lo esperado. El ajuste que lleva el stock al contado no se cuenta dos veces, porque el inicial declarado ya parte del número contado.

## Relacionados

- [Cómo hacer un conteo de inventario](/soporte/stock/conteo-de-inventario)
- [Cómo ver cuánto consumiste de cada ingrediente](/soporte/stock/consumo-de-ingredientes)
- [Cómo ver el stock de tu local](/soporte/stock/control-de-stock)
