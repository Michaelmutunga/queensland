'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-cream via-white to-light-bg relative overflow-hidden">
      {/* Noise texture */}
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl leading-tight">
              Precision.{' '}
              <span className="text-teal-accent">Speed.</span>{' '}
              <span className="text-teal-accent">Partnership.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-charcoal/90 max-w-lg"
            >
              Kenya is the most modern macadamia processor delivering world-class quality to global markets.
            </motion.p>

            <motion.div variants={itemVariants} className="text-charcoal/80 space-y-3 max-w-lg">
              <p>
                Since 2022, we have combined state-of-the-art processing technology with sustainable farmer partnerships to provide consistent, premium-grade macadamia kernels for manufacturers and distributors worldwide.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/contact"
                className="bg-primary-green text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-forest-dark hover:-translate-y-1 transition-all shadow-subtle hover:shadow-elevated inline-flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
              >
                Get Export Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="border-2 border-primary-green text-primary-green px-8 py-3.5 rounded-lg font-semibold hover:bg-light-bg transition-colors inline-flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
              >
                View Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative h-500 bg-gradient-to-br from-primary-green/10 to-teal-accent/10 rounded-2xl overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-light-bg rounded-full flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full bg-primary-green text-white font-display text-sm tracking-wide">
                      Premium Macadamia Kernels
                    </div>
                  </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-green/5 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-accent/5 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
