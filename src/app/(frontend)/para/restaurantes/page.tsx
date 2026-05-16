import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'

export const metadata: Metadata = {
  title: 'Sistema POS para Restaurantes en Argentina. Gestión Completa con ARCA | Mesanube',
  description:
    'Sistema de gestión para restaurantes argentinos. Comanda digital, app para mozos, monitor de cocina, ARCA y control de stock. Probá 30 días gratis.',
}

/* ── Static data ── */

const navItems = [
  { href: '/#problema', label: 'El problema' },
  { href: '/#funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

const resuelve = [
  {
    title: 'La comunicación entre salón y cocina',
    body: 'El pedido que sale de la mesa y llega a cocina como un teléfono descompuesto genera errores y tiempos muertos. Con Mesanube, el mozo toma el pedido desde su celular y aparece en el monitor de cocina en tiempo real: sin papel, sin gritos, en orden de llegada.',
  },
  {
    title: 'El control de lo que entra y sale',
    body: 'Sin stock actualizado, es imposible saber si estás ganando o perdiendo en cada plato. Mesanube descuenta del stock con cada venta y te avisa cuando algo está por acabarse. Si se terminó el lomo un viernes a las 21:00, lo sabés antes de que el mozo llegue a la mesa con la mala noticia.',
  },
  {
    title: 'La facturación que cumple con ARCA',
    body: 'Facturas A, B y C directamente desde el POS. El comprobante sale en el momento, en el ticket térmico, sin ninguna aplicación adicional. El cumplimiento fiscal no depende de que alguien se acuerde de hacerlo por separado.',
  },
  {
    title: 'Los reportes que dan el panorama real',
    body: 'Al final del mes, ¿sabés cuál es tu plato más rentable? ¿En qué turno vendés más? ¿Qué medio de pago domina? Mesanube te da esa información sin que tengas que armar ninguna planilla.',
  },
  {
    title: 'El arqueo que no genera estrés',
    body: 'Cada turno tiene su registro: qué entró, qué salió, quién hizo caja, cuánto había de efectivo y cuánto debería haber. Las diferencias aparecen solas, ya no tenés que descubrirlas a las 2 de la mañana.',
  },
]

const roles = [
  {
    n: '01',
    title: 'El mozo',
    body: 'Toma pedidos desde su celular sin capacitación larga. Ve sus mesas, agrega pedidos, saca la precuenta, cierra la cuenta. El sistema le muestra solo lo que necesita ver.',
  },
  {
    n: '02',
    title: 'La cocina',
    body: 'El monitor de cocina (KDS) recibe los pedidos en tiempo real. Cada ítem aparece con la mesa y el detalle. El cocinero no depende de que el mozo pase el papelito a tiempo.',
  },
  {
    n: '03',
    title: 'El encargado',
    body: 'Ve todo el salón: qué mesas están ocupadas, qué pedidos están en curso, qué está tardando más de lo normal. Puede actuar antes de que el problema llegue al cliente.',
  },
  {
    n: '04',
    title: 'Vos, el dueño',
    body: 'Los reportes y el arqueo dan el panorama completo. Podés revisar el día desde el celular sin estar en el local. Y si algo no cuadra, tenés el detalle para entender qué pasó.',
  },
]

const funciones = [
  {
    title: 'App para mozos',
    body: 'Cada mozo trabaja desde su celular. Los pedidos van a cocina al instante, sin hardware adicional. Sin límite de usuarios simultáneos.',
  },
  {
    title: 'Monitor de cocina (KDS)',
    body: 'Pantalla en cocina con todos los pedidos activos en tiempo real. Ordena por hora, por mesa, por prioridad.',
  },
  {
    title: 'Comanda digital',
    body: 'El pedido completo en pantalla: productos, modificaciones, notas especiales. Sin ambigüedad, sin errores de transcripción.',
  },
  {
    title: 'Control de stock',
    body: 'Inventario actualizado en tiempo real con cada venta. Alertas de reposición. Historial de movimientos.',
  },
  {
    title: 'Gestión de recetas y márgenes',
    body: 'Cargás los ingredientes de cada plato y Mesanube calcula el costo. Sabés exactamente cuánto te rinde cada cosa en la carta.',
  },
  {
    title: 'Facturación ARCA',
    body: 'Facturas A, B y C desde el POS. Ticket fiscal. Compatible con impresoras térmicas estándar.',
  },
  {
    title: 'Reportes completos',
    body: 'Ventas por período, por producto, por mozo, por medio de pago. Exportables.',
  },
  {
    title: 'Arqueo de caja',
    body: 'Por turno, con detalle de ingresos, egresos y diferencias.',
  },
]

const precioItems = [
  'App para mozos (sin límite de usuarios)',
  'Monitor de cocina (KDS)',
  'Comanda digital',
  'Control de stock y recetas',
  'Facturación ARCA',
  'Reportes completos',
  'Arqueo de caja por turno',
  'Soporte por WhatsApp incluido',
]

const faq = [
  {
    q: '¿Qué es un sistema de gestión gastronómica?',
    a: 'Un sistema de gestión gastronómica (o sistema POS para restaurantes) es el software que centraliza la operación de un restaurante: pedidos, cocina, caja y facturación. Reemplaza el papel, las planillas y las apps separadas por una sola herramienta conectada. Mesanube es ese sistema, hecho en Argentina con facturación ARCA incluida.',
  },
  {
    q: '¿Cuántos mozos pueden usar la app al mismo tiempo?',
    a: 'Sin límite por cantidad de usuarios. Todos tus mozos pueden estar trabajando en simultáneo desde sus celulares sin interferir entre sí, sin necesidad de terminales compartidas.',
  },
  {
    q: '¿Necesito impresora para las facturas?',
    a: 'Mesanube es compatible con impresoras térmicas de ticket estándar. Si ya tenés una impresora en el local, probablemente sea compatible. Si no tenés, te orientamos sobre qué modelo comprar.',
  },
  {
    q: '¿Qué pasa si no tengo internet por un momento?',
    a: 'El sistema trabaja online. Si cae la conexión, los pedidos tomados se sincronizan cuando vuelve. Para ambientes críticos recomendamos tener un fallback de conectividad, como los datos del celular del mozo.',
  },
  {
    q: '¿Puedo empezar solo con algunas funciones e ir sumando?',
    a: 'Sí. El setup inicial puede ser tan simple como cargar el menú y empezar a tomar pedidos. El resto de las funciones las vas activando a tu ritmo.',
  },
  {
    q: '¿Cuánto tiempo lleva la configuración inicial?',
    a: 'Para un restaurante estándar, la carga del menú y la configuración inicial llevan entre 1 y 3 horas. El equipo de Mesanube acompaña el proceso por WhatsApp.',
  },
]

/* ── Button primitives ── */

function PrimaryButton({
  children,
  href = '#contacto',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#485c11] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-[background-color,transform] duration-300 hover:bg-[#3a4c0d] active:scale-[0.98] ${className}`}
    >
      <span>{children}</span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 6 7"
        fill="none"
        className="translate-y-px transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path
          d="M0.5 6L5.5 1M5.5 1H1.5M5.5 1V5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
      </svg>
    </Link>
  )
}

function SoftButton({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#dfecc6] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black transition-[background-color,transform] duration-300 hover:bg-[#d0e1ac] active:scale-[0.98]"
    >
      {children}
    </Link>
  )
}

/* ── Page ── */

export default function RestaurantesPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />

      {/* Top nav */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between pt-5 pb-10 sm:pt-5 sm:pb-20">
        <Link
          href="/"
          className="text-[26px] leading-[1.2] tracking-[-1.2px] text-black sm:text-[30px] sm:tracking-[-1.5px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <TrialButton>Probá gratis</TrialButton>
      </nav>

      {/* Hero */}
      <header className="flex w-full max-w-[1500px] flex-col items-start gap-[60px] overflow-clip sm:gap-[100px]">
        <div className="flex w-full flex-col items-start gap-6">
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Para restaurantes
          </p>
          <h1
            className="word-rise w-full font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            <span>De la primera comanda al cierre.</span>
          </h1>
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Para los que saben lo que es abrir a mediodía y no levantar cabeza hasta medianoche.
            Mesanube organiza la sala, conecta con cocina y te da los números al final del día.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TrialButton>Probá gratis 30 días</TrialButton>
            <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Sin tarjeta de crédito. Sin permanencia.
            </p>
          </div>
        </div>

        <Reveal className="zoom-wrap relative h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[420px] lg:rounded-[30px]">
          <Image
            src="/figma/hero-mountains.png"
            alt="Restaurante organizado con Mesanube"
            fill
            sizes="(max-width: 1024px) 100vw, 1500px"
            className="object-cover"
            priority
          />
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* El problema */}
        <section
          id="problema"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              El contexto que entendemos
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Gestionar un restaurante en Argentina no es fácil.
            </p>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-5 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] lg:pr-[400px]"
          >
            <p>
              Los márgenes son ajustados, los precios cambian seguido, el personal rota, y el
              cliente quiere el plato en tiempo y forma. Encima de todo eso: la obligación de
              facturar con ARCA (ex-AFIP), mantener el stock actualizado, y cerrar la caja con los
              números que corresponden.
            </p>
            <p>
              La mayoría de los sistemas de gestión para restaurantes están pensados para otro
              mercado, traducidos al castellano neutro, y soportados por un equipo en otro país que
              no sabe lo que es ARCA ni el arqueo de caja en pesos. O son sistemas locales viejos
              que cuestan más de lo que vale lo que hacen.
            </p>
            <p>
              Mesanube es un sistema hecho en Argentina, para restaurantes argentinos, con soporte
              de gente que sabe lo que estás viviendo cuando te escribe.
            </p>
          </Reveal>
        </section>

        {/* Qué resuelve */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Qué resuelve Mesanube
            </h2>
            <p
              className="w-full font-display text-black lg:pr-[400px]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Control total de la sala a la cocina.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {resuelve.map((item, i) => (
              <Reveal
                key={item.title}
                delay={Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {item.title}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Cómo trabaja el equipo */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[50px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:gap-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Cada rol, cada pantalla.
            </p>
            <TrialButton variant="soft">Empezá gratis</TrialButton>
          </Reveal>
          <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((s, i) => (
              <Reveal
                key={s.n}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                aria-label={`Rol ${i + 1} de 4`}
                className="flex flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[40px] pr-[30px] pb-5 sm:gap-[60px] sm:pt-[60px]"
              >
                <p
                  className="w-full leading-none text-[#929292]"
                  style={{
                    fontSize: 'clamp(56px, 6vw, 80px)',
                    letterSpacing: 'clamp(-2px, -0.3vw, -3.2px)',
                  }}
                >
                  {s.n}
                </p>
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {s.title}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Funciones */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px] sm:pb-[60px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Funciones
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Todo lo que necesitás para gestionar tu restaurante.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {funciones.map((f, i) => (
              <Reveal
                key={f.title}
                delay={Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                  {f.title}
                </p>
                <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal
            delay={1}
            className="zoom-wrap relative mt-[40px] h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[500px] lg:rounded-[30px]"
          >
            <Image
              src="/figma/columns.png"
              alt="Panel de funciones de Mesanube para restaurantes"
              fill
              sizes="(max-width: 1024px) 100vw, 1500px"
              className="object-cover"
            />
          </Reveal>
        </section>

        {/* Testimonio */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-6 pb-[80px] lg:flex-row lg:items-stretch lg:gap-5 lg:pb-[120px]">
          <Reveal className="zoom-wrap relative w-full overflow-hidden rounded-[20px] lg:w-1/2 lg:flex-[1_0_0] lg:rounded-[30px]">
            <div className="relative aspect-[550/624] w-full">
              <Image
                src="/figma/sphere.png"
                alt="Restaurante con Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={1}
            as="section"
            aria-label="Testimonio de un cliente de Mesanube"
            className="flex w-full flex-[1_0_0] flex-col items-start justify-center gap-8 border-t border-[#e9e9e9] pt-8 sm:gap-[50px] lg:w-1/2 lg:pl-[50px] lg:pt-0"
          >
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                lineHeight: 1,
                letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
              }}
            >
              &ldquo;Antes de Mesanube, la comunicación entre el salón y la cocina era un caos los
              fines de semana. Ahora cada pedido aparece en la pantalla de la cocina antes de que el
              mozo vuelva a la mesa. Bajamos los errores a casi cero y mejoró notablemente el tiempo
              de servicio.&rdquo;
            </p>
            <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
              <p className="text-[18px] tracking-[-0.09px] text-black">Martín R.</p>
              <p className="font-mono text-[14px] tracking-[-0.14px] text-[#485c11]">
                Dueño, Restaurante Almacén del Centro, San Telmo
              </p>
            </div>
          </Reveal>
        </section>

        {/* Soporte */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Por qué Mesanube y no otro sistema
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              El soporte que hace la diferencia.
            </p>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-5 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] lg:pr-[400px]"
          >
            <p>
              Cuando algo falla un sábado a la noche, y en algún momento algo falla, necesitás que
              alguien te responda. No un ticket con número. No &ldquo;el próximo turno lo ve un
              agente&rdquo;. El equipo de Mesanube está en WhatsApp, conoce el sistema y conoce el
              rubro. Cuando escribís, te responde alguien que sabe cómo está configurado tu local.
            </p>
            <p>Eso no lo puede prometer ningún competidor con equipo de soporte corporativo.</p>
          </Reveal>
        </section>

        {/* Precio */}
        <PricingCards
          variant="advanced"
          eyebrow="Precio"
          heading="Plan Avanzado, $34.000/mes."
          description="Para restaurantes con salón completo. Todo incluido, sin módulos adicionales."
          advancedDescription="Para bares y restaurantes con salón"
          features={precioItems}
          ctaText="30 días gratis para verlo en acción"
        />

        {/* FAQ */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Preguntas frecuentes
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lo que más nos preguntan.
            </p>
          </Reveal>
          <div className="w-full">
            {faq.map((item, i) => (
              <Reveal
                key={i}
                delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}
                as="article"
                className="flex w-full flex-col gap-2 border-t border-[#e9e9e9] py-5 lg:pr-[400px]"
              >
                <p className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                  {item.q}
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {item.a}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section
          id="contacto"
          className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[#e9e9e9] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
        >
          <Reveal
            as="p"
            className="w-full text-center font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            Organizá tu restaurante. 30 días gratis.
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Sin tarjeta de crédito. Sin permanencia. Si querés ver cómo funciona antes de empezar,
            agendá una demo y te lo mostramos en tu local.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">
              Empezá tu prueba gratuita
            </TrialButton>
            <DemoButton>Agendá una demo de 20 minutos</DemoButton>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
