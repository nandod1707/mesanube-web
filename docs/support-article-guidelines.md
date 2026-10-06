# Lineamientos para artículos de soporte de Mesanube

Este documento define cómo se escriben los artículos de soporte. Los artículos viven en el repo del POS
y se publican en `mesanube.ar/soporte` mediante una GitHub Action que los sube a Payload CMS.
Si un archivo no respeta este formato, el sync lo rechaza.

---

## 1. Estructura de carpetas

```
soporte/
├── primeros-pasos/
│   ├── _section.md
│   ├── crear-tu-cuenta.md
│   └── images/
│       └── crear-tu-cuenta-1.png
├── facturacion-arca/
│   ├── _section.md
│   ├── anular-una-factura.md
│   └── images/
└── ...
```

- **Una carpeta por sección.** Usá un solo nivel, sin subcarpetas de secciones.
- **Un archivo `.md` por artículo.** El nombre del archivo es el slug del artículo.
- **Las imágenes van en `images/`, dentro de la carpeta de la sección.**
- Escribí los nombres de carpetas y archivos en minúsculas, sin acentos y con guiones: `anular-una-factura.md`.

## 2. Archivo de sección (`_section.md`)

```markdown
---
title: Facturación ARCA
slug: facturacion-arca
description: Configurá tu punto de venta, emití y anulá comprobantes electrónicos.
order: 2
icon: facturacion
---
```

| Campo | Obligatorio | Qué es |
|---|---|---|
| `title` | sí | Nombre visible de la sección |
| `slug` | sí | Igual al nombre de la carpeta. **No cambiarlo nunca**, porque es la URL. `buscar` está reservado |
| `description` | sí | Una línea, aparece en la portada de `/soporte` |
| `order` | sí | Posición en la portada (1 = primera) |
| `icon` | no | Ícono de la tarjeta: `libro` (por defecto), `inicio`, `caja`, `facturacion`, `comandas`, `mesas`, `cocina`, `impresoras`, `productos`, `usuarios`, `reportes`, `cuenta` o `integraciones` |

## 3. Frontmatter del artículo

```markdown
---
id: 6702f1c4a9e3b2d1c0f4e8a7
title: Cómo anular una factura
slug: anular-una-factura
section: facturacion-arca
summary: Anulá una factura emitida generando la nota de crédito correspondiente en ARCA.
order: 3
updated: 2026-10-05
status: published
seoTitle: Cómo anular una factura electrónica en ARCA | Mesanube
seoDescription: Paso a paso para anular una factura desde el POS de Mesanube emitiendo una nota de crédito.
---
```

| Campo | Obligatorio | Regla |
|---|---|---|
| `id` | — | **No lo escribas a mano.** Lo agrega el sync al publicar el artículo por primera vez. Es la identidad del artículo: no lo borres ni lo copies a otro archivo |
| `title` | sí | Tarea o pregunta del usuario. Ver §4 |
| `slug` | sí | Igual al nombre del archivo. Es la URL del artículo. Para cambiarlo, renombrá el archivo (`git mv`) y actualizá el `slug`; el `id` hace que siga siendo el mismo artículo. La URL vieja deja de funcionar (pedí un redirect si estaba linkeada afuera) |
| `section` | sí | `slug` de la sección. Tiene que coincidir con la carpeta |
| `summary` | sí | 1 oración, máximo 160 caracteres. Aparece en listados y búsqueda |
| `order` | no | Orden dentro de la sección. Sin `order`, va al final por título |
| `updated` | sí | Fecha `AAAA-MM-DD`. Actualizala cada vez que cambie el contenido |
| `status` | sí | `published` o `draft`. Los `draft` se suben pero no se muestran |
| `seoTitle` | no | Máximo 60 caracteres. Si falta, se usa `title` + "\| Mesanube" |
| `seoDescription` | no | Máximo 160 caracteres. Si falta, se usa `summary` |

## 4. Títulos

El título es lo que el usuario escribiría en Google o en el buscador. Escribilo como tarea o como pregunta.

| Bien | Mal |
|---|---|
| Cómo anular una factura | Anulación de comprobantes |
| Cómo dividir la cuenta de una mesa | Funcionalidad de división |
| Por qué no se imprime la comanda en cocina | Problemas de impresión |
| Cómo cerrar la caja del día | Módulo de caja |

- Usá "Cómo…" para tareas y "Por qué…" o "Qué hacer si…" para problemas.
- No pongas "Mesanube" en el título. Va en `seoTitle` si hace falta.

## 5. Estructura del cuerpo

Seguí siempre este orden:

1. **Intro (1–2 oraciones):** qué vas a lograr y cuándo lo necesitás. Sin encabezado.
2. **`## Antes de empezar`** (opcional): permisos, plan o configuración necesaria.
3. **`## Pasos`**: lista numerada, una acción por paso.
4. **`## Qué pasa después`** o **`## Problemas frecuentes`** (opcional).

Ejemplo:

```markdown
Si emitiste una factura con un error, no se borra: se anula emitiendo una nota de crédito por el mismo
importe. Mesanube la genera y la informa a ARCA por vos.

## Antes de empezar

- Necesitás permisos de **Administrador** o **Encargado**.
- La factura tiene que estar emitida (no en borrador).

## Pasos

1. Andá a **Ventas → Comprobantes**.
2. Buscá la factura y tocá **Anular**.
3. Elegí el motivo y confirmá con **Emitir nota de crédito**.

![Pantalla de comprobantes con el botón Anular resaltado](./images/anular-una-factura-1.png)

4. Esperá la confirmación de ARCA. Vas a ver el CAE de la nota de crédito.

> **Importante:** si ARCA no responde, la nota queda pendiente y Mesanube la reintenta sola. No la
> emitas dos veces.

## Problemas frecuentes

### La nota de crédito quedó "Pendiente"
ARCA puede tardar unos minutos. Si sigue pendiente después de una hora, escribinos.
```

## 6. Markdown permitido

Usá solo esto, porque es lo que se convierte bien al editor del sitio:

- Encabezados `##` y `###`. **Nunca `#`**: el título ya es el H1. No saltees niveles.
- Párrafos, **negrita** e _itálica_.
- Listas numeradas (pasos) y con viñetas (requisitos, opciones).
- Links: `[texto](url)`. Solo se aceptan links que empiecen con `https://`, `mailto:`, `/` o `#`.
  Para links a otros artículos, usá `/soporte/<seccion>/<slug>`.
- Imágenes: `![alt descriptivo](./images/archivo.png)`.
- Avisos como cita que empieza con `**Importante:**`, `**Tip:**` o `**Atención:**`.
- Código en línea con backticks para valores literales: `20-12345678-9`.

**No usar:** HTML, tablas, `#` H1, notas al pie, emojis, iframes ni videos embebidos. Si necesitás uno de
estos, pedilo antes de usarlo.

## 7. Nombres de la interfaz

- Escribí en **negrita** los botones, menús y pantallas, tal como aparecen en el POS: **Guardar**, **Ventas → Comprobantes**.
- Separá las rutas de menú con `→`.
- Si la interfaz cambia, actualizá el artículo y su `updated`.

## 8. Imágenes

- Formato PNG o WebP, máximo 1600 px de ancho y 500 KB por imagen.
- Nombre: `<slug-del-articulo>-<n>.png` (por ejemplo, `anular-una-factura-1.png`).
- Recortá a la parte relevante. No uses capturas de pantalla completa si con un recorte alcanza.
- **Sin datos reales de clientes:** ni CUITs, ni nombres, ni montos reales. Usá la cuenta demo.
- El `alt` es obligatorio y describe lo que se ve: "Botón Anular en la lista de comprobantes", no "imagen1".
- Para resaltar algo, usá un recuadro simple y nada de flechas dibujadas a mano.
- Si cambiás una imagen, mantené el mismo nombre de archivo.

## 9. Tono y lenguaje

- **Voseo rioplatense:** "andá", "tocá", "elegí", "configurá". Nunca "ve", "toca", "elige".
- **Hablale a quien usa el POS:** "Tocá **Cobrar**", no "El usuario debe presionar el botón Cobrar".
- **Contexto local:** ARCA (nunca AFIP), CUIT, punto de venta, factura A/B/C, pesos.
- **Directo y concreto:** una idea por oración, sin "simplemente" ni "fácilmente".
- **Empático cuando hay un problema:** "Si la comanda no salió, no perdiste el pedido: está en **Pedidos**".
- **Nada de lenguaje corporativo:** nada de "solución integral", "optimizar procesos" ni "experiencia del usuario".
- **Sin emojis.**

## 10. Planes

Si una función es de un plan específico, aclaralo en **Antes de empezar**:

> Esta función está disponible en los planes Mediano y Grande.

No pongas precios en los artículos.

## 11. Largo y alcance

- **Un artículo resuelve una sola tarea o problema.** Si tenés dos "Cómo…", hacé dos artículos y enlazalos.
- Objetivo: entre 150 y 600 palabras. Si te pasás, probablemente sean dos artículos.

## 12. Checklist antes de hacer push

- [ ] Nombre de archivo = `slug`, carpeta = `section`
- [ ] Frontmatter completo, `updated` con la fecha de hoy
- [ ] Título como tarea o pregunta, sin "Mesanube"
- [ ] Sin `#` H1, sin HTML, sin tablas, sin emojis
- [ ] Pasos numerados, una acción por paso, botones en **negrita**
- [ ] Imágenes con `alt`, sin datos reales, dentro de `images/`
- [ ] Voseo en todo el texto, ARCA y no AFIP
- [ ] Links internos con el formato `/soporte/<seccion>/<slug>`
