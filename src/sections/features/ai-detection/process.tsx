'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowDown, ShieldCheck, History, ScanText, CheckCircle2 } from 'lucide-react'

const ICONS = {
  shieldCheck: ShieldCheck,
  history: History,
  scanText: ScanText,
  checkCircle2: CheckCircle2,
} as const
type IconKey = keyof typeof ICONS

export type Step = {
  k: string
  title: string
  text: string
  badge?: string
  icon?: IconKey
  color?: {
    header?: string
    ring?: string
    chip?: string
  }
}

type StickyProcessColumnProps = {
  title?: string
  subtitle?: string
  steps: Step[]
  className?: string
  /** Top offset (px) for the sticky left panel */
  stickyTop?: number
}

/**
 * StickyProcessColumn
 * - Left: sticky explainer (1/3 width on lg+)
 * - Right: vertically stacked steps (2/3 width on lg+)
 */
export default function StickyProcessColumn({
  title = 'How our AI detection works',
  subtitle = 'Multi-signal analysis designed for learning—rooted in revision history and classroom reality.',
  steps,
  className = '',
  stickyTop = 200,
}: StickyProcessColumnProps) {
  const [active, setActive] = useState(0)

  // Refs to the whole card (for scrollIntoView)
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([])
  useEffect(() => {
    cardRefs.current = steps.map((_, i) => cardRefs.current[i] ?? React.createRef<HTMLDivElement>())
  }, [steps.length])

  // Ensure we don’t render left panel when steps is empty
  const safeActive = Math.min(active, Math.max(0, steps.length - 1))

  return (
    <section id="process" className={`py-16 bg-muted/50 border-y border-border ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground">{title}</h2>
            <p className="mt-3 text-muted-foreground">{subtitle}</p>
          </div>

          {/* 1/1 on mobile, 1/3 + 2/3 on lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left (1/3): sticky explainer */}
            <aside className="lg:col-span-1 lg:sticky lg:self-start" style={{ top: stickyTop }}>
              <div className="max-h-[calc(100vh-24px)] overflow-auto rounded-2xl border border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-sm p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {steps[safeActive]?.k}
                  </span>
                  <span className="text-sm uppercase tracking-wide text-muted-foreground">Current step</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-tight">{steps[safeActive]?.title}</h3>
                {steps[safeActive]?.badge && (
                  <span className="mt-2 inline-flex items-center rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/80 ring-1 ring-inset ring-border">
                    {steps[safeActive].badge}
                  </span>
                )}
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{steps[safeActive]?.text}</p>

                {/* Progress dots */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to step ${i + 1}`}
                      onClick={() =>
                        cardRefs.current[i].current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                      }
                      className={`h-2.5 w-2.5 rounded-full ring-1 ring-border transition-all ${
                        i === safeActive ? 'scale-125 bg-foreground' : 'bg-foreground/20 hover:bg-foreground/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </aside>

            {/* Right (2/3): steps list */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {steps.map((s, i) => (
                <StepCard
                  key={s.k + s.title}
                  ref={cardRefs.current[i]}
                  index={i}
                  step={s}
                  active={i === safeActive}
                  onActive={(idx) => setActive(idx)}
                  showArrow={i < steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Step Card (Framer-controlled viewport, no IO needed) ---
const StepCard = React.forwardRef<
  HTMLDivElement,
  {
    step: Step
    index: number
    active: boolean
    onActive: (idx: number) => void
    showArrow?: boolean
  }
>(({ step, index, active, onActive, showArrow = false }, ref) => {
  const controls = useAnimation()

  useEffect(() => {
    if (active) {
      controls.start({
        scale: 1.08,
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        transition: { type: 'spring', stiffness: 180, damping: 18 },
      })
    } else {
      controls.start({ scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0.0)', transition: { duration: 0.2 } })
    }
  }, [active, controls])

  const iconKey: IconKey = step.icon ?? 'shieldCheck'
  const Icon = ICONS[iconKey]

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        animate={controls}
        className={`relative overflow-hidden rounded-2xl border ring-1 ${step.color?.ring ?? 'ring-border'} bg-background`}
        // 👇 Let Framer detect "in view" and notify parent
        onViewportEnter={() => onActive(index)}
        viewport={{
          // Create a middle band similar to previous rootMargin: active when ~center area intersects
          margin: '-20% 0% -50% 0%',
          amount: 0.2, // how much of the element must be inside the viewport band (0..1)
          once: false,
        }}
      >
        {/* decorative header glow */}
        <div
          className={`pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b ${
            step.color?.header ?? 'from-primary/20 via-primary/10 to-transparent'
          } blur-2xl`}
        />

        <div className="relative p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="mt-1 grid h-11 w-11 place-items-center rounded-xl bg-foreground/5">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold tracking-wider text-muted-foreground">{step.k}</span>
                {step.badge && (
                  <span
                    className={`${step.color?.chip ?? 'bg-foreground/10 text-foreground'} rounded-full px-2 py-0.5 text-[10px] ring-1 ring-border`}
                  >
                    {step.badge}
                  </span>
                )}
              </div>
              <h4 className="mt-1 text-xl font-semibold leading-snug">{step.title}</h4>
              <p className="mt-2 text-muted-foreground">{step.text}</p>
            </div>
          </div>

          {/* subtle animated accent when active */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-foreground/30 via-foreground/10 to-transparent"
          />
        </div>
      </motion.div>

      {showArrow && (
        <div className="relative flex items-center justify-center py-2" aria-hidden="true">
          <div className="absolute inset-x-6 border-t border-dashed border-border" />
          <ArrowDown className="h-6 w-6 bg-background rounded-full p-1" />
        </div>
      )}
    </div>
  )
})
StepCard.displayName = 'StepCard'
