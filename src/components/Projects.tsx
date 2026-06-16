'use client'

import { motion } from 'framer-motion'
import { Code2, Users, GitBranch, TrendingUp, Globe, Shield } from 'lucide-react'

interface Project {
  title: string
  role: string
  voluntary?: boolean
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
    description: 'Civic engagement platform giving citizens access to all three branches of US government. Argued for and built owned data infrastructure end-to-end rather than reselling a third-party feed.',
    stats: {
      endpoints: '490+',
      tables: '101',
      components: '800+',
      dataSources: '8'
    },
    tech: ['Next.js', 'NestJS 10', 'PostgreSQL', 'AWS', 'Terraform', 'BullMQ'],
    highlights: [
      'Launched at americanvoxpop.com on 11 Mar 2026',
      '935 weekly active users in 8 weeks, no paid marketing',
      'AWS ECS Fargate/RDS/ElastiCache/S3 via Terraform; 2,598 CI/CD runs',
      'Designed & built the Patriot Pay civic engagement engine'
    ],
    color: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Regen Therapy B2B Platform',
    role: 'Lead / Sole Developer · Sep 2025–Present',
    description: 'Multi-tenant API middleware letting a regenerative-medicine distributor sell through wholesale clients who are direct competitors — without ever exposing one client\'s data to another.',
    stats: {
      endpoints: '110+',
      systems: '5',
      incidents: '0',
      build: '3 mo'
    },
    tech: ['NestJS', 'PostgreSQL', 'GCP Cloud Run', 'Zoho', 'ShipStation'],
    highlights: [
      'Dual-layer tenant isolation: cross-tenant leakage architecturally impossible',
      'Saga orchestration with automatic rollback across 5 external systems',
      'Zero data-security incidents since launch',
      'Complete platform delivered solo in 3 months'
    ],
    color: 'from-green-600 to-teal-600'
  },
  {
    title: 'Dymapak Enterprise Integrations',
    role: 'Lead Contract / Sole Developer · Mar 2025–Present',
    description: 'Four enterprise integration systems automating shipping, sales, support, and production for a US packaging manufacturer.',
    stats: {
      hoursSaved: '30+/wk',
      newMarkets: '13',
      faster: '120x',
      systems: '4'
    },
    tech: ['Node.js', 'Zoho', 'Google Chat API', 'FedEx API', 'OAuth 2.0'],
    highlights: [
      'SalesIQ–Google Chat: first known integration, 70% faster responses',
      'FedEx: 95% time reduction, automated customs, zero rejected shipments',
      'Apollo–Close CRM: 4–5 hrs/day saved, 157 duplicates resolved',
      'Factory import: 6 hours → 3 minutes (120x faster)'
    ],
    color: 'from-orange-600 to-red-600'
  },
  {
    title: 'DAR Platform',
    role: 'Founding Engineer · Jan 2025–Present',
    description: 'SWANA diaspora discovery platform (findyourdar.xyz). Re-architected a non-functional prototype into a production web app and admin dashboard the non-technical founders run themselves.',
    stats: {
      lighthouse: '90+',
      tables: '22',
      search: 'AR/EN RTL',
      outages: '0'
    },
    tech: ['Next.js', 'tRPC', 'Prisma', 'XState', 'Builder.io', 'Vercel'],
    highlights: [
      'Turborepo monorepo: shared tRPC, Prisma, UI & XState packages',
      'Builder.io headless CMS for non-technical founder independence',
      'Multilingual Arabic/English fuzzy search with RTL handling',
      'Lighthouse 90+ across all categories; stable since launch'
    ],
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Displaced Talent Integration Hub',
    role: 'Founder & Developer · 2024–Present',
    voluntary: true,
    description: 'The UK\'s first centralised platform for displaced-talent integration (dtintegrationhub.com). Reviewed by the UK Home Office and supported via an Integration Grant to TBB.',
    stats: {
      users: '500+',
      activeUsers: '280',
      categories: '8',
      infraCost: '£0/mo'
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Firebase'],
    highlights: [
      'Reviewed by the UK Home Office; live since Dec 2023',
      'Searchable resources across 8 integration categories',
      '75% load-time reduction via code-splitting',
      'Serverless architecture at £0/month infrastructure cost'
    ],
    color: 'from-indigo-600 to-purple-600'
  },
  {
    title: 'Residay',
    role: 'Founder & Developer · 2025–Present',
    voluntary: true,
    description: 'Visa-compliance tracking platform for immigrants and visa holders (residay.app), live on the Apple App Store. Counts absence days so a single miscount never costs years of residency progress.',
    stats: {
      appStore: 'iOS live',
      apps: '3',
      visaTypes: '4+',
      calcEngine: '0 deps'
    },
    tech: ['NestJS', 'Next.js', 'React Native / Expo', 'Turborepo'],
    highlights: [
      'Published on the Apple App Store; Android in public beta',
      'Compliance engine runs on server, browser & mobile offline',
      'AI document scanning and what-if trip simulator',
      'UK ILR, Schengen 90/180 & Global Talent; free for refugees'
    ],
    color: 'from-cyan-600 to-blue-600'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Enterprise-scale solutions demonstrating technical excellence and leadership
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    {project.voluntary && (
                      <span className="flex-shrink-0 px-2.5 py-0.5 bg-secondary-100 text-secondary-700 text-xs font-semibold rounded-full">
                        Voluntary
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{project.role}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold gradient-text">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
