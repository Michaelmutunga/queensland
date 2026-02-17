# Design System Skills Reference

## 1. Layout Architect Skill

**Description**: Defines responsive grid systems, spacing scales, and container widths. Ensures consistency across breakpoints.

**When to Use**: Anytime you're setting up page structure, grids, or responsive layouts.

**Keywords**: grid, spacing, breakpoints, container, responsive, layout, flex, CSS structure.

### Functionality
- Establishes predictable spacing scale (4px, 8px, 16px, 24px, 32px, etc.)
- Defines container max-widths for different breakpoints (sm, md, lg, xl, 2xl)
- Creates grid templates (12-column, asymmetric, card grids)
- Ensures consistent gap/gutter sizing across components

### Instructions
1. Define spacing scale in Tailwind config (multiples of 4)
2. Set container max-widths for each breakpoint
3. Use flexbox or CSS Grid for layouts
4. Apply responsive classes (md:, lg:, xl:) for breakpoint changes
5. Test across devices (mobile, tablet, desktop)

### Example
```jsx
// Container with responsive spacing
<div className="container mx-auto px-4 md:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Cards with consistent spacing */}
  </div>
</div>
```

---

## 2. Typography Skill

**Description**: Manages font pairing, text hierarchy, and readability. Locks in brand-consistent typography.

**When to Use**: When defining headings, body text, or adjusting font sizes/weights.

**Keywords**: font, text, heading, body, hierarchy, readability, typography, Tailwind text classes.

### Functionality
- Establishes font pairing (e.g., Heading: Inter, Body: Roboto)
- Defines text hierarchy (h1 through h6, body, caption)
- Sets line-height and letter-spacing for readability
- Ensures WCAG contrast compliance

### Instructions
1. Choose 2-3 complementary typefaces for the brand
2. Define font sizing scale: h1 (36px), h2 (28px), h3 (24px), body (16px), caption (12px)
3. Set consistent line-height ratios (1.5 for body, 1.2 for headings)
4. Apply font weights strategically (400 regular, 600 semibold, 700 bold)
5. Use Tailwind's text utilities (text-lg, font-semibold, etc.)

### Example
```jsx
<div>
  <h1 className="text-4xl font-bold leading-tight">Heading</h1>
  <p className="text-base font-normal leading-relaxed">
    Body text for readability with proper line-height.
  </p>
  <span className="text-xs font-medium uppercase">Caption</span>
</div>
```

---

## 3. Component Engineer Skill

**Description**: Builds reusable UI components (Navbar, Footer, Cards, CTAs). Enforces modularity and clean code.

**When to Use**: Whenever creating or refactoring UI elements that repeat across pages.

**Keywords**: component, reusable, Navbar, Footer, Card, CTA, modular, props, React/TSX.

### Functionality
- Creates modular, single-responsibility components
- Accepts props for flexibility (variant, size, state)
- Provides clear component contracts (prop types)
- Implements consistent naming conventions

### Instructions
1. Identify repeating UI patterns across pages
2. Extract into component with configurable props
3. Use TypeScript interfaces for type safety
4. Document expected props and usage
5. Maintain component in shared library

### Example
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children }: ButtonProps) {
  const baseStyles = 'font-semibold rounded focus:outline-none';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-900 hover:bg-gray-50'
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
```

---

## 4. Content Structure Skill

**Description**: Shapes section hierarchy, SEO flow, and semantic HTML. Ensures content is organized for clarity and ranking.

**When to Use**: When drafting page sections, defining order of content, or optimizing for SEO.

**Keywords**: sections, hierarchy, SEO, semantic HTML, headings, content flow, sitemap.

### Functionality
- Organizes content into logical sections
- Uses semantic HTML elements (header, main, section, article, footer)
- Implements proper heading hierarchy (h1 → h2 → h3)
- Optimizes for search engines and readability
- Structures data with schema.org markup

### Instructions
1. Start with single h1 per page
2. Use h2/h3 for subsections in logical order
3. Use semantic tags: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
4. Write descriptive alt text for images
5. Add structured data (JSON-LD) for rich snippets

### Example
```html
<article>
  <h1>Queensland Export Guide</h1>
  
  <section>
    <h2>Getting Started</h2>
    <p>Introduction content...</p>
  </section>
  
  <section>
    <h2>Requirements</h2>
    <h3>Documentation</h3>
    <p>Documentation details...</p>
  </section>
</article>
```

---

## 5. Performance & Clean Code Skill

**Description**: Ensures accessibility, semantic HTML5, ARIA compliance, and Lighthouse optimization.

**When to Use**: During code reviews, refactoring, or before deployment.

**Keywords**: performance, accessibility, ARIA, semantic, Lighthouse, optimization, alt text.

### Functionality
- Validates WCAG 2.1 AA accessibility standards
- Implements ARIA labels and roles where needed
- Optimizes images and lazy-loading
- Minimizes JavaScript bundle size
- Ensures keyboard navigation works

### Instructions
1. Test with screen readers (NVDA, JAWS)
2. Add alt text to all images
3. Use semantic HTML over divs
4. Implement ARIA roles/labels for complex interactions
5. Run Lighthouse audits before deployment
6. Optimize images (WebP, compression)

### Example
```jsx
<img 
  src="product.jpg" 
  alt="Queensland mineral product with certification badge"
  loading="lazy"
/>

<button 
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  ✕
</button>
```

---

## 6. Design System Skill

**Description**: Locks Tailwind config (colors, spacing, typography). Provides tokens for consistent styling.

**When to Use**: At project setup or when enforcing brand consistency.

**Keywords**: Tailwind config, colors, spacing, typography, design system, tokens.

### Functionality
- Centralizes design tokens in Tailwind config
- Defines color palette (primary, secondary, neutral, semantic)
- Locks spacing, border-radius, shadows
- Prevents arbitrary values; enforces consistency
- Documents token usage

### Instructions
1. Configure `tailwind.config.ts` with brand colors
2. Define extended spacing, rounded-radius, shadows
3. Document token names and use cases
4. Restrict arbitrary values in ESLint config
5. Version control the config changes

### Example
```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#FF6B35',
        neutral: { 50: '#F9FAFB', 900: '#111827' }
      },
      spacing: { 'xs': '4px', 'sm': '8px', 'md': '16px' }
    }
  }
}
```

---

## 7. Brand Voice Skill

**Description**: Ensures copywriting tone matches corporate/export authority. Avoids hype or casual language.

**When to Use**: When writing product descriptions, certifications, or marketing copy.

**Keywords**: tone, copywriting, professional, authoritative, export, certifications.

### Functionality
- Establishes professional, authoritative tone
- Maintains consistency across all copy
- Emphasizes certifications and compliance
- Uses industry terminology correctly
- Avoids marketing hyperbole

### Instructions
1. Use active voice and clear language
2. Lead with credentials and certifications
3. Highlight export quality and compliance
4. Use industry-specific terminology
5. Maintain consistent voice across all pages

### Example
```
❌ "Amazing products you'll love!"
✅ "Certified Queensland minerals meeting international export standards"

❌ "Revolutionary innovation"
✅ "ISO-certified production process meeting A-grade specifications"
```

---

## 8. Component Standards Skill

**Description**: Defines rules for buttons, cards, forms, and hover states. Keeps UI consistent and minimal.

**When to Use**: When designing or reviewing UI elements for consistency.

**Keywords**: buttons, cards, forms, hover, rounded, Tailwind utilities, standards.

### Functionality
- Establishes button styles and states (normal, hover, active, disabled)
- Defines card layouts and shadows
- Standardizes form inputs (text, select, checkbox, radio)
- Creates consistent hover/focus states
- Maintains minimal, clean aesthetic

### Instructions
1. Define button variants (primary, secondary, outline, text)
2. Implement state styles (hover, focus, active, disabled)
3. Use consistent border-radius (rounded-md, lg, etc.)
4. Add shadow hierarchy for depth
5. Test contrast and accessibility

### Example
```jsx
// Button states
<button className="bg-primary-600 text-white rounded-md px-4 py-2
  hover:bg-primary-700 active:bg-primary-800 disabled:opacity-50">
  Primary Button
</button>

// Card with shadow
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

---

## 9. Export Compliance Skill

**Description**: Ensures product specs, certifications, and sustainability data are structured and compliant.

**When to Use**: When adding product details, certifications, or downloadable spec sheets.

**Keywords**: compliance, certifications, specs, sustainability, schema.org, structured data.

### Functionality
- Structures product specifications in machine-readable format
- Documents certifications and compliance claims
- Maintains product provenance and sustainability data
- Implements schema.org structured data
- Creates compliance checklists

### Instructions
1. Use schema.org Product/Organization schema
2. Document all certifications with dates and issuing bodies
3. Structure specs in tables or JSON-LD
4. Include downloadable compliance documents
5. Track and display sustainability metrics
6. Add audit trails for regulatory requirements

### Example
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Queensland Iron Ore",
  "description": "Grade A certified mineral",
  "aggregateRating": { "ratingValue": "A-Grade" },
  "certification": "ISO-9001, International Standards"
}
```

---

## Quick Reference Matrix

| Skill | When to Use | Primary Focus |
|-------|-----------|---------------|
| Layout Architect | Page structure setup | Grids, breakpoints, spacing |
| Typography | Text & heading setup | Fonts, hierarchy, readability |
| Component Engineer | Repeating UI elements | Reusability, modularity |
| Content Structure | Page drafting | Sections, SEO, hierarchy |
| Performance & Clean Code | Before deployment | Accessibility, optimization |
| Design System | Project setup | Tokens, consistency |
| Brand Voice | Writing copy | Tone, professionalism |
| Component Standards | UI consistency | Buttons, cards, states |
| Export Compliance | Product detail pages | Specs, certifications |
