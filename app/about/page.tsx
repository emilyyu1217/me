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
              hi, i'm emily, i’ve always been drawn to building things and understanding 
              how the world actually works. i like being close to the ground, close to the mess, 
              and close to the moment where an idea turns into something real.
            </p>

            <p>
            i grew up moving between worlds and learned early how to observe before acting. 
            being an immigrant kid taught me how to adapt, how to read rooms, and how to build 
            from the edges rather than the center. that instinct shows up everywhere in my life, 
            from how i learn, to how i build relationships, to how i choose where to spend my time and energy.
            </p>

            <p>
            today, i spend my time around people who are building hard things. sometimes that means investing early, 
            sometimes it means hosting dinners, sometimes it means sitting with a founder through a messy decision. 
            i like being a first believer, especially for people who feel early, unconventional, or underestimated.
            </p>

            <p>
            outside of work, i run to think, travel to learn, and coffee shop hop to reset. 
            i’m curious about how technology, culture, and incentives quietly shape behavior, 
            and how small decisions compound over time. i try to live with intention, stay close to my values, 
            and keep choosing paths that feel a little uncomfortable but deeply interesting.
            </p>

            <p>
            if you’re someone who builds, questions status quo, or lives at the edge of what’s obvious, 
            we’ll probably get along.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-xl font-bold mb-4">interests</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "robotics",
                "hardware + software",
                "early stage ventures",
                "design",
                "psychology",
                "deep conversations",
                "connecting dots",
                ""
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

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-xl font-bold mb-4">in my free time</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "running",
                "traveling",
                "making matcha",
                "tasting dark chocolate",
                "trying out restaurants",
                "journaling",
                "snowboarding",
                ""
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
