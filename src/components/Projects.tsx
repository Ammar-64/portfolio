'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  role: string
  voluntary?: boolean
  href?: string
  description: string
  stats: Record<string, string>
  tech: string[]
  highlights: string[]
  color: string
}

const projects: Project[] = [
  {
    title: 'American VoxPop',
    role: 'Founding Engineer & Technical Lead · Apr 2025–Present',
    href: 'https://americanvoxpop.com',
    description: 'Civic engagement platform giving citizens access to all three branches of US government. Argued for and built owned data infrastructure end-to-end rather than reselling a third-party feed.',
    stats: {
      endpoints: '490+',
      tables: '101',
      components: '800+',
      dataSources: '8',
    },
    tech: ['Next.js', 'NestJS 10', 'PostgreSQL', 'AWS', 'Terraform', 'BullMQ'],
    highlights: [
      'Launched at americanvoxpop.com on 11 Mar 2026',
      '935 weekly active users in 8 weeks, no paid marketing',
      'AWS ECS Fargate/RDS/ElastiCache/S3 via Terraform; 2,598 CI/CD runs',
      'Designed & built the Patriot Pay civic engagement engine',
    ],
    color: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Regen Therapy B2B Platform',
    role: 'Lead / Sole Developer · Sep 2025–Present',
    description: 'Multi-tenant API middleware letting a regenerative-medicine distributor sell through wholesale clients who are direct competitors — without ever exposing one client\'s data to another.',
    stats: {
      endpoints: '110+',
      systems: '5',
      incidents: '0',
      build: '3 mo',
    },
    tech: ['NestJS', 'PostgreSQL', 'GCP Cloud Run', 'Zoho', 'ShipStation'],
    highlights: [
      'Dual-layer tenant isolation: cross-tenant leakage architecturally impossible',
      'Saga orchestration with automatic rollback across 5 external systems',
      'Zero data-security incidents since launch',
      'Complete platform delivered solo in 3 months',
    ],
    color: 'from-green-600 to-teal-600',
  },
  {
    title: 'Dymapak Enterprise Integrations',
    role: 'Lead Contract / Sole Developer · Mar 2025–Present',
    description: 'Four enterprise integration systems automating shipping, sales, support, and production for a US packaging manufacturer.',
    stats: {
      hoursSaved: '30+/wk',
      newMarkets: '13',
      faster: '120x',
      systems: '4',
    },
    tech: ['Node.js', 'Zoho', 'Google Chat API', 'FedEx API', 'OAuth 2.0'],
    highlights: [
      'SalesIQ–Google Chat: first known integration, 70% faster responses',
      'FedEx: 95% time reduction, automated customs, zero rejected shipments',
      'Apollo–Close CRM: 4–5 hrs/day saved, 157 duplicates resolved',
      'Factory import: 6 hours → 3 minutes (120x faster)',
    ],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'DAR Platform',
    role: 'Founding Engineer · Jan 2025–Present',
    href: 'https://findyourdar.xyz',
    description: 'SWANA diaspora discovery platform (findyourdar.xyz). Re-architected a non-functional prototype into a production web app and admin dashboard the non-technical founders run themselves.',
    stats: {
      lighthouse: '90+',
      tables: '22',
      search: 'AR/EN RTL',
      outages: '0',
    },
    tech: ['Next.js', 'tRPC', 'Prisma', 'XState', 'Builder.io', 'Vercel'],
    highlights: [
      'Turborepo monorepo: shared tRPC, Prisma, UI & XState packages',
      'Builder.io headless CMS for non-technical founder independence',
      'Multilingual Arabic/English fuzzy search with RTL handling',
      'Lighthouse 90+ across all categories; stable since launch',
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Displaced Talent Integration Hub',
    role: 'Founder & Developer · 2024–Present',
    voluntary: true,
    href: 'https://dtintegrationhub.com',
    description: 'The UK\'s first centralised platform for displaced-talent integration (dtintegrationhub.com). Reviewed by the UK Home Office and supported via an Integration Grant to TBB.',
    stats: {
      users: '500+',
      activeUsers: '280',
      categories: '8',
      infraCost: '£0/mo',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Firebase'],
    highlights: [
      'Reviewed by the UK Home Office; live since Dec 2023',
      'Searchable resources across 8 integration categories',
      '75% load-time reduction via code-splitting',
      'Serverless architecture at £0/month infrastructure cost',
    ],
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Residay',
    role: 'Founder & Developer · 2025–Present',
    voluntary: true,
    href: 'https://residay.app',
    description: 'Visa-compliance tracking platform for immigrants and visa holders (residay.app), live on the Apple App Store. Counts absence days so a single miscount never costs years of residency progress.',
    stats: {
      appStore: 'iOS live',
      apps: '3',
      visaTypes: '4+',
      calcEngine: '0 deps',
    },
    tech: ['NestJS', 'Next.js', 'React Native / Expo', 'Turborepo'],
    highlights: [
      'Published on the Apple App Store; Android in public beta',
      'Compliance engine runs on server, browser & mobile offline',
      'AI document scanning and what-if trip simulator',
      'UK ILR, Schengen 90/180 & Global Talent; free for refugees',
    ],
    color: 'from-cyan-600 to-blue-600',
  },
]

const formatKey = (key: string) =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).trim()

const Projects = () => {
  return (
    <section id="work" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <span className="kicker">01 / Selected Work</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mt-3">
              Systems I&apos;ve architected
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            Enterprise platforms, first-of-kind integrations, and self-initiated products —
            built across regulated industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-line bg-ink-700/50 p-7 hover:border-accent/50 hover:bg-ink-700 transition-all duration-300"
            >
              {/* Top row: index + voluntary tag */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {project.voluntary && (
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-cool/40 text-cool">
                    Voluntary
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-2xl tracking-tight mb-1.5 flex items-start gap-2">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 hover:text-accent transition-colors after:absolute after:inset-0"
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 flex-shrink-0" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="font-mono text-[11px] text-muted mb-4">{project.role}</p>

              <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Stats — mono key/value */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 pb-6 border-b border-line">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="flex items-baseline justify-between gap-2">
                    <span className="font-display font-bold text-lg text-fg tabular-nums">
                      {value}
                    </span>
                    <span className="font-mono text-[10px] text-faint text-right uppercase tracking-wide">
                      {formatKey(key)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-muted">
                    <span className="text-accent mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 rounded border border-line text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
