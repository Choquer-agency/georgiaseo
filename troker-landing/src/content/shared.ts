import {
  ServiceItem,
  ProcessStep,
  Testimonial,
  PortfolioProject,
  FAQItem,
  SEOService,
  ComparisonRow,
  IndustryItem,
  PricingTier,
} from "./config";
import { getCluster } from "./clusters";

/* ─── Services (static) ─── */

export const services: ServiceItem[] = [
  {
    icon: "Search",
    title: "On-Page SEO",
    description:
      "Title tags, meta descriptions, header optimization, internal linking, and keyword mapping for every page.",
  },
  {
    icon: "Code",
    title: "Technical SEO",
    description:
      "Site speed, Core Web Vitals, crawlability, indexation, schema markup, and mobile optimization.",
  },
  {
    icon: "MapPin",
    title: "Local SEO",
    description:
      "Google Business Profile, local citations, review management, and map pack optimization.",
  },
  {
    icon: "FileText",
    title: "Content Strategy",
    description:
      "Keyword-targeted blog posts, landing pages, and content calendars that drive organic traffic.",
  },
  {
    icon: "Link",
    title: "Link Building",
    description:
      "Digital PR, guest posting, and resource link building that builds domain authority.",
  },
  {
    icon: "BarChart3",
    title: "SEO Reporting",
    description:
      "Monthly reporting on rankings, traffic, leads, and ROI with actionable insights.",
  },
];

/* ─── Process Steps (cluster-aware) ─── */

export function getProcessSteps(slug: string): ProcessStep[] {
  const cluster = getCluster(slug);
  return cluster.processSteps;
}

export const processSteps: ProcessStep[] = getProcessSteps("georgia-seo");

/* ─── Testimonials (static — real quotes, identical across domains) ─── */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getTestimonials(_locality: string): Testimonial[] {
  return [
    {
      quote: `They didn't just optimize our website. They built us a lead machine. We went from 2 inbound leads a month to 40 in the first 90 days.`,
      name: "Rachel Moran",
      title: "Marketing Director",
      company: "Pinnacle Fertility",
      featured: true,
    },
    {
      quote: `The team understood our goals from day one. The SEO strategy they delivered exceeded every expectation — more traffic, more leads, more revenue.`,
      name: "Tom Vasquez",
      title: "Owner",
      company: "Pedigree Painting",
    },
    {
      quote: `We've worked with five agencies before. None of them came close. The attention to detail and the speed of results were unmatched.`,
      name: "Kate Nguyen",
      title: "Operations Manager",
      company: "DFI Forensics",
    },
    {
      quote: `Our old website was invisible on Google. They gave us page 1 rankings and traffic that's up 200% and counting.`,
      name: "David Harmon",
      title: "General Manager",
      company: "Far North Crane",
    },
  ];
}

export const testimonials = getTestimonials("Atlanta");

/* ─── Portfolio ─── */

const generalPortfolio: PortfolioProject[] = [
  {
    name: "Pinnacle Fertility",
    category: "Healthcare",
    image: "/images/portfolio/project-2.webp",
    description: "Managed their entire web portfolio with an average organic growth of 221% across accounts.",
    caseStudy: {
      challenge: "Pinnacle Fertility had multiple clinic locations with poor organic visibility and inconsistent SEO across each location.",
      approach: "We built location-specific SEO strategies for each clinic, created optimized content targeting high-intent fertility keywords, and implemented technical SEO fixes across all locations.",
      result: "221% average organic growth across all accounts, with several clinic locations ranking on page one for high-intent fertility keywords.",
    },
  },
  {
    name: "Pedigree Painting",
    category: "Home Services",
    image: "/images/portfolio/project-3.webp",
    description: "Took them from zero to $1.3 million in revenue over three years.",
    caseStudy: {
      challenge: "Brand-new painting company with no online presence in a competitive local market.",
      approach: "We built a local SEO strategy with service area pages, Google Business Profile optimization, and Google Ads to drive immediate leads while organic rankings grew.",
      result: "$0 to $1.3 million in revenue over three years. The website became their primary lead source.",
    },
  },
  {
    name: "DFI Forensics",
    category: "Digital Forensics",
    image: "/images/portfolio/project-7.webp",
    description: "Ranked #1 locally for digital forensics — and still owns that position today.",
    caseStudy: {
      challenge: "Niche industry with very specific search terms. Previous site was invisible in search results.",
      approach: "Technically optimized SEO strategy targeting high-intent forensics keywords with service-specific content pages and schema markup.",
      result: "Ranked #1 locally within three months and has held that position for over two years. Organic search now drives 60% of qualified leads.",
    },
  },
  {
    name: "Far North Crane",
    category: "Crane & Rigging",
    image: "/images/portfolio/project-5.webp",
    description: "Continues to lead their market as a crane service working on major commercial projects.",
    caseStudy: {
      challenge: "Outdated website that didn't reflect the scale of their commercial operations. Contractors couldn't find their services online.",
      approach: "Targeted SEO strategy focusing on commercial construction keywords with service and fleet pages optimized for search.",
      result: "Organic traffic increased 180% within six months. Steady pipeline of commercial project inquiries.",
    },
  },
  {
    name: "LC Notary",
    category: "Notary Services",
    image: "/images/portfolio/project-1.webp",
    description: "Ranked #1 locally for notary services in their target market.",
    caseStudy: {
      challenge: "Competing against dozens of established notary services with no online visibility.",
      approach: "Comprehensive local SEO strategy with service-area pages, GBP optimization, and local citation building.",
      result: "Ranked #1 in Google within four months. Organic leads now account for over 70% of new business.",
    },
  },
  {
    name: "JDG Interior Design",
    category: "Interior Design",
    image: "/images/portfolio/project-8.webp",
    description: "Visuals are everything — we built an SEO strategy that showcases their work and drives inquiries.",
    caseStudy: {
      challenge: "Stunning portfolio but zero organic visibility. Slow site that failed to convert visitors.",
      approach: "Technical optimization for page speed, image SEO for their portfolio, locally targeted content, and GBP optimization.",
      result: "Page load times dropped 60%, session duration up 45%, consultation requests tripled in two months.",
    },
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getPortfolioProjects(_slug?: string): PortfolioProject[] {
  return generalPortfolio;
}

export const portfolioProjects = generalPortfolio;

/* ─── Stats (static — identical across domains) ─── */

export const stats = {
  projectsCompleted: 150,
  clientsServed: 80,
  yearsExperience: 8,
  avgTrafficIncrease: 221,
};

/* ─── Pain Points (cluster-aware) ─── */

export function getPainPoints(
  slug: string
): { title: string; description: string }[] {
  const cluster = getCluster(slug);
  return cluster.painPoints;
}

export const painPoints = getPainPoints("georgia-seo");

/* ─── Solution Cards (static) ─── */

export const solutionCards = [
  {
    icon: "Target",
    title: "Data-Driven\nStrategy",
    description:
      "Every campaign starts with your business goals, competitor analysis, and keyword research — not guesswork.",
  },
  {
    icon: "Zap",
    title: "Built to\nRank",
    description:
      "Technical SEO, content strategy, and link building optimized for measurable rankings and traffic growth.",
  },
  {
    icon: "Handshake",
    title: "Partners,\nNot Vendors",
    description:
      "We stick around long after the first ranking to help you grow and dominate your market.",
  },
];

/* ─── Expanded FAQs (SEO + AEO, cluster-enhanced) ─── */

export function getExpandedFaqs(
  locality: string,
  region: string,
  slug?: string
): FAQItem[] {
  const baseFaqs: FAQItem[] = [
    {
      category: "general",
      question: "How does SEO actually work?",
      answer:
        "SEO (Search Engine Optimization) improves your website's visibility in Google search results. We optimize three pillars: technical health (site speed, mobile-friendliness, crawlability), on-page content (keywords, meta tags, content quality), and off-page authority (backlinks, citations, brand mentions). When all three are strong, Google ranks your site higher for relevant searches, driving more organic traffic and leads.",
    },
    {
      category: "process",
      question: "How long does it take to see results from SEO?",
      answer:
        "Most clients see measurable ranking improvements within 60-90 days. Significant traffic increases typically happen within 4-6 months. SEO is a compounding investment — results accelerate over time. Our clients see an average 221% traffic increase within the first year. We provide monthly reports so you can track progress from day one.",
    },
    {
      category: "general",
      question: "What industries do you specialize in?",
      answer:
        "We specialize in Google's algorithm and user behavior, not just one industry. With 150+ clients across 50+ industries, we know how people search, interact, and convert — allowing us to apply winning strategies to any business. That said, we have deep experience in solar, senior care, healthcare, home services, legal, and professional services.",
    },
    {
      category: "general",
      question: "Do you guarantee results?",
      answer:
        "Yes — we guarantee at least a 20% traffic increase in six months, or we work for free. We've never worked for free because our SEO strategies consistently deliver measurable growth that drives leads and revenue.",
    },
    {
      category: "process",
      question: "How do you integrate into our company's team?",
      answer:
        "We embed ourselves into your company by working directly with your sales, reception, and marketing teams to understand your customers. This allows us to optimize your site and content to align with real customer needs, increasing conversions and closing more deals.",
    },
    {
      category: "seo",
      question: "What is the difference between SEO and Google Ads?",
      answer:
        "Google Ads (PPC) gives you immediate visibility by paying for each click. SEO builds organic rankings that drive free traffic long-term. The key difference: when you stop paying for ads, traffic stops instantly. SEO compounds over time — the work we do today continues generating traffic and leads for years. Most successful businesses invest in both, but SEO delivers a higher ROI over time.",
    },
    {
      category: "pricing",
      question: `How much does SEO cost in ${region}?`,
      answer: `Professional SEO services in ${region} typically range from $1,500 to $10,000+ per month, depending on your goals, competition level, and the scope of work. Our Starter packages begin at $1,500/month for local businesses. Growth campaigns run $3,000-$5,000/month. Enterprise-level SEO with aggressive content and link building starts at $5,000/month. Every engagement includes strategy, execution, and monthly reporting.`,
    },
    {
      category: "seo",
      question: "What is local SEO?",
      answer: `Local SEO optimizes your online presence to attract customers from specific geographic areas. It includes Google Business Profile optimization, local citation building, review management, geo-targeted content, and local link building. For ${region} businesses, local SEO is critical — 46% of all Google searches have local intent, and 76% of people who search for something nearby visit a business within 24 hours.`,
    },
    {
      category: "seo",
      question: "What is technical SEO?",
      answer:
        "Technical SEO ensures search engines can efficiently crawl, index, and rank your website. It covers site speed optimization, mobile responsiveness, Core Web Vitals, XML sitemaps, robots.txt configuration, structured data markup, HTTPS security, and fixing crawl errors. Without solid technical SEO, even great content won't rank well.",
    },
    {
      category: "seo",
      question: "How important are backlinks for SEO?",
      answer:
        "Backlinks remain one of Google's top ranking factors. They act as votes of confidence from other websites. Quality matters far more than quantity — one link from a respected industry publication is worth more than 100 links from low-quality directories. Our link building strategies focus on earning relevant, authoritative backlinks through digital PR, guest content, and resource creation.",
    },
    {
      category: "process",
      question: "How do you measure SEO success?",
      answer:
        "We track keyword rankings, organic traffic, leads/conversions from organic search, domain authority, and revenue attributed to SEO. Every client gets a monthly report with clear metrics and actionable insights. We focus on business outcomes — not just vanity metrics like impressions or click-through rates.",
    },
    {
      category: "process",
      question: "What happens if I stop doing SEO?",
      answer:
        "Unlike paid ads that stop the moment you pause spending, SEO results have momentum. However, without ongoing optimization, rankings will gradually decline as competitors continue investing and Google's algorithm evolves. Most clients who pause SEO see a noticeable drop within 3-6 months. SEO works best as a continuous investment.",
    },
    {
      category: "general",
      question: "Why hire an SEO agency instead of doing it in-house?",
      answer: `An SEO agency brings a full team — strategists, content writers, technical specialists, and link builders — to every engagement. Hiring that in-house costs $200,000+ per year in salaries alone. An agency also brings experience across hundreds of campaigns and industries, proprietary tools and processes, and the ability to scale effort up or down as needed. For ${region} businesses, working with a local SEO team means you get experts who understand your market.`,
    },
    {
      category: "local",
      question: `Why should I hire an SEO agency in ${region}?`,
      answer: `Working with an SEO agency that understands the ${region} market means you get a team that knows the competitive landscape, local search dynamics, and what ${locality} customers expect. We're available for in-person strategy sessions, understand the seasonal patterns of ${region} industries, and have a portfolio of local success stories. Local expertise combined with SEO specialization gives your business a measurable advantage.`,
    },
    {
      category: "seo",
      question: "Do I need SEO if I already run Google Ads?",
      answer:
        "Yes. Google Ads and SEO serve different purposes and work best together. Ads provide immediate visibility for high-intent keywords while SEO builds long-term organic presence. Businesses that invest in both see higher overall click-through rates because appearing in both paid and organic results increases trust and credibility. Plus, SEO reduces your dependency on ad spend over time.",
    },
  ];

  const cluster = getCluster(slug || "georgia-seo");
  const clusterFaqs = cluster.faqAdditions(locality, region);

  return [...baseFaqs, ...clusterFaqs];
}

export const expandedFaqs = getExpandedFaqs("Atlanta", "Georgia", "georgia-seo");

/* ─── SEO Services Breakdown (cluster-aware) ─── */

const baseSEOServices: SEOService[] = [
  {
    slug: "on-page-seo",
    title: "On-Page SEO",
    description:
      "Keyword-optimized content, meta tags, headers, and internal linking that tell Google exactly what your pages are about.",
    longDescription:
      "Every page on your site is an opportunity to rank. We optimize title tags, meta descriptions, header hierarchy, keyword placement, internal linking, image alt text, and content structure. The result: pages that Google understands and ranks for the keywords your customers are searching.",
    icon: "Search",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    description:
      "Site speed, Core Web Vitals, crawlability, and indexation — the foundation your rankings are built on.",
    longDescription:
      "If Google can't crawl and index your site efficiently, nothing else matters. We audit and fix site speed issues, mobile responsiveness, Core Web Vitals, XML sitemaps, robots.txt, canonical tags, structured data, and crawl errors. Most sites have technical issues they don't even know about — we find and fix them all.",
    icon: "Code",
  },
  {
    slug: "local-seo",
    title: "Local SEO & Google Business Profile",
    description:
      "Dominate the Map Pack and local search results in your target market.",
    longDescription:
      "Local SEO puts your business in front of customers who are ready to buy. We optimize your Google Business Profile, build and clean up local citations, manage review strategy, create geo-targeted content, and build local backlinks. The goal: appear in the Map Pack and top organic results for every service keyword in your area.",
    icon: "MapPin",
  },
  {
    slug: "content-strategy",
    title: "Content Strategy & Blog Writing",
    description:
      "Keyword-targeted content that ranks, educates, and converts visitors into leads.",
    longDescription:
      "Content is the fuel for SEO. We research high-intent keywords, build topic clusters, and create blog posts, landing pages, and resource content that ranks and converts. Every piece is written with search intent in mind — not just keyword stuffing, but genuinely useful content that establishes your brand as an authority.",
    icon: "FileText",
  },
  {
    slug: "link-building",
    title: "Link Building & Digital PR",
    description:
      "Authoritative backlinks that build domain authority and accelerate your rankings.",
    longDescription:
      "Backlinks are votes of confidence from other websites. We earn them through digital PR, guest content on industry publications, resource link building, and strategic outreach. Every link we build is from a relevant, authoritative source — no PBNs, no spam, no shortcuts that put your site at risk.",
    icon: "Link",
  },
  {
    slug: "seo-reporting",
    title: "SEO Reporting & Analytics",
    description:
      "Clear monthly reports tracking rankings, traffic, leads, and ROI.",
    longDescription:
      "You'll never wonder where your money is going. Every month, you get a detailed report covering keyword rankings, organic traffic, lead volume, conversion rates, and revenue attribution. We also include competitive analysis, insights on what's working, and recommendations for the next month. Data drives every decision we make.",
    icon: "BarChart3",
  },
];

export function getSEOServices(slug: string): SEOService[] {
  const cluster = getCluster(slug);
  const overrides = cluster.seoServiceOverrides;

  return baseSEOServices.map((svc) => {
    if (overrides[svc.slug]) {
      return { ...svc, longDescription: overrides[svc.slug] };
    }
    return svc;
  });
}

export const seoServices: SEOService[] = getSEOServices("georgia-seo");

/* ─── SEO Comparison (cluster-aware) ─── */

const baseSEOComparison: ComparisonRow[] = [
  {
    feature: "Keyword research & strategy",
    professionalSEO: "Data-driven, competitive",
    diySEO: "Basic keyword tools",
    noSEO: "None",
  },
  {
    feature: "Technical site optimization",
    professionalSEO: true,
    diySEO: "Limited",
    noSEO: false,
  },
  {
    feature: "Content creation",
    professionalSEO: "Expert writers, SEO-optimized",
    diySEO: "Self-written, inconsistent",
    noSEO: "None",
  },
  {
    feature: "Link building",
    professionalSEO: "Strategic, white-hat",
    diySEO: "Minimal or risky",
    noSEO: "None",
  },
  {
    feature: "Google Business Profile",
    professionalSEO: "Fully optimized & managed",
    diySEO: "Basic setup",
    noSEO: "Claimed but neglected",
  },
  {
    feature: "Monthly reporting",
    professionalSEO: "Detailed ROI tracking",
    diySEO: "Google Analytics only",
    noSEO: "No tracking",
  },
  {
    feature: "Time to results",
    professionalSEO: "60-90 days",
    diySEO: "6-12+ months",
    noSEO: "Never",
  },
  {
    feature: "Competitor monitoring",
    professionalSEO: true,
    diySEO: false,
    noSEO: false,
  },
  {
    feature: "Algorithm update response",
    professionalSEO: "Proactive",
    diySEO: "Reactive or unaware",
    noSEO: "Vulnerable",
  },
  {
    feature: "Conversion optimization",
    professionalSEO: true,
    diySEO: false,
    noSEO: false,
  },
  {
    feature: "Local citation management",
    professionalSEO: true,
    diySEO: "Partial",
    noSEO: false,
  },
  {
    feature: "Estimated cost",
    professionalSEO: "$1,500-$10,000/mo",
    diySEO: "$100-$500/mo in tools",
    noSEO: "$0 (but lost revenue)",
  },
];

export function getSEOComparison(slug: string): ComparisonRow[] {
  const cluster = getCluster(slug);
  const extras = cluster.platformComparisonExtras;
  if (extras.length === 0) return baseSEOComparison;
  return [...baseSEOComparison, ...extras];
}

export const seoComparison: ComparisonRow[] = getSEOComparison("georgia-seo");

/* ─── Industries Served (cluster-aware) ─── */

export function getIndustriesServed(
  locality: string,
  region: string,
  slug?: string
): IndustryItem[] {
  const cluster = getCluster(slug || "georgia-seo");
  return cluster.industries(locality, region);
}

export const industriesServed = getIndustriesServed(
  "Phoenix",
  "Arizona",
  "georgia-seo"
);

/* ─── Pricing Tiers (cluster-aware) ─── */

export function getPricingTiers(slug: string): PricingTier[] {
  const cluster = getCluster(slug);
  return cluster.pricingTiers;
}

export const pricingTiers: PricingTier[] = getPricingTiers("georgia-seo");
