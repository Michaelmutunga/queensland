import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Queensland Nuts Limited',
  description: 'Learn about Queensland Nuts Limited - Kenya\'s modern macadamia processor founded in 2022, combining advanced technology with sustainable farmer partnerships.',
  openGraph: {
    title: 'About Us | Queensland Nuts Limited',
    description: 'Learn about Queensland Nuts Limited - Kenya\'s modern macadamia processor founded in 2022',
  },
}

export default function About() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Building the Future of Kenyan Macadamia Processing
          </h1>
          <p className="text-xl text-charcoal/80 mb-10">
            Founded in 2022, combining modern technology with traditional farming partnerships
          </p>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <Image
              src="/images/Farm 1.jpg"
              alt="Macadamia orchard in Kenya where Queensland Nuts sources premium nuts from smallholder farmers"
              width={1200}
              height={800}
              quality={85}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Who We Are</h2>
          <div className="space-y-6 text-lg text-charcoal/85 leading-relaxed">
            <p>
              Queensland Nut Limited is a Kenyan-owned company established in 2022. We saw an opportunity to bring modern processing technology to an industry dominated by legacy operations, and we seized it.
            </p>
            <p>
              Our state-of-the-art facility represents a new generation of food processing in Kenya. We are not just processors, we are partners. From the 500+ smallholder farmers who supply our raw materials to the global manufacturers who rely on our products, every relationship matters.
            </p>
            <p>
              We believe that combining cutting-edge technology with genuine human partnerships creates better products and better outcomes for everyone in the supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-2xl font-bold text-primary-green mb-4">
                Our Mission
              </h3>
              <p className="text-charcoal/85 leading-relaxed">
                To be the home of quality macadamia nuts in Kenya for the world through use of qualified human capital and improved technologies with state of art processing facility.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-2xl font-bold text-primary-green mb-4">
                Our Vision
              </h3>
              <p className="text-charcoal/85 leading-relaxed">
                To be the best quality macadamia nuts supplier in Kenya.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-2xl font-bold text-primary-green mb-4">
                Core Values - TATIIQ
              </h3>
              <ul className="space-y-2 text-charcoal/85">
                <li className="flex items-center gap-2"><span className="font-semibold w-1 h-1 bg-primary-green rounded-full" /> Teamwork</li>
                <li className="flex items-center gap-2"><span className="font-semibold w-1 h-1 bg-primary-green rounded-full" /> Accountability</li>
                <li className="flex items-center gap-2"><span className="font-semibold w-1 h-1 bg-primary-green rounded-full" /> Trust</li>
                <li className="flex items-center gap-2"><span className="font-semibold w-1 h-1 bg-primary-green rounded-full" /> Integrity</li>
                <li className="flex items-center gap-2"><span className="font-semibold w-1 h-1 bg-primary-green rounded-full" /> Innovation</li>
                <li className="flex items-center gap-2"><span className="font-semibold w-1 h-1 bg-primary-green rounded-full" /> Quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Our State-of-the-Art Facility
          </h2>
          <p className="text-lg text-center text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Established in 2022, our modern processing facility represents the future of Kenyan macadamia processing, combining advanced technology with stringent quality standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src="/images/Process/process-2-automated-processing-equipment.jfif"
                alt="Queensland Nuts Limited modern processing facility with automated equipment"
                width={1200}
                height={600}
                quality={75}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-subtle">
              <Image
                src="/images/Process/process-3-quality-control-inspection-team.jpg"
                alt="Dedicated quality control team at work inspecting macadamia kernels"
                width={600}
                height={400}
                quality={75}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-subtle">
              <Image
                src="/images/Process/process-quality-control-fresh-harvest.jpg"
                alt="Automated sorting and conveyor systems at Queensland Nuts Limited facility"
                width={600}
                height={400}
                quality={75}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Modern Infrastructure',
                description: 'Our 2022-built facility features the newest processing technologies available, from automated optical sorting to nitrogen-flush packaging systems.',
              },
              {
                title: 'Specialist Quality Team',
                description: 'Every step monitored by highly trained quality specialists who ensure consistent grading, specifications, and food safety compliance.',
              },
              {
                title: 'Farmer-First Approach',
                description: 'We source from 500+ smallholder farmers through direct, transparent relationships. Better farmer livelihoods mean better raw material quality.',
              },
              {
                title: 'Responsive Partnership',
                description: 'As a focused, modern operation, we can move quickly. Fast quotes, flexible minimums, direct communication with decision-makers.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-light-bg rounded-card p-10 border-l-4 border-primary-green">
                <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
