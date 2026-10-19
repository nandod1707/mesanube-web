---
id: 6ac54ac08ead5334e32a310d
title: Cómo exportar los cierres de caja a Excel
slug: exportar-cierres-de-caja
section: caja
summary: Descargá el historial de turnos cerrados en un Excel, con una fila por turno y una columna por cada medio de pago usado.
order: 7
updated: 2026-10-06
status: published
---
Para conciliar con tu contador o revisar un período completo, bajá todos los cierres de caja juntos en una planilla donde podés sumar, ordenar y cruzar datos.

## Antes de empezar

- Pueden exportar quienes ven **Turnos**: **Dueño**, **Encargado** y **Cajero**.
- El archivo es del local que tenés elegido en el selector de locales del menú lateral.

## Pasos

1. Entrá a **Turnos** y abrí la solapa **Historial**.
2. Ajustá los filtros **Desde**, **Hasta** y **Usuario**. El usuario es quien cerró el turno.
3. Tocá **Exportar**.

## Qué pasa después

Se descarga un archivo `.xlsx` con **todos** los cierres que cumplen los filtros, no solo los de la página que ves. El nombre arranca con `cierres-de-caja` e incluye la fecha.

Cada fila es un turno cerrado y trae: Caja, Fecha inicio, Fecha cierre, Usuario, Apertura, Conteo, Esperado, Diferencia y Ventas totales. Después vienen **una columna por cada medio de pago usado** en esos turnos, como Efectivo, Transferencia o Mercado Pago, y por último Aportes y Retiros. Los importes son números con formato de moneda, y la suma de las columnas de medios de pago da el total de Ventas totales.

Los números salen del cierre congelado de cada turno, los mismos del [resumen de cierre impreso](/soporte/caja/resumen-de-cierre-de-caja). Un movimiento anulado o corregido después no reescribe un turno ya cerrado.

## Problemas frecuentes

### El botón Exportar está deshabilitado
Se deshabilita mientras se genera el archivo o si los filtros no devuelven ningún cierre. Ajustá las fechas o el usuario.

### No aparece un turno
El archivo incluye solo turnos cerrados. Un turno abierto todavía no tiene cierre.

### Hay celdas vacías
Si un turno no usó un medio de pago, esa celda queda vacía. Los cierres muy antiguos, de antes del resumen detallado, dejan en blanco las columnas de ventas por medio, aportes y retiros.

### Necesito el historial de otro local
Cambiá de local en el selector del menú lateral y exportá de nuevo.

## Relacionados

- [Cómo cerrar el turno y qué incluye el resumen de cierre impreso](/soporte/caja/resumen-de-cierre-de-caja)
- [Cómo ver e imprimir el cierre del día](/soporte/caja/cierre-del-dia)
- [Cómo registrar un gasto](/soporte/caja/control-de-gastos)
