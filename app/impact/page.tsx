import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impact & Sustainability | Queensland Nuts Limited',
  description: 'Our commitment to farmer partnerships, community development, environmental sustainability, and responsible business practices.',
  openGraph: {
    title: 'Impact & Sustainability | Queensland Nuts Limited',
    description: 'Growing together - farmer partnerships and sustainable practices',
  },
}

export default function Impact() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Growing Together
          </h1>
          <p className="text-xl text-charcoal/80">
            Our commitment to farmers and community. Sustainable business is good business.
          </p>
        </div>
      </section>

      {/* Farmer Network */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            500+ Smallholder Farmers, One Shared Vision
          </h2>
          <p className="text-lg text-charcoal/85 leading-relaxed mb-10">
            We believe that direct relationships with our farmer partners create better outcomes for everyone. That is why we maintain transparent, long-term partnerships with over 500 smallholder farmers across Kenya macadamia-growing regions.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-elevated mb-12">
            <Image
              src="/images/Process/process-1-sourcing-farmer-partnerships.jpg"
              alt="Queensland Nuts Limited supporting smallholder farmers through seedling distribution and sustainable farming partnerships"
              width={1200}
              height={600}
              quality={75}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Fair Pricing', description: 'Above-market rates that reflect quality and support farmer livelihoods' },
              { title: 'Timely Payment', description: 'Consistent, punctual payments farmers can rely on' },
              { title: 'Direct Communication', description: 'Open dialogue with farmer groups on quality, timing, and support' },
              { title: 'Long-term Partnerships', description: 'Multi-year commitments that enable farmers to plan and invest' },
            ].map((item, idx) => (
              <div key={idx} className="bg-light-bg rounded-card p-8 border-l-4 border-primary-green">
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/85">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Support Programs */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Investing in Our Supply Chain
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Training */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-2xl font-bold text-primary-green mb-6">
                Training & Technical Support
              </h3>
              <ul className="space-y-3 text-charcoal/85">
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Best agricultural practices workshops
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Pest management training
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Harvesting timing guidance
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Post-harvest handling protocols
                </li>
              </ul>
            </div>

            {/* Quality Incentives */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-2xl font-bold text-primary-green mb-6">
                Quality Incentives
              </h3>
              <ul className="space-y-3 text-charcoal/85">
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Premium pricing for superior quality
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Bonus payments for performance benchmarks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Recognition programs and awards
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Long-term partnership agreements
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-2xl font-bold text-primary-green mb-6">
                Community Development
              </h3>
              <ul className="space-y-3 text-charcoal/85">
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Farmer group capacity building
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Educational support initiatives
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Health and wellness programs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">•</span>
                  Community infrastructure investment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Sustainable Processing for a Sustainable Future
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden shadow-subtle">
              <Image
                src="/images/nuts growing in tree.jpg"
                alt="Macadamia nuts growing naturally on trees in Kenya"
                width={600}
                height={400}
                quality={85}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-subtle">
              <Image
                src="/images/freshly harvested nuts.jpg"
                alt="Freshly harvested macadamia nuts showing premium quality"
                width={600}
                height={400}
                quality={85}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Waste Management */}
            <div className="bg-light-bg rounded-card p-10">
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                Waste Management
              </h3>
              <ul className="space-y-2 text-charcoal/85 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> Shell waste recycled
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> Minimal water usage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> Wastewater treatment
                </li>
              </ul>
            </div>

            {/* Energy Efficiency */}
            <div className="bg-light-bg rounded-card p-10">
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                Energy Efficiency
              </h3>
              <ul className="space-y-2 text-charcoal/85 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> Modern energy-efficient equipment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> LED lighting systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> Solar power integration
                </li>
              </ul>
            </div>

            {/* Sustainable Sourcing */}
            <div className="bg-light-bg rounded-card p-10">
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                Sustainable Sourcing
              </h3>
              <ul className="space-y-2 text-charcoal/85 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> Supporting sustainable agriculture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> Shade-grown macadamias
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-green rounded-full" /> No deforestation policies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Food Safety & Ethics */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Responsible Business Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Worker Welfare */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                Worker Welfare
              </h3>
              <ul className="space-y-3 text-charcoal/85 text-sm">
                <li>Fair wages above minimum standards</li>
                <li>Safe, healthy working conditions</li>
                <li>Ongoing training and development</li>
                <li>Transparent employment practices</li>
              </ul>
            </div>

            {/* Food Safety */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                Food Safety Excellence
              </h3>
              <ul className="space-y-3 text-charcoal/85 text-sm">
                <li>HACCP protocol compliance</li>
                <li>Regular third-party audits</li>
                <li>Zero tolerance for contamination</li>
                <li>Complete traceability systems</li>
              </ul>
            </div>

            {/* Business Ethics */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                Business Ethics
              </h3>
              <ul className="space-y-3 text-charcoal/85 text-sm">
                <li>Transparent business practices</li>
                <li>Fair, clear contracts</li>
                <li>Anti-corruption policies</li>
                <li>Ethical supply chain management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Our Sustainability Roadmap
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 2026-2027 */}
            <div className="bg-light-bg rounded-card p-10 border-l-4 border-primary-green">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                2026-2027 Goals
              </h3>
              <ul className="space-y-4 text-charcoal/85">
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">→</span>
                  <span>Expand to 750+ farmer partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">→</span>
                  <span>Achieve ISO 22000 certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">→</span>
                  <span>Implement advanced traceability system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-green font-bold mt-1">→</span>
                  <span>Launch farmer training academy</span>
                </li>
              </ul>
            </div>

            {/* 2028+ */}
            <div className="bg-light-bg rounded-card p-10 border-l-4 border-teal-accent">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                2028+ Aspirations
              </h3>
              <ul className="space-y-4 text-charcoal/85">
                <li className="flex items-start gap-3">
                  <span className="text-teal-accent font-bold mt-1">→</span>
                  <span>Carbon-neutral operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-accent font-bold mt-1">→</span>
                  <span>100% sustainable sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-accent font-bold mt-1">→</span>
                  <span>Regional export hub status</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-accent font-bold mt-1">→</span>
                  <span>Industry-leading quality standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-green to-teal-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Partner With Us in Building a Better Future
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-green px-8 py-3.5 rounded-lg font-semibold hover:bg-cream transition-all"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
