import { Navigation } from "@/components/Navigation"
import Link from "next/link"

export default function Writing() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation currentPage="writing" />

      {/* Content */}
      <div className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">writing</h1>

          <p className="text-gray-300 text-sm md:text-base mb-12">
            thoughts on deep tech investing, robotics, and the future. streams of consciousness.
          </p>

          <div className="space-y-4">
            <Link
              href="/writing/shenzhen"
              className="flex justify-between items-start border border-gray-800 p-6 hover:border-gray-600 transition-colors"
            >
              <div>
                <h2 className="text-lg font-medium mb-2">why is everyone talking about shenzhen?</h2>
                <p className="text-gray-500 text-sm">
                  on hardware ecosystems, iteration speed, and what's changed.
                </p>
              </div>
              <span className="text-gray-500 text-sm whitespace-nowrap ml-6">jan 6, 2026</span>
            </Link>
            <Link
              href="/writing/my-thesis"
              className="block border border-gray-800 p-6 hover:border-gray-600 transition-colors"
            >
              <h2 className="text-lg font-medium mb-2">my thesis</h2>
              <p className="text-gray-500 text-sm">
                on the founders i bet on.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
