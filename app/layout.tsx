import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Zilla_Slab } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-zilla',
})

export const metadata: Metadata = {
  title: 'Driftwood Coffee — Good coffee. Great company.',
  description:
    'A neighborhood café in Portland\'s inner east side. We source our beans from small Pacific Northwest roasters, bake everything in-house, and believe a good cup of coffee shouldn\'t be rushed.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${zillaSlab.variable} bg-background`}>
      <body className="font-sans antialiased min-h-[100dvh] flex flex-col">
        {children}
      </body>
    </html>
  )
}
