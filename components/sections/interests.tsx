'use client'

import { motion } from 'framer-motion'
import { Brain, Plane, Lightbulb, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Interests() {
  const interests = [
    {
      icon: Brain,
      title: 'AI & Education',
      description: 'Democratizing education through intelligent tutoring systems that adapt to each learner\'s needs',
      link: '#projects',
      linkText: 'View AI Projects'
    },
    {
      icon: Plane,
      title: 'Travel & Culture',
      description: '27 countries and counting. Each place teaches new perspectives and inspires innovative solutions',
      link: 'https://instagram.com/mitchforest_',
      linkText: 'Travel Photos',
      external: true
    },
    {
      icon: Lightbulb,
      title: 'Entrepreneurship',
      description: 'Building tools that matter. Currently working on an AI-powered learning platform for underserved communities',
      link: '/blog',
      linkText: 'Read My Thoughts'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Passions & Interests</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond code: what drives me to create and innovate
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {interests.map((interest) => {
            const Icon = interest.icon
            return (
              <motion.div key={interest.title} variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-accent-orange" />
                      {interest.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{interest.description}</p>
                    
                    <a
                      href={interest.link}
                      target={interest.external ? '_blank' : undefined}
                      rel={interest.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-sm text-accent-orange hover:underline"
                    >
                      {interest.linkText}
                      {interest.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}