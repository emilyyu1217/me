"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageDialog } from "./MessageDialog"

interface NavigationProps {
  currentPage?: "home" | "about" | "work" | "projects" | "writing"
}

export function Navigation({ currentPage = "home" }: NavigationProps) {
  const [isMessageOpen, setIsMessageOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-8 md:px-16 lg:px-24 py-6 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {currentPage !== "home" ? (
            <Link href="/" className="text-gray-300 hover:text-white transition-colors" aria-label="Back to home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
          <div className="flex items-center space-x-8 text-sm">
            <Link
              href="/about"
              className={currentPage === "about" ? "text-white" : "text-gray-300 hover:text-white transition-colors"}
            >
              about
            </Link>
            <Link
              href="/work"
              className={currentPage === "work" ? "text-white" : "text-gray-300 hover:text-white transition-colors"}
            >
              work
            </Link>
            <Link
              href="/projects"
              className={currentPage === "projects" ? "text-white" : "text-gray-300 hover:text-white transition-colors"}
            >
              projects
            </Link>
            <Link
              href="/writing"
              className={currentPage === "writing" ? "text-white" : "text-gray-300 hover:text-white transition-colors"}
            >
              writing
            </Link>
            <button
              onClick={() => setIsMessageOpen(true)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Send a message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <MessageDialog isOpen={isMessageOpen} onClose={() => setIsMessageOpen(false)} />
    </>
  )
}
