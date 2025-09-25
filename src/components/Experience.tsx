'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Education Technology Specialist',
    company: 'Alsaab Ltd',
    location: 'London, UK',
    period: 'April 2023 - Present',
    description: 'Leading technical delivery for multiple enterprise clients through professional services model.',
    highlights: [
      'American VoxPop - Built platform from scratch: 133,302 lines of code, 892 commits (82% ownership)',
      'Apollo-Close CRM - 44,371 LOC integration with 100% accuracy for 157 companies',
      'DAR Platform - Transformed prototype into production serving hundreds globally',
      'FedEx Integration - 87% time reduction (15-20 min → 2-3 min)',
      'Re:Coded Subcontract - Built platform serving 50,000+ students, eliminating 40+ hours weekly manual work'
    ]
  },
  {
    title: 'Senior Trainer & Software Engineer',
    company: 'Re:Coded',
    location: 'Remote',
    period: 'January 2022 - March 2023',
    description: 'Led digital transformation across organizational verticals while mentoring the next generation.',
    highlights: [
      'Led digital transformation across 6 organizational verticals',
      'Developed curriculum eliminating external costs',
      'Mentored 3 junior instructors to senior level',
      'Achieved 85% graduate employment rate'
    ]
  },
  {
    title: 'Coding Trainer & Software Engineer',
    company: 'Re:Coded',
    location: 'Remote',
    period: 'January 2020 - December 2021',
    description: 'Delivered comprehensive coding bootcamps and created innovative educational tools.',
    highlights: [
      'Delivered frontend/backend bootcamps achieving 92% retention',
      'Created admission challenges improving quality assessment',
      'Mentored 200+ students to employment',
      'Built custom monitoring tools for student progress tracking'
    ]
  },
  {
    title: 'Coding Trainer Assistant',
    company: 'Re:Coded',
    location: 'Turkey',
    period: 'September 2019 - December 2019',
    description: 'Guided student teams through capstone projects and curriculum development.',
    highlights: [
      'Guided student capstone projects from ideation to deployment',
      'Assisted curriculum development incorporating industry skills',
      'Facilitated collaborative learning environment',
      'Supported lead instructors in course delivery'
    ]
  },
  {
    title: 'Volunteer Initiative - Displaced Talent Integration Hub',
    company: 'Independent Project',
    location: 'UK',
    period: '2024 - Present',
    description: 'Created UK\'s first centralized refugee integration platform as a volunteer initiative.',
    highlights: [
      'Serves 1,000+ UK displaced talents',
      'Reviewed and endorsed by UK Home Office',
      'Built with Next.js 15, Firebase - 13,174 lines of code',
      'Giving back as a TBB alumnus who successfully integrated'
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
