'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    title: 'Style 1L - Premium Wholes',
    specs: '16mm to 20mm | 95% wholes',
    description: 'Large, premium whole kernels perfect for high-end retail, luxury confectionery, and direct consumption.',
    image: '/images/Process/product-style-1l-premium-wholes.jpg',
    alt: 'Style 1L premium whole macadamia kernels 16-20mm for retail and luxury confectionery',
  },
  {
    title: 'Style 4L - Select Halves',
    specs: '14mm to 16mm | 90% halves',
    description: 'Consistent halves ideal for coating, roasting, and premium baking applications.',
    image: '/images/Process/product-style-4l-select-halves.jpg',
    alt: 'Style 4L select macadamia halves 14-16mm ideal for baking and coating applications',
  },
  {
    title: 'Style 6 - Medium Chips',
    specs: '6mm to 9mm pieces',
    description: 'Versatile chips for ice cream, granola, bakery products, and trail mixes.',
    image: '/images/Process/product-style-6-medium-chips.jpg',
    alt: 'Style 6 medium macadamia chips 6-9mm perfect for ice cream granola and bakery products',
  },
  {
    title: 'Style 7 - Small Chips',
    specs: '4mm to 6mm pieces',
    description: 'Fine chips perfect for cookies, chocolate inclusions, and confectionery applications.',
    image: '/images/Process/product-style-7-small-chips.png',
    alt: 'Style 7 small macadamia chips 4-6mm for cookies chocolate and confectionery',
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
              {/* Product Image */}
              <div className="h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={600}
                  height={450}
                  quality={75}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                  className="inline-flex items-center gap-2 bg-primary-green text-white px-4 py-2 rounded-button font-semibold text-sm hover:bg-forest-dark hover:-translate-y-0.5 transition-all group/btn focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
                >
                  Get Export Quote
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
            className="inline-flex items-center gap-2 text-primary-green font-semibold text-lg hover:text-forest-dark group focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-light-bg"
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
