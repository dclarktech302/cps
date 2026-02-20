import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next.js requires 'unsafe-inline' for its runtime scripts and styles.
              // Switch to nonce-based CSP for a stricter setup.
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              // data: for favicon; https: for OG/social images hosted externally
              "img-src 'self' data: https:",
              // Fonts are downloaded locally by next/font — no external origin needed
              "font-src 'self'",
              // API routes and fetch calls
              "connect-src 'self'",
              // Prevent framing from any origin
              "frame-ancestors 'none'",
              // Restrict form targets
              "form-action 'self'",
              // Disallow plugins (Flash etc.)
              "object-src 'none'",
              "base-uri 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
