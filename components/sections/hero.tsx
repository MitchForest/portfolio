'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { personalInfo } from '@/lib/data'

export function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openContactModal = () => {
    document.dispatchEvent(new CustomEvent('openContactModal'))
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Greeting with inline photo */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 flex items-center justify-center flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Hi, I'm</span>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-accent-orange inline-block">
              <Image
                src="https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/Headshot-min.png"
                alt="Mitch Forest"
                width={80}
                height={80}
                className="object-cover"
                priority
              />
            </div>
            <span>Mitch Forest</span>
          </motion.h1>
          
          {/* Goal statement */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My goal is to be a world class family man and entrepreneur.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={scrollToWork}
              className="px-8 py-3 bg-accent-orange text-accent-orange-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </button>
            <button 
              onClick={openContactModal}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 hover:text-accent-orange transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.button>
    </section>
  )
}