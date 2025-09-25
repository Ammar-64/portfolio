'use client'

import { motion } from 'framer-motion'
import { Code2, Users, GitBranch, TrendingUp, Globe, Shield } from 'lucide-react'

const projects = [
  {
    title: 'American VoxPop',
    role: 'Founding Engineer',
    description: 'Revolutionary civic engagement platform with legislative tracking, gamification, and multi-tier ambassador network. Integrated 13 government APIs for real-time data.',
    stats: {
      lines: '133,302',
      apis: '228',
      tables: '56',
      users: '50,000+'
    },
    tech: ['Next.js 15', 'NestJS 10', 'PostgreSQL', 'AWS ECS', 'Redis'],
    highlights: [
      '892 commits (82% of codebase)',
      'Made 100% of architectural decisions',
      'Integrated BillTrack50, Democracy Works APIs',
      'Production AWS deployment scalable to millions'
    ],
    color: 'from-blue-600 to-purple-600'
  },
  {
    title: 'DAR Platform',
    role: 'Founding Engineer',
    description: 'Digital hub for MENA creatives in Western diaspora. Transformed prototype into production platform serving global creative communities.',
    stats: {
      lines: '28,778',
      releases: '93',
      apps: '3',
      uptime: '99.9%'
    },
    tech: ['React Native', 'tRPC', 'Prisma ORM', 'Vercel', 'Expo'],
    highlights: [
      'Built 3 interconnected applications',
      'Web, Mobile, and Admin platforms',
      'Serving hundreds of MENA creatives',
      '42% of total codebase contributions'
    ],
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Apollo-Close CRM Integration',
    role: 'Sole Developer',
    description: 'Sophisticated CRM integration synchronizing sales data between Apollo.io and Close CRM with intelligent deduplication.',
    stats: {
      lines: '44,371',
      accuracy: '100%',
      reduction: '85%',
      tables: '5'
    },
    tech: ['Node.js', 'NestJS', 'PostgreSQL', 'Railway', 'Docker'],
    highlights: [
      'Processed 157 companies with 100% accuracy',
      'Reduced manual data entry by 85%',
      '59 commits as sole developer',
      'Zero downtime deployment'
    ],
    color: 'from-green-600 to-teal-600'
  },
  {
    title: 'FedEx Enterprise Integration',
    role: 'Lead Developer',
    description: 'Enterprise-grade FedEx shipping automation with OAuth 2.0, supporting 13+ international markets.',
    stats: {
      lines: '1,500',
      functions: '21',
      markets: '13+',
      reduction: '87%'
    },
    tech: ['OAuth 2.0', 'REST APIs', 'Zoho Creator', 'Deluge', 'AES-256'],
    highlights: [
      '800 labels/hour processing capacity',
      '95% error reduction',
      '87% time reduction (15-20 min → 2-3 min)',
      '100% customs compliance'
    ],
    color: 'from-orange-600 to-red-600'
  },
  {
    title: 'SalesIQ Google Chat Integration',
    role: 'Technical Architect',
    description: 'Real-time communication platform bridging Zoho SalesIQ and Google Chat with serverless architecture.',
    stats: {
      lines: '20,171',
      functions: '650+',
      reduction: '70%',
      endpoints: '54'
    },
    tech: ['Google Chat API', 'Webhooks', 'JWT', 'Serverless', 'Node.js'],
    highlights: [
      '70% response time reduction',
      'Sub-100ms webhook processing',
      '1000+ concurrent users support',
      '84 project files'
    ],
    color: 'from-cyan-600 to-blue-600'
  },
  {
    title: 'Displaced Talent Integration Hub',
    role: 'Founder & Developer',
    description: 'UK Home Office-reviewed platform serving displaced talents with comprehensive integration resources.',
    stats: {
      lines: '13,174',
      users: '1,000+',
      pages: '16',
      endorsement: 'UK Gov'
    },
    tech: ['Next.js 15', 'Firebase', 'TypeScript', 'Vercel', 'Tailwind'],
    highlights: [
      'Reviewed by UK Home Office',
      'Volunteer initiative as TBB alumnus',
      '100% TypeScript coverage',
      'Zero infrastructure costs'
    ],
    color: 'from-indigo-600 to-purple-600'
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
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
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
