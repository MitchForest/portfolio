'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import { Building2, Calendar } from 'lucide-react'

export function Experience() {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through the world of AI and software engineering
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-3 h-3 bg-accent-orange rounded-full -translate-x-1/2 mt-2 z-10" />
                
                {/* Content */}
                <div className={`ml-20 flex-1 ${index % 2 === 0 ? 'pr-0' : 'pr-0'}`}>
                  <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-accent-orange" />
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent-orange mt-1">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}