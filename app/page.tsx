'use client';

import { useState, useEffect, useCallback } from 'react';
import Script from 'next/script';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { WhyUs } from '@/components/sections/WhyUs';
import { Process } from '@/components/sections/Process';
import { FAQ } from '@/components/sections/FAQ';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { organizationSchema, breadcrumbSchema, faqSchema } from './structured-data';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    const sections = ['home', 'services', 'about', 'why', 'process', 'faq', 'testimonials', 'contact'];

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 90) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth',
      });
    }
  }, []);

  const showToast = () => {
    setToast({ show: true, message: "Message sent! We'll be in touch within one business day." });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4500);
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <Marquee />
      <Services onNavigate={handleNavigate} />
      <About />
      <WhyUs />
      <Process />
      <FAQ onNavigate={handleNavigate} />
      <Testimonials />
      <Contact onSuccess={showToast} />
      <Footer onNavigate={handleNavigate} />

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          zIndex: 400,
          width: '46px',
          height: '46px',
          background: 'var(--navy)',
          color: '#fff',
          borderRadius: '50%',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--sh-md)',
          transition: 'all 0.3s',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'none' : 'translateY(20px)',
          pointerEvents: showBackToTop ? 'all' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--blue)';
          e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--navy)';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 12V4M4 8l4-4 4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Toast Notification */}
      <div
        className={`toast ${toast.show ? 'show' : ''}`}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          background: 'var(--navy)',
          color: '#fff',
          padding: '1rem 1.5rem',
          borderRadius: '14px',
          boxShadow: 'var(--sh-xl)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.9rem',
          fontWeight: 500,
          transform: toast.show ? 'none' : 'translateY(120px)',
          opacity: toast.show ? 1 : 0,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          maxWidth: '360px',
          pointerEvents: toast.show ? 'all' : 'none',
        }}
      >
        <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>✅</span>
        <span style={{ flex: 1 }}>{toast.message}</span>
        <button
          onClick={() => setToast((t) => ({ ...t, show: false }))}
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.55)',
            cursor: 'pointer',
            fontSize: '1.2rem',
            lineHeight: 1,
            padding: 0,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}
        >
          ×
        </button>
      </div>
    </>
  );
}
