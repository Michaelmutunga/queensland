import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ValuePillars from '@/components/ValuePillars'
import ProductsShowcase from '@/components/ProductsShowcase'
import StatsSection from '@/components/StatsSection'
import ProcessTimeline from '@/components/ProcessTimeline'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValuePillars />
      <ProductsShowcase />
      <StatsSection />
      <ProcessTimeline />
      <CTASection />
    </>
  )
}
