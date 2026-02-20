'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Queensland Nuts Limited Logo"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Kenya's modern macadamia processor combining advanced technology with sustainable farmer partnerships.
            </p>

            {/* Newsletter Signup */}
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-primary-green"
                required
              />
              <button
                type="submit"
                className="bg-primary-green text-white px-3 py-2 rounded-lg font-semibold text-sm hover:bg-forest-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Our Products' },
                { href: '/process', label: 'Our Process' },
                { href: '/impact', label: 'Impact' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Style 0 - Premium Wholes' },
                { label: 'Style 1 - Large Wholes' },
                { label: 'Style 4 - Select Halves' },
                { label: 'Styles 6-7 - Chips' },
                { label: 'Request Samples' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/products"
                    className="text-white/80 hover:text-primary-green transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary-green" />
                <p className="text-white/80">Grand Maria Business Park, Kenya</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="flex-shrink-0 text-primary-green" />
                <a href="tel:+254723638417" className="text-white/80 hover:text-primary-green transition-colors">
                  (+254) 723 638 417
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="flex-shrink-0 text-primary-green" />
                <a href="mailto:issac@queenslandnuts.com" className="text-white/80 hover:text-primary-green transition-colors">
                  issac@queenslandnuts.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© {currentYear} Queensland Nuts Limited. All rights reserved.</p>
          <p>Built with precision in Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  )
}
