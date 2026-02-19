'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const certifications = [
  {
    name: 'FDA',
    pdfPath: '/certificates/fda-certificate.pdf',
    logoPath: '/certificates/logos/fda-logo.png',
    description: 'Food and Drug Administration',
  },
  {
    name: 'FSSC',
    pdfPath: '/certificates/fssc-certificate.pdf',
    logoPath: '/certificates/logos/fssc-logo.png',
    description: 'Food Safety System Certification',
  },
  {
    name: 'Kosher',
    pdfPath: '/certificates/kosher-certificate.pdf',
    logoPath: '/certificates/logos/kosher-logo.png',
    description: 'Kosher Certification',
  },
  {
    name: 'Halal',
    pdfPath: '/certificates/halal-certificate.pdf',
    logoPath: '/certificates/logos/halal-logo.jfif',
    description: 'Halal Certification',
  },
  {
    name: 'Environment Policy',
    pdfPath: '/certificates/environment-policy-certificate.pdf',
    logoPath: '/certificates/logos/environment-policy-logo.jfif',
    description: 'Environmental Policy Certification',
  },
]

export default function Certifications() {
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
    <section className="py-20 md:py-32 bg-gradient-to-br from-light-bg via-white to-light-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-accent/5 rounded-full -ml-36 -mb-36" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Our commitment to quality, safety, and sustainability is validated by internationally recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group bg-white rounded-card p-6 border-2 border-primary-green/20 hover:border-primary-green hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-light-bg"
              aria-label={`View ${cert.name} certificate (opens in new tab)`}
            >
              {/* Certification Logo */}
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src={cert.logoPath}
                  alt={`${cert.name} Certification Logo`}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  quality={95}
                />
              </div>

              {/* Certification Name */}
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                {cert.name}
              </h3>

              {/* Description */}
              <p className="text-charcoal/70 text-xs leading-relaxed mb-4 flex-grow">
                {cert.description}
              </p>

              {/* PDF Indicator */}
              <div className="flex items-center gap-1 text-primary-green text-xs font-semibold group-hover:text-forest-dark transition-colors">
                <span>View Certificate</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
