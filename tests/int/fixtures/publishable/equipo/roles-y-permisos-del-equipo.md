---
id: 6ac54ac78ead5334e32a319d
title: Qué puede hacer cada rol de tu equipo
slug: roles-y-permisos-del-equipo
section: equipo
summary: Qué ve y qué puede hacer el dueño, el encargado, el cajero, el mesero y la cocina, qué acciones piden aprobación y cómo dar permisos extra.
order: 1
updated: 2026-10-06
status: published
---
Mesanube acota a cada rol a sus responsabilidades. Así, el encargado de un local no ve ni administra al personal de otro, y las configuraciones del dueño quedan protegidas.

## Los roles

- **Dueño**: accede a toda la organización. Opera en todos los locales, gestiona usuarios de cualquier local y accede a la configuración de la organización, la facturación y el panel multi-local.
- **Encargado**: gestiona el o los locales que tiene asignados y su personal. Crea y edita cajeros, meseros y personal de cocina, abre y cierra caja, ve los reportes de su local, aplica descuentos, configura medios de pago y maneja el stock. Puede emitir facturas. La configuración de identidades fiscales es solo del dueño.
- **Cajero**: trabaja en la caja. Abre turnos y cierra los turnos abiertos de su local, incluso uno que abrió otra persona, crea pedidos, agrega items y cobra.
- **Mesero**: crea pedidos, les agrega items y los ve.
- **Cocina**: ve y gestiona los pedidos en la pantalla de cocina.

## Qué acciones piden aprobación de un encargado

Cuando un **Cajero** intenta una de estas acciones, aparece una ventana donde elige al **Encargado** presente y el encargado escribe su contraseña:

- Anular un pedido.
- Aplicar un descuento.
- Cobrar como consumo interno.
- Bajar o quitar items ya enviados a cocina.

El **Mesero** también necesita la aprobación de un encargado, y un motivo, para bajar o quitar items ya enviados. Ver [cómo anular o reducir items de un pedido enviado](/soporte/pedidos/anular-o-reducir-items-de-un-pedido-enviado).

El sistema valida que el encargado esté asignado al local activo y que su contraseña sea correcta. Cada acción aprobada queda registrada con el nombre de quien la autorizó. El dueño también puede aprobar.

## Cómo dar permisos extra a un encargado

Por defecto, un encargado nuevo no ve **Productos**, **Ingredientes** ni **Recetas**. El dueño le otorga cada acceso por separado:

- **Editar precios en cartas asignadas**: editar las cartas de sus locales.
- **Gestionar productos y recetas**: crear y editar productos, categorías y recetas.
- **Gestionar ingredientes**: crear y editar ingredientes, incluido su costo manual.

Ningún permiso habilita borrar: solo el dueño desactiva un producto, un ingrediente o una receta.

1. Entrá a **Usuarios** y editá un usuario con rol **Encargado**.
2. En **Permisos**, marcá las casillas que correspondan.
3. Guardá. El cambio aplica cuando el encargado recarga la app.

Solo el dueño ve y edita esta sección. Un encargado no puede otorgarse permisos a sí mismo ni a otro encargado.

## Problemas frecuentes

### El cajero no puede aprobar nada porque no aparece ningún encargado
La ventana avisa que no hay encargados asignados al local. El dueño o un encargado tiene que editar el usuario y asignarle ese local.

### Un encargado no ve a otro encargado ni al dueño
Es lo esperado. En **Usuarios**, un encargado ve solo al personal de rol menor, de sus propios locales.

### Quiero saber quién cambió un dato del catálogo
Ver [el historial de cambios](/soporte/equipo/historial-de-cambios).

## Relacionados

- [Cómo crear usuarios y asignarles locales](/soporte/equipo/crear-usuarios-y-asignar-locales)
- [Cómo ver quién cambió qué en tu catálogo](/soporte/equipo/historial-de-cambios)
- [Cómo cerrar una mesa como consumo interno](/soporte/stock/consumo-interno)
