'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Software Engineer & Technical Lead',
    company: 'Alsaab Ltd',
    location: 'London, UK',
    period: 'April 2023 - Present',
    description: 'Leading technical delivery for enterprise clients, making all architectural decisions and building systems from scratch.',
    highlights: [
      'American VoxPop – architected the platform: 490+ API endpoints, 101 tables, 8 government data sources across all 3 branches',
      'Regen Therapy – built a multi-tenant B2B platform solo in 3 months; cross-tenant data leakage made architecturally impossible',
      'Dymapak – four enterprise integrations eliminating 30+ hours of manual work per week; opened 13 new markets',
      'DAR Platform – re-architected a prototype into a production app with Lighthouse 90+ across all categories'
    ]
  },
  {
    title: 'Coding Trainer → Senior Trainer & Software Engineer',
    company: 'Re:Coded',
    location: 'Remote',
    period: 'November 2019 - Early 2025',
    description: 'Direct employment Nov 2019 – Mar 2023; continued engagement via Alsaab Ltd through early 2025. Led digital transformation while training the next generation of engineers.',
    highlights: [
      'Built an automated learning platform serving 50,000+ students and 3,000 alumni across 15 countries',
      'Salesforce integration eliminating 40+ hours of weekly manual work',
      'Mentored 200+ students to employment; 85% graduate employment rate',
      '92% retention rate across frontend/backend bootcamps'
    ]
  },
  {
    title: 'Voluntary Initiatives',
    company: 'DT Integration Hub · Residay',
    location: 'UK',
    period: '2024 - Present',
    description: 'Self-initiated digital products built outside employment, serving communities Ammar belongs to.',
    highlights: [
      'Displaced Talent Integration Hub – the UK\'s first centralised integration platform, reviewed by the UK Home Office',
      'Residay – visa-compliance tracker live on the Apple App Store, free for refugees and displaced people',
      'Giving back as a TBB alumnus who successfully integrated into the UK',
      'See the Projects section above for full technical detail'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Leadership roles across enterprise development and technical education
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between mb-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4">
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 ml-6 md:ml-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-primary-600 font-medium">{exp.company}</p>
                      </div>
                      <Briefcase className="w-8 h-8 text-gray-400" />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
