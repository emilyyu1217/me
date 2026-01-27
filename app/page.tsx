import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Emily Yu
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Deep tech investor at Boost VC with a unique blend of hands-on engineering
            experience and venture capital expertise. From leading robotic systems at
            Amazon Robotics across 10 countries to co-founding SirMixABot at MIT, I partner
            with founders building the future of robotics, AI, and deep tech.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
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
    </main>
  )
}
