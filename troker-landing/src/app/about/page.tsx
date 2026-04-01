import { Metadata } from "next";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const config = getDomainConfig();
  const title = `About ${config.brandName} | Bryce Choquer — Founder`;
  const description = `Meet Bryce Choquer, founder of ${config.brandName}. 8+ years, 150+ clients, and data-driven SEO strategies helping ${config.region} businesses dominate Google.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${config.domain}/about`,
      siteName: config.brandName,
      images: [
        {
          url: `https://${config.domain}/images/og-default.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://${config.domain}/about`,
    },
  };
}

export default function AboutPage() {
  const config = getDomainConfig();

  return (
    <ClientLayout domain={config.domain} region={config.region}>
      <Nav brandName={config.brandName} />
      <About locality={config.locality} region={config.region} />
      <MobileCta />
      <Stats />
      <Portfolio slug={config.slug} />
      <Testimonials slug={config.slug} />
      <CtaBanner />
      <Footer brandName={config.brandName} />
    </ClientLayout>
  );
}
