import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "emily yu",
  description: "hardware x software, robotics and venture capital.",
  icons: {
    icon: "/bjdither.jpg",
  },
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
