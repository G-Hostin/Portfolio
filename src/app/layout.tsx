import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import seo from "../content/seo-keyword.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.canonical),
  title: {
    default: seo.title,
    template: `%s | ${seo.siteName ?? seo.title}`,
  },
  description: seo.description,
  keywords: seo.keywords,

  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "/",
    siteName: seo.siteName ?? seo.title,
    title: seo.title,
    description: seo.description,
    images: seo.ogImage
      ? [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }]
      : undefined,
    locale: seo.locale ?? "fr_FR",
  },

  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: seo.ogImage ? [seo.ogImage] : undefined,
    creator: seo.twitterHandle,
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/** JSON-LD Person donnees structurees */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Grégory Hostin",
              jobTitle: "Développeur Front-End",
              url: seo.canonical,
              sameAs: ["https://github.com/G-Hostin"],
            }),
          }}
        />
      </body>
    </html>
  );
}
