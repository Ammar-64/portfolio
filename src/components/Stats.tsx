'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: '490+',
    label: 'API endpoints',
    context: 'across 60 modules and 101 tables powering American VoxPop',
  },
  {
    value: '8',
    label: 'government data sources',
    context: 'integrated across all three branches of US government',
  },
  {
    value: '30+',
    label: 'hours/week eliminated',
    context: 'of manual work across Dymapak’s operations',
  },
  {
    value: '0',
    label: 'cross-tenant incidents',
    context: 'data leakage made architecturally impossible for competing clients',
  },
  {
    value: '500+',
    label: 'UK displaced talents',
    context: 'supported via the UK’s first integration platform, Home Office reviewed',
  },
  {
    value: '4',
    label: 'international stages',
    context: 'Geneva, London & Lisbon, speaking 2023 to 2025',
  },
]

// Animates the leading integer of a value like "490+" or "30+/wk" up from zero.
const CountUp = ({ value, play }: { value: string; play: boolean }) => {
  const match = value.match(/^(\d+)(.*)$/)
  const hasNumber = match !== null
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!hasNumber || !play) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || target === 0) {
      setDisplay(target)
      return
    }
    const duration = 1100
    let raf = 0
    let start: number | null = null
    const tick = (now: number) => {
      if (start === null) start = now
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setDisplay(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [hasNumber, play, target])

  if (!hasNumber) return <>{value}</>
  return (
    <>
      {display}
      {suffix}
    </>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="numbers" className="relative py-24 bg-ink-800 border-y border-line">
      <div className="absolute inset-0 bg-dotgrid opacity-30" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-14">
          <span className="kicker">02 / By the Numbers</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-2xl">
            Impact, not vanity metrics
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-ink-700 p-7 hover:bg-ink-600 transition-colors"
            >
              <span className="absolute top-6 right-6 font-mono text-[10px] text-faint">
                0{index + 1}
              </span>
              <div className="font-display font-bold text-5xl tracking-tight text-accent mb-1 tabular-nums">
                <CountUp value={stat.value} play={isInView} />
              </div>
              <div className="font-medium text-fg mb-3">{stat.label}</div>
              <p className="text-sm text-muted leading-relaxed">{stat.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
