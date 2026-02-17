# Queensland Nuts Website

Modern B2B website for Queensland Nuts Limited - Premium Macadamia Processor from Kenya.

**Version:** 1.0  
**Built with:** Next.js 14, React 18, Tailwind CSS, TypeScript  
**Hosted on:** Vercel  
**Domain:** queenslandnuts.com (to be configured)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.local` and add your Formspree ID
   - Get your Formspree ID from https://formspree.io

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
queensland-nuts/
├── app/
│   ├── layout.tsx              # Root layout with Nav & Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── about/page.tsx          # About page
│   ├── products/page.tsx       # Products catalog
│   ├── process/page.tsx        # Processing page
│   ├── impact/page.tsx         # Sustainability page
│   └── contact/page.tsx        # Contact & forms
├── components/
│   ├── Navigation.tsx          # Top navigation bar
│   ├── Footer.tsx              # Footer component
│   ├── Hero.tsx                # Hero section
│   ├── ValuePillars.tsx        # Value proposition cards
│   ├── ProductsShowcase.tsx    # Featured products
│   ├── TrustBar.tsx            # Trust metrics
│   ├── StatsSection.tsx        # Stats section
│   ├── ProcessTimeline.tsx     # Process steps
│   ├── CTASection.tsx          # Call to action
│   ├── QuoteForm.tsx           # Quote request form
│   └── ContactForm.tsx         # Contact form
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Green:** #1B5E20
- **Forest Dark:** #0D3D13
- **Teal Accent:** #00897B
- **Amber Warm:** #D4941C
- **Earth Brown:** #5D4037
- **Charcoal:** #263238
- **Cream:** #FFF8E1
- **Light BG:** #F5F5F5

### Typography
- **Display:** Fraunces (serif) - Headings
- **Body:** Work Sans (sans-serif) - Main content

### Icons
- **lucide-react** - Professional icon system (NOT emojis)

## 🔧 Configuration

### Formspree Setup
1. Go to https://formspree.io
2. Create a new form
3. Copy your form ID
4. Add to `.env.local`: `NEXT_PUBLIC_FORMSPREE_ID=your_id`

### Deployment to Vercel
1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Next.js
4. Set environment variables
5. Deploy!

```bash
npm run build
npm run start
```

## 📄 Pages & Routes

- `/` - Homepage
- `/about` - About company
- `/products` - Product catalog (Styles 0-8)
- `/process` - Processing steps
- `/impact` - Sustainability & farmer partnerships
- `/contact` - Contact & quote forms

## 🔍 SEO Features

- ✅ Meta tags on all pages
- ✅ Open Graph tags
- ✅ Structured data (Schema.org)
- ✅ Sitemap.xml (auto-generated)
- ✅ robots.txt
- ✅ Mobile responsive
- ✅ Performance optimized

## ⚡ Performance

- **Lighthouse Score Target:** 90+
- **Page Speed:** <3s load time
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic with Next.js
- **Mobile First:** Responsive design

## 🛡️ Security & Best Practices

- ✅ HTTPS (automatic with Vercel)
- ✅ Form validation
- ✅ CSRF protection (Formspree)
- ✅ Content Security Policy headers
- ✅ No sensitive data in frontend

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

## 🧪 Testing

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- Color contrast 4.5:1

## 📦 Dependencies

Key packages:
- `next` - React framework
- `react` - UI library
- `tailwindcss` - Utility CSS
- `lucide-react` - Icon system
- `framer-motion` - Animations
- `@formspree/react` - Form handling

## 🚢 Deployment Checklist

Before launching:
- [ ] Update `.env.local` with Formspree ID
- [ ] Add domain to Vercel settings
- [ ] Test all forms
- [ ] Check performance (Lighthouse 90+)
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check meta tags in dev tools
- [ ] Setup Google Analytics (optional)

## 📞 Contact Information

**Client:**
- Isaac
- (+254) 723 638 417
- issac@queenslandnuts.com
- Grand Maria Business Park, Kenya

## 📝 Notes

- All copy should match the PRD exactly
- No emojis in code (use Lucide icons)
- Fraunces + Work Sans fonts via Google Fonts
- Images optimized with Next.js Image component
- Forms use Formspree for submissions
- Deploy to Vercel (free tier)

## 🎯 Success Metrics

- Quote form submissions: 5-10/month target
- Sample requests: 3-5/month target
- Page load: <3 seconds
- Bounce rate: <60%
- Mobile traffic: 40%+

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Formspree](https://formspree.io)
- [Framer Motion](https://www.framer.com/motion/)

---

**Last Updated:** February 16, 2026  
**Build Version:** 1.0.0
