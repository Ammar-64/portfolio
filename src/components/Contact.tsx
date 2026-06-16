'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Send, Loader2 } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: '' }))
        throw new Error(error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let's Connect
          </h2>
          <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-200 mb-8">
                Whether you're looking for a technical lead for your next project, need help with 
                enterprise integrations, or want to discuss speaking opportunities, I'm here to help.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:ammar.n.sammour@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="font-medium">ammar.n.sammour@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+447833063568"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="font-medium">+44 7833 063568</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Location</p>
                    <p className="font-medium">London, United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/ammar-sam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/Ammar-64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://calendly.com/ammar-sammour/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Calendar className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors duration-200 text-white placeholder-gray-300"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors duration-200 text-white placeholder-gray-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors duration-200 text-white placeholder-gray-300"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors duration-200 text-white placeholder-gray-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3 bg-white text-primary-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-sm text-center text-green-300" role="status">
                    Thanks — your message has been sent. I&apos;ll be in touch soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-center text-red-300" role="alert">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
