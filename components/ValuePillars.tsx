'use client'

import Link from 'next/link'
import { Cpu, ShieldCheck, Users, Zap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'Our 2022 facility features the latest macadamia processing technology, including automated sorting, metal detection, and nitrogen flushing for extended shelf life and superior quality.',
    link: '/process',
    linkText: 'Learn about our process →',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description: 'Dedicated quality monitoring teams ensure consistent grading and specifications. Every batch meets international food safety standards with full traceability.',
    link: '/products',
    linkText: 'View quality standards →',
  },
  {
    icon: Users,
    title: 'Farmer Partnerships',
    description: 'We source directly from 500+ smallholder farmers across Kenya, building lasting partnerships that improve livelihoods while ensuring supply consistency.',
    link: '/impact',
    linkText: 'See our impact →',
  },
  {
    icon: Zap,
    title: 'Reliable Supply',
    description: 'Modern supply chain management, flexible order sizes, and responsive communication. From inquiry to delivery, we move at the speed your business demands.',
    link: '/contact',
    linkText: 'Request a quote →',
  },
]

export default function ValuePillars() {
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
    <section className="py-20 md:py-32 bg-white">
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
            Built for Modern Food Businesses
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Four pillars that define our commitment to excellence
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-light-bg rounded-card p-8 border-l-4 border-primary-green hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest-dark transition-colors">
                  <Icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal/80 text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Link */}
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-1 text-primary-green font-semibold text-sm hover:text-forest-dark group/link focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
                >
                  {pillar.linkText}
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
