# SEO: pendientes

Contexto: dos auditorías SEO (octubre 2026) llevaron el puntaje de 67 a 73/100. Lo técnico está
resuelto (PRs #4, #5, #6). Lo que falta depende de contenido, datos o accesos que todavía no hay,
y es lo que mantiene bajo el puntaje de Contenido (~60).

## Confianza y empresa
- [ ] Prueba social: testimonios de varios rubros (hoy hay uno solo, de una cafetería), cantidad de locales que usan Mesanube, logos de clientes.
- [ ] Página de empresa ("Quiénes somos"): razón social y CUIT.
- [ ] Páginas legales: política de privacidad y términos y condiciones, enlazadas desde el footer.

## Contenido nuevo
- [ ] Guía "Qué es una comanda / sistema de comandas", enlazada a `/funciones/comanda-digital`. Para "sistema de comandas" Google muestra guías, no páginas de producto.
- [ ] Explicador de facturación ARCA para gastronomía (cambios 2025-26, condición frente al IVA del comprador), enlazado a `/funciones/facturacion-electronica-arca`.
- [ ] Nota comparativa "software para restaurantes en Argentina 2026".
- [ ] Hub `/para` (hoy da 404) que liste los rubros.
- [ ] Ampliar páginas finas: `/funciones` (~340 palabras), `/funciones/carta-qr` (~535), `/precios` (~560).
- [ ] Encabezados en forma de pregunta con respuestas directas (130-170 palabras) en `/funciones/*` y `/para/*`.
- [ ] Primer post del blog. Al publicarlo, `/posts` deja de tener `noindex` solo; volver a agregar `/posts` en `staticRoutes` del pages sitemap.

## Medios
- [ ] Video corto del producto, cerca del hero de la home.

## Medición y accesos
- [ ] Verificar el dominio en Bing Webmaster Tools (Google Search Console ya está).
- [ ] API key de Google Cloud con PageSpeed Insights API y Chrome UX Report API habilitadas, para datos de campo de Core Web Vitals.
- [ ] Baseline de drift SEO para detectar regresiones (`/seo drift baseline https://mesanube.ar`).

## Técnico opcional
- [ ] CSP (Content Security Policy): arrancar en modo report-only, revisar qué bloquearía (GTM, Payload admin) y recién después activarlo.
- [ ] Barra de admin de Payload: hoy se carga para todos los visitantes y pide `/api/users/me` en cada visita. Se puede limitar al modo preview.
