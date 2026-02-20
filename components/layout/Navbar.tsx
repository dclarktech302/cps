'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import styles from './Navbar.module.css';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'why', label: 'Why Us' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigate = (section: string) => {
    setMobileOpen(false);
    document.body.style.overflow = '';
    onNavigate(section);
  };

  const toggleMobile = () => {
    const newState = !mobileOpen;
    setMobileOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <button className={styles.logo} onClick={() => handleNavigate('home')}>
            Clark <span>&amp;</span> Co.
          </button>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleNavigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Button
                variant="navy"
                onClick={() => handleNavigate('contact')}
                style={{ padding: '0.55rem 1.3rem', fontSize: '0.875rem' }}
              >
                Get Started
              </Button>
            </li>
          </ul>
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={toggleMobile}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={styles.drawerLink}
            onClick={() => handleNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
        <Button
          variant="navy"
          onClick={() => handleNavigate('contact')}
          style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
        >
          Get Started →
        </Button>
      </div>
    </>
  );
}
