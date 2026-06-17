'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, ArrowDown } from 'lucide-react'

const proofPoints = [
  'Founding Engineer, American VoxPop',
  'UK Home Office advisor',
  'Speaker · Geneva · London · Lisbon',
  "UK's first displaced-talent platform",
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* Background texture + accent glow */}
      <div className="absolute inset-0 bg-linegrid opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink to-ink" />
      <div className="absolute -top-24 -right-24 w-[34rem] h-[34rem] bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="kicker">Senior Software Engineer & Technical Lead</span>
            </div>

            <h1 className="font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
              Ammar
              <br />
              Sammour
            </h1>

            <p className="text-lg text-muted leading-relaxed max-w-xl mb-8">
              I architect <span className="text-fg">enterprise platforms across regulated
              industries</span>: civic-tech reaching all three branches of US government,
              multi-tenant systems for competing clients, and the{' '}
              <span className="text-accent">UK&apos;s first displaced-talent integration platform</span>,
              reviewed by the UK Home Office.
            </p>

            {/* Status line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-9 font-mono text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                London, UK
              </span>
              <span>7+ yrs experience</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-accent text-ink font-semibold rounded-lg hover:bg-accent-400 transition-colors"
              >
                View Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-line text-fg font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                Get in touch
              </Link>
              <div className="flex items-center gap-1.5 ml-1">
                {[
                  { href: 'https://linkedin.com/in/ammar-sam', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://github.com/Ammar-64', icon: Github, label: 'GitHub' },
                  { href: 'mailto:ammar.n.sammour@gmail.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg border border-line text-muted hover:text-accent hover:border-accent transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: headshot, framed & captioned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto lg:mx-0 w-full max-w-sm"
          >
            {/* Corner ticks */}
            <span className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-accent" />
            <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-accent" />

            <div className="panel p-3 group">
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/headshot.png"
                  alt="Ammar Sammour"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
              {/* Caption bar */}
              <div className="flex items-center justify-between px-2 pt-3 pb-1 font-mono text-[11px]">
                <span className="text-muted">ammar.sammour</span>
                <span className="text-accent">/ London · est. 2023</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Proof ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 border-t border-line pt-6"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-muted">
            {proofPoints.map((p, i) => (
              <span key={p} className="flex items-center gap-6">
                {i > 0 && <span className="text-line">/</span>}
                <span className="hover:text-fg transition-colors">{p}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <div className="hidden lg:flex justify-center mt-10">
          <ArrowDown className="w-5 h-5 text-faint animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
