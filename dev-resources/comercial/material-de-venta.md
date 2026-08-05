# Mesanube: material de venta

Documento base para presentaciones comerciales, propuestas y landing. Reúne el pitch, los módulos, los diferenciales y las respuestas a objeciones. Pensado para dueños de restaurantes, bares y cadenas gastronómicas en Argentina.

Para la comparación funcional contra la competencia, ver [comparativa-competidores.md](comparativa-competidores.md).

---

## En una frase

Mesanube es el sistema de gestión gastronómica que une punto de venta, cocina, caja, stock y facturación electrónica AFIP en una sola plataforma multi-local, en tiempo real.

## El problema que resuelve

El dueño de un restaurante hoy usa un POS para vender, una planilla para el stock, otra para los gastos, y un sistema aparte para facturar en AFIP. Los números nunca cierran solos y el food-cost real es un misterio hasta fin de mes. Mesanube integra todo: cada venta descuenta stock, calcula costo y queda lista para facturar, y el dueño ve la rentabilidad real de todos sus locales desde un tablero.

## A quién le sirve

- Restaurantes y bares que facturan en AFIP y quieren dejar de usar sistemas separados.
- Cadenas y franquicias multi-local que necesitan consolidar ventas, costos y caja.
- Dueños que quieren controlar el food-cost real (CMV) y no solo la venta.

---

## Módulos

### Punto de venta y salón
Carga de pedidos por mesa o mostrador, gestión de mesas, cobro con varios medios de pago en un mismo ticket (split de cuenta), anulaciones con motivo y auditoría, y consumo interno que descuenta stock sin contar como venta.

### Cocina (KDS y comandas)
Impresión de comandas y pantalla de cocina, con sectores que rutean cada producto (Cocina, Barra, Postres, Expo) a la impresora o pantalla que corresponde. Al modificar un pedido, la cocina recibe solo los cambios. Todo se actualiza en tiempo real.

### Facturación electrónica AFIP
Emisión de comprobantes y notas de crédito ante AFIP. Soporta varias identidades fiscales (CUIT) por organización y perfil fiscal por caja, ideal para franquicias multi-CUIT.

### Control de caja y turnos
Apertura y cierre de turno con arqueo (esperado vs contado), aportes y retiros, resumen de cierre por caja y cierre del día consolidado. Caja por terminal para operar varias cajas en paralelo sin mezclar la plata.

### Stock, inventario y costos
Recepción de mercadería con costo y actualización automática del inventario con promedio ponderado móvil. Recetas e ingredientes que alimentan el CMV. Control de stock con ajustes por motivo (merma, rotura), conteo de inventario para cierre de período y reporte Real vs Teórico que muestra la merma valuada en pesos.

### Gastos y cuentas
Registro de gastos e ingresos por local, en efectivo (con o sin impacto en el arqueo) o cuenta corriente, con comprobante adjunto. Cuentas (caja, banco, billetera), medios de pago y proveedores.

### Reportes y tablero multi-local
Ventas, rentabilidad, CMV y margen; desgloses por artículo, categoría, medio de pago y mozo. Tablero multi-local que consolida ventas, costos, alertas de stock y estado de caja para dueños con varios locales.

### Impresión (print-agent)
Servicio de escritorio que imprime en impresoras térmicas y nativas, con plantillas de recibo personalizables, logo y código QR. La precuenta, factura y comanda salen por la impresora correcta sin importar desde qué computadora se piden.

---

## Los tres diferenciales

1. **Fiscal argentino de verdad.** Facturación electrónica AFIP y notas de crédito nativas, con multi-CUIT y perfil fiscal por caja. Los grandes internacionales (Toast, Square) no facturan en Argentina.
2. **Food-cost incluido, no como extra.** Recetas, costo promedio ponderado móvil, conteo de inventario y el reporte Real vs Teórico vienen de base. En Toast y Square el inventario es un módulo pagado aparte.
3. **Multi-local y tiempo real.** Aislamiento por organización, tablero consolidado y propagación en vivo de pedidos y caja a todas las pantallas.

---

## Objeciones frecuentes

**"¿Hace facturación electrónica AFIP?"**
Sí, nativa: facturas y notas de crédito, con soporte para varios CUIT y punto de venta por caja.

**"Ya tengo un sistema de stock aparte."**
Mesanube integra el stock con la venta: cada plato descuenta insumos según su receta y calcula el costo real. El reporte Real vs Teórico muestra cuánta merma tuviste, en pesos.

**"Tengo varios locales."**
Es multi-local de base: un tablero consolidado y catálogo compartido, con permisos por local para encargados.

**"¿Puedo vender online o por delivery?"**
Hoy Mesanube se enfoca en la operación en el local (salón, caja, cocina, fiscal y costos). Pedidos online, delivery, reservas y fidelización no están incluidos todavía. Ver [la tabla de brechas](comparativa-competidores.md#brechas-conocidas-de-mesanube-a-la-fecha) para el detalle.

---

## Roadmap sugerido (para cerrar brechas)

Ordenado por impacto comercial estimado frente a la competencia:

1. Pedido en mesa por QR (autogestión del cliente).
2. Pedidos online / e-commerce propio.
3. Integración con apps de delivery.
4. Fidelización, puntos y gift cards.
5. Reservas de mesa.

> Nota: es un roadmap orientativo para conversaciones comerciales, no un compromiso de producto.
