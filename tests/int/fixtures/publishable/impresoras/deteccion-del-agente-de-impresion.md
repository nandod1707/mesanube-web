---
id: 6ac54ac98ead5334e32a31cd
title: Cómo se detecta la app de impresión sin refrescar la página
slug: deteccion-del-agente-de-impresion
section: impresoras
summary: Mesanube busca la app de impresión en segundo plano y la reconoce apenas aparece, sin que tengas que refrescar la página.
order: 2
updated: 2026-10-06
status: published
---
Mesanube busca la app de impresión de tu computadora en segundo plano y la reconoce apenas se abre. El orden en que abrís las cosas no importa.

## Antes de empezar

- No hay nada que configurar ni que actualizar. El agente instalado en cada caja queda igual.
- El agente solo se ve desde su propia computadora, nunca desde otra de la red.

## Qué hace Mesanube

1. Si el agente ya está corriendo cuando entrás, lo reconoce al instante.
2. Si todavía no está, sigue buscándolo en segundo plano. Cuando lo abrís, la app lo detecta sola en unos segundos.
3. Si el agente se cierra o se reinicia durante el servicio, Mesanube vuelve a buscarlo y lo reconecta cuando vuelve.

## Cómo verificarlo

Entrá a **Configuración → Cajas**. Cuando el agente está reconocido, aparece la tarjeta **Configuración de esta terminal**.

## Problemas frecuentes

### Cuánto tarda en reconocerlo
Los primeros reintentos son rápidos, a los 2, 4, 8, 15 y 30 segundos. Si el agente sigue sin aparecer, Mesanube espacía la búsqueda a un intento por minuto y nunca deja de buscar. Abrir el agente en cualquier momento alcanza.

### Otro programa usa el mismo puerto
No es un problema. Mesanube revisa todo el rango de puertos del agente y no se frena en el primero ocupado por otra aplicación.

### En la tablet del mesero dice "Agente no conectado"
Es lo esperado. Una tablet no tiene agente ni impresora. La búsqueda en segundo plano no consume datos: solo mira la propia máquina.

### Sigo sin verlo después de un rato
Verificá que el agente esté abierto, con su ícono en la barra de tareas, y que sea la misma computadora donde estás usando Mesanube.

## Relacionados

- [Cómo asignar una caja a cada computadora y un perfil fiscal a cada caja](/soporte/caja/caja-por-terminal-y-perfil-fiscal)
- [Cómo configurar dónde se imprimen la precuenta, la factura y la nota de crédito](/soporte/caja/impresion-precuenta-factura)
- [Cómo configurar los Sectores de cocina](/soporte/cocina/sectores-de-cocina)
