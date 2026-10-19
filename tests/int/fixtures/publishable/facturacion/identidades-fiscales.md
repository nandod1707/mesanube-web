---
id: 6ac5416c4313c2d8d7957afc
title: Cómo configurar tus identidades fiscales para facturar
slug: identidades-fiscales
section: facturacion
summary: Cargá tu CUIT, tu punto de venta y el certificado de ARCA, y asigná cada local a la identidad con la que factura.
order: 1
updated: 2026-10-06
status: published
---
Una identidad fiscal es el par **CUIT + punto de venta**, con el certificado de ARCA que te habilita a emitir. Cada local factura bajo una identidad, así que antes de emitir tu primera factura tenés que crear al menos una y asignarle tus locales.

## Antes de empezar

- Solo el dueño ve esta configuración.
- Tené a mano tu CUIT, tu clave fiscal de ARCA y el número de punto de venta que habilitaste en ARCA para facturación electrónica.

## Pasos

### Crear la identidad

1. Andá a **Configuración → Facturación**.
2. Tocá **Nueva identidad fiscal**.
3. Completá **Nombre de fantasía**, **Razón social**, **CUIT** (11 dígitos), **Punto de venta**, **Domicilio** y **Condición frente al IVA**. Si sos Responsable Inscripto, elegí también la **Alícuota IVA**. **Ingresos brutos** e **Inicio de actividades** son opcionales.
4. Tocá **Crear identidad**. La identidad se abre en modo edición para que sigas con el certificado y los locales.

### Cargar el certificado de ARCA

1. En la sección **Certificado ARCA**, tocá **Generar CSR**. Se descarga un archivo `.csr`.
2. Entrá a la web de ARCA con tu clave fiscal, subí ese archivo y descargá el certificado que te devuelve (un archivo `.crt` o `.pem`).
3. Volvé a la identidad, tocá **Subir certificado de ARCA** y elegí el archivo descargado.

Arriba de cada botón ves el estado: **CSR generado** y **Certificado subido** cuando todo está listo, o **Certificado vencido** si hay que renovarlo. Para renovarlo, tocá **Renovar certificado (nuevo CSR)** y repetí los pasos.

> **Tip:** el certificado es por CUIT. Si ya lo cargaste en otra identidad con el mismo CUIT, aparece el botón **Usar el certificado ya cargado para el CUIT** y no tenés que generar uno nuevo.

### Asignar los locales

1. En **Locales que facturan con esta identidad**, marcá los locales que emiten con este CUIT y punto de venta.
2. Tocá **Guardar locales asignados**.

Un local factura bajo una sola identidad: si lo asignás acá, se quita de cualquier otra. También podés elegirla desde **Configuración → Locales**, en el campo **Identidad fiscal (ARCA)** de cada local.

## Qué pasa después

Cuando el local tiene una identidad con certificado vigente, al tocar **Imprimir** en un pedido aparece la opción **Factura**. Mirá [cómo emitir una factura](/soporte/pedidos/emitir-una-factura).

Si un local queda sin identidad, en **Configuración → Facturación** aparece el aviso "no tiene una identidad fiscal, no va a poder facturar hasta que se le asigne una". Mientras tanto, **Imprimir** imprime el ticket directamente, sin ofrecer Factura.

## Problemas frecuentes

### Tengo un solo local y un solo CUIT
Creá una identidad, cargá el certificado y asignale tu local. No hace falta nada más.

### Tengo dos locales con el mismo CUIT
Si usan el mismo punto de venta, creá una identidad y asignale los dos. Si cada uno tiene su punto de venta, creá una identidad por punto de venta, reutilizá el certificado y asigná cada local a la suya.

### Tengo una franquicia con varios CUIT
Creá una identidad por CUIT, con su punto de venta y su certificado, y asigná cada local a la que le corresponde.

### Quiero que una caja facture con otro punto de venta
En **Configuración → Cajas**, editá la caja y elegí la identidad en **Perfil fiscal (ARCA)**. Esa caja factura con esa identidad y el resto del local sigue con la suya.

### Quiero dejar de usar una identidad
Abrila y tocá **Desactivar identidad**. Antes tenés que asignar sus locales a otra identidad. Las facturas ya emitidas se conservan, y podés anularlas con nota de crédito bajo esa identidad mientras conserve el certificado.

### No me aparece la opción Factura
Revisá en **Configuración → Facturación** que el local tenga una identidad asignada, que la identidad esté activa y que su certificado figure como **Certificado OK**. Si falta cualquiera de las tres, Mesanube imprime solo el ticket.
