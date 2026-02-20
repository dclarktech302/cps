# Clark & Co. Professional Services

A professional, SEO-optimized landing page built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, React 19, TypeScript, Tailwind CSS v4
- **SEO Optimized**: Structured data (JSON-LD), comprehensive meta tags, sitemap, robots.txt
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Performance**: Server components, optimized fonts, security headers, code splitting
- **Accessibility**: ARIA labels, focus-visible states, prefers-reduced-motion support
- **Interactive Components**: Smooth scroll navigation, animated counters, form validation
- **Professional UI**: Custom fonts (Cormorant Garamond & Outfit), CSS Modules, animations

## 📁 Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles & CSS variables
│   ├── structured-data.ts  # JSON-LD schemas for SEO
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── manifest.ts         # PWA manifest
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading state
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navigation with mobile menu
│   │   └── Footer.tsx      # Multi-column footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with canvas animation
│   │   ├── Services.tsx    # Tabbed service cards
│   │   ├── About.tsx       # About with SVG illustration
│   │   ├── WhyUs.tsx       # Metrics & progress bars
│   │   ├── Process.tsx     # 4-step process
│   │   ├── FAQ.tsx         # Accordion FAQ
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx     # Contact form
│   │   └── Marquee.tsx     # Animated banner
│   └── ui/
│       └── Button.tsx      # Reusable button component
├── lib/
│   └── constants.ts        # Data constants
└── public/
    └── robots.txt          # Search engine directives
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Customization

### Update Business Information

1. **Contact Details** - Edit `app/structured-data.ts` and `components/sections/Contact.tsx`
2. **Services** - Modify `lib/constants.ts` (SERVICES array)
3. **FAQs** - Update `lib/constants.ts` (FAQS array)
4. **Testimonials** - Edit `lib/constants.ts` (TESTIMONIALS array)
5. **Colors** - Adjust CSS variables in `app/globals.css`

### SEO Configuration

1. **Meta Tags** - Update `app/layout.tsx` metadata
2. **Structured Data** - Edit `app/structured-data.ts`
3. **Sitemap** - Modify `app/sitemap.ts`
4. **Domain** - Replace `https://clarkandco.com` throughout the project

### Add Images

Place images in `/public` folder and reference them:
- Logo: `/logo.png`
- OG Image: `/og-image.png` (1200x630px)
- Icons: `/icon-192.png`, `/icon-512.png`

## 📊 SEO & Performance

- **Structured Data**: Organization, FAQ, and Breadcrumb schemas
- **Meta Tags**: Open Graph, Twitter Cards, comprehensive keywords
- **Security Headers**: HSTS, X-Frame-Options, CSP-ready
- **Accessibility**: WCAG 2.1 compliant, keyboard navigation
- **Performance**: Optimized fonts, lazy loading, code splitting

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## 📝 Environment Variables

Create `.env.local` for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://clarkandco.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@clarkandco.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1XXXXXXXXXX
```

## 🔧 Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x, CSS Modules
- **Fonts**: Google Fonts (Cormorant Garamond, Outfit)

## 📄 License

© 2025 Clark & Co. Professional Services. All rights reserved.

## 🤝 Support

For questions or support, contact us at contact@clarkandco.com
