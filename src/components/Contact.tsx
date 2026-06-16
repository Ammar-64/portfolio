'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Send, Loader2 } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 bg-ink-800 border border-line rounded-lg text-fg placeholder-faint focus:outline-none focus:border-accent transition-colors'

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

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'ammar.n.sammour@gmail.com', href: 'mailto:ammar.n.sammour@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+44 7833 063568', href: 'tel:+447833063568' },
    { icon: MapPin, label: 'Location', value: 'London, United Kingdom', href: null },
  ]

  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com/in/ammar-sam', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Ammar-64', label: 'GitHub' },
    { icon: Calendar, href: 'https://calendly.com/ammar-sammour/30min', label: 'Book a call' },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-linegrid opacity-[0.25]" />
      <div className="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="kicker">06 / Contact</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mt-3">
            Let&apos;s build something
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              Whether you need a technical lead, help with a hard integration, or want to discuss
              a speaking opportunity, I read every message.
            </p>

            <div className="space-y-3 mb-8">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid place-items-center w-11 h-11 rounded-lg border border-line bg-ink-700 text-accent">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-faint">
                        {label}
                      </span>
                      <span className="text-fg">{value}</span>
                    </span>
                  </>
                )
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-3 rounded-lg border border-transparent hover:border-line hover:bg-ink-700/50 transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 p-3">
                    {inner}
                  </div>
                )
              })}
            </div>

            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-lg border border-line text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="panel p-7"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-wider text-faint mb-2">
                    Your name
                  </label>
                  <input type="text" id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-wider text-faint mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" required placeholder="jane@example.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-[10px] uppercase tracking-wider text-faint mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" required placeholder="Project inquiry" className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-wider text-faint mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell me about it…" className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-accent text-ink font-semibold rounded-lg hover:bg-accent-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-sm text-center text-cool" role="status">
                  Thanks! Your message has been sent. I&apos;ll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-center text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
