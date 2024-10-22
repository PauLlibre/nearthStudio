import Navbar from "./components/navbar";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nearth Studio',
  description: 'Where art meets connection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
          <Navbar />
          {children}
          <footer className="text-center text-sm">
            © 2023 Nearth Studio. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}
