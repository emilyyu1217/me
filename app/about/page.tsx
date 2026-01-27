import { Navigation } from "@/components/Navigation"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="about" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About</h1>

          <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              I'm Emily, a deep tech investor at Boost VC with a unique blend of hands-on
              engineering experience and venture capital expertise.
            </p>

            <p>
              My journey from Amazon Robotics, where I led robotic systems implementation
              across 10 countries, to co-founding SirMixABot (MIT delta v), has given me
              invaluable insights into scaling hardware and software solutions.
            </p>

            <p>
              Combined with my venture experience at prestigious firms like NFX, E14 Fund,
              and AlleyCorp Robotics, I bring a rare technical depth and operational
              understanding to early-stage investing.
            </p>

            <p>
              This makes me an ideal partner for founders building the future of robotics,
              AI, and deep tech — I don't just evaluate companies, I truly understand the
              technology and challenges from both an engineering and business perspective.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-xl font-bold mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Early Stage Ventures",
                "Deep Tech",
                "Robotics",
                "Deal Sourcing",
                "Due Diligence",
                "Product Strategy",
                "Logistics Management",
                "Warehouse Management Systems",
                "AI",
                "Climate Technology",
                "Healthcare",
                "Industrial Automation"
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
