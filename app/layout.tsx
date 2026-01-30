import type { Metadata } from "next"
import { Lora, Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel"
})

export const metadata: Metadata = {
  title: "emily yu",
  description: "hardware x software, robotics and venture capital.",
  icons: {
    icon: "/favicon glitch.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lora.className} ${pressStart.variable} font-medium`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
