'use client'

import { useState } from 'react'
import { useForm } from '@formspree/react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '')
  const [submitting, setSubmitting] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true)
    await handleSubmit(e)
    setSubmitting(false)
  }

  if (state.succeeded) {
    return (
      <div className="bg-light-bg rounded-card p-12 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-primary-green" />
        </div>
        <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
          Message Received!
        </h3>
        <p className="text-charcoal/85 text-lg max-w-2xl mx-auto mb-8">
          Thank you for reaching out. We will get back to you within 24 business hours.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-primary-green font-semibold hover:text-forest-dark"
        >
          Send Another Message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleFormSubmit} className="bg-white rounded-card p-8 md:p-12 shadow-subtle">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Full Name <span className="text-primary-green">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Email Address <span className="text-primary-green">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="your@email.com"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="Your company"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Subject */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Subject <span className="text-primary-green">*</span>
          </label>
          <input
            type="text"
            name="subject"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="What is this about?"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Message <span className="text-primary-green">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        {/* Consent */}
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              className="w-4 h-4 rounded border-light-bg text-primary-green focus:ring-2 focus:ring-primary-green/20 mt-1"
            />
            <span className="text-sm text-charcoal/80">
              I agree to be contacted about this inquiry <span className="text-primary-green">*</span>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={submitting || state.submitting}
            className="w-full bg-primary-green text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-forest-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
          >
            {submitting || state.submitting ? 'Sending...' : 'Send Message'}
            {!submitting && !state.submitting && (
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        {/* Error Message */}
        {state.errors && Object.keys(state.errors).length > 0 && (
          <div className="md:col-span-2 bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
            <p className="font-semibold mb-2">There was an error submitting the form:</p>
            <p className="text-sm">Please check your input and try again.</p>
          </div>
        )}
      </div>
    </form>
  )
}
