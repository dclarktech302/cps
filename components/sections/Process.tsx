import { PROCESS_STEPS } from '@/lib/constants';
import styles from './Process.module.css';

export function Process() {
  return (
    <section className={styles.wrapper} id="process">
      <div className={styles.container}>
        <p className={styles.label}>How It Works</p>
        <div className={styles.rule} />
        <h2 className={styles.heading}>
          Simple Steps,
          <br />
          Lasting Results.
        </h2>
        <p className={styles.description}>
          Getting started is easy. Here&apos;s exactly what to expect.
        </p>

        <div className={styles.grid}>
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.n} className={styles.step} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={styles.circle}>{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
