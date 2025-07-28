'use client'

import { motion } from 'framer-motion'
import { Code2, Github, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function InProgress() {
  const techStack = [
    'React', 'Vite', 'Bun', 'Hono', 
    'CodeMirror6', 'Websockets', 'Tauri', 'Claude Code SDK', 'Vercel AI SDK v5'
  ]

  return (
    <section id="current-project" className="section bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">In Progress</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
                <Code2 className="w-8 h-8 text-accent-orange" />
                Devys
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Currently I&apos;m working on a side project called Devys, a Claude Code native IDE desktop and mobile app. 
                The main goal of this is quality of life because I spend 10+ hours a day in Cursor and Terminal. 
                My goal is to create a beautiful UI/UX for multi-agent coding workflows powered by Claude Code.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/mitchforest/devys" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-orange hover:underline font-medium"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right side - Project Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-orange/20 to-accent-orange/10">
                  <p className="text-2xl font-bold text-accent-orange">Coming Soon</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">Claude Code Native IDE</h4>
                    <p className="text-sm text-muted-foreground">AI-powered development environment</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Native Claude Code integration</p>
                  <p>• Built with Tauri for performance</p>
                  <p>• Advanced CodeMirror6 editor</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}