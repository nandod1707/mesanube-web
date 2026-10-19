---
id: 6ac54ad78ead5334e32a3305
title: Cómo leer el reporte de variación de CMV, real contra teórico
slug: reporte-rvt-variacion-cmv
section: reportes
summary: Mirá por local cuánta plata se fuga entre lo que el sistema calcula que deberías haber consumido y lo que realmente contaste.
order: 2
updated: 2026-10-06
status: published
---
El CMV teórico asume porciones perfectas y cero merma. La realidad tiene merma, rotura, robo y errores de carga. La variación Real vs Teórico pone en pesos esa diferencia, por local, para que sepas dónde mirar.

## Antes de empezar

- Es solo para el **Dueño**, en el [tablero multi-local](/soporte/locales/dashboard-multi-local).
- Requiere los módulos **Panel multi-local** y **Control de stock**.
- Cada local necesita al menos un conteo de inventario cerrado. Ver [cómo hacer un conteo](/soporte/stock/conteo-de-inventario).

## Pasos

1. Entrá al tablero multi-local, en **Multi-local → Tablero**.
2. Buscá la tarjeta **Variación CMV (Real vs Teórico)**. Cada fila es un local, con su conteo cerrado más reciente.
3. Leé las columnas:
   - **Período (cierre)**: el rango que cubre el conteo, desde el cierre del anterior hasta este.
   - **Variación**: la diferencia en pesos. Un valor negativo significa que faltó mercadería respecto del teórico.
   - **% s/CMV**: la variación como porcentaje del CMV teórico del período, con un color: verde menos de 2%, amarillo de 2 a 4% y rojo más de 4%.
   - **Cobertura**: el porcentaje de ítems del conteo que tienen costo.
   - **Ajuste**: **Ajustado** si ya aplicaste el ajuste que lleva el stock al contado, o **Pendiente** si no.
4. La fila **Total** resume la variación de toda la organización.
5. Tocá el ícono de información del título para ver la explicación de Real vs Teórico.

## Problemas frecuentes

### Un local dice "Inicial" y "sin período"
Es su primer conteo cerrado. No hay un período anterior contra el cual medir, así que ves la variación en pesos pero no el porcentaje. Desde el segundo conteo aparece.

### Un local no aparece en la tarjeta
Todavía no tiene ningún conteo cerrado. Cerrá uno y va a aparecer.

### La cobertura no llega a 100%
Algunos ítems del conteo no tienen costo cargado, y no entran en el cálculo en pesos. Tocá el ícono de advertencia para ver cuántos faltan. Para mejorarla, cargá costos registrando compras. Ver [cómo registrar mercadería](/soporte/stock/recepcion-de-mercaderia).

### De dónde sale el costo de la variación
Del costo congelado al cerrar el conteo, no del costo de hoy. Así el número no cambia con compras posteriores.

### El porcentaje es alto y está en rojo
Una variación mayor al 4% suele indicar una fuga real, como merma, porción, robo o carga. Empezá por los ítems de mayor costo.

### El consumo interno no entra en el CMV teórico
Es lo esperado. No es una venta, así que no entra en el CMV teórico. Su costo se mide aparte, en la tarjeta **Consumo interno**.

## Relacionados

- [Cómo hacer un conteo de inventario](/soporte/stock/conteo-de-inventario)
- [Cómo leer el tablero multi-local](/soporte/locales/dashboard-multi-local)
- [Cómo ver cuánto consumiste de cada ingrediente](/soporte/stock/consumo-de-ingredientes)
