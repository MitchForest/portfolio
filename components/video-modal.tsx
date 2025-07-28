'use client'

import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { projects } from '@/lib/data'
import Image from 'next/image'

export function VideoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      const projectId = event.detail?.projectId
      if (projectId) {
        setSelectedProjectId(projectId)
        setIsOpen(true)
      }
    }

    document.addEventListener('openVideoModal', handleOpenModal as EventListener)
    
    return () => {
      document.removeEventListener('openVideoModal', handleOpenModal as EventListener)
    }
  }, [])

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [isOpen])

  const project = projects.find(p => p.id === selectedProjectId)

  if (!project) return null

  const handleClose = () => {
    setIsOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setTimeout(() => setSelectedProjectId(null), 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl pr-8">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video or Image */}
          <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
            {project.video ? (
              <video
                ref={videoRef}
                src={project.video}
                className="w-full h-full object-contain"
                controls
                autoPlay
                loop
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <p className="text-muted-foreground">{project.longDescription}</p>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h3 className="font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* GitHub Button */}
            {project.github && (
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}