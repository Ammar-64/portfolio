'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '245,000+', label: 'Lines of Production Code', suffix: '' },
  { value: '892', label: 'Commits on American VoxPop', suffix: '(82% ownership)' },
  { value: '75-97', label: 'Processing Time Reduction', suffix: '%' },
  { value: '99.9', label: 'System Uptime', suffix: '%' },
  { value: '5,000+', label: 'UK Displaced Talents Supported', suffix: '' },
  { value: '85', label: 'Graduate Employment Rate', suffix: '%' },
]

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Key Achievements
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Measurable impact across technical excellence and social contribution
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
