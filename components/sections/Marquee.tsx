import { MARQUEE_ITEMS } from '@/lib/constants';
import styles from './Marquee.module.css';

export function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {[...Array(2)].map((_, r) =>
          MARQUEE_ITEMS.map((text, i) => (
            <span key={`${r}-${i}`} className={styles.item}>
              {text}
              <span className={styles.dot} />
            </span>
          ))
        )}
      </div>
    </div>
  );
}
