import dynamic from "next/dynamic"
import { Navigation } from "@/components/Navigation"

const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
})

const Shuffle = dynamic(() => import("@/components/Shuffle"), {
  ssr: false,
  loading: () => <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">emily yu</h1>
})

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="home" />

      {/* Main content */}
      <div className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 pt-20">
        <div className="max-w-2xl w-full text-center mb-8">
          <Shuffle
            text="emily yu"
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ letterSpacing: '0.05em', lineHeight: '1.4', paddingBottom: '0.1em' }}
            shuffleDirection="right"
            duration={0.55}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={true}
            loopDelay={1.6}
            colorFrom="#922B3E"
            colorTo="#ffffff"
          />
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            engineer turned investor @ boost vc. belive in maximizing human potential and growth.
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            love the intersection of hardware + software. 
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">  
            built and shipped robots at amazon robotics. won first robotics world championships.
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            got an mba along the way to mix the tizz with the rizz. 
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
            i partner with bold founders building the future by poking the boundries of reality.
          </p>
          <div className="flex items-center gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/emily-m-yu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://x.com/emily_yu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://github.com/emilyyu1217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Circular Gallery */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </main>
  )
}
