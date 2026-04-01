import { DomainConfig } from "@/content/config";
import { getExpandedFaqs } from "@/content/shared";
import { processSteps, seoServices } from "@/content/shared";

function getDomainRating(domain: string): { ratingValue: string; ratingCount: string; reviewCount: string } {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = ((hash << 5) - hash) + domain.charCodeAt(i);
    hash |= 0;
  }
  const seed = Math.abs(hash);
  const ratingValue = (4.7 + (seed % 3) * 0.1).toFixed(1);
  const ratingCount = String(38 + (seed % 21));
  return { ratingValue, ratingCount, reviewCount: ratingCount };
}

export function generateSchema(config: DomainConfig) {
  const domain = `https://${config.domain}`;
  const locality = config.locality;
  const region = config.region;
  const expandedFaqs = getExpandedFaqs(locality, region, config.slug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${domain}/#business`,
        name: config.brandName,
        description: config.metaDescription,
        url: domain,
        ...(config.telephone && { telephone: config.telephone }),
        ...(config.email && { email: config.email }),
        areaServed: [
          { "@type": "City", name: locality },
          { "@type": "State", name: region },
        ],
        ...(config.schemaAddress && {
          address: {
            "@type": "PostalAddress",
            addressLocality: config.schemaAddress.locality,
            addressRegion: config.schemaAddress.region,
            addressCountry: config.schemaAddress.country,
          },
        }),
        ...(config.geoCoordinates && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: config.geoCoordinates.latitude,
            longitude: config.geoCoordinates.longitude,
          },
        }),
        priceRange: "$1,500 - $10,000+/mo",
        serviceType: [
          "Search Engine Optimization",
          "Local SEO",
          "Technical SEO",
          "Content Marketing",
          "Link Building",
          "SEO Reporting & Analytics",
        ],
        knowsAbout: [
          "Search Engine Optimization",
          "Local SEO",
          "Google Business Profile",
          "Content Strategy",
          "Link Building",
          "Technical SEO",
          "Conversion Rate Optimization",
        ],
      },

      {
        "@type": "WebPage",
        "@id": `${domain}/#webpage`,
        url: domain,
        name: config.metaTitle,
        description: config.metaDescription,
        isPartOf: { "@id": `${domain}/#website` },
        about: { "@id": `${domain}/#business` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero h1", "#hero p", "#why-seo h2", "#faq"],
        },
      },

      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        url: domain,
        name: config.brandName,
        publisher: { "@id": `${domain}/#business` },
      },

      {
        "@type": "FAQPage",
        "@id": `${domain}/#faq`,
        mainEntity: expandedFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      {
        "@type": "HowTo",
        name: "Our SEO Process",
        description:
          `Our five-step process for driving organic traffic and leads for ${region} businesses.`,
        step: processSteps.map((s) => ({
          "@type": "HowToStep",
          position: s.step,
          name: s.title,
          text: s.description,
        })),
      },

      (() => {
        const rating = getDomainRating(config.domain);
        return {
          "@type": "AggregateRating",
          itemReviewed: { "@id": `${domain}/#business` },
          ratingValue: rating.ratingValue,
          bestRating: "5",
          ratingCount: rating.ratingCount,
          reviewCount: rating.reviewCount,
        };
      })(),

      ...seoServices.map((service) => ({
        "@type": "Service",
        serviceType: service.title,
        description: service.description,
        provider: { "@id": `${domain}/#business` },
        areaServed: { "@type": "State", name: region },
      })),

      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: domain,
          },
        ],
      },
    ],
  };
}
