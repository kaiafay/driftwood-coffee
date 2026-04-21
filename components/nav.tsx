'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Visit', href: '#visit' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-border py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className={`font-serif font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-espresso text-lg' : 'text-cream text-xl'
          }`}
        >
          Driftwood
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 hover:text-terracotta ${
                scrolled ? 'text-espresso' : 'text-cream/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile nav */}
        <nav className="flex md:hidden items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${
                scrolled ? 'text-espresso' : 'text-cream/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
