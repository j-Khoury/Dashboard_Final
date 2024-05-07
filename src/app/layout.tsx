import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import ProgressBar from '@/components/core/ProgressBar'
import NextAuthProvider from '@/providers/NextAuthProvider'
import { TanstackProvider } from '@/providers/TanstackProvider'
import { Toaster } from '@/components/ui/toaster'

const grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-secondary antialiased !font-grotesk',
          grotesk.variable,
        )}
      >
        <ProgressBar />
        <NextAuthProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
