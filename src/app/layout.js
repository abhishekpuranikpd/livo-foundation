import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "react-hot-toast"   
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "LIVO Foundation - Healthcare & Wellness",
  description:
    "LIVO Foundation: Transforming lives through healthcare financial support, CSR activities, nutrition programs, and female hygiene initiatives.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}

        {/* Global toast container */}
        <Toaster
  position="top-center"
  toastOptions={{
    duration: 4000,
    style: {
      background: "#fff",
      color: "#111",
      borderRadius: "8px",
      fontWeight: "500",
    },
    success: {
      iconTheme: {
        primary: "#10B981", // green
        secondary: "#E6FFFA",
      },
    },
    error: {
      iconTheme: {
        primary: "#EF4444", // red
        secondary: "#FEE2E2",
      },
    },
  }}
/>


        <Analytics />
      </body>
    </html>
  )
}
