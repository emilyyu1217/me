import { Navigation } from "@/components/Navigation"

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="projects" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">projects</h1>

          <p className="text-gray-300 text-sm md:text-base mb-12">
            things i've built and am building.
          </p>

          <div className="text-gray-500 text-sm border border-gray-800 p-8 text-center">
            coming soon.
          </div>
        </div>
      </div>
    </main>
  )
}
