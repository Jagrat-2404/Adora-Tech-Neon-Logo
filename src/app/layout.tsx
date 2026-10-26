import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { ScrollAnimationObserver } from "@/components/ScrollAnimationObserver";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#081B19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adoratech.com"),
  title: "ADORA TECH — Enterprise Software Studio | Websites, Mobile Apps & Cloud Infrastructure",
  description:
    "ADORA TECH is an independent digital studio & software engineering firm. We engineer high-performance Next.js web platforms, native mobile applications, custom cloud software, and zero-trust infrastructure for high-growth enterprises worldwide.",
  keywords: [
    "Enterprise Software Development",
    "Next.js Web Development Studio",
    "Mobile App Development Company",
    "Custom Cloud Software",
    "React Native Developers",
    "Kubernetes and DevOps Automation",
    "UI UX Design Systems",
    "Zero Downtime Database Migration",
    "ADORA TECH",
    "Surat Software Agency",
    "Global IT Engineering",
  ],
  authors: [{ name: "ADORA TECH", url: "https://adoratech.com" }],
  creator: "ADORA TECH",
  publisher: "ADORA TECH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://adoratech.com",
  },
  openGraph: {
    title: "ADORA TECH — Enterprise Software, Web Platforms & Cloud Infrastructure",
    description:
      "Mission-critical custom software, high-performance web platforms, native mobile apps, and zero-trust cloud DevOps for high-growth global businesses.",
    type: "website",
    locale: "en_US",
    url: "https://adoratech.com",
    siteName: "ADORA TECH",
    images: [
      {
        url: "/logo-attached.jpg",
        width: 1200,
        height: 630,
        alt: "ADORA TECH Digital Studio & Enterprise Cloud Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADORA TECH — Enterprise Software Studio",
    description:
      "Mission-critical custom software, high-performance web platforms, and zero-trust cloud DevOps.",
    images: ["/logo-attached.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo-o-only.png", type: "image/png" },
      { url: "/logo-o-only.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-o-only.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo-o-only.png",
    apple: "/logo-o-only.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://adoratech.com/#organization",
        name: "ADORA TECH",
        url: "https://adoratech.com",
        logo: "https://adoratech.com/logo-cropped.png",
        email: "hello@adoratech.com",
        telephone: "+917600466643",
        description:
          "ADORA TECH is an independent digital studio & software engineering firm developing websites, mobile applications, and custom cloud software.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        sameAs: [
          "https://github.com/adoratech",
          "https://linkedin.com/company/adoratech",
          "https://twitter.com/adoratech",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://adoratech.com/#service",
        name: "ADORA TECH Software Engineering",
        url: "https://adoratech.com",
        priceRange: "$$$",
        currenciesAccepted: "USD, EUR, GBP, INR",
        paymentAccepted: "Wire Transfer, ACH, Corporate Cards",
        areaServed: ["United States", "United Kingdom", "United Arab Emirates", "India", "Global"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software & IT Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "High-Performance Web Platforms",
                description: "Sub-50ms TTFB Next.js 15 web applications and headless e-commerce platforms.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mission-Critical Mobile Apps",
                description: "Offline-first React Native and SwiftUI iOS and Android applications.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Cloud Software & APIs",
                description: "High-concurrency Go and Node.js microservices with distributed PostgreSQL.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://adoratech.com/#website",
        url: "https://adoratech.com",
        name: "ADORA TECH",
        publisher: {
          "@id": "https://adoratech.com/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-o-only.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-o-only.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-o-only.png" />
        <link rel="shortcut icon" href="/logo-o-only.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-[#081B19] text-[#F1F3EB] font-sans antialiased selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]"
        style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#102A26] focus:text-[#8DE0C1] focus:border focus:border-[#8DE0C1] focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <MouseSpotlight />
          <PageTransitionProvider>
            <ScrollAnimationObserver />
            {children}
          </PageTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
