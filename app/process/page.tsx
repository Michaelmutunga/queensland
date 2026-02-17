import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Process | Queensland Nuts',
  description: 'See how Queensland Nuts processes macadamia kernels - from sourcing through quality control to export. Transparent, traceable, consistent quality.',
  openGraph: {
    title: 'Our Process | Queensland Nuts',
    description: 'Transparent macadamia processing from farm to export',
  },
}

const processSteps = [
  {
    title: 'Sourcing & Farmer Partnerships',
    subtitle: 'It Starts with the Right Relationships',
    description: 'We source from 500+ smallholder farmers across Kenya\'s macadamia-growing regions, building direct relationships built on trust and fair pricing.',
    details: [
      'Fully mature nuts (brown shells)',
      'Moisture content within specification',
      'Minimal pest damage',
      'Traceable to farmer groups',
      'Fair pricing above market rates',
    ],
  },
  {
    title: 'Reception & Pre-Processing',
    subtitle: 'Quality Control Begins at Intake',
    description: 'Every batch goes through rigorous intake checks before processing begins.',
    details: [
      'Visual inspection',
      'Moisture content testing (10-12% optimal)',
      'Weight verification',
      'Sample testing',
      'Batch documentation & traceability',
    ],
  },
  {
    title: 'Cracking & Separation',
    subtitle: 'Precision Extraction',
    description: 'State-of-the-art cracking machines optimize kernel recovery while minimizing waste.',
    details: [
      'Automated cracking at optimal pressure',
      'Air separation for shell removal',
      'Kernel-shell separation',
      'Initial grading and sorting',
      'Maximized whole kernel recovery',
    ],
  },
  {
    title: 'Sorting & Grading',
    subtitle: 'Advanced Technology Meets Human Expertise',
    description: 'Multiple stages of sorting ensure consistent quality and specifications.',
    details: [
      'Size sorting via vibrating screens',
      'Color sorting (optical technology)',
      'Manual quality inspection',
      'Metal detection for safety',
      'Precise grading for Styles 0-8',
    ],
  },
  {
    title: 'Packaging & Preservation',
    subtitle: 'Locking in Freshness',
    description: 'Nitrogen-flush packaging preserves quality for extended shelf life.',
    details: [
      'Vacuum removal of air',
      'Nitrogen gas injection',
      'Modified atmosphere packaging',
      'Extends shelf life 12-18 months',
      'Food-grade, moisture-barrier materials',
    ],
  },
  {
    title: 'Quality Assurance',
    subtitle: 'Verified Quality, Every Batch',
    description: 'Comprehensive testing protocol ensures every shipment meets specifications.',
    details: [
      'Moisture content analysis',
      'Visual quality assessment',
      'Size distribution verification',
      'Microbiological testing',
      'Aflatoxin testing & certification',
    ],
  },
  {
    title: 'Storage & Logistics',
    subtitle: 'Ready When You Need It',
    description: 'Climate-controlled storage and professional export logistics.',
    details: [
      'Climate-controlled warehousing',
      'FIFO inventory management',
      'Pest control protocols',
      'Documentation handling',
      'Shipment tracking & support',
    ],
  },
]

export default function Process() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            From Kenyan Farms to Global Markets
          </h1>
          <p className="text-xl text-charcoal/80">
            Transparency, technology, and tradition working together
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white border-b border-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-charcoal/85 leading-relaxed">
            Quality does not happen by accident. From sourcing to shipping, every step is carefully designed and monitored to ensure consistent specifications, safety, and excellence.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'md:grid-cols-2 lg:auto-cols-fr' : ''
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-block bg-primary-green text-white font-display font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-green font-semibold mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-charcoal/85 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-3">
                        <span className="text-primary-green font-bold mt-1">✓</span>
                        <span className="text-charcoal/85">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Placeholder */}
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-white rounded-card h-96 flex items-center justify-center shadow-subtle">
                    <div className="text-6xl">📦</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            Invested in Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Modern cracking systems',
              'Automated size-sorting screens',
              'Optical color sorters',
              'Metal detection systems',
              'Nitrogen-flush packaging equipment',
              'Climate-controlled storage',
              'Quality testing laboratory',
              'Traceability management systems',
            ].map((equipment, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-light-bg p-6 rounded-card">
                <span className="text-2xl">⚙️</span>
                <span className="font-semibold text-charcoal">{equipment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            From Farm to Your Facility
          </h2>
          <p className="text-lg text-charcoal/85 mb-10 leading-relaxed">
            Every batch is traced to specific farmer groups, reception date, processing date, quality checkpoints, packaging batch, and complete shipment details. Full transparency, full accountability.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Farmer Groups', value: 'Specific' },
              { label: 'Reception Date', value: 'Documented' },
              { label: 'Processing Date', value: 'Tracked' },
              { label: 'Quality Data', value: 'Complete' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-card p-6 shadow-subtle">
                <div className="text-2xl font-display font-bold text-primary-green mb-2">
                  ✓
                </div>
                <p className="font-semibold text-charcoal">{item.label}</p>
                <p className="text-sm text-charcoal/70">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-green text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-forest-dark transition-all"
            >
              Schedule Factory Visit
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary-green text-primary-green px-8 py-3.5 rounded-lg font-semibold hover:bg-light-bg transition-colors"
            >
              Request Samples
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
