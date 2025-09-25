'use client'

import { motion } from 'framer-motion'
import { Mic, Award, Globe, Users, Calendar, MapPin } from 'lucide-react'

const speakingEngagements = [
  {
    title: 'Geneva CRCP 2025',
    role: 'Panel Speaker',
    topic: 'Private Sector Engagement with Displaced Populations',
    date: 'June 2025',
    location: 'Geneva, Switzerland',
    type: 'International Conference',
    icon: Globe
  },
  {
    title: 'UK Home Office Community-led Sponsorship Review',
    role: 'Lived Experience Contributor',
    topic: 'Roundtable Discussion on Refugee Pathways',
    date: 'April 2025',
    location: 'London, UK',
    type: 'Government Advisory',
    icon: Award
  },
  {
    title: 'London Tech Week 2024',
    role: 'Panel Speaker',
    topic: 'Tech Jobs: Empowering Refugees Beyond Displacement',
    date: 'June 2024',
    location: 'London, UK',
    type: 'Tech Conference',
    icon: Mic
  },
  {
    title: 'Global Refugee Forum 2023',
    role: 'Panel Speaker',
    topic: 'Refugee Labour Mobility Through Employment',
    date: 'December 2023',
    location: 'Geneva, Switzerland',
    type: 'UN Forum',
    icon: Globe
  },
  {
    title: 'UK Home Office Advisory',
    role: 'Refugee Advisor',
    topic: '2024 Consultations on Resettlement and Complementary Pathways',
    date: '2024',
    location: 'United Kingdom',
    type: 'Policy Consultation',
    icon: Award
  }
]

const advisoryRoles = [
  {
    organization: 'Global Task Force for Labour Mobility',
    role: 'Founding Member, Refugee Advisory Committee',
    description: 'Contributing to global policies on refugee labour mobility'
  },
  {
    organization: 'Talent Beyond Boundaries UK',
    role: 'Advisory Committee Member',
    description: 'Supporting UK displaced talent integration as successful alumnus'
  },
  {
    organization: 'UK Home Office',
    role: 'Refugee Labour Mobility Pathways Advisor',
    description: 'Providing lived experience insights for policy development'
  }
]

const Speaking = () => {
  return (
    <section id="speaking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Speaking & Recognition
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            International speaker and advisor on technology and refugee integration
          </p>

          {/* Speaking Engagements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              International Speaking Engagements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakingEngagements.map((event, index) => {
                const Icon = event.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-2">
                      {event.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {event.topic}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Advisory Roles */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Advisory & Leadership Roles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {advisoryRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200"
                >
                  <Users className="w-10 h-10 text-primary-600 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {role.organization}
                  </h4>
                  <p className="text-primary-600 font-medium mb-2">
                    {role.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {role.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-red-100 px-6 py-3 rounded-full">
              <span className="text-2xl">🥋</span>
              <p className="text-gray-800">
                <span className="font-bold">National Karate Champion</span> - 
                12 years competing with multiple championships & 2009 World Championship participation
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Speaking
