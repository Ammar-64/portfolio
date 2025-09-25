import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ammar Sammour - Senior Software Engineer & Technical Lead',
  description: 'Portfolio of Ammar Sammour - Senior Software Engineer with 245,000+ lines of production code across 8 major projects. Founding Engineer of American VoxPop serving 50,000+ users.',
  keywords: 'software engineer, full stack developer, React, Next.js, Node.js, TypeScript, technical lead, London, UK',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
