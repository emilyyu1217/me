import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
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
      <body className={`${lora.className} font-medium`}>{children}</body>
    </html>
  )
}
