import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaliWorks | Reliable Lawn Care & Yard Services",
  description:
    "MaliWorks is a locally owned lawn care and yard service business run by Malachi, a hardworking young entrepreneur. Lawn mowing, edging, weed eating, yard cleanup, leaf removal, and more. Call or text (757) 777-6058 for a free quote.",
  keywords: [
    "lawn care",
    "grass cutting",
    "lawn mowing",
    "yard cleanup",
    "landscaping",
    "odd jobs",
    "weed eating",
    "edging",
    "leaf removal",
    "affordable lawn care",
    "local lawn service",
    "MaliWorks",
    "Malachi lawn care",
    "youth entrepreneur lawn service",
  ],
  metadataBase: new URL("https://maliworks.com"),
  openGraph: {
    title: "MaliWorks | Reliable Lawn Care & Yard Services",
    description:
      "Reliable lawn care from a hardworking young entrepreneur in your community. Call or text (757) 777-6058 for a free quote.",
    type: "website",
    url: "https://maliworks.com",
    locale: "en_US",
    siteName: "MaliWorks",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaliWorks – Reliable Lawn Care & Yard Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaliWorks | Reliable Lawn Care & Yard Services",
    description:
      "Reliable lawn care from a hardworking young entrepreneur. Call or text (757) 777-6058.",
    images: ["/images/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured data – LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MaliWorks",
              description:
                "Reliable lawn care and yard services run by Malachi, a hardworking young entrepreneur.",
              url: "https://maliworks.com",
              telephone: "+17577776058",
              email: "matchesson@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              priceRange: "$",
              openingHours: "Mo-Su 08:00-19:00",
              sameAs: ["https://maliworks.com"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
