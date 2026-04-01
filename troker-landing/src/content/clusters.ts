/* eslint-disable @typescript-eslint/no-unused-vars */
/* ─── Market Cluster System ───
 * Defines the location-seo cluster for Georgia SEO Experts.
 * Contains pain points, industries, process emphasis,
 * pricing, and FAQ additions.
 */

export type MarketClusterId = "location-seo";

export interface CurrencyConfig {
  code: string;
  symbol: string;
  locale: string;
  exchangeRate: number;
}

export interface ClusterPainPoint {
  title: string;
  description: string;
}

export interface ClusterProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ClusterPricingTier {
  name: string;
  priceRange: string;
  description: string;
  includes: string[];
  color: string;
  featured?: boolean;
}

export interface ClusterIndustry {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface ClusterFAQ {
  category: "seo" | "pricing" | "process" | "local" | "general";
  question: string;
  answer: string;
}

export interface ClusterComparisonExtra {
  feature: string;
  professionalSEO: string | boolean;
  diySEO: string | boolean;
  noSEO: string | boolean;
}

export interface MarketCluster {
  id: MarketClusterId;
  defaultCurrency: CurrencyConfig;
  painPoints: ClusterPainPoint[];
  processSteps: ClusterProcessStep[];
  pricingTiers: ClusterPricingTier[];
  industries: (locality: string, region: string) => ClusterIndustry[];
  faqAdditions: (locality: string, region: string) => ClusterFAQ[];
  platformComparisonExtras: ClusterComparisonExtra[];
  seoServiceOverrides: Record<string, string>;
}

/* ─── Slug → Cluster Mapping ─── */

export const slugToCluster: Record<string, MarketClusterId> = {
  "georgia-seo": "location-seo",
};

export function getClusterId(slug: string): MarketClusterId {
  return slugToCluster[slug] || "location-seo";
}

export function getCluster(slug: string): MarketCluster {
  const id = getClusterId(slug);
  return clusterDefinitions[id];
}

/* ─── Currency Config ─── */

const currencies: Record<string, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", locale: "en-US", exchangeRate: 1 },
};

export function getCurrency(_slug: string): CurrencyConfig {
  return currencies.USD;
}

/* ─── Cluster Definitions ─── */

export const clusterDefinitions: Record<MarketClusterId, MarketCluster> = {
  /* ════════════════════════════════════════════════════
   * LOCATION-SEO — Georgia
   * ════════════════════════════════════════════════════ */
  "location-seo": {
    id: "location-seo",
    defaultCurrency: currencies.USD,
    painPoints: [
      {
        title: "You're invisible in the Map Pack",
        description:
          "When someone searches for your service in your city, the Google Map Pack shows your competitors — not you. That's where 42% of local clicks go.",
      },
      {
        title: "Your competitors dominate local search",
        description:
          "They're not better than you. They just have better SEO. Their websites rank higher, their Google Business Profile gets more visibility, and they're getting the calls that should be yours.",
      },
      {
        title: "Paid ads are eating your budget",
        description:
          "You're spending $3,000-$10,000 a month on Google Ads because your website doesn't rank organically. SEO builds a pipeline that doesn't disappear when you stop paying.",
      },
      {
        title: "Your website is a digital paperweight",
        description:
          "It looks fine, but it generates zero inbound leads. No traffic, no calls, no form submissions. A website without SEO is a billboard in an empty field.",
      },
      {
        title: "No one can find you outside referrals",
        description:
          "Your business grows through word of mouth, which is great — but it's not scalable. SEO gives you a second engine for growth that works 24/7.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Local SEO Audit",
        description:
          "We audit your website, Google Business Profile, local citations, and competitor landscape to identify exactly what's holding your rankings back.",
      },
      {
        step: 2,
        title: "Strategy & Keyword Mapping",
        description:
          "We research the keywords your customers are searching for in your area and build a strategy targeting the terms that drive the most qualified traffic.",
      },
      {
        step: 3,
        title: "On-Page & Technical Optimization",
        description:
          "We optimize your website's content, structure, speed, and technical health so Google can crawl, index, and rank your pages effectively.",
      },
      {
        step: 4,
        title: "Content & Authority Building",
        description:
          "We create locally relevant content, build authoritative backlinks, and optimize your Google Business Profile to establish your business as the local authority.",
      },
      {
        step: 5,
        title: "Reporting & Growth",
        description:
          "Monthly reports tracking rankings, traffic, leads, and revenue impact. We refine the strategy every month to keep compounding your results.",
      },
    ],
    pricingTiers: [
      {
        name: "Starter",
        priceRange: "$2,500/mo",
        description:
          "Build a foundation of organic traffic and start generating leads from Google.",
        includes: [
          "1 monthly blog post",
          "1 quarterly landing page",
          "Basic backlink & citation building",
          "GBP optimization",
          "Quarterly strategy meeting",
          "Quarterly competitor snapshot",
          "Standard keyword reporting",
          "48hr email support",
          "Month-to-month",
        ],
        color: "#BCEFFF",
      },
      {
        name: "Ranking Master",
        priceRange: "$3,500/mo",
        description:
          "Aggressively grow organic traffic and start dominating local search results.",
        includes: [
          "2 monthly blog posts",
          "1 quarterly landing page",
          "Active backlink & citation building (4–6 links/mo)",
          "GBP optimization & weekly posts",
          "Monthly strategy meeting",
          "Quarterly CRO landing page audit",
          "Monthly competitor snapshot",
          "Standard keyword reporting",
          "24hr email support",
          "Month-to-month",
        ],
        color: "#F79C42",
        featured: true,
      },
      {
        name: "Corporate",
        priceRange: "$6,000/mo",
        description:
          "Own page 1 for every service keyword in your market with full-service SEO.",
        includes: [
          "4 monthly blog posts",
          "2–3 monthly landing pages",
          "Aggressive backlink & citation building (8–12 links/mo)",
          "GBP optimization, weekly posts, & Q&A strategy",
          "Monthly & on-demand strategy meetings",
          "Monthly CRO recommendations",
          "Weekly competitor snapshot",
          "Full custom keyword dashboard & reporting",
          "Slack & email same-day response",
          "Month-to-month",
        ],
        color: "#C4EF7A",
      },
    ],
    industries: (locality: string, region: string) => [
      {
        name: "Healthcare & Medical",
        icon: "Stethoscope",
        description: `SEO for doctors, dentists, and clinics in ${locality} and ${region}.`,
        color: "#FFD6E0",
      },
      {
        name: "Legal Services",
        icon: "Scale",
        description: `SEO for law firms and attorneys across ${region}.`,
        color: "#E8D5FF",
      },
      {
        name: "Home Services",
        icon: "Wrench",
        description: `SEO for plumbers, HVAC, roofers, and contractors in ${region}.`,
        color: "#C4EF7A",
      },
      {
        name: "Real Estate",
        icon: "Home",
        description: `SEO for realtors and property managers in ${locality}.`,
        color: "#D4F5D4",
      },
      {
        name: "Restaurants & Hospitality",
        icon: "UtensilsCrossed",
        description: `SEO for restaurants, hotels, and hospitality in ${region}.`,
        color: "#F79C42",
      },
      {
        name: "Professional Services",
        icon: "Briefcase",
        description: `SEO for accountants, consultants, and professional firms in ${locality}.`,
        color: "#BCEFFF",
      },
    ],
    faqAdditions: (locality: string, region: string) => [
      {
        category: "local" as const,
        question: `Why is local SEO important for ${region} businesses?`,
        answer: `46% of all Google searches have local intent. When someone in ${locality} searches for a service, Google prioritizes local businesses with strong SEO signals. Without local SEO — optimized Google Business Profile, local citations, and geo-targeted content — your business is invisible to the customers actively searching for what you offer in ${region}.`,
      },
      {
        category: "local" as const,
        question: `How do I rank in the Google Map Pack in ${locality}?`,
        answer: `Ranking in the ${locality} Map Pack requires a fully optimized Google Business Profile, consistent NAP (Name, Address, Phone) across all directories, genuine customer reviews, local backlinks, and a website with locally relevant content. We handle all of this as part of our local SEO strategy for ${region} businesses.`,
      },
    ],
    platformComparisonExtras: [],
    seoServiceOverrides: {},
  },
};
