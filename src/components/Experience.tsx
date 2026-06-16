'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Software Engineer & Technical Lead',
    company: 'Alsaab Ltd',
    location: 'London, UK',
    period: 'Apr 2023 — Present',
    description: 'Leading technical delivery for enterprise clients, making all architectural decisions and building systems from scratch.',
    highlights: [
      'American VoxPop – architected the platform: 490+ API endpoints, 101 tables, 8 government data sources across all 3 branches',
      'Regen Therapy – built a multi-tenant B2B platform solo in 3 months; cross-tenant data leakage made architecturally impossible',
      'Dymapak – four enterprise integrations eliminating 30+ hours of manual work per week; opened 13 new markets',
      'DAR Platform – re-architected a prototype into a production app with Lighthouse 90+ across all categories',
    ],
  },
  {
    title: 'Coding Trainer → Senior Trainer & Software Engineer',
    company: 'Re:Coded',
    location: 'Remote',
    period: 'Nov 2019 — Early 2025',
    description: 'Direct employment Nov 2019 – Mar 2023; continued via Alsaab Ltd through early 2025. Led digital transformation while training the next generation of engineers.',
    highlights: [
      'Built an automated learning platform serving 50,000+ students and 3,000 alumni across 15 countries',
      'Salesforce integration eliminating 40+ hours of weekly manual work',
      'Mentored 200+ students to employment; 85% graduate employment rate',
      '92% retention rate across frontend/backend bootcamps',
    ],
  },
  {
    title: 'Voluntary Initiatives',
    company: 'DT Integration Hub · Residay',
    location: 'UK',
    period: '2024 — Present',
    description: 'Self-initiated digital products built outside employment, serving communities Ammar belongs to.',
    highlights: [
      'Displaced Talent Integration Hub – the UK\'s first centralised integration platform, reviewed by the UK Home Office',
      'Residay – visa-compliance tracker live on the Apple App Store, free for refugees and displaced people',
      'Giving back as a TBB alumnus who successfully integrated into the UK',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-ink-800 border-y border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="kicker">03 / Experience</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mt-3">
            A track record of ownership
          </h2>
        </div>

        <div className="relative pl-8 md:pl-10">
          {/* Timeline rail */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Node */}
              <span className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-ink grid place-items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </span>

              <div className="panel p-7 hover:border-accent/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-xl tracking-tight">{exp.title}</h3>
                  <span className="font-mono text-[11px] text-accent">{exp.period}</span>
                </div>
                <p className="font-mono text-xs text-muted mb-4">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-muted text-sm leading-relaxed mb-5">{exp.description}</p>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-muted">
                      <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
