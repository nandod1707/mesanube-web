---
id: 6ac54ac18ead5334e32a3119
title: Cómo filtrar y exportar tus gastos a Excel
slug: filtrar-y-exportar-gastos
section: caja
summary: Filtrá los movimientos de Control de gastos por fecha, tipo, pago, categoría y proveedor, mirá los totales y descargá el resultado en Excel.
order: 4
updated: 2026-10-06
status: published
---
En **Control de gastos** filtrás la lista y los totales cambian con los filtros. Con el botón **Exportar** te bajás en Excel todo lo que cumple los filtros.

## Antes de empezar

- Lo usan el **Dueño** y el **Encargado**.
- La página muestra el local elegido en el selector de locales del menú lateral.

## Pasos

1. Entrá a **Control de gastos → Gastos e Ingresos**.
2. Arriba de la lista, elegí los filtros. Por defecto, la lista muestra el mes actual.
   - **Desde** y **Hasta**: el rango de fechas.
   - **Movimiento**: **Gasto** o **Ingreso**.
   - **Tipo**: **Mercadería** para ver cuánto se fue en insumos, u **Operativo** para el resto.
   - **Pago**: **Efectivo** o **Cuenta corriente**.
   - **Categoría** y **Proveedor**.
3. Mirá las tarjetas de totales: **Gastos en efectivo**, **Gastos en cta. cte.** y **Total ingresos**. Se actualizan con los filtros.
4. Para descargar, tocá **Exportar**, debajo de las tarjetas.

## Qué pasa después

El archivo `.xlsx` incluye **todos** los movimientos que cumplen los filtros, no solo los de la página que estás viendo. Cada fila trae Fecha, Movimiento, Tipo, Descripción, Proveedor, Categoría, Pago, tipo y número de comprobante, categoría fiscal, Local y Monto. Al pie se agregan los tres totales, iguales a los de las tarjetas. Los montos son números con formato de moneda, listos para sumar o filtrar.

En la lista, la columna **Pago** indica si fue efectivo o cuenta corriente, y los gastos que afectan el arqueo llevan la etiqueta **Arqueo**. La columna **Comprobante** muestra el tipo, la letra y el número, y un clip indica la cantidad de adjuntos.

## Problemas frecuentes

### El botón Exportar está deshabilitado
Se deshabilita mientras genera el archivo o si no hay movimientos con esos filtros. Ampliá el rango de fechas.

### Un gasto tiene la etiqueta Desde Caja
Es un gasto que se cargó como movimiento de caja durante un turno y aparece acá automáticamente.

### Quiero ver los gastos de otro local
Cambiá de local en el selector del menú lateral.

## Relacionados

- [Cómo registrar un gasto](/soporte/caja/control-de-gastos)
- [Cómo editar o anular un gasto](/soporte/caja/editar-o-anular-un-gasto)
