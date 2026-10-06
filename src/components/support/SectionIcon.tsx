import {
  BarChart3,
  BookOpen,
  ChefHat,
  CircleUser,
  ClipboardList,
  LayoutGrid,
  type LucideIcon,
  Package,
  Plug,
  Printer,
  Receipt,
  Rocket,
  Users,
  Wallet,
} from 'lucide-react'
import React from 'react'

import { DEFAULT_SECTION_ICON, type SupportSectionIcon } from '@/collections/Support/shared'

const ICONS: Record<SupportSectionIcon, LucideIcon> = {
  libro: BookOpen,
  inicio: Rocket,
  caja: Wallet,
  facturacion: Receipt,
  comandas: ClipboardList,
  mesas: LayoutGrid,
  cocina: ChefHat,
  impresoras: Printer,
  productos: Package,
  usuarios: Users,
  reportes: BarChart3,
  cuenta: CircleUser,
  integraciones: Plug,
}

/** Decorative section icon; the section title next to it carries the meaning. */
export function SectionIcon({ icon, className }: { icon?: string | null; className?: string }) {
  const Icon = ICONS[(icon as SupportSectionIcon) ?? DEFAULT_SECTION_ICON] ?? ICONS[DEFAULT_SECTION_ICON]
  return <Icon aria-hidden="true" strokeWidth={1.5} className={className} />
}
