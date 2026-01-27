import { Navigation } from "@/components/Navigation"

export default function MyThesis() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="writing" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">my thesis</h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            i bet on founders with chips on their shoulders, spiky, and the top 1% in their fields.
          </p>
        </div>
      </div>
    </main>
  )
}
