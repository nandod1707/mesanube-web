---
id: 6ac54ad98ead5334e32a3335
title: Cómo ver cuánto consumiste de cada ingrediente
slug: consumo-de-ingredientes
section: stock
summary: Mirá el consumo de cada ingrediente entre dos fechas, calculado desde las recetas y las ventas, sin necesidad de haber hecho un conteo.
order: 4
updated: 2026-10-06
status: published
---
Respondé preguntas como "¿cuánta papa consumí entre el 1 y el 7 de julio?". El consumo se calcula solo con cada venta, según las recetas, y no depende de haber cerrado ningún conteo de inventario.

## Antes de empezar

- Lo usan el **Dueño** y el **Encargado**, con el módulo **Control de stock**.
- Es por local. Elegí el local en el selector del menú lateral.

## Pasos

1. Abrí **Control de stock → Consumo de ingredientes**.
2. En **Rango**, elegí **Hoy**, **Esta semana**, **Este mes**, **Ultimos 30 dias**, **Ultimos 3 meses** o **Personalizado**. Con **Personalizado**, elegí **Desde** y **Hasta**.
3. Si querés, filtrá por **Categorias** de ingrediente.
4. Mirá los indicadores de arriba: **Consumo valorizado**, **Ingredientes consumidos** y **Consumo interno**.
5. Recorré el gráfico y la tabla. Cada ingrediente muestra **Ventas**, **Interno**, **Consumo**, **Costo/unidad** y **Consumo $**.
6. Tocá **Exportar** para bajar el reporte a Excel.

## Cómo leer el reporte

- **Consumo valorizado** es el total en pesos del período, comparado con el período anterior equivalente.
- **Consumo interno** ya está incluido en el consumo valorizado. El indicador muestra cuánto de ese total fue consumo interno. Ver [consumo interno](/soporte/stock/consumo-interno).
- La columna **Consumo** es la suma de **Ventas** e **Interno**.
- La tabla agrupa por categoría. Las cantidades de distintas unidades, como kilos y litros, no se suman entre sí: el único total es el de pesos.
- Una sub-receta con control de stock aparece como su propia fila. Si no tiene control de stock, ves directamente sus ingredientes. Nunca se cuenta dos veces.

## Problemas frecuentes

### Aparece un aviso de ítems sin costo
Algunos movimientos del período no tienen costo cargado, algo habitual en datos históricos. Esos ítems no suman al consumo valorizado y el aviso te dice cuántos son.

### Quiero comparar lo teórico contra lo que contaste
Ese es otro reporte, que necesita dos conteos cerrados. Ver [cómo comparar el consumo entre dos conteos](/soporte/stock/consumo-de-ingredientes-por-periodo).

### El consumo no coincide con el CMV del reporte Real vs Teórico
Son números distintos. Ver [el reporte de variación de CMV](/soporte/reportes/reporte-rvt-variacion-cmv).

## Relacionados

- [Cómo comparar el consumo entre dos conteos de inventario](/soporte/stock/consumo-de-ingredientes-por-periodo)
- [Cómo ver el stock de tu local](/soporte/stock/control-de-stock)
- [Cómo cerrar una mesa como consumo interno](/soporte/stock/consumo-interno)
