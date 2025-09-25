'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Users, Rocket } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ammar Sammour
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-200 mb-6">
              Senior Software Engineer & Technical Lead
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Accomplished Software Engineer with <span className="text-secondary-400 font-semibold">245,000+ lines</span> of 
              production code across 8 major projects. Founding Engineer of American VoxPop 
              serving <span className="text-secondary-400 font-semibold">50,000+ users</span>. 
              International speaker at Geneva CRCP 2025, London Tech Week 2024, and Global Refugee Forum 2023.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary-400" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary-400" />
                <a href="mailto:ammar.n.sammour@gmail.com" className="hover:text-secondary-400 transition-colors">
                  ammar.n.sammour@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary-400" />
                <a href="tel:+447833063568" className="hover:text-secondary-400 transition-colors">
                  +44 7833 063568
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-white text-primary-800 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all"
              >
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com/in/ammar-sammour"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Ammar-64"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <Code2 className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">245K+</div>
              <div className="text-sm text-gray-300">Lines of Code</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <Users className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm text-gray-300">Users Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <Rocket className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-sm text-gray-300">Major Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎤</div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-sm text-gray-300">Global Conferences</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
