'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X,
  MessageCircle,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: 'Contact',
      action: () => {
        setIsOpen(false)
        // Will trigger contact modal
        document.dispatchEvent(new CustomEvent('openContactModal'))
      }
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      label: 'Blog',
      action: () => {
        setIsOpen(false)
        window.location.href = '/blog'
      }
    }
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-1"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 20, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 right-6 bg-card rounded-lg shadow-lg border border-border p-2 min-w-[200px] z-50"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={item.action}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted rounded-md transition-colors text-left"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}