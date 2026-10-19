---
id: 6ac5416e4313c2d8d7957b0b
title: Cómo emitir una factura de un pedido
slug: emitir-una-factura
section: pedidos
summary: Emití la factura electrónica de un pedido desde el botón Imprimir, sin tener que cobrarlo antes.
updated: 2026-10-06
status: published
---
Desde el mismo botón con el que imprimís la precuenta podés emitir la factura electrónica del pedido. Mesanube la informa a ARCA y la imprime en el momento.

## Antes de empezar

- El local tiene que tener una identidad fiscal con certificado vigente. Si todavía no la configuraste, seguí [cómo configurar tus identidades fiscales](/soporte/facturacion/identidades-fiscales).
- Necesitás ser **Cajero**, **Encargado** o **Dueño**. Para el resto del equipo, **Imprimir** imprime solo el ticket.

## Pasos

1. Abrí el pedido y tocá **Imprimir** (o **Imprimir Precuenta** si todavía no está cobrado). En **Mostrador**, tocá **Imprimir** en el pedido confirmado.
2. En la ventana **Imprimir**, elegí **Factura**. Si elegís **Ticket**, se imprime la precuenta sin factura.
3. Se abre **Emitir Factura**. Revisá el **Tipo de Factura**: si sos Monotributista o Exento es siempre **Factura C** y aparece fijo; si sos Responsable Inscripto podés elegir entre **Factura A** y **Factura B**.
4. Elegí la **Condición IVA Receptor** del cliente.
5. Elegí el **Tipo de Documento**. Para un cliente que no se identifica, dejá **Consumidor Final (sin documento)**.
6. Si elegiste DNI, CUIT o CUIL, completá **Número de Documento** (sin guiones ni puntos) y **Nombre o Razón Social**.
7. Revisá los **Detalles de la Factura** y tocá **Imprimir**.

En **Detalles de la Factura** ves el total. En una Factura A también ves el subtotal sin IVA y el IVA por separado.

> **Importante:** no hace falta cobrar el pedido antes de facturarlo. Podés emitir la factura y cobrar después.

## Qué pasa después

Cuando ARCA aprueba el comprobante, la factura se imprime y la ventana se cierra. Si volvés a tocar **Imprimir** en ese pedido, en lugar de **Factura** aparece **Reimprimir Factura**: un pedido se factura una sola vez, pero podés reimprimir el comprobante las veces que necesites.

Para anular una factura emitida hay que hacer una nota de crédito desde la página de **Facturación**.

## Problemas frecuentes

### No aparece la opción Factura
Al tocar **Imprimir** se imprime el ticket directamente, sin preguntar. Pasa cuando el local no tiene identidad fiscal, la identidad está desactivada o el certificado no está cargado o venció. El dueño lo resuelve en **Configuración → Facturación**.

### Aparece Reintentar en lugar de Factura
Mesanube no pudo verificar la identidad fiscal, casi siempre por un problema de conexión. Tocá **Reintentar** para volver a chequear. **Ticket** sigue funcionando igual.

### Dice "Factura rechazada"
ARCA no aprobó el comprobante y el mensaje dice por qué. Revisá los datos del cliente, sobre todo el número de documento y la condición frente al IVA, y volvé a tocar **Imprimir**.
