import { useEffect, useState } from 'react'
import type { StatBar } from '../types'

type Props = {
  title: string
  subtitle: string
  bars: StatBar[]
  animate: boolean
  mobile?: boolean
}

export function BarChart({ title, subtitle, bars, animate, mobile }: Props) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!animate) {
      setPhase(0)
      return
    }
    setPhase(0)
    const id = requestAnimationFrame(() => {
      setPhase(1)
    })
    return () => cancelAnimationFrame(id)
  }, [animate, bars])

  const p = mobile ? 'm-chart' : 'chart'

  return (
    <div className={p}>
      {mobile ? (
        <>
          <div className="m-chart-title">{title}</div>
          <div className="m-chart-sub">{subtitle}</div>
        </>
      ) : (
        <>
          <div className="chart-title">{title}</div>
          <div className="chart-sub">{subtitle}</div>
        </>
      )}
      {bars.map((b) => (
        <div key={b.label} className={mobile ? 'm-bar-row' : 'bar-row'}>
          <div className={`${mobile ? 'm-bar-lbl' : 'bar-lbl'} ${b.highlight ? 'hi' : ''}`}>
            {b.label}
          </div>
          <div className={mobile ? 'm-bar-track' : 'bar-track'}>
            <div
              className={`${mobile ? 'm-bar-fill' : 'bar-fill'} ${b.highlight ? 'hi' : 'lo'}`}
              style={{ width: phase ? `${b.pct}%` : '0%' }}
            >
              <span
                className={`${mobile ? 'm-bar-val' : 'bar-val'} ${!b.highlight ? 'dark-val' : ''}`}
              >
                {b.value}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
