export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Queensland Nut Limited',
    url: 'https://queenslandnuts.com',
    logo: 'https://queenslandnuts.com/logo.png',
    description: "Kenya's most technologically advanced macadamia processor delivering export-grade quality with speed and reliability.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Grand Maria Business Park',
      addressCountry: 'Kenya',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-723-638417',
      contactType: 'Customer Service',
    },
    founder: {
      '@type': 'Person',
      name: 'Isaac',
    },
    foundingDate: '2022',
    areaServed: ['US', 'China', 'Germany', 'Netherlands', 'Vietnam'],
    sameAs: [
      'https://www.facebook.com/queenslandnuts',
      'https://www.instagram.com/queenslandnuts',
      'https://twitter.com/queenslandnuts',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
