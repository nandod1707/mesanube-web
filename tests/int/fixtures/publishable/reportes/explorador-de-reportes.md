---
id: 6ac54ad68ead5334e32a32ed
title: Cómo armar un reporte con el Explorador
slug: explorador-de-reportes
section: reportes
summary: Armá el reporte que necesites eligiendo una métrica y una forma de agruparla, y bajalo a Excel.
order: 3
updated: 2026-10-06
status: published
---
En lugar de tarjetas fijas, el Explorador te deja combinar qué querés medir, como ventas, gastos o ticket promedio, con cómo querés verlo, por ejemplo por día, por mesero o por producto. El mismo reporte se ve como gráfico y como tabla.

## Antes de empezar

- Pueden usarlo el **Dueño** y el **Encargado**.
- Tu cuenta tiene que incluir el módulo **Reportes avanzados**. Ver [planes y módulos](/soporte/cuenta/planes-y-modulos).

## Pasos

1. En el menú lateral, abrí **Reportes → Explorar**.
2. Elegí una **Metrica**: **Ventas netas**, **Ventas brutas**, **Descuentos**, **Pedidos**, **Ticket promedio**, **CMV**, **Gastos**, **Ganancia neta** o **Consumo interno**.
3. Elegí una **Dimension**: **Dia comercial**, **Semana**, **Mes**, **Hora**, **Mesero**, **Producto**, **Categoria**, **Medio de pago**, **Origen** o **Categoria de gasto**.
4. Elegí el rango: **Hoy**, **Esta semana**, **Este mes**, **Ultimos 30 dias**, **Ultimos 3 meses** o **Personalizado**.
5. Mirá el gráfico, arriba, y la tabla, abajo. Siempre muestran los mismos números.
6. Tocá **Exportar** para bajar la vista a un archivo de Excel.

Con los atajos de arriba de los controles, un toque configura la métrica y la dimensión: **Ventas por dia**, **Ventas por mesero**, **Gastos por dia**, **Gastos por categoria**, **Descuentos por dia**, **Top productos**, **Ventas por medio de pago**, **Ventas por origen** y **Ticket promedio por dia**.

## Qué pasa después

El Excel reproduce la tabla que ves, con una fila de **Total** al pie. Tu última configuración se recuerda para la próxima vez.

- **Día comercial** va desde el inicio de jornada que configuraste, no desde la medianoche.
- **Ventas brutas** es el total vendido antes de descuentos. **Ventas netas** es lo cobrado, ya con los descuentos. Sin descuentos, coinciden.
- **Ganancia neta** es Ventas netas menos CMV menos Gastos.
- Con la dimensión **Producto** y las métricas Ventas brutas, Pedidos o CMV, la tabla y el Excel suman una columna **Categoria**, solo informativa.

## Problemas frecuentes

### Una combinación aparece deshabilitada
No todas tienen sentido. Por ejemplo, los descuentos y el ticket se aplican por pedido, no por producto, y los gastos no se desglosan por mesero. La opción deshabilitada te explica el motivo.

### La dimensión Hora no está disponible
Solo se permite para rangos de hasta 48 horas, porque con más el gráfico sería ilegible.

### No veo la dimensión Local
Aparece solo en la vista del tablero multi-local, para el dueño. Ver [cómo leer el tablero multi-local](/soporte/locales/dashboard-multi-local).

### Quiero ver los gastos pagados en efectivo o a crédito, o auditar los consumos internos
Ver [cómo ver el detalle de gastos y de consumo interno](/soporte/reportes/explorador-detalle-gastos-y-consumo-interno).

## Relacionados

- [Cómo leer el resumen de ventas y rentabilidad](/soporte/reportes/reportes-basicos)
- [Cómo ver el detalle de gastos y de consumo interno en el Explorador](/soporte/reportes/explorador-detalle-gastos-y-consumo-interno)
- [Cómo leer el tablero multi-local](/soporte/locales/dashboard-multi-local)
