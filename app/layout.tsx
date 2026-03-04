import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lui Franz A. Lomugdang — Software Developer',
  description: 'Software developer passionate about building efficient, scalable, and user-focused applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
