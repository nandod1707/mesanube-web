# Comparativa: Mesanube vs Maxirest, Toast y Square

Comparación funcional de Mesanube contra tres referentes del mercado de POS gastronómico: Maxirest (Argentina), Toast (Estados Unidos) y Square (Estados Unidos).

> Alcance: las columnas de Mesanube reflejan lo que hoy existe en el producto (verificado en el código). Las columnas de la competencia se basan en información pública de cada proveedor y pueden variar según el plan contratado, el país y la fecha. Usar como guía comercial, no como contrato.

Convenciones de la tabla:

- **Sí**: funcionalidad incluida de base.
- **Add-on**: disponible como módulo pagado aparte o plan superior.
- **Parcial**: cubre parte del caso de uso, no completo.
- **No**: no disponible.
- **n/d**: no aplica o sin dato confiable.

---

## Facturación y fiscal

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Facturación electrónica AFIP (Argentina) | Sí | Sí | No | No |
| Notas de crédito electrónicas AFIP | Sí | Sí | No | No |
| Múltiples identidades fiscales / CUIT por local | Sí | Parcial | n/d | n/d |
| Perfil fiscal (punto de venta) por caja/terminal | Sí | Parcial | n/d | n/d |
| Impuestos EE.UU. (sales tax) | No | No | Sí | Sí |

## Punto de venta y pedidos

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Carga de pedidos por mesa y mostrador | Sí | Sí | Sí | Sí |
| Gestión y mapa de mesas | Sí | Sí | Sí | Sí |
| Cobro con varios medios de pago (split) | Sí | Sí | Sí | Sí |
| Anulación de pedido con motivo y auditoría | Sí | Sí | Sí | Sí |
| Anular/reducir ítems ya enviados a cocina | Sí | Parcial | Sí | Parcial |
| Consumo interno (no cuenta como venta, descuenta stock) | Sí | Parcial | Parcial | No |
| Vista de pedidos por turno para cajero | Sí | Parcial | Parcial | Parcial |

## Cocina y comandas (KDS)

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Impresión de comandas de cocina | Sí | Sí | Sí | Sí |
| Sectores de cocina con ruteo por categoría | Sí | Sí | Sí | Sí |
| Pantalla de cocina (KDS) | Sí | Sí | Sí | Sí |
| Comandas/tarjetas de actualización (solo cambios) | Sí | Parcial | Parcial | Parcial |
| Impresora local por caja | Sí | Sí | Parcial | Parcial |
| Actualización en tiempo real (SSE) | Sí | n/d | Sí | Sí |

## Control de caja y turnos

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Apertura/cierre de turno (arqueo de caja) | Sí | Sí | Sí | Sí |
| Aportes y retiros de caja | Sí | Sí | Sí | Sí |
| Resumen de cierre de caja impreso (no fiscal) | Sí | Sí | Sí | Parcial |
| Cierre del día consolidado (Z interno) | Sí | Sí | Sí | Parcial |
| Caja por terminal (varias cajas en paralelo) | Sí | Sí | Sí | Parcial |

## Stock, inventario y costos

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Control de stock con ajustes por motivo (merma, rotura) | Sí | Sí | Add-on | Add-on |
| Recepción de mercadería con costo | Sí | Sí | Add-on | Add-on |
| Costo promedio ponderado móvil | Sí | Parcial | Add-on | Parcial |
| Recetas e ingredientes (base de CMV) | Sí | Parcial | Add-on | Add-on |
| Conteo de inventario / cierre de período | Sí | Parcial | Add-on | Add-on |
| Reporte Real vs Teórico (variación de CMV) | Sí | No | Parcial | No |

## Gastos y cuentas

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Registro de gastos e ingresos por local | Sí | Parcial | Parcial | Parcial |
| Gasto en efectivo con/sin impacto en arqueo | Sí | Parcial | n/d | n/d |
| Cuenta corriente y comprobante adjunto | Sí | Parcial | n/d | n/d |
| Cuentas (caja, banco, billetera) y medios de pago | Sí | Parcial | Parcial | Parcial |
| Proveedores | Sí | Sí | Sí | Parcial |

## Reportes y analítica

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Reportes de ventas y rentabilidad | Sí | Sí | Sí | Sí |
| CMV y margen | Sí | Parcial | Add-on | Parcial |
| Ventas por artículo, categoría, medio de pago, mozo | Sí | Sí | Sí | Sí |
| Dashboard multi-local consolidado | Sí | Parcial | Sí | Parcial |

## Menú y catálogo

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| ABM de productos con stock y disponibilidad | Sí | Sí | Sí | Sí |
| Cartas (menús) por local con precios por carta | Sí | Sí | Sí | Parcial |
| Vistas globales multi-local del catálogo | Sí | Parcial | Sí | Parcial |

## Multi-local, equipo y organización

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Multi-local nativo con aislamiento por organización | Sí | Sí | Sí | Sí |
| Roles y permisos (dueño, encargado, cajero, mozo) | Sí | Sí | Sí | Sí |
| Gestión de usuarios/equipo | Sí | Sí | Sí | Sí |
| Alta/baja de locales con reglas de seguridad | Sí | Parcial | Sí | Parcial |
| Notificaciones in-app | Sí | Parcial | Sí | Parcial |

---

## Brechas conocidas de Mesanube (a la fecha)

Funcionalidades que la competencia suele ofrecer y que hoy Mesanube no cubre. Útil para responder objeciones con honestidad y para priorizar el roadmap:

| Funcionalidad | Mesanube | Maxirest | Toast | Square |
|---|---|---|---|---|
| Pedidos online / e-commerce propio | No | Parcial | Sí | Sí |
| Integración con apps de delivery | No | Parcial | Sí | Parcial |
| Reservas de mesa | No | Parcial | Add-on | Parcial |
| Fidelización / puntos / gift cards | No | Parcial | Add-on | Sí |
| Pedido en mesa por QR (autogestión del cliente) | No | Parcial | Add-on | Add-on |
| Nómina y fichada de empleados | No | Parcial | Add-on | Add-on |

> Nota: en Mesanube "abrir/cerrar turno" es control de caja (arqueo), no fichada de personal.

---

## Lectura rápida para ventas

- **Contra Toast y Square**: el diferencial decisivo en Argentina es la **facturación electrónica AFIP** nativa (ellos no la tienen) y un **módulo de costos (CMV con promedio ponderado móvil y Real vs Teórico)** incluido, no como add-on pago.
- **Contra Maxirest**: Mesanube compite en el mismo terreno fiscal, y suma un **control de food-cost más completo** (recetas, conteo de inventario, variación de CMV con semáforo) y una operación **multi-local y en tiempo real** de base.
- **Dónde ceder terreno**: pedidos online, delivery, reservas, fidelización y nómina. Ver la tabla de brechas para no sobreprometer.
