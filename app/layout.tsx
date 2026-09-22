import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { createMetadata } from "@/lib/metadata";
import {
  lodgingSchema,
  touristAttractionSchema,
  faqSchema,
  websiteSchema,
} from "@/lib/schema";
import { MotionProvider, NOSCRIPT_FALLBACK } from "@/engine/motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/layout/floating-whatsapp";
import StickyMobileCta from "@/components/layout/sticky-mobile-cta";

// Single family — Manrope. Only the weights the design actually uses.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = createMetadata();

const schemas = [
  lodgingSchema,
  touristAttractionSchema,
  faqSchema,
  websiteSchema,
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={manrope.variable}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#161310" />
        {/* No-JS safety: scroll reveals ship opacity:0; this keeps every
            [data-reveal] element visible if JavaScript never runs. */}
        <noscript>
          <style>{NOSCRIPT_FALLBACK}</style>
        </noscript>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-brand-ink text-brand-ivory antialiased">
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileCta />
          {/* Spacer so sticky mobile CTA never covers footer content */}
          <div className="h-16 lg:hidden" aria-hidden="true" />
        </MotionProvider>
      </body>
    </html>
  );
}
