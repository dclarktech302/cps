export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--off-white)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            border: '3px solid var(--gray-100)',
            borderTop: '3px solid var(--blue)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 1.5rem',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '1.5rem',
            color: 'var(--navy)',
            fontWeight: 600,
          }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}
