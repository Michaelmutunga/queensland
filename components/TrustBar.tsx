'use client'

import { motion } from 'framer-motion'

const trustItems = [
  { value: '2022', label: 'Year Established' },
  { value: 'Styles 0-8', label: 'Complete Range' },
  { value: 'Export Ready', label: 'Certification' },
  { value: '500+', label: 'Farmers Supported' },
]

export default function TrustBar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 bg-white border-b border-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {trustItems.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-green mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-charcoal/70 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
