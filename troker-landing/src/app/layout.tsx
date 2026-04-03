import type { Metadata } from "next";
import { neueMontreal, neueBit, ibmPlexMono } from "./fonts";
import { siteConfig } from "@/lib/siteConfig";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | AI-Powered Custom Software That Replaces SaaS`,
  description:
    "FuturLabs is a custom AI software development agency that builds platforms to replace expensive SaaS subscriptions for mid-market companies ($10M–$250M revenue). Founded by Bryce Choquer. 40+ projects delivered. Clients own 100% of the code. Average savings: $180K/year in SaaS licensing.",
  keywords:
    "AI development agency, custom software development, AI software agency, replace SaaS, own your code, custom CRM, custom ERP, SaaS alternative, mid-market software, AI agent development, best AI development agency",
  openGraph: {
    title: `${siteConfig.name} | Own Your Code. Replace Your SaaS.`,
    description:
      "FuturLabs is a custom AI software development agency that builds platforms to replace expensive SaaS subscriptions for mid-market companies. 40+ projects delivered. Clients own 100% of the code.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Own Your Code. Replace Your SaaS.`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`w-mod-js lenis ${neueMontreal.variable} ${neueBit.variable} ${ibmPlexMono.variable}`}
      data-scroll-orientation="vertical"
    >
      <head suppressHydrationWarning>
        {siteConfig.gtmId && <GoogleTagManager gtmId={siteConfig.gtmId} />}
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {siteConfig.gtmId && <GoogleTagManagerNoscript gtmId={siteConfig.gtmId} />}
        {children}
      </body>
    </html>
  );
}
