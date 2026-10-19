---
id: 6ac54ad78ead5334e32a32f9
title: Cómo ver el detalle de gastos y de consumo interno en el Explorador
slug: explorador-detalle-gastos-y-consumo-interno
section: reportes
summary: Filtrá los gastos por condición de pago y bajá el detalle gasto por gasto o pedido por pedido de consumo interno en Excel.
order: 4
updated: 2026-10-06
status: published
---
Dos métricas del Explorador tienen opciones extra: **Gastos**, para filtrar por cómo se pagó y bajar el detalle, y **Consumo interno**, para auditar quién consumió qué.

## Antes de empezar

- Pueden usarlo el **Dueño** y el **Encargado**, con el módulo **Reportes avanzados**.
- Si todavía no armaste un reporte, ver [cómo armar un reporte con el Explorador](/soporte/reportes/explorador-de-reportes).

## Pasos

### Para filtrar gastos por condición de pago

1. En **Reportes → Explorar**, elegí la métrica **Gastos**.
2. Aparece el selector **Condicion de pago**, con **Todos**, **Efectivo** y **Cuenta corriente**. Elegí una.

El total, la tabla y el Excel respetan el filtro. El filtro solo aparece con la métrica **Gastos**, y **Ganancia neta** siempre resta todos los gastos.

### Para bajar el detalle de gastos

1. Con la métrica **Gastos**, tocá **Exportar**.
2. Abrí el archivo. Trae dos hojas: **Reporte**, con el agregado que ves en pantalla, y **Detalle de gastos**, con una fila por gasto: **Fecha**, **Categoria**, **Proveedor**, **Condicion de pago**, **Comprobante**, **Descripcion** y **Monto**. Respeta el rango, el local y el filtro de condición de pago.

### Para auditar los consumos internos

1. Elegí la métrica **Consumo interno**. En pantalla la ves agregada por día, semana, mes, mesero, origen o local.
2. Tocá **Exportar**. El Excel no baja el resumen sino el detalle pedido por pedido, en la hoja **Consumo interno**: **Fecha**, **Local**, el mesero, **Origen**, **Mesa**, los ítems y el **Total**.

## Qué pasa después

El detalle de consumo interno sirve para saber quién consumió qué. Los pedidos de consumo interno quedan fuera de todas las métricas de venta. Ver [cómo cerrar una mesa como consumo interno](/soporte/stock/consumo-interno).

## Problemas frecuentes

### El filtro de condición de pago no aparece
Solo aparece con la métrica **Gastos**.

### El Excel de consumo interno no coincide con la tabla
Es lo esperado: con esta métrica, el Excel trae el detalle pedido por pedido en lugar del resumen.

## Relacionados

- [Cómo armar un reporte con el Explorador](/soporte/reportes/explorador-de-reportes)
- [Cómo registrar un gasto](/soporte/caja/control-de-gastos)
- [Cómo cerrar una mesa como consumo interno](/soporte/stock/consumo-interno)
