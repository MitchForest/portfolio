'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Instagram, Mail, Send } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function GetInTouch() {
  const openContactModal = () => {
    document.dispatchEvent(new CustomEvent('openContactModal'))
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ]

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Main Content */}
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to discuss AI, education, startups, investing, or any ambitious projects. 
                Whether you have a question, want to collaborate, or just want to say hi, don't hesitate to get in touch, I'd love to hear from you.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Button
                onClick={openContactModal}
                size="lg"
                className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-6 text-lg group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </motion.div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="h-px bg-border flex-1 max-w-[100px]" />
              <span className="text-sm text-muted-foreground">or connect with me</span>
              <div className="h-px bg-border flex-1 max-w-[100px]" />
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-3 rounded-full bg-muted hover:bg-accent-orange/10 hover:text-accent-orange transition-all duration-200 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}