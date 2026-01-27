import Image from "next/image"
import { Navigation } from "@/components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="home" />

      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Emily Yu
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
              Deep tech investor at Boost VC with a unique blend of hands-on engineering
              experience and venture capital expertise. From leading robotic systems at
              Amazon Robotics across 10 countries to co-founding SirMixABot at MIT, I partner
              with founders building the future of robotics, AI, and deep tech.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
              <Image
                src="/bjdither.jpg"
                alt="Emily Yu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
