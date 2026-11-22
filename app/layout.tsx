import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://toolhub.org.in"),
  title: {
    default: "ToolHub – Free Online Tools for Everyday Use",
    template: "%s | ToolHub",
  },
  description:
    "ToolHub offers free, browser-based online tools — including a real-time GPS speedometer, unit converters, and more. No app download required. Works on any device.",
  keywords: [
    "free online tools",
    "toolhub",
    "online speedometer",
    "GPS speed checker",
    "browser tools",
    "unit converter",
    "web tools",
    "toolhub.org.in",
  ],
  authors: [{ name: "Mokshith Naik", url: "https://toolhub.org.in" }],
  creator: "Mokshith Naik",
  publisher: "ToolHub",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://toolhub.org.in",
    siteName: "ToolHub",
    title: "ToolHub – Free Online Tools for Everyday Use",
    description:
      "Free browser-based tools — GPS speedometer, converters, and more. No signup, no app. Just open and use.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolHub – Free Online Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolHub – Free Online Tools",
    description:
      "Free browser-based tools — GPS speedometer, converters, and more. No signup, no app.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://toolhub.org.in",
  },
  verification: {
    google: "qk9xEIeGpX5Z5Z803Jp8ldukwLorCNyTzxoUTAsiAwg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9344860798906442"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
