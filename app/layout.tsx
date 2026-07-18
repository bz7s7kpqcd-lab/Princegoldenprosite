import type { Metadata } from "next";
import { Space_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://princegoldenpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prince GoldenPro — Founder, Product Builder, AI Engineer",
  description:
    "Prince GoldenPro is an independent founder building AI-powered products — Genxix, DebugGPT, FixAR, and Humanode ID — entirely from a phone, shipped in public.",
  keywords: [
    "Prince GoldenPro",
    "founder",
    "AI engineer",
    "product builder",
    "Genxix",
    "DebugGPT",
    "build in public",
  ],
  authors: [{ name: "Prince GoldenPro" }],
  openGraph: {
    title: "Prince GoldenPro — Founder, Product Builder, AI Engineer",
    description:
      "Building AI products that help people create, build, and solve real-world problems. Shipped solo, from a phone, in public.",
    url: siteUrl,
    siteName: "Prince GoldenPro",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince GoldenPro — Founder, Product Builder, AI Engineer",
    description:
      "Building AI products that help people create, build, and solve real-world problems.",
    creator: "@princegoldenpro",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
