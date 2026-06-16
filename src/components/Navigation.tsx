'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#work', id: 'work', label: 'Work' },
  { href: '#numbers', id: 'numbers', label: 'Numbers' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#skills', id: 'skills', label: 'Stack' },
  { href: '#speaking', id: 'speaking', label: 'Speaking' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scrollspy: highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ink/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 grid place-items-center rounded-lg border border-line bg-ink-700 font-display font-bold text-accent group-hover:border-accent transition-colors">
              AS
            </span>
            <span className="font-display font-semibold text-fg tracking-tight">
              Ammar Sammour
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => {
              const active = activeId === link.id
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-1.5 text-sm transition-colors ${
                    active ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] transition-colors ${
                      active ? 'text-accent' : 'text-faint group-hover:text-accent'
                    }`}
                  >
                    0{i + 1}
                  </span>
                  {link.label}
                </Link>
              )
            })}
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-fg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-line py-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-2 py-3 transition-colors ${
                  activeId === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-accent"
      />
    </nav>
  )
}

export default Navigation
