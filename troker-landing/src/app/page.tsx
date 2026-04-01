import { getDomainConfig } from "@/lib/getDomainConfig";
import { generateSchema } from "@/lib/schema";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { WhySEO } from "@/components/WhySEO";
import { SEOServicesBreakdown } from "@/components/SEOServicesBreakdown";
import { SEOComparison } from "@/components/SEOComparison";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { LocalTrust } from "@/components/LocalTrust";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { MobileCta } from "@/components/MobileCta";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  const config = getDomainConfig();
  const schema = generateSchema(config);

  return (
    <ClientLayout domain={config.domain} region={config.region}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav brandName={config.brandName} />
      <Hero
        h1={config.heroH1}
        subhead={config.heroSubhead}
        region={config.region}
      />
      <Problem slug={config.slug} />
      <MobileCta />
      <Portfolio slug={config.slug} />
      <Testimonials slug={config.slug} />
      <CtaBanner />
      <Stats />
      <WhySEO />
      <MobileCta />
      <SEOServicesBreakdown slug={config.slug} />
      <SEOComparison slug={config.slug} />
      <Services />
      <Industries locality={config.locality} region={config.region} slug={config.slug} />
      <Process slug={config.slug} />
      <MobileCta />
      <Pricing region={config.region} slug={config.slug} />
      <LocalTrust
        locality={config.locality}
        stateCode={config.stateCode}
        region={config.region}
        nearbyAreas={config.nearbyAreas}
      />
      <Partners />
      <FAQ locality={config.locality} region={config.region} slug={config.slug} />
      <Footer brandName={config.brandName} />
    </ClientLayout>
  );
}
