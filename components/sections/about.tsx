'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-accent-orange">
              <Image
                src="https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/Headshot-min.png"
                alt="Mitchell White"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="aspect-square rounded-2xl bg-card border shadow-xl p-8 overflow-y-auto">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I was born in Miami and moved to Jensen Beach when I was three. I love Florida and 
                  spend my free time fishing, diving, boating, surfing—you name it, as long as it's in the water.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  I was my school's valedictorian and earned about two years of college credits from APs.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  After high school, I backpacked for two months throughout Europe with a friend, 
                  sleeping in tents and truly vagabonding.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  When I got back, I went to the University of Florida and graduated cum laude in 2011.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  After college, I moved to San Francisco, planning to start law school after a year 
                  of getting settled in a new city.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  During that time, I decided to keep traveling and spent three months throughout 
                  Central America, surfing and trying to learn the language.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  The summer before law school, I took another long trip to Southeast Asia, where I 
                  fell in love with a small, hippie town in the mountains of northern Thailand called 
                  Pai. I decided to put law school on hold and figure out how to live there.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  I met my future wife, Fai, raised some money from friends and family, and started{' '}
                  <a 
                    href="https://www.instagram.com/commongroundspai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-orange hover:underline"
                  >
                    Common Grounds Pai
                  </a>, which has been featured in Lonely Planet and several other travel publications. 
                  While there, I also started an{' '}
                  <a 
                    href="https://www.instagram.com/onetribeapparel/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-orange hover:underline"
                  >
                    e‑commerce company
                  </a> and a{' '}
                  <a 
                    href="https://www.instagram.com/hosteleer/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-orange hover:underline"
                  >
                    hostel app
                  </a>, and traveled around Thailand, Vietnam, Singapore, and Bali—digital‑nomading.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  In 2019, I moved back to the U.S., started building websites and apps for small 
                  businesses, and landed a full‑time role doing the same for a commercial real 
                  estate developer with a portfolio of 50+ multifamily apartment complexes.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  In 2021, I started{' '}
                  <a 
                    href="https://x.com/GutterCatGang" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-orange hover:underline"
                  >
                    Gutter
                  </a>, a next‑gen lifestyle brand in the crypto space. We partnered with Puma, 
                  OpenSea, Coinbase, athletes like LaMelo Ball, and streetwear brands like 
                  Staple—an incredible experience.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Since then, I've mostly focused on contracting and investing—leading product 
                  for a few startups and investing in commercial real estate, crypto, and 
                  early‑stage ventures.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  I'm now at{' '}
                  <a 
                    href="https://www.gauntletai.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-orange hover:underline"
                  >
                    Gauntlet AI
                  </a> and in the process of dedicating 10,000+ hours to becoming a domain 
                  expert in the emerging field of AI engineering.
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong>My why:</strong> be a world‑class family man to my lovely wife and son, 
                  and a world‑class entrepreneur who makes a positive impact on millions of lives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}