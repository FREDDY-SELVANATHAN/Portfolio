import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SpaceScene from './components/SpaceScene'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freddy Selvanathan - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <SpaceScene />
        {children}
      </body>
    </html>
  )
} 