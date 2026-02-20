'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/constants';
import styles from './Services.module.css';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const visibleServices = activeTab === 'all' ? SERVICES : SERVICES.filter((s) => s.id === activeTab);

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <p className={styles.label}>What We Offer</p>
        <div className={styles.rule} />
        <h2 className={styles.heading}>
          Four Services.
          <br />
          One Trusted Team.
        </h2>
        <p className={styles.description}>
          Everything your business needs — financial, digital, and strategic — delivered by people who
          genuinely care about your success.
        </p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
            onClick={() => {
              setActiveTab('all');
              setExpandedService(null);
            }}
          >
            All Services
          </button>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              className={`${styles.tab} ${activeTab === s.id ? styles.active : ''}`}
              onClick={() => {
                setActiveTab(s.id);
                setExpandedService(null);
              }}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className={`${styles.card} ${expandedService === service.id ? styles.expanded : ''}`}
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              <div className={styles.number}>{service.num}</div>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.label}</h3>
              <p>{service.desc}</p>
              <ul className={`${styles.features} ${expandedService === service.id ? styles.show : ''}`}>
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className={styles.learnMore}>
                {expandedService === service.id ? 'Show less' : 'Learn more'}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    transform: expandedService === service.id ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.3s',
                  }}
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {service.link && (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  File Taxes Now →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
