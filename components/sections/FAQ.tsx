'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/constants';
import styles from './FAQ.module.css';

interface FAQItemProps {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}

function FAQItem({ q, a, open, onToggle }: FAQItemProps) {
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.button} onClick={onToggle} aria-expanded={open}>
        <h4>{q}</h4>
        <span className={styles.icon}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`${styles.body} ${open ? styles.bodyOpen : ''}`}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export function FAQ({ onNavigate }: { onNavigate: (section: string) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <p className={styles.label}>Common Questions</p>
        <div className={styles.rule} />
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <p className={styles.description}>Everything you need to know before getting started.</p>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <p className={styles.footer}>
          Still have questions?{' '}
          <button onClick={() => onNavigate('contact')} className={styles.link}>
            Send us a message →
          </button>
        </p>
      </div>
    </section>
  );
}
