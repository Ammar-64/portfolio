'use client'

import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Speaking from '@/components/Speaking'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <Stats />
      <Experience />
      <Skills />
      <Speaking />
      <Contact />
    </>
  )
}
