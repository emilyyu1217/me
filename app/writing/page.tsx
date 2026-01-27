import { Navigation } from "@/components/Navigation"

export default function Writing() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="writing" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Writing</h1>

          <p className="text-gray-300 text-sm md:text-base mb-12">
            Insights on deep tech investing, robotics, and the future of automation.
          </p>

          <div className="text-gray-500 text-sm border border-gray-800 p-8 text-center">
            Coming soon.
          </div>
        </div>
      </div>
    </main>
  )
}
