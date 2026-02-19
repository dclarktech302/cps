import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #fff 0%, var(--off-white) 100%)',
      }}
    >
      <div style={{ maxWidth: '520px' }}>
        <div
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '8rem',
            fontWeight: 700,
            color: 'var(--gray-100)',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '2.5rem',
            color: 'var(--navy)',
            marginBottom: '1rem',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: 'var(--gray-500)',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on
          track.
        </p>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button variant="navy">
            Return Home
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}
