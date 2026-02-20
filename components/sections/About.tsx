import { PILLARS } from '@/lib/constants';
import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageBox}>
            <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="500" fill="#e8edf5" />
              <line x1="0" y1="0" x2="400" y2="500" stroke="#d0d9e8" strokeWidth="1" />
              <line x1="400" y1="0" x2="0" y2="500" stroke="#d0d9e8" strokeWidth="1" />
              <line x1="200" y1="0" x2="200" y2="500" stroke="#d0d9e8" strokeWidth="1" />
              <line x1="0" y1="250" x2="400" y2="250" stroke="#d0d9e8" strokeWidth="1" />
              <circle cx="145" cy="178" r="46" fill="#b0c0d8" />
              <path d="M72 328 Q72 275 145 275 Q218 275 218 328 L218 388 L72 388 Z" fill="#b0c0d8" />
              <circle cx="272" cy="195" r="38" fill="#c4d0e4" />
              <path d="M212 338 Q212 290 272 290 Q332 290 332 338 L332 388 L212 388 Z" fill="#c4d0e4" />
              <rect x="60" y="408" width="280" height="72" rx="8" fill="white" fillOpacity="0.82" />
              <text
                x="200"
                y="436"
                textAnchor="middle"
                fontFamily="Georgia,serif"
                fontSize="15"
                fill="#1a3a5c"
                fontWeight="600"
              >
                Clark &amp; Co.
              </text>
              <text
                x="200"
                y="455"
                textAnchor="middle"
                fontFamily="Arial,sans-serif"
                fontSize="11"
                fill="#6b7592"
              >
                Professional Services
              </text>
              <text
                x="200"
                y="470"
                textAnchor="middle"
                fontFamily="Arial,sans-serif"
                fontSize="10"
                fill="#6b7592"
              >
                Family · Community · Excellence
              </text>
            </svg>
            <div className={styles.badge}>
              <div className={styles.badgeNum}>
                15<span>+</span>
              </div>
              <div className={styles.badgeLabel}>
                Years of Combined
                <br />
                Expertise
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.label}>Our Story</p>
            <div className={styles.rule} />
            <h2>
              A Family Built on <em>Service.</em>
            </h2>
            <p>
              Clark &amp; Co. was founded on a simple belief: every business and individual in our
              community deserves access to high-quality professional services delivered with genuine care.
            </p>
            <p>
              We are a family business with over 15 years of combined experience spanning software
              engineering and human resource management — a unique blend that lets us see your business
              from every angle.
            </p>
            <p>
              When you work with us, you work with people invested in your outcome, rooted in the same
              community, and proud of every client we serve.
            </p>

            <div className={styles.pillars}>
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{pillar.icon}</div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
