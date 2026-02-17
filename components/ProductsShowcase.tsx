'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    title: 'Style 1L - Premium Wholes',
    specs: '16mm to 20mm | 95% wholes',
    description: 'Large, premium whole kernels perfect for high-end retail, luxury confectionery, and direct consumption.',
  },
  {
    title: 'Style 4L - Select Halves',
    specs: '14mm to 16mm | 90% halves',
    description: 'Consistent halves ideal for coating, roasting, and premium baking applications.',
  },
  {
    title: 'Style 6 - Medium Chips',
    specs: '6mm to 9mm pieces',
    description: 'Versatile chips for ice cream, granola, bakery products, and trail mixes.',
  },
  {
    title: 'Style 7 - Small Chips',
    specs: '4mm to 6mm pieces',
    description: 'Fine chips perfect for cookies, chocolate inclusions, and confectionery applications.',
  },
]

export default function ProductsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Premium Macadamia Kernels, Precisely Graded
          </h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            We process all macadamia styles (0-8) to meet diverse manufacturing needs—from whole kernels for premium retail to chips for confectionery and bakery applications.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white rounded-card overflow-hidden shadow-subtle hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary-green group"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary-green/10 to-teal-accent/10 flex items-center justify-center group-hover:from-primary-green/15 group-hover:to-teal-accent/15 transition-all">
                <div className="text-4xl">🥜</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-primary-green mb-3">
                  {product.specs}
                </p>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-green text-white px-4 py-2 rounded-button font-semibold text-sm hover:bg-forest-dark hover:-translate-y-0.5 transition-all group/btn"
                >
                  Get Quote
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary-green font-semibold text-lg hover:text-forest-dark group"
          >
            View All Products
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
