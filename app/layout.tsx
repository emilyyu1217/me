import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "Emily Yu",
  description: "Deep Tech Investor at Boost VC with expertise in robotics and venture capital.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={libreBaskerville.className}>{children}</body>
    </html>
  )
}
