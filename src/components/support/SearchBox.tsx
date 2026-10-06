import React from 'react'

type SearchBoxProps = {
  defaultValue?: string
}

/** Plain GET form to /soporte/buscar: works without JavaScript and keeps the page a Server Component. */
export function SearchBox({ defaultValue }: SearchBoxProps) {
  return (
    <form action="/soporte/buscar" method="get" role="search" className="flex w-full max-w-[640px] gap-2">
      <label htmlFor="support-search" className="sr-only">
        Buscar en soporte
      </label>
      <input
        id="support-search"
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Buscá tu duda, por ejemplo: anular una factura"
        className="min-w-0 flex-1 rounded-full border border-[var(--divider)] bg-white px-5 py-[13px] text-[15px] text-[var(--heading)] placeholder:text-[var(--caption)] focus-visible:border-[var(--olive)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-[var(--olive)] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-colors duration-200 hover:bg-[var(--olive-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]"
      >
        Buscar
      </button>
    </form>
  )
}
