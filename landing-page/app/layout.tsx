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
  keywords: ["bookkeeping", "tax services", "web development", "business consultation", "family business", "professional services", "Clark and Co"],
  authors: [{ name: "Clark & Co. Professional Services" }],
  openGraph: {
    type: "website",
    title: "Clark & Co. Professional Services",
    description: "Where precision meets possibility. Bookkeeping, taxes, web development & business consultation — rooted in community.",
    siteName: "Clark & Co. Professional Services",
  },
  robots: {
    index: true,
    follow: true,
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
