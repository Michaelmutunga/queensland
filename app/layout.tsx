import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Queensland Nuts | Premium Macadamia Kernels from Kenya',
  description: 'Kenya\'s most technologically advanced macadamia processor delivering export-grade quality with speed and reliability. 500+ smallholder farmers, Styles 0-8 processing capability.',
  keywords: 'macadamia, Kenya, export, wholesale, nuts, processor, quality, sustainable',
  openGraph: {
    title: 'Queensland Nuts | Premium Macadamia Kernels from Kenya',
    description: 'Kenya\'s modern macadamia processor combining advanced technology with sustainable farmer partnerships.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Queensland Nuts Processing Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Queensland Nuts | Premium Macadamia Kernels from Kenya',
    description: 'Kenya\'s modern macadamia processor combining advanced technology with sustainable farmer partnerships.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <SchemaOrg />
      </head>
      <body className="font-body bg-white text-charcoal">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
