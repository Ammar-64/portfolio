'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Ammar-64' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ammar-sammour' },
    { label: 'Email', href: 'mailto:ammar.n.sammour@gmail.com' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                AS
              </div>
              <span className="font-bold text-xl text-white">Ammar Sammour</span>
            </div>
            <p className="text-gray-400 mb-4">
              Senior Software Engineer & Technical Lead with expertise in building 
              enterprise-scale applications and leading technical transformations.
            </p>
            <p className="text-sm text-gray-500">
              245,000+ lines of production code | 50,000+ users served | International speaker
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Ammar Sammour. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500" /> using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
