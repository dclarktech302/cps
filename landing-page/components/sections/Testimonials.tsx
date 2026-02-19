import { TESTIMONIALS } from '@/lib/constants';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.wrapper} id="testimonials">
      <div className={styles.container}>
        <p className={styles.label}>Testimonials</p>
        <div className={styles.rule} />
        <h2 className={styles.heading}>What Our Community Says</h2>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={styles.card} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
              <blockquote>&quot;{t.quote}&quot;</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
