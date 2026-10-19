---
id: 6ac54ada8ead5334e32a334d
title: Cómo hacer un conteo de inventario
slug: conteo-de-inventario
section: stock
summary: Registrá el stock físico real de tu local, congelalo como foto del cierre y, si querés, ajustá el stock del sistema para que coincida.
order: 3
updated: 2026-10-06
status: published
---
El sistema lleva el stock teórico, pero la merma, la rotura y los errores de carga hacen que lo que hay en la góndola no coincida. El conteo de inventario captura la cantidad real en un momento y la deja congelada, que es la base para medir cuánta plata se fuga.

## Antes de empezar

- Lo hacen el **Dueño** y el **Encargado**, con el módulo **Control de stock**.
- El conteo es por local. Elegí el local en el selector del menú lateral.
- Hay un solo conteo en curso por local. Si volvés a entrar, retomás el que empezaste.

## Pasos

1. Entrá a **Control de stock → Conteo de inventario**, solapa **Conteo de Inventario**.
2. Tocá **Iniciar conteo**. Aparece la lista de los ítems con control de stock y su **Stock teórico**.
3. Recorré el local y escribí la cantidad en **Contado** de cada ítem. A medida que cargás, ves la **Variación** estimada, en unidades y en pesos.
4. Cuando terminaste, tocá **Cerrar conteo** y confirmá. El sistema congela, por cada ítem cargado, el stock teórico y el costo de ese momento.

Si querés abandonar el conteo, tocá **Descartar**. Se elimina el borrador y podés iniciar uno nuevo.

## Qué pasa después

En **Conteos cerrados**, tocá un conteo para ver su variación por ítem: **Teórico**, **Contado**, **Variación** y **Valorizado**, que es la cantidad contada por su costo congelado. La fila **Total** suma la variación y el valorizado.

- Para corregir el stock del sistema y que coincida con lo contado, tocá **Aplicar ajuste** y confirmá. Se crean los movimientos de ajuste y el conteo pasa a **Ajustado**. Solo se puede aplicar al conteo más reciente del local, y una sola vez.
- Para descargar el conteo en Excel, tocá **xlsx** en la fila del conteo o **Descargar xlsx** dentro del detalle. Solo se descargan los cerrados.
- Cada conteo cubre el período desde el cierre del anterior. El primer conteo de un local es la línea de base, sin variación previa.

## Problemas frecuentes

### Me pide al menos una cantidad contada
Para cerrar, cargá al menos un ítem. Los ítems sin cantidad no se incluyen en el conteo. Si la góndola está vacía, cargá `0`.

### El stock teórico cambió mientras contaba
Es normal: las ventas siguen descontando hasta que cerrás. Queda congelado el valor del momento del cierre.

### Cerré el mismo conteo desde dos dispositivos
Solo cierra el primero. El segundo recibe un aviso de que ya estaba cerrado.

### Un ítem muestra "Sin costo"
Su costo no está cargado. No suma al total valorizado.

### El conteo corrige el stock solo
No. Primero cerrás el conteo y después decidís si aplicás el ajuste. Mientras no lo hagas, el stock del sistema no cambia.

## Relacionados

- [Cómo comparar el consumo entre dos conteos de inventario](/soporte/stock/consumo-de-ingredientes-por-periodo)
- [Cómo ver el stock de tu local](/soporte/stock/control-de-stock)
- [Cómo leer el reporte de variación de CMV, real contra teórico](/soporte/reportes/reporte-rvt-variacion-cmv)
