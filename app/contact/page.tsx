import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Package, MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import ContactFormComponent from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Quote | Queensland Nuts',
  description: 'Request an export quote, order samples, or contact Queensland Nuts. Fast response time - 24-48 hours guaranteed.',
  openGraph: {
    title: 'Contact & Quote | Queensland Nuts',
    description: 'Request a quote or contact us - 24-48hr response guaranteed',
  },
}

export default function Contact() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let Us Start a Conversation
          </h1>
          <p className="text-xl text-charcoal/80">
            Whether you need a quote, samples, or just have questions, we are here to help
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Export Inquiries */}
            <div className="bg-light-bg rounded-card p-10 text-center hover:shadow-elevated transition-all">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                <Globe size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                For Export Inquiries
              </h3>
              <p className="text-charcoal/80 mb-6">
                Looking to import macadamia kernels?
              </p>
              <Link
                href="#quote-form"
                className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-forest-dark group"
              >
                Request Export Quote →
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Samples */}
            <div className="bg-light-bg rounded-card p-10 text-center hover:shadow-elevated transition-all">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                <Package size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                For Samples
              </h3>
              <p className="text-charcoal/80 mb-6">
                Want to test our quality firsthand?
              </p>
              <Link
                href="#quote-form"
                className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-forest-dark group"
              >
                Order Product Samples →
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* General Questions */}
            <div className="bg-light-bg rounded-card p-10 text-center hover:shadow-elevated transition-all">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                For General Questions
              </h3>
              <p className="text-charcoal/80 mb-6">
                Questions about our products or process?
              </p>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-forest-dark group"
              >
                Send Us a Message →
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Request Export Quote
          </h2>
          <p className="text-charcoal/80 mb-12">
            Tell us about your needs. We will respond within 24-48 business hours.
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Send Us a Message
          </h2>
          <p className="text-charcoal/80 mb-12">
            Have questions? We are always happy to chat.
          </p>
          <ContactFormComponent />
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Direct Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Phone</h3>
                  <a 
                    href="tel:+254723638417"
                    className="text-primary-green hover:text-forest-dark font-semibold"
                  >
                    (+254) 723 638 417
                  </a>
                  <p className="text-charcoal/70 text-sm mt-1">Mon-Fri 8:00 AM - 5:00 PM EAT</p>
                  <p className="text-charcoal/70 text-sm">Sat 9:00 AM - 1:00 PM EAT</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Email</h3>
                  <a 
                    href="mailto:issac@queenslandnuts.com"
                    className="text-primary-green hover:text-forest-dark font-semibold"
                  >
                    issac@queenslandnuts.com
                  </a>
                  <p className="text-charcoal/70 text-sm mt-1">Response within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Address</h3>
                  <p className="text-charcoal/80">
                    Grand Maria Business Park<br />
                    Kenya
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-primary-green hover:text-forest-dark font-semibold text-sm mt-2"
                  >
                    Schedule Factory Visit →
                  </Link>
                </div>
              </div>
            </div>

            {/* Alternative Contact Options */}
            <div className="bg-white rounded-card p-10 shadow-subtle">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Alternative Ways to Connect
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  💬 Chat on WhatsApp
                </button>
                <button className="w-full border-2 border-primary-green text-primary-green px-6 py-3 rounded-lg font-semibold hover:bg-light-bg transition-colors">
                  📅 Schedule a Call
                </button>
                <p className="text-charcoal/70 text-sm pt-4">
                  For urgent matters, we recommend calling between business hours. We respond to all inquiries within 48 hours maximum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Visits */}
      <section className="py-20 md:py-28 bg-white border-t border-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            See Our Facility in Person
          </h2>
          <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto">
            For serious buyers, we welcome factory visits. Experience our process firsthand and see the care we take with every batch.
          </p>
          <button className="bg-primary-green text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-forest-dark transition-all">
            Schedule a Factory Visit
          </button>
        </div>
      </section>
    </div>
  )
}
