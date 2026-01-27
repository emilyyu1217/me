import { Navigation } from "@/components/Navigation"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="about" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">about</h1>

          <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              i'm emily, a deep tech investor at boost vc with a unique blend of hands-on
              engineering experience and venture capital expertise.
            </p>

            <p>
              my journey from amazon robotics, where i led robotic systems implementation
              across 10 countries, to co-founding sirmixabot (mit delta v), has given me
              invaluable insights into scaling hardware and software solutions.
            </p>

            <p>
              combined with my venture experience at prestigious firms like nfx, e14 fund,
              and alleycorp robotics, i bring a rare technical depth and operational
              understanding to early-stage investing.
            </p>

            <p>
              this makes me an ideal partner for founders building the future of robotics,
              ai, and deep tech — i don't just evaluate companies, i truly understand the
              technology and challenges from both an engineering and business perspective.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-xl font-bold mb-4">skills & expertise</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "early stage ventures",
                "deep tech",
                "robotics",
                "deal sourcing",
                "due diligence",
                "product strategy",
                "logistics management",
                "warehouse management systems",
                "ai",
                "climate technology",
                "healthcare",
                "industrial automation"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-gray-700 text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
