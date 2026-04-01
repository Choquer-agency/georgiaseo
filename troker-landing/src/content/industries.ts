/* eslint-disable @typescript-eslint/no-unused-vars */
import { FAQItem, ProcessStep } from "./config";
import { getCluster } from "./clusters";

/* ─── Industry Page Config ─── */

export interface IndustryPageConfig {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: (locality: string, region: string) => string;
  metaDescription: (locality: string, region: string) => string;
  heroH1: (locality: string, region: string) => string;
  heroSubhead: (locality: string, region: string) => string;
  heroQualifier: (locality: string, region: string) => string;
  painPoints: (locality: string, region: string, slug: string) => { title: string; description: string }[];
  whySEO: (locality: string, region: string, slug: string) => { title: string; description: string }[];
  processSteps: ProcessStep[];
  faqs: (locality: string, region: string, slug: string) => FAQItem[];
  ctaLabel: string;
  color: string;
  icon: string;
}

/* ─── Industry Page Configs ─── */

export const industryMap: Record<string, IndustryPageConfig> = {
  healthcare: {
    slug: "healthcare",
    title: "Healthcare & Medical SEO",
    eyebrow: "Healthcare SEO Experts",
    color: "#BCEFFF",
    icon: "Heart",
    ctaLabel: "Get a Free Healthcare SEO Audit",
    metaTitle: (locality, region) =>
      `Healthcare SEO Services ${locality} | ${region} Medical SEO`,
    metaDescription: (locality, region) =>
      `SEO for healthcare practices in ${locality}, ${region}. Rank higher for medical keywords, attract more patients, and grow your practice with data-driven SEO strategies.`,
    heroH1: (_locality, region) =>
      `SEO for Healthcare Practices in ${region}`,
    heroSubhead: (_locality, region) =>
      `Patients search Google before choosing a doctor. If your ${region} practice isn't on page 1, you're losing patients to competitors who invest in SEO. We change that.`,
    heroQualifier: (_locality, region) =>
      `For ${region} healthcare practices, clinics, and medical groups ready to dominate local search.`,
    painPoints: (_locality, _region, _slug) => [
      {
        title: "Patients can't find you on Google",
        description:
          "When someone searches 'doctor near me' or 'dentist in [your city],' your competitors show up first. You're invisible to the patients actively looking for care.",
      },
      {
        title: "Your Google Business Profile is underperforming",
        description:
          "Competitors have hundreds of reviews and optimized profiles. Your GBP has outdated hours, no photos, and a handful of old reviews.",
      },
      {
        title: "No content strategy",
        description:
          "You don't have blog content targeting the health questions your patients are Googling. Meanwhile, competitors are capturing that traffic with educational content.",
      },
      {
        title: "Relying on referrals alone",
        description:
          "Word of mouth is great but not scalable. SEO builds a 24/7 patient acquisition channel that compounds over time.",
      },
    ],
    whySEO: (_locality, _region, _slug) => [
      {
        title: "77% of patients start with Google",
        description:
          "More than three-quarters of patients use search engines before booking an appointment. SEO puts your practice in front of them at the moment they're looking for care.",
      },
      {
        title: "Local SEO drives appointments",
        description:
          "Optimized Google Business Profile, local citations, and geo-targeted content put your practice in the Map Pack where 42% of local clicks happen.",
      },
      {
        title: "Content builds trust before the visit",
        description:
          "Educational blog content about conditions, treatments, and procedures establishes your expertise and builds patient trust before they ever walk in.",
      },
    ],
    processSteps: [
      { step: 1, title: "Healthcare SEO Audit", description: "We audit your website, GBP, local citations, and competitor landscape to identify ranking opportunities." },
      { step: 2, title: "Patient Keyword Research", description: "We map the exact terms patients use to find practices like yours and build a targeting strategy." },
      { step: 3, title: "On-Page & Local Optimization", description: "We optimize your site, GBP, and citations to rank for high-intent healthcare keywords." },
      { step: 4, title: "Content & Authority Building", description: "We create patient-focused content and build authoritative health-related backlinks." },
    ],
    faqs: (locality, region, _slug) => [
      {
        category: "seo",
        question: `How does SEO help healthcare practices in ${region}?`,
        answer: `SEO helps ${region} healthcare practices attract more patients by ranking higher in Google for searches like "${locality} dentist," "primary care doctor near me," and condition-specific queries. We optimize your website, Google Business Profile, and online presence so patients find you first when they're ready to book.`,
      },
      {
        category: "process",
        question: "How long does healthcare SEO take to show results?",
        answer: "Most healthcare practices see ranking improvements within 60-90 days. Significant increases in patient inquiries typically happen within 4-6 months. Healthcare SEO is a long-term investment that compounds — the practices that invest consistently see the biggest returns over time.",
      },
      {
        category: "pricing",
        question: `How much does healthcare SEO cost in ${region}?`,
        answer: `Healthcare SEO in ${region} typically ranges from $2,000 to $7,000 per month depending on competition, number of locations, and scope. Multi-location practices generally invest more due to the complexity of managing multiple GBP listings and location-specific content.`,
      },
    ],
  },

  "home-services": {
    slug: "home-services",
    title: "Home Services SEO",
    eyebrow: "Home Services SEO Experts",
    color: "#C4EF7A",
    icon: "Wrench",
    ctaLabel: "Get a Free Home Services SEO Audit",
    metaTitle: (locality, region) =>
      `Home Services SEO ${locality} | ${region} Contractor SEO`,
    metaDescription: (locality, region) =>
      `SEO for home service companies in ${locality}, ${region}. Rank higher for plumbing, HVAC, roofing, and contractor keywords. More calls, more jobs. Free SEO audit.`,
    heroH1: (_locality, region) =>
      `SEO for Home Service Companies in ${region}`,
    heroSubhead: (_locality, region) =>
      `Homeowners search Google when their AC breaks or their roof leaks. If your ${region} company isn't at the top of search results, that emergency call goes to your competitor.`,
    heroQualifier: (_locality, region) =>
      `For ${region} plumbers, HVAC companies, roofers, electricians, and contractors ready to stop relying on paid leads.`,
    painPoints: (_locality, _region, _slug) => [
      {
        title: "Paying too much for leads",
        description:
          "You're spending thousands on HomeAdvisor, Angi, or Google Ads for shared leads. SEO generates exclusive leads that come directly to you.",
      },
      {
        title: "Competitors dominate the Map Pack",
        description:
          "When someone searches 'plumber near me,' your competitors with better SEO get the call. The Map Pack gets 42% of all local clicks.",
      },
      {
        title: "No online reviews strategy",
        description:
          "Your competitors have 300+ reviews. Without a systematic approach to getting reviews, you're fighting with one hand tied behind your back.",
      },
      {
        title: "Your website doesn't rank for service areas",
        description:
          "You serve 15 cities but your website only mentions your office location. Google doesn't know to show you for searches in other areas you cover.",
      },
    ],
    whySEO: (_locality, _region, _slug) => [
      {
        title: "Emergency searches = immediate customers",
        description:
          "Home service searches have the highest commercial intent on Google. Someone searching 'emergency plumber' or 'AC repair near me' is ready to hire right now.",
      },
      {
        title: "Stop paying for shared leads",
        description:
          "SEO generates exclusive leads — people who find YOUR website and call YOU directly. No competing with 5 other contractors for the same job.",
      },
      {
        title: "Service area pages capture more territory",
        description:
          "We build optimized pages for every city and neighborhood you serve, so Google shows you for local searches across your entire service area.",
      },
    ],
    processSteps: [
      { step: 1, title: "Contractor SEO Audit", description: "We audit your website, GBP, and local presence across every service area you cover." },
      { step: 2, title: "Service & Area Keyword Mapping", description: "We map every service you offer to every area you cover and build a targeting strategy." },
      { step: 3, title: "Optimization & Content Build", description: "We optimize your site, create service area pages, and build locally relevant content." },
      { step: 4, title: "Reviews, Links & Growth", description: "We implement review acquisition and build local backlinks to accelerate your rankings." },
    ],
    faqs: (locality, region, _slug) => [
      {
        category: "seo",
        question: `How does SEO help contractors in ${region}?`,
        answer: `SEO helps ${region} contractors rank higher in Google for service + location searches like "${locality} plumber," "HVAC repair near me," and "best roofer in ${region}." We optimize your website and Google Business Profile so you show up first when homeowners need your services.`,
      },
      {
        category: "process",
        question: "How long until I start getting leads from SEO?",
        answer: "Most home service companies see increased calls within 60-90 days of starting SEO. The first improvements come from Google Business Profile optimization and quick on-page wins. Full organic dominance typically takes 4-6 months of consistent work.",
      },
      {
        category: "pricing",
        question: `How much does contractor SEO cost in ${region}?`,
        answer: `Contractor SEO in ${region} typically ranges from $1,500 to $5,000 per month depending on competition and the number of service areas you cover. Compare that to spending $3,000-$10,000/month on paid leads — SEO pays for itself and the leads keep coming.`,
      },
    ],
  },

  legal: {
    slug: "legal",
    title: "Law Firm SEO",
    eyebrow: "Legal SEO Experts",
    color: "#E8D5FF",
    icon: "Scale",
    ctaLabel: "Get a Free Law Firm SEO Audit",
    metaTitle: (locality, region) =>
      `Law Firm SEO ${locality} | ${region} Legal SEO Services`,
    metaDescription: (locality, region) =>
      `SEO for law firms in ${locality}, ${region}. Rank higher for legal keywords, attract more clients, and grow your practice. Specialized legal SEO strategies. Free audit.`,
    heroH1: (_locality, region) =>
      `SEO for Law Firms in ${region}`,
    heroSubhead: (_locality, region) =>
      `96% of people seeking legal advice start with a Google search. If your ${region} law firm isn't on page 1, your competitors are getting the cases that should be yours.`,
    heroQualifier: (_locality, region) =>
      `For ${region} attorneys and law firms ready to stop losing potential clients to competitors.`,
    painPoints: (_locality, _region, _slug) => [
      {
        title: "Competing against legal directories",
        description:
          "Avvo, FindLaw, and Justia dominate page 1 for legal searches. You need a strategy to rank alongside — or above — them.",
      },
      {
        title: "High cost per case from ads",
        description:
          "Legal keywords are the most expensive on Google — $50-$500+ per click. SEO delivers clients without per-click costs.",
      },
      {
        title: "Practice area pages don't rank",
        description:
          "Your website lists your practice areas, but thin content and poor optimization mean Google ignores them.",
      },
      {
        title: "No local visibility",
        description:
          "When someone searches 'personal injury lawyer near me,' you're nowhere to be found. That's a high-value case walking straight to a competitor.",
      },
    ],
    whySEO: (_locality, _region, _slug) => [
      {
        title: "Legal searches have the highest value",
        description:
          "A single personal injury case can be worth $100K+. Ranking #1 for legal keywords delivers the highest ROI of any marketing channel.",
      },
      {
        title: "Trust starts with visibility",
        description:
          "Clients trust lawyers they find at the top of Google. First-page rankings signal authority and credibility before they ever call.",
      },
      {
        title: "Content marketing builds authority",
        description:
          "Blog content about legal questions, case studies, and practice area guides establishes your expertise and captures traffic at every stage of the client journey.",
      },
    ],
    processSteps: [
      { step: 1, title: "Legal SEO Audit", description: "We audit your website, practice area pages, GBP, and the competitive landscape in your legal market." },
      { step: 2, title: "Legal Keyword Strategy", description: "We map high-intent legal keywords and create a content strategy targeting practice areas and locations." },
      { step: 3, title: "On-Page & Technical Optimization", description: "We optimize practice area pages, fix technical issues, and implement legal schema markup." },
      { step: 4, title: "Authority Building", description: "We build backlinks from legal directories, bar associations, and legal publications to boost domain authority." },
    ],
    faqs: (locality, region, _slug) => [
      {
        category: "seo",
        question: `How does SEO help law firms in ${region}?`,
        answer: `SEO helps ${region} law firms rank higher for searches like "${locality} personal injury lawyer," "divorce attorney near me," and practice-specific queries. We optimize your website, create authoritative legal content, and build your online presence so potential clients find you first.`,
      },
      {
        category: "pricing",
        question: `How much does law firm SEO cost in ${region}?`,
        answer: `Law firm SEO in ${region} typically ranges from $3,000 to $10,000 per month due to the high competition and high value of legal keywords. The investment is justified — a single case from organic search can pay for a full year of SEO.`,
      },
      {
        category: "process",
        question: "How long does legal SEO take to work?",
        answer: "Legal SEO is competitive. Most law firms see initial ranking improvements within 90 days, with meaningful client inquiries increasing within 4-6 months. Top positions for competitive practice area keywords can take 6-12 months but deliver exceptional long-term ROI.",
      },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    title: "Real Estate SEO",
    eyebrow: "Real Estate SEO Experts",
    color: "#D4F5D4",
    icon: "Home",
    ctaLabel: "Get a Free Real Estate SEO Audit",
    metaTitle: (locality, region) =>
      `Real Estate SEO ${locality} | ${region} Realtor SEO Services`,
    metaDescription: (locality, region) =>
      `SEO for real estate agents and brokerages in ${locality}, ${region}. Rank higher for real estate keywords and generate more buyer and seller leads. Free SEO audit.`,
    heroH1: (_locality, region) =>
      `SEO for Real Estate Professionals in ${region}`,
    heroSubhead: (_locality, region) =>
      `Buyers and sellers start on Google. If your ${region} real estate business isn't ranking for local property searches, you're missing the most qualified leads in your market.`,
    heroQualifier: (_locality, region) =>
      `For ${region} realtors, brokerages, and property managers ready to generate consistent organic leads.`,
    painPoints: (_locality, _region, _slug) => [
      {
        title: "Zillow and Realtor.com dominate page 1",
        description:
          "Portal sites take the top spots for property searches. You need an SEO strategy that targets the long-tail keywords and local queries they miss.",
      },
      {
        title: "No neighborhood or market content",
        description:
          "Buyers search for specific neighborhoods, school districts, and market trends. Without this content, Google has no reason to show your site.",
      },
      {
        title: "Paying for portal leads",
        description:
          "You're spending $500-$2,000/month on Zillow Premier Agent for shared leads. SEO generates exclusive leads that contact you directly.",
      },
      {
        title: "Generic website with no SEO foundation",
        description:
          "IDX-powered sites all look the same and have thin content. Without unique, optimized content, they can't compete in organic search.",
      },
    ],
    whySEO: (_locality, _region, _slug) => [
      {
        title: "Long-tail keywords = qualified leads",
        description:
          "Searches like 'homes for sale in [neighborhood]' and 'best schools in [city]' signal serious buyers. SEO captures these high-intent searches.",
      },
      {
        title: "Hyperlocal content establishes expertise",
        description:
          "Neighborhood guides, market reports, and community content position you as THE local expert — which is exactly what buyers and sellers want.",
      },
      {
        title: "Organic leads have higher close rates",
        description:
          "People who find you through Google search are actively looking — they close at higher rates than portal leads or cold outreach.",
      },
    ],
    processSteps: [
      { step: 1, title: "Real Estate SEO Audit", description: "We audit your website, GBP, and competitive landscape for your target real estate market." },
      { step: 2, title: "Market & Keyword Strategy", description: "We map buyer and seller keywords by neighborhood, property type, and search intent." },
      { step: 3, title: "Content & Optimization", description: "We create neighborhood guides, market reports, and optimize property pages for search." },
      { step: 4, title: "Authority & Local Building", description: "We build backlinks from local publications and real estate directories to boost authority." },
    ],
    faqs: (locality, region, _slug) => [
      {
        category: "seo",
        question: `How does SEO help realtors in ${region}?`,
        answer: `SEO helps ${region} realtors rank for searches like "homes for sale in ${locality}," "best realtor in ${region}," and neighborhood-specific queries. We create hyperlocal content and optimize your online presence to capture both buyer and seller leads organically.`,
      },
      {
        category: "pricing",
        question: `How much does real estate SEO cost in ${region}?`,
        answer: `Real estate SEO in ${region} typically ranges from $1,500 to $5,000 per month. Compare that to $500-$2,000/month on Zillow Premier Agent for shared leads — SEO generates exclusive leads that contact you directly and compounds in value over time.`,
      },
      {
        category: "process",
        question: "What kind of content works for real estate SEO?",
        answer: "The highest-performing real estate content includes neighborhood guides, market reports, 'best of' lists (best schools, best restaurants), buyer/seller guides, and community spotlights. This hyperlocal content ranks for the exact searches serious buyers and sellers use.",
      },
    ],
  },
};

export function getIndustryConfig(slug: string): IndustryPageConfig | undefined {
  return industryMap[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industryMap);
}
