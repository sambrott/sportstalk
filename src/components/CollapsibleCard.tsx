import { type ReactNode, useState } from 'react'

type Props = {
  kicker: string
  title: string
  dark?: boolean
  pill?: string
  pillVariant?: 'hot' | 'info' | 'muted' | 'dark'
  defaultOpen?: boolean
  children: ReactNode | ((open: boolean) => ReactNode)
  mobile?: boolean
}

export function CollapsibleCard({
  kicker,
  title,
  dark,
  pill,
  pillVariant = 'hot',
  defaultOpen = true,
  children,
  mobile,
}: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const base = mobile ? 'mc' : 'card'
  const body = typeof children === 'function' ? children(open) : children

  return (
    <div className={`${base} ${dark ? `${base}--dark` : ''}`}>
      <button
        type="button"
        className={`${base}__hd`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={`${base}__hd-left`}>
          <div className={`${base}__kicker`}>{kicker}</div>
          <div className={`${base}__title`}>{title}</div>
        </div>
        <div className={`${base}__hd-right`}>
          {pill ? <span className={`pill pill--${pillVariant}`}>{pill}</span> : null}
          <span className={`${base}__chev ${open ? 'open' : ''}`} aria-hidden>
            ▾
          </span>
        </div>
      </button>
      <div className={`${base}__bd ${open ? 'open' : ''}`}>
        <div className={`${base}__inner`}>{body}</div>
      </div>
    </div>
  )
}
