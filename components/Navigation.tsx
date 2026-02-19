'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/process', label: 'Our Process' },
    { href: '/impact', label: 'Impact' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-light-bg shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-green rounded-lg flex items-center justify-center text-white font-display font-bold text-lg group-hover:bg-forest-dark transition-colors">
              QN
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-charcoal hidden sm:inline">
              Queensland Nuts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body font-medium text-charcoal hover:text-primary-green transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-primary-green text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-forest-dark hover:-translate-y-0.5 transition-all shadow-subtle hover:shadow-elevated focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
            >
              Get Export Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-light-bg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-light-bg">
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-medium text-charcoal hover:bg-light-bg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mx-4 bg-primary-green text-white px-4 py-2.5 rounded-lg font-semibold text-center hover:bg-forest-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => setIsOpen(false)}
              >
                Get Export Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
