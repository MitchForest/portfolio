'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    video?: string | null
    tech: string[]
    github?: string
    demo?: string
    featured?: boolean
  }
  onPlayClick?: () => void
  isFeatured?: boolean
}

export function ProjectCard({ project, isFeatured }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Load video metadata to show first frame
    if (project.video && videoRef.current) {
      videoRef.current.load()
    }
  }, [project.video])

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (videoRef.current && videoReady) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleClick = () => {
    document.dispatchEvent(new CustomEvent('openVideoModal', { detail: { projectId: project.id } }))
  }

  const handleVideoLoadedData = () => {
    setVideoReady(true)
  }

  return (
    <Card 
      className={`group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer ${isFeatured ? 'border-accent-orange border-2' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="aspect-video relative overflow-hidden bg-muted">
        {project.video ? (
          <>
            <video
              ref={videoRef}
              src={project.video}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={handleVideoLoadedData}
            />
            {/* Play button overlay */}
            <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
              isHovering ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
              </div>
            </div>
          </>
        ) : (
          // For Settlers/Catan - just show the image
          project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{project.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>
          
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-orange hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-orange hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}