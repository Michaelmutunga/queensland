'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sprout, Settings, SearchCheck, Package, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const processSteps = [
  {
    icon: Sprout,
    title: 'Sourcing',
    description: 'Direct relationships with certified smallholder farmers across Kenya macadamia-growing regions',
    image: '/images/Process/process-1-sourcing-farmer-partnerships.jpg',
    alt: 'Queensland Nuts Limited farmer partners receiving macadamia seedlings for sustainable cultivation in Kenya',
  },
  {
    icon: Settings,
    title: 'Processing',
    description: 'State-of-the-art facility with minimal hand contact, metal detection, and precision sorting by size and grade',
    image: '/images/Process/process-2-automated-processing-equipment.jfif',
    alt: 'State-of-the-art automated macadamia processing equipment at Queensland Nuts Limited modern facility in Kenya',
  },
  {
    icon: SearchCheck,
    title: 'Quality Control',
    description: 'Multi-stage quality monitoring by trained specialists ensures consistent specifications batch after batch',
    image: '/images/Process/process-3-quality-control-inspection-team.jpg',
    alt: 'Queensland Nuts Limited dedicated quality control team conducting manual inspection of macadamia kernels in clean facility',
  },
  {
    icon: Package,
    title: 'Packaging & Export',
    description: 'Vacuum-sealed with nitrogen flushing for extended shelf life, ready for global shipment',
    image: '/images/Process/rocess-4-packaging-sorted-kernels.jpg',
    alt: 'Final quality inspection and sorting of macadamia kernels before packaging at Queensland Nuts Limited facility',
  },
]

export default function ProcessTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
            Our Process, Transparent and Traceable
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            From farm to export, every step is designed to ensure consistent quality
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {processSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div key={idx} variants={cardVariants} className="relative">
                {/* Card */}
                <div className="bg-light-bg rounded-card overflow-hidden h-full border-l-4 border-primary-green hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center font-display font-bold text-lg group-hover:bg-forest-dark transition-colors z-10">
                    {idx + 1}
                  </div>

                  {/* Process Image */}
                  <div className="h-44 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={800}
                      height={600}
                      quality={75}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-green/20 transition-colors">
                      <Icon size={24} className="text-primary-green" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (except last) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2">
                    <ArrowRight size={24} className="text-light-bg" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-primary-green font-semibold text-lg hover:text-forest-dark group focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-white"
          >
            Learn More About Our Process
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
