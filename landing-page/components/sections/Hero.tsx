'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import styles from './Hero.module.css';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let W: number, H: number;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * 1400,
      y: Math.random() * 800,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.8 + 0.8,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37,99,235,.3)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37,99,235,${0.1 * (1 - d / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.left}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span className={styles.badgeText}>Family-Owned · Community-Focused</span>
        </div>
        <h1>
          Where <em>Precision</em>
          <br />
          Meets
          <br />
          Possibility.
        </h1>
        <p className={styles.subtitle}>
          Clark &amp; Co. — a family business with 15+ years of combined expertise in finance,
          technology, and human resources. Proudly serving our community with care and integrity.
        </p>
        <div className={styles.actions}>
          <Button onClick={() => onNavigate('services')}>
            Explore Services
            <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button variant="outline" onClick={() => onNavigate('contact')}>
            Free Consultation
          </Button>
        </div>
        <div className={styles.trust}>
          {[
            { n: '15', s: '+', l: 'Years Combined\nExperience' },
            { n: '4', s: '', l: 'Core Services\nUnder One Roof' },
            { n: '100', s: '%', l: 'Community\nCommitted' },
          ].map((t, i) => (
            <div key={t.n} className={styles.trustGroup}>
              {i > 0 && <div className={styles.divider} />}
              <div>
                <div className={styles.trustNum}>
                  {t.n}
                  {t.s && <sup>{t.s}</sup>}
                </div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.gridBg} />
        <div className={styles.orb} />
        <div className={styles.pills}>
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={styles.pill}
              onClick={() => (s.link ? window.open(s.link, '_blank') : onNavigate('services'))}
            >
              <div className={styles.pillIcon} style={{ background: s.bg }}>
                {s.icon}
              </div>
              <div className={styles.pillText}>
                <strong>{s.label}</strong>
                <span>{s.desc.split('.')[0]}.</span>
              </div>
              <span className={styles.pillArrow}>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
