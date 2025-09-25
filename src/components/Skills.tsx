'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  GitBranch,
  Layers,
  Lock
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: [
      'TypeScript', 'JavaScript (ES6+)', 'React 18', 'Next.js 15', 
      'Node.js', 'NestJS 10', 'Python', 'Java'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Databases & Caching',
    icon: Database,
    skills: [
      'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 
      'Prisma ORM', 'Query Optimization', 'Database Design', 'Indexing'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      'AWS (ECS, RDS, S3)', 'Docker', 'Vercel', 'Railway', 
      'CI/CD', 'GitHub Actions', 'Infrastructure as Code', 'Monitoring'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Architecture',
    icon: Layers,
    skills: [
      'Microservices', 'Event-Driven', 'Serverless', 'RESTful APIs', 
      'WebSockets', 'GraphQL', 'Domain-Driven Design', 'CQRS'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Security & Auth',
    icon: Lock,
    skills: [
      'OAuth 2.0', 'JWT', 'CSRF Protection', 'Rate Limiting', 
      'Encryption', 'AES-256', 'TLS/SSL', 'PCI Compliance'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Integration & APIs',
    icon: GitBranch,
    skills: [
      'Government APIs', 'Payment Gateways', 'CRM Integration', 'Webhooks',
      'Real-time Sync', 'Third-party APIs', 'API Design', 'OpenAPI/Swagger'
    ],
    color: 'from-teal-500 to-cyan-500'
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive skill set across modern technologies and enterprise architectures
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mr-3`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
