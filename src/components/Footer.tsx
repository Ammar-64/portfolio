'use client'

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Numbers', href: '#numbers' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#skills' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Ammar-64' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ammar-sam' },
    { label: 'Residay', href: 'https://residay.app' },
    { label: 'Email', href: 'mailto:ammar.n.sammour@gmail.com' },
  ]

  return (
    <footer className="border-t border-line bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 grid place-items-center rounded-lg border border-line bg-ink-700 font-display font-bold text-accent">
                AS
              </span>
              <span className="font-display font-semibold text-fg">Ammar Sammour</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-4">
              Senior Software Engineer & Technical Lead, architecting enterprise platforms
              across regulated industries.
            </p>
            <p className="font-mono text-[11px] text-faint">
              Enterprise platforms · UK Home Office advisor · International speaker
            </p>
          </div>

          <div>
            <h3 className="kicker mb-4">Navigate</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="kicker mb-4">Connect</h3>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[11px] text-faint">
            © {currentYear} Ammar Sammour. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-faint">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
