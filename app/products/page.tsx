import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products | Queensland Nuts Limited',
  description: 'Premium macadamia kernels in all styles (0-8) - from premium wholes to fine chips. Precision grading, vacuum-sealed with nitrogen-flush preservation.',
  openGraph: {
    title: 'Products | Queensland Nuts Limited',
    description: 'Premium macadamia kernels in all styles (0-8) with precision grading',
  },
}

const products = [
  {
    style: 'Style 0',
    category: 'Wholes',
    size: '22mm+',
    grade: '95% wholes minimum',
    description: 'Largest premium whole kernels for high-end retail, luxury confectionery',
    applications: ['Premium retail', 'Luxury gift boxes', 'High-end chocolate', 'Gourmet snacks'],
  },
  {
    style: 'Style 1L',
    category: 'Wholes',
    size: '16-20mm',
    grade: '95% wholes minimum',
    description: 'Large premium whole kernels ideal for retail and manufacturing',
    applications: ['Retail packaging', 'Chocolate & confectionery', 'Roasted nuts', 'Snack mixes'],
  },
  {
    style: 'Style 1S',
    category: 'Wholes',
    size: '13-16mm',
    grade: '95% wholes minimum',
    description: 'Medium-sized whole kernels offering excellent value with premium quality',
    applications: ['Mid-range retail', 'Roasted nuts', 'Confectionery', 'Trail mixes'],
  },
  {
    style: 'Style 4L',
    category: 'Halves',
    size: '14-16mm',
    grade: '90% halves minimum',
    description: 'Select halves with consistent sizing for uniform cooking/coating',
    applications: ['Premium baking', 'Chocolate coating', 'Nut butter', 'Roasted products'],
  },
  {
    style: 'Style 4S',
    category: 'Halves',
    size: '9-14mm',
    grade: '70% halves minimum',
    description: 'Smaller halves and pieces for baking, granola, confectionery',
    applications: ['Commercial baking', 'Granola', 'Ice cream', 'Energy bars'],
  },
  {
    style: 'Style 6 (M-Cut)',
    category: 'Chips',
    size: '6-9mm pieces',
    description: 'Medium-sized chips for wide range of manufacturing applications',
    applications: ['Ice cream', 'Granola', 'Bakery products', 'Trail mixes', 'Confectionery'],
  },
  {
    style: 'Style 7 (S-Cut)',
    category: 'Chips',
    size: '4-6mm pieces',
    description: 'Smaller chips for fine texture and even distribution',
    applications: ['Chocolate bars', 'Fine cookies', 'Macadamia butter', 'Coatings'],
  },
  {
    style: 'Style 8 (Bits)',
    category: 'Bits & Pieces',
    size: '<4mm pieces',
    description: 'Small pieces for paste, flour, or flavor applications',
    applications: ['Macadamia butter/paste', 'Baking flour', 'Ice cream flavoring', 'Sauces'],
  },
]

export default function Products() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Premium Macadamia Kernels for Every Application
          </h1>
          <p className="text-xl text-charcoal/80 mb-10">
            From whole kernels to fine chips, Styles 0-8 with precision grading and consistent quality
          </p>
          <div className="rounded-2xl overflow-hidden shadow-elevated max-w-3xl mx-auto">
            <Image
              src="/images/nuts and kernel shells.jpg"
              alt="Queensland Nuts Limited premium macadamia product range from whole kernels to chips"
              width={1200}
              height={600}
              quality={75}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white border-b border-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-6">Why Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Hygienically processed with minimal hand contact',
              'Metal-detected for safety assurance',
              'Vacuum-sealed with nitrogen flushing',
              'Fully traceable from farm to export',
              'Available in bulk quantities',
              'Consistent specifications every batch',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-primary-green font-bold text-lg mt-1">✓</span>
                <span className="text-charcoal/85">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-card p-8 shadow-subtle hover:shadow-elevated hover:-translate-y-2 transition-all border-t-4 border-primary-green group"
              >
                {/* Category Badge */}
                <div className="inline-block bg-primary-green/10 text-primary-green font-semibold text-xs px-3 py-1 rounded-full mb-4">
                  {product.category}
                </div>

                {/* Style */}
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                  {product.style}
                </h3>

                {/* Specs */}
                <div className="space-y-2 mb-4 text-sm text-charcoal/70">
                  <div>
                    <span className="font-semibold">Size:</span> {product.size}
                  </div>
                  {product.grade && (
                    <div>
                      <span className="font-semibold">Grade:</span> {product.grade}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-charcoal/85 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Applications */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-primary-green mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIdx) => (
                      <span
                        key={appIdx}
                        className="text-xs bg-light-bg text-charcoal px-2 py-1 rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-green text-white px-4 py-2 rounded-button font-semibold text-sm hover:bg-forest-dark transition-colors group/btn w-full justify-center"
                >
                  Request Quote
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Processing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Need Something Specific?
          </h2>
          <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
            We offer custom processing services including custom size specifications, roasting, flavoring options, custom packaging, and private label partnerships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-green font-semibold text-lg hover:text-forest-dark group"
          >
            Contact us to discuss requirements →
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
