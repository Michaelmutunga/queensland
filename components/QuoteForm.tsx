'use client'

import { useState } from 'react'
import { useForm } from '@formspree/react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function QuoteForm() {
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
          Thank You for Your Interest!
        </h3>
        <p className="text-charcoal/85 text-lg max-w-2xl mx-auto mb-8">
          We have received your quote request and will respond within 24 business hours with detailed pricing and availability information.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-primary-green font-semibold hover:text-forest-dark"
        >
          Submit Another Inquiry →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleFormSubmit} className="bg-white rounded-card p-8 md:p-12 shadow-subtle">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Your Information */}
        <div className="md:col-span-2">
          <h3 className="font-display text-lg font-bold text-charcoal mb-6">Your Information</h3>
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Full Name <span className="text-primary-green">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Company Name <span className="text-primary-green">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="ABC Foods Ltd"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Job Title/Role
          </label>
          <input
            type="text"
            name="jobTitle"
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="Procurement Director"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Email Address <span className="text-primary-green">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Phone Number <span className="text-primary-green">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Country/Region <span className="text-primary-green">*</span>
          </label>
          <input
            type="text"
            name="country"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="United States"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Company Website
          </label>
          <input
            type="url"
            name="website"
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="https://company.com"
          />
        </div>

        {/* Your Requirements */}
        <div className="md:col-span-2 border-t border-light-bg pt-8 mt-8">
          <h3 className="font-display text-lg font-bold text-charcoal mb-6">Your Requirements</h3>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-charcoal mb-4">
            Product(s) Interested In <span className="text-primary-green">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Style 0', 'Style 1L', 'Style 1S', 'Style 4L', 'Style 4S', 'Style 6', 'Style 7', 'Style 8', 'Unsure'].map((product) => (
              <label key={product} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="products"
                  value={product}
                  className="w-4 h-4 rounded border-light-bg text-primary-green focus:ring-2 focus:ring-primary-green/20"
                />
                <span className="text-sm text-charcoal">{product}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Estimated Quantity <span className="text-primary-green">*</span>
          </label>
          <select
            name="estimatedQuantity"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
          >
            <option value="">Select quantity...</option>
            <option value="500-1000kg">500-1,000 kg</option>
            <option value="1-5tons">1-5 tons</option>
            <option value="5-10tons">5-10 tons</option>
            <option value="10-20tons">10-20 tons</option>
            <option value="20+tons">20+ tons</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Frequency <span className="text-primary-green">*</span>
          </label>
          <select
            name="frequency"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
          >
            <option value="">Select frequency...</option>
            <option value="One-time order">One-time order</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="As needed">As needed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Target Delivery Date
          </label>
          <input
            type="date"
            name="targetDeliveryDate"
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Destination Country <span className="text-primary-green">*</span>
          </label>
          <input
            type="text"
            name="destinationCountry"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="United States"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Intended Use <span className="text-primary-green">*</span>
          </label>
          <select
            name="intendedUse"
            required
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
          >
            <option value="">Select intended use...</option>
            <option value="Retail Packaging">Retail Packaging</option>
            <option value="Confectionery Manufacturing">Confectionery Manufacturing</option>
            <option value="Bakery">Bakery</option>
            <option value="Snack Foods">Snack Foods</option>
            <option value="Ingredient Supplier">Ingredient Supplier</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Additional Information */}
        <div className="md:col-span-2 border-t border-light-bg pt-8 mt-8">
          <h3 className="font-display text-lg font-bold text-charcoal mb-6">Additional Information</h3>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Specific Quality Requirements
          </label>
          <textarea
            name="qualityRequirements"
            rows={3}
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="Any specific requirements or preferences..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Additional Comments/Questions
          </label>
          <textarea
            name="additionalComments"
            rows={4}
            className="w-full px-4 py-3 border border-light-bg rounded-lg focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20"
            placeholder="Anything else you'd like us to know..."
          />
        </div>

        {/* Consent */}
        <div className="md:col-span-2 space-y-4 border-t border-light-bg pt-8 mt-8">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              required
              className="w-4 h-4 rounded border-light-bg text-primary-green focus:ring-2 focus:ring-primary-green/20 mt-1"
            />
            <span className="text-sm text-charcoal/80">
              I agree to be contacted regarding this inquiry <span className="text-primary-green">*</span>
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="newsletter"
              className="w-4 h-4 rounded border-light-bg text-primary-green focus:ring-2 focus:ring-primary-green/20 mt-1"
            />
            <span className="text-sm text-charcoal/80">
              I would like to receive updates on new products and industry insights
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
            {submitting || state.submitting ? 'Sending...' : 'Submit Quote Request'}
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
