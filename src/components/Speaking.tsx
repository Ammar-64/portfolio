'use client'

import { motion } from 'framer-motion'
import { Mic, Globe, MapPin, Users } from 'lucide-react'

const speakingEngagements = [
  {
    title: 'UNHCR CRCP 2025',
    role: 'Speaker',
    topic: 'The fundamental building blocks of skills-based pathways: effectively engaging the private sector',
    date: '25 Jun 2025',
    location: 'Geneva, Switzerland',
    type: 'UN Conference',
    icon: Globe,
  },
  {
    title: 'London Tech Week 2024',
    role: 'Panellist',
    topic: 'Tech Jobs: Empowering Refugees Beyond Displacement — moderated by Mike Butcher MBE (TechCrunch); 45,000+ attendees',
    date: '12 Jun 2024',
    location: 'London, UK',
    type: 'Tech Conference',
    icon: Mic,
  },
  {
    title: 'UN Global Refugee Forum 2023',
    role: 'Speaker',
    topic: 'Unlocking Potential: Spotlight on Refugee Labour Mobility — alongside the IOM Director General & Canada\'s Immigration Minister; 4,000+ delegates',
    date: 'Dec 2023',
    location: 'Geneva, Switzerland',
    type: 'UN Forum',
    icon: Globe,
  },
  {
    title: 'Web Summit 2023',
    role: 'TBB Ambassador',
    topic: 'EU-funded Displaced Talents for Europe (DT4E) — invited by IOM; 70,000+ attendees',
    date: 'Nov 2023',
    location: 'Lisbon, Portugal',
    type: 'Tech Conference',
    icon: Mic,
  },
]

const advisoryRoles = [
  {
    organization: 'UK Home Office',
    role: 'Refugee Labour Mobility Pathways Advisor',
    description: 'Community-led Sponsorship Roundtable (2 Marsham St, Apr 2025) and the UK delegation to CRCP Geneva (Jun 2024).',
  },
  {
    organization: 'Global Task Force on Labour Mobility',
    role: 'Founding Member, Refugee Advisory Committee',
    description: 'Contributing to global policy on refugee labour mobility.',
  },
  {
    organization: 'Talent Beyond Boundaries UK',
    role: 'Inaugural Alumni Advisory Committee',
    description: 'Supporting UK displaced-talent integration as a successful alumnus.',
  },
]

const Speaking = () => {
  return (
    <section id="speaking" className="relative py-24 bg-ink-800 border-y border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="kicker">05 / Speaking & Recognition</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-2xl">
            On stages, and in the room where policy is made
          </h2>
        </div>

        {/* Speaking engagements */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {speakingEngagements.map((event, index) => {
            const Icon = event.icon
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="panel p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg border border-line bg-ink-600 text-accent">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted border border-line rounded-full px-2.5 py-1">
                    {event.type}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl tracking-tight">{event.title}</h3>
                <p className="text-accent text-sm font-medium mb-2">{event.role}</p>
                <p className="text-muted text-sm leading-relaxed mb-4">{event.topic}</p>
                <div className="flex items-center gap-4 font-mono text-[11px] text-faint">
                  <span>{event.date}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Advisory roles */}
        <h3 className="kicker mb-6">Advisory & Policy</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {advisoryRoles.map((role, index) => (
            <motion.div
              key={role.organization}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-line p-6 hover:border-accent/40 transition-colors"
            >
              <Users className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-display font-semibold text-base tracking-tight mb-1">
                {role.organization}
              </h4>
              <p className="text-accent text-xs font-medium mb-3">{role.role}</p>
              <p className="text-muted text-sm leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Beyond Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-line bg-ink-700 px-5 py-2.5">
            <span className="text-xl">🥋</span>
            <p className="text-sm text-muted">
              <span className="text-fg font-medium">National Karate Champion</span>{' '}
              <span className="text-faint font-mono text-xs">
                / 12 yrs competing · 2009 World Championship
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Speaking
