'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '480px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '3rem',
            color: 'var(--navy)',
            marginBottom: '1rem',
          }}
        >
          Something Went Wrong
        </h1>
        <p
          style={{
            color: 'var(--gray-500)',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            marginBottom: '2rem',
          }}
        >
          We apologize for the inconvenience. An unexpected error has occurred. Please try again or contact
          us if the problem persists.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="navy" onClick={reset}>
            Try Again
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = '/')}>
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
