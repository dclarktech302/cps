import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clark & Co. Professional Services | Where Precision Meets Possibility",
  description: "Clark & Co. Professional Services — a family business with 15+ years of combined expertise in bookkeeping, tax filing, web development, and business consultation. Proudly serving our local community.",
  keywords: [
    "bookkeeping services",
    "tax preparation",
    "tax filing",
    "web development",
    "business consultation",
    "family business",
    "professional services",
    "small business accounting",
    "HR consulting",
    "software engineering",
    "local business services",
    "Clark & Co",
  ],
  authors: [{ name: "Clark & Co. Professional Services" }],
  creator: "Clark & Co. Professional Services",
  publisher: "Clark & Co. Professional Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clarkandco.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clarkandco.com",
    title: "Clark & Co. Professional Services | Where Precision Meets Possibility",
    description: "Family business with 15+ years of expertise in bookkeeping, taxes, web development & business consultation. Serving our community with integrity.",
    siteName: "Clark & Co. Professional Services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clark & Co. Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clark & Co. Professional Services | Where Precision Meets Possibility",
    description: "Family business with 15+ years of expertise in bookkeeping, taxes, web development & business consultation.",
    images: ["/og-image.png"],
    creator: "@clarkandco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
