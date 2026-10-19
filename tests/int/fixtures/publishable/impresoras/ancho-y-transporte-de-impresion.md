---
id: 6ac54ac98ead5334e32a31c1
title: Cómo configurar el modo, el ancho y el corte de cada impresora
slug: ancho-y-transporte-de-impresion
section: impresoras
summary: Elegí el modo de impresión, la tabla de caracteres, el ancho del papel y el corte automático de cada impresora desde el agente de impresión.
order: 1
updated: 2026-10-06
status: published
---
El agente de impresión imprime los tickets como texto, con las letras propias de la impresora, y sale más rápido y completo. Para las impresoras que no lo aceptan, existe el modo **Compatibilidad**, que imprime el ticket como imagen. Todo se configura por impresora, en el agente de impresión de Windows.

## Antes de empezar

- Necesitás la app de impresión de Mesanube instalada en la computadora de la caja. Funciona en Windows.
- Con la actualización del agente, todas las impresoras pasan al modo **Texto (rápido)** sin que hagas nada.
- Para abrir la configuración, usá el ícono del agente en la barra de tareas y elegí **Configurar Impresora**.

## Pasos

1. En la ventana **Configuración de Impresora**, elegí la impresora en **Seleccionar Impresora**. La elección se guarda sola.
2. Tocá **Imprimir prueba en texto**. Sale una hoja con acentos, eñe, el signo $, una regla de columnas y un código QR.
3. Si todo se lee bien, dejá **Modo de impresión** en **Texto (rápido)**.
4. Si los acentos o la eñe salen mal, elegí otra **Tabla de caracteres**, entre **CP858** (la de por defecto), **CP850** y **CP437**, y volvé a imprimir la prueba. La tabla se guarda para esa impresora.
5. Si la prueba sigue ilegible, sale en blanco o no corta, cambiá **Modo de impresión** a **Compatibilidad (imagen)**.
6. En **Ancho del papel**, elegí **80mm** o **58mm**. En modo texto define cuántas letras entran por renglón.

El QR de una factura se ajusta solo al tamaño del papel.

## Modo Compatibilidad: ancho y transporte

- **Ajuste de ancho**: si el ticket se corta por la derecha, tocá **Imprimir página de calibración**. Sale una regla con marcas cada 10%. Fijate en qué número está el borde donde se corta el papel y escribilo en **Ajuste de ancho**. Por defecto es 100%.
- **Transporte (modo Compatibilidad)**: si el driver sigue sin respetar el ancho, cambiá **Driver del sistema** por **ESC/POS (RAW)**. Envía el ticket directo a la cola de impresión de Windows, sin pasar por el driver del fabricante.

## Corte automático

Algunas impresoras cortan dos veces por ticket: el agente manda su corte y el driver corta al terminar el trabajo. Para esa impresora:

1. En la ventana de configuración, elegí la impresora que corta doble.
2. Apagá **Activar corte automático**.
3. Imprimí una prueba y confirmá que sale con un solo corte.

El corte viene encendido por defecto y se configura por impresora, en los dos modos.

## Problemas frecuentes

### El ticket se ve distinto
En modo texto el ticket usa las letras de la impresora en lugar de un diseño dibujado. La información y el orden son los mismos. Para el aspecto anterior, usá **Compatibilidad**, que es más lento.

### Tengo un controlador fiscal
Algunos controladores fiscales no aceptan texto. Imprimí la prueba en texto y, si sale mal, pasalo a **Compatibilidad**.

### Apagué el corte automático y el ticket no se corta
El driver de esa impresora no corta por su cuenta. Volvé a activar el corte automático.

### Quiero agregar logo, un mensaje al pie o letra más grande
Se configuran por local desde Mesanube y aplican en modo texto. Ver [cómo personalizar el ticket](/soporte/impresoras/personalizar-el-ticket).

## Relacionados

- [Cómo personalizar el ticket impreso de tu local](/soporte/impresoras/personalizar-el-ticket)
- [Cómo configurar dónde se imprimen la precuenta, la factura y la nota de crédito](/soporte/caja/impresion-precuenta-factura)
- [Cómo se detecta la app de impresión sin refrescar la página](/soporte/impresoras/deteccion-del-agente-de-impresion)
