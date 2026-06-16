'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Layers, Lock, GitBranch } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: ['TypeScript', 'JavaScript (ES6+)', 'React 19', 'Next.js 15', 'Node.js', 'NestJS 10', 'Python'],
  },
  {
    title: 'Backend & Data',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma ORM', 'REST APIs', 'tRPC', 'WebSockets', 'Bull Queues'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS (ECS Fargate, RDS, ElastiCache, S3)', 'GCP (Cloud Run, Cloud SQL)', 'Docker', 'Vercel', 'Railway', 'Terraform', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Architecture',
    icon: Layers,
    skills: ['Multi-tenant Systems', 'Event-Driven', 'Saga Orchestration', 'Serverless', 'CI/CD Pipelines', 'Infrastructure as Code', 'RESTful APIs', 'WebSockets'],
  },
  {
    title: 'Security & Auth',
    icon: Lock,
    skills: ['OAuth 2.0', 'JWT', 'CSRF Protection', 'Rate Limiting', 'Encryption', 'AES-256', 'TLS/SSL', 'PCI Compliance'],
  },
  {
    title: 'Integration & APIs',
    icon: GitBranch,
    skills: ['Government APIs', 'Payment Gateways', 'CRM Integration', 'Webhooks', 'Real-time Sync', 'Third-party APIs', 'API Design', 'OpenAPI/Swagger'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-dotgrid opacity-20" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="kicker">04 / The Stack</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mt-3">
            Tools of the trade
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="panel p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid place-items-center w-10 h-10 rounded-lg border border-line bg-ink-600 text-accent">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display font-semibold text-base tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] px-2.5 py-1 rounded border border-line text-muted hover:border-accent/50 hover:text-fg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
