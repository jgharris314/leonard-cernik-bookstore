import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leonard Cernik - Author",
  description: "Explore works created by the author Leonard Cernik.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
