import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { InProgress } from '@/components/sections/in-progress'
import { About } from '@/components/sections/about'
import { GetInTouch } from '@/components/sections/get-in-touch'
import { ContactModal } from '@/components/contact-modal'
import { VideoModal } from '@/components/video-modal'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <InProgress />
        <About />
        <GetInTouch />
      </main>
      
      {/* Modals */}
      <ContactModal />
      <VideoModal />
    </>
  )
}