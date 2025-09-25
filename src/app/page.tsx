'use client'

import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Speaking from '@/components/Speaking'
import Contact from '@/components/Contact'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Skills />
      <Speaking />
      <Contact />
    </>
  )
}
