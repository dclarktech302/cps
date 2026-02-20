import styles from './Footer.module.css';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              Clark <span>&amp;</span> Co.
            </div>
            <p>
              A family business dedicated to serving our community with professional expertise in finance,
              technology, and business strategy.
            </p>
          </div>

          <div className={styles.col}>
            <h5>Services</h5>
            <ul>
              <li>
                <button className={styles.link} onClick={() => onNavigate('services')}>
                  Bookkeeping
                </button>
              </li>
              <li>
                <a
                  href="https://dclarktech302.github.io/sampletaxsite.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Tax Services
                </a>
              </li>
              <li>
                <button className={styles.link} onClick={() => onNavigate('services')}>
                  Web Development
                </button>
              </li>
              <li>
                <button className={styles.link} onClick={() => onNavigate('services')}>
                  Business Consultation
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5>Company</h5>
            <ul>
              <li>
                <button className={styles.link} onClick={() => onNavigate('about')}>
                  About Us
                </button>
              </li>
              <li>
                <button className={styles.link} onClick={() => onNavigate('why')}>
                  Why Choose Us
                </button>
              </li>
              <li>
                <button className={styles.link} onClick={() => onNavigate('process')}>
                  How It Works
                </button>
              </li>
              <li>
                <button className={styles.link} onClick={() => onNavigate('testimonials')}>
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5>Connect</h5>
            <ul>
              <li>
                <button className={styles.link} onClick={() => onNavigate('contact')}>
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  className={styles.link}
                  // TODO: Replace 1XXXXXXXXXX with the actual business WhatsApp number
                  onClick={() => window.open('https://wa.me/1XXXXXXXXXX', '_blank')}
                >
                  WhatsApp
                </button>
              </li>
              <li>
                <button className={styles.link} onClick={() => onNavigate('faq')}>
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="https://dclarktech302.github.io/sampletaxsite.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  File Taxes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Clark &amp; Co. Professional Services. All rights reserved.</p>
          <span className={styles.tag}>Where precision meets possibility.</span>
        </div>
      </div>
    </footer>
  );
}
