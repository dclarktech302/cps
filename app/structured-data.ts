export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Clark & Co. Professional Services',
  description: 'Family business with 15+ years of combined expertise in bookkeeping, tax filing, web development, and business consultation.',
  url: 'https://clarkandco.com',
  logo: 'https://clarkandco.com/logo.png',
  image: 'https://clarkandco.com/og-image.png',
  // TODO: Update the following placeholder values with real business information before deployment
  // (telephone, email, addressLocality, addressRegion, latitude, longitude)
  telephone: '+1-XXX-XXX-XXXX',
  email: 'contact@clarkandco.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.0,
    longitude: 0.0,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'State',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Professional Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bookkeeping Services',
          description: 'Accurate, consistent financial records with monthly reconciliation, P&L statements, and cash flow tracking.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tax Preparation & Filing',
          description: 'Individual and business tax returns, IRS e-filing, audit support, and tax planning.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Modern, fast, and professional websites built to represent your brand with pride.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Consultation',
          description: 'Strategic guidance rooted in real-world HR and software experience.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Marcus R.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'The team genuinely cared about my situation and handled my small business taxes flawlessly.',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sandra T.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'The website they built for my consulting practice is stunning — fast, professional, and perfectly on brand.',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'James L.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'Their HR background gave me perspectives I\'d never considered. The consultation completely changed how I approach operations.',
    },
  ],
  sameAs: [
    'https://www.facebook.com/clarkandco',
    'https://www.linkedin.com/company/clarkandco',
    'https://twitter.com/clarkandco',
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://clarkandco.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://clarkandco.com#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'About',
      item: 'https://clarkandco.com#about',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://clarkandco.com#contact',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Clark & Co. Professional Services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are a family business with over 15 years of combined experience in software engineering and human resource management. Our mission: deliver high-quality professional services to our local community with integrity, transparency, and genuine care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer four core services: Bookkeeping, Tax Preparation & Filing, Web Development, and Business Consultation. Many clients work with us across multiple services, allowing us to provide a more integrated strategy for their business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve individuals as well as businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We work with individuals needing tax preparation and financial guidance, as well as small and medium businesses that need bookkeeping, web development, or strategic consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The easiest way is to fill out our contact form or message us on WhatsApp. We offer a free initial consultation to understand your needs — no commitment required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do your services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing is tailored to each client\'s unique situation and scope of work. We believe in transparent, fair pricing with no hidden fees. During your free consultation we\'ll provide a clear quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you available year-round or just during tax season?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'re available year-round. While taxes have a season, smart financial management and business strategy don\'t. We\'re here all year for bookkeeping, web projects, and business guidance.',
      },
    },
  ],
};
