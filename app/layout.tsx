import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import { createMetadata } from "@/lib/metadata";
import {
  lodgingSchema,
  touristAttractionSchema,
  faqSchema,
  websiteSchema,
} from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/layout/floating-whatsapp";
import StickyMobileCta from "@/components/layout/sticky-mobile-cta";

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
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
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#161310" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-brand-ink text-brand-ivory antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCta />
        {/* Spacer so sticky mobile CTA never covers footer content */}
        <div className="h-16 lg:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
