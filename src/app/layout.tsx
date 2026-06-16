import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ammarsammour.com'),
  title: 'Ammar Sammour - Senior Software Engineer & Technical Lead',
  description: 'Portfolio of Ammar Sammour - Senior Software Engineer with 7+ years architecting enterprise platforms across regulated industries. Founding Engineer of American VoxPop, builder of the UK\'s first displaced-talent integration platform (reviewed by the UK Home Office), international speaker, and UK Home Office advisor.',
  keywords: 'software engineer, technical lead, architecture, multi-tenant, civic technology, React, Next.js, NestJS, TypeScript, AWS, Terraform, London, UK',
  authors: [{ name: 'Ammar Sammour' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ammarsammour.com',
    title: 'Ammar Sammour - Senior Software Engineer & Technical Lead',
    description: 'Portfolio showcasing enterprise-scale projects and technical expertise',
    siteName: 'Ammar Sammour Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ammar Sammour - Senior Software Engineer & Technical Lead',
    description: 'Portfolio showcasing enterprise-scale projects and technical expertise',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-ink text-fg antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
