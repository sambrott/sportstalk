import { useEffect, useState } from 'react'
import type { StatBar, StatChart } from '../types'
import { BarChart } from './BarChart'

type Props = {
  chart: StatChart
  animate: boolean
  mobile?: boolean
  /** CollapsibleCard already shows title — hide duplicate inside chart */
  omitHeader?: boolean
}

function ChartFootnote({ text, mobile }: { text: string; mobile?: boolean }) {
  return <p className={mobile ? 'stc-foot stc-foot--m' : 'stc-foot'}>{text}</p>
}

function VerticalBarChart({
  title,
  subtitle,
  bars,
  animate,
  mobile,
  omitHeader,
  valueSuffix,
}: {
  title: string
  subtitle: string
  bars: StatBar[]
  animate: boolean
  mobile?: boolean
  omitHeader?: boolean
  valueSuffix?: string
}) {
  const [phase, setPhase] = useState(0)
  const p = mobile ? 'm-chart-v' : 'chart-v'

  useEffect(() => {
    if (!animate) {
      setPhase(0)
      return
    }
    setPhase(0)
    const id = requestAnimationFrame(() => setPhase(1))
    return () => cancelAnimationFrame(id)
  }, [animate, bars])

  return (
    <div className={p}>
      {!omitHeader ? (
        <>
          <div className={mobile ? 'm-chart-title' : 'chart-title'}>{title}</div>
          <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
        </>
      ) : (
        <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
      )}
      <div className={mobile ? 'm-chart-v-cols' : 'chart-v-cols'}>
        {bars.map((b, i) => (
          <div key={b.label} className={mobile ? 'm-chart-v-col' : 'chart-v-col'}>
            <div className={mobile ? 'm-chart-v-bar-wrap' : 'chart-v-bar-wrap'}>
              <div
                className={`${mobile ? 'm-chart-v-bar' : 'chart-v-bar'} ${b.highlight ? 'hi' : 'lo'}`}
                style={{
                  height: phase ? `${Math.max(8, b.pct)}%` : '0%',
                  transitionDelay: phase ? `${i * 70}ms` : '0ms',
                }}
              />
            </div>
            <div className={mobile ? 'm-chart-v-val' : 'chart-v-val'}>
              {b.value}
              {valueSuffix ?? ''}
            </div>
            <div className={`${mobile ? 'm-chart-v-lbl' : 'chart-v-lbl'} ${b.highlight ? 'hi' : ''}`}>{b.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LollipopChart({
  title,
  subtitle,
  items,
  animate,
  mobile,
  omitHeader,
}: {
  title: string
  subtitle: string
  items: StatBar[]
  animate: boolean
  mobile?: boolean
  omitHeader?: boolean
}) {
  const [phase, setPhase] = useState(0)
  const p = mobile ? 'm-lol' : 'lol'

  useEffect(() => {
    if (!animate) {
      setPhase(0)
      return
    }
    setPhase(0)
    const id = requestAnimationFrame(() => setPhase(1))
    return () => cancelAnimationFrame(id)
  }, [animate, items])

  return (
    <div className={p}>
      {!omitHeader ? (
        <>
          <div className={mobile ? 'm-chart-title' : 'chart-title'}>{title}</div>
          <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
        </>
      ) : (
        <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
      )}
      {items.map((b, i) => (
        <div key={b.label} className={`${p}-row`}>
          <div className={`${p}-lbl ${b.highlight ? 'hi' : ''}`}>{b.label}</div>
          <div className={`${p}-track`}>
            <div
              className={`${p}-dot ${b.highlight ? 'hi' : 'lo'}`}
              style={{
                left: phase ? `${b.pct}%` : '0%',
                transitionDelay: phase ? `${i * 65}ms` : '0ms',
              }}
            />
          </div>
          <div className={`${p}-val`}>{b.value}</div>
        </div>
      ))}
    </div>
  )
}

function DivergingChart({
  title,
  subtitle,
  rows,
  animate,
  mobile,
  omitHeader,
}: {
  title: string
  subtitle: string
  rows: { label: string; net: number }[]
  animate: boolean
  mobile?: boolean
  omitHeader?: boolean
}) {
  const maxAbs = Math.max(1e-6, ...rows.map((r) => Math.abs(r.net)))
  const [phase, setPhase] = useState(0)
  const p = mobile ? 'm-div' : 'divg'

  useEffect(() => {
    if (!animate) {
      setPhase(0)
      return
    }
    setPhase(0)
    const id = requestAnimationFrame(() => setPhase(1))
    return () => cancelAnimationFrame(id)
  }, [animate, rows])

  return (
    <div className={p}>
      {!omitHeader ? (
        <>
          <div className={mobile ? 'm-chart-title' : 'chart-title'}>{title}</div>
          <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
        </>
      ) : (
        <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
      )}
      <div className={`${p}-axis-hint`}>
        <span>← {mobile ? '−' : 'Negative'}</span>
        <span>{mobile ? '+' : 'Positive'} →</span>
      </div>
      {rows.map((r, i) => {
        const neg = r.net < 0
        const w = phase ? (Math.abs(r.net) / maxAbs) * 100 : 0
        return (
          <div key={r.label} className={`${p}-row`}>
            <div className={`${p}-lbl`}>{r.label}</div>
            <div className={`${p}-track`}>
              <div className={`${p}-side ${p}-side--neg`}>
                {neg ? (
                  <div
                    className={`${p}-bar ${p}-bar--neg`}
                    style={{
                      width: `${w}%`,
                      transitionDelay: phase ? `${i * 55}ms` : '0ms',
                    }}
                  />
                ) : null}
              </div>
              <div className={`${p}-side ${p}-side--pos`}>
                {!neg ? (
                  <div
                    className={`${p}-bar ${p}-bar--pos`}
                    style={{
                      width: `${w}%`,
                      transitionDelay: phase ? `${i * 55}ms` : '0ms',
                    }}
                  />
                ) : null}
              </div>
            </div>
            <div className={`${p}-net`}>{r.net > 0 ? '+' : ''}{r.net.toFixed(1)}</div>
          </div>
        )
      })}
    </div>
  )
}

function PairedMetricChart({
  title,
  subtitle,
  leftMetric,
  rightMetric,
  rows,
  animate,
  mobile,
  omitHeader,
}: {
  title: string
  subtitle: string
  leftMetric: string
  rightMetric: string
  rows: {
    label: string
    left: string
    right: string
    leftPct: number
    rightPct: number
    highlight?: boolean
  }[]
  animate: boolean
  mobile?: boolean
  omitHeader?: boolean
}) {
  const [phase, setPhase] = useState(0)
  const p = mobile ? 'm-pair' : 'pairc'

  useEffect(() => {
    if (!animate) {
      setPhase(0)
      return
    }
    setPhase(0)
    const id = requestAnimationFrame(() => setPhase(1))
    return () => cancelAnimationFrame(id)
  }, [animate, rows])

  return (
    <div className={p}>
      {!omitHeader ? (
        <>
          <div className={mobile ? 'm-chart-title' : 'chart-title'}>{title}</div>
          <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
        </>
      ) : (
        <div className={mobile ? 'm-chart-sub' : 'chart-sub'}>{subtitle}</div>
      )}
      <div className={`${p}-hdr`}>
        <span className={`${p}-hdr-spacer`} />
        <span className={`${p}-hdr-m`}>{leftMetric}</span>
        <span className={`${p}-hdr-m`}>{rightMetric}</span>
      </div>
      {rows.map((r, i) => (
        <div key={r.label} className={`${p}-row ${r.highlight ? 'is-hi' : ''}`}>
          <div className={`${p}-name`}>{r.label}</div>
          <div className={`${p}-cell`}>
            <div className={`${p}-track`}>
              <div
                className={`${p}-fill ${r.highlight ? 'hi' : ''}`}
                style={{
                  width: phase ? `${r.leftPct}%` : '0%',
                  transitionDelay: phase ? `${i * 50}ms` : '0ms',
                }}
              />
            </div>
            <span className={`${p}-num`}>{r.left}</span>
          </div>
          <div className={`${p}-cell`}>
            <div className={`${p}-track`}>
              <div
                className={`${p}-fill ${r.highlight ? 'hi' : 'lo'}`}
                style={{
                  width: phase ? `${r.rightPct}%` : '0%',
                  transitionDelay: phase ? `${i * 50 + 25}ms` : '0ms',
                }}
              />
            </div>
            <span className={`${p}-num`}>{r.right}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function StatChartView({ chart, animate, mobile, omitHeader = true }: Props) {
  const foot = chart.footnote

  const inner = (() => {
    switch (chart.kind) {
      case 'bar-h':
        return (
          <BarChart
            title={chart.title}
            subtitle={chart.subtitle}
            bars={chart.bars}
            animate={animate}
            mobile={mobile}
            omitHeader={omitHeader}
          />
        )
      case 'bar-v':
        return (
          <VerticalBarChart
            title={chart.title}
            subtitle={chart.subtitle}
            bars={chart.bars}
            animate={animate}
            mobile={mobile}
            omitHeader={omitHeader}
            valueSuffix={chart.valueSuffix}
          />
        )
      case 'lollipop':
        return (
          <LollipopChart
            title={chart.title}
            subtitle={chart.subtitle}
            items={chart.items}
            animate={animate}
            mobile={mobile}
            omitHeader={omitHeader}
          />
        )
      case 'diverging':
        return (
          <DivergingChart
            title={chart.title}
            subtitle={chart.subtitle}
            rows={chart.rows}
            animate={animate}
            mobile={mobile}
            omitHeader={omitHeader}
          />
        )
      case 'paired':
        return (
          <PairedMetricChart
            title={chart.title}
            subtitle={chart.subtitle}
            leftMetric={chart.leftMetric}
            rightMetric={chart.rightMetric}
            rows={chart.rows}
            animate={animate}
            mobile={mobile}
            omitHeader={omitHeader}
          />
        )
    }
  })()

  return (
    <>
      {inner}
      {foot ? <ChartFootnote text={foot} mobile={mobile} /> : null}
    </>
  )
}
