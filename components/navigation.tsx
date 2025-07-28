import { ThemeToggle } from './theme-toggle'
import { Github, Twitter, Instagram, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'
// import { HamburgerMenu } from './hamburger-menu'

export function Navigation() {
  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ]

  return (
    <div className="absolute top-6 right-6 z-50 flex items-center gap-2">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
      <div className="w-px h-6 bg-border mx-1" />
      <ThemeToggle />
      {/* <HamburgerMenu /> */}
    </div>
  )
}