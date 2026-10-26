import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "ADORA TECH — Digital Studio | Websites, Apps & Custom Software",
  description:
    "ADORA TECH is a digital studio engineering exceptional websites, mobile apps, and custom software with clarity, precision, and purposeful technology.",
  keywords: [
    "ADORA TECH",
    "digital studio",
    "web development",
    "mobile app development",
    "custom software engineering",
    "UI UX design",
  ],
  authors: [{ name: "ADORA TECH" }],
  openGraph: {
    title: "ADORA TECH — Digital Experiences. Thoughtfully Engineered.",
    description:
      "We build websites, apps, and custom software that turn your ideas into useful digital products.",
    type: "website",
    locale: "en_US",
    siteName: "ADORA TECH",
    images: [
      {
        url: "/logo-attached.jpg",
        width: 800,
        height: 466,
        alt: "ADORA TECH Neon Emblem",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${outfit.variable} dark scroll-smooth`}
    >
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
        {children}
      </body>
    </html>
  );
}
