'use client';

import { useEffect, useRef, useState } from 'react';
import { METRICS, FEATURES, PERFORMANCE_BARS } from '@/lib/constants';
import styles from './WhyUs.module.css';

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1800, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <div className={styles.metricCell} ref={ref}>
      <div className={styles.metricNum}>
        {val}
        <span className={styles.metricUnit}>{suffix}</span>
      </div>
      <div className={styles.metricLabel}>{label}</div>
    </div>
  );
}

function ProgressBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGo(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginTop: '2.5rem' }}>
      {PERFORMANCE_BARS.map((b, i) => (
        <div key={b.label} className={styles.barRow}>
          <div className={styles.barTop}>
            <span style={{ color: 'var(--gray-700)', fontSize: '0.85rem' }}>{b.label}</span>
            <span>{b.pct}%</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{
                width: go ? `${b.pct}%` : '0%',
                transitionDelay: `${i * 0.13}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function WhyUs() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div>
            <p className={styles.label}>Why Choose Us</p>
            <div className={styles.rule} />
            <h2 className={styles.heading}>The Standard We Hold Ourselves To</h2>
            <div className={styles.metricRow}>
              {METRICS.map((m) => (
                <Counter key={m.label} target={m.num} suffix={m.suffix} label={m.label} />
              ))}
            </div>
          </div>
          <div>
            <p className={styles.label}>Performance Snapshot</p>
            <div className={styles.rule} />
            <ProgressBars />
          </div>
        </div>

        <div className={styles.featureGrid}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={styles.featureRow} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className={styles.check}>
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
