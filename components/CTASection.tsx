'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary-green to-teal-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-20 -mb-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Let us Grow Together
          </h2>
          <p className="text-lg text-white/95 mb-10 max-w-2xl mx-auto">
            Whether you are a confectionery manufacturer, premium retailer, or food distributor, Queensland Nuts delivers the quality, consistency, and reliability your business needs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-green px-8 py-3.5 rounded-lg font-semibold hover:bg-cream hover:-translate-y-1 transition-all shadow-subtle hover:shadow-elevated inline-flex items-center justify-center gap-2 group"
            >
              Get Export Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 group"
            >
              Order Samples
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
