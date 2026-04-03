import { CaseStudy } from "./config";

export const caseStudyMap: Record<string, CaseStudy> = {
  "penni-cart": {
    slug: "penni-cart",
    client: "Penni Cart",
    industry: "E-commerce / Retail Tech",
    color: "#F79C42",
    saasReplaced: "Custom SaaS Platform",
    headline: "Built a full-stack e-commerce platform from zero to production",
    summary:
      "Designed and developed a complete e-commerce platform with AI-powered product recommendations, inventory management, and automated order processing — demonstrating full-stack capability from concept to launch.",
    challenge:
      "Penni Cart needed a modern e-commerce platform that could compete with Shopify-level functionality while maintaining complete control over the customer experience, data, and pricing model — without per-transaction fees eating into margins.",
    solution:
      "We built a custom e-commerce platform with AI-powered product recommendations, real-time inventory management, automated order processing, and a custom checkout experience. The entire platform runs on modern infrastructure with zero per-transaction fees.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS", "OpenAI"],
    metrics: [
      { label: "Development Time", value: "12 weeks", description: "From concept to production-ready platform" },
      { label: "Per-Transaction Fees", value: "$0", description: "Zero platform fees — only payment processing costs" },
      { label: "Page Load Time", value: "<1.5s", description: "Optimized for conversion with sub-1.5s load times" },
      { label: "AI Recommendations", value: "32% lift", description: "AI-powered product suggestions increased average order value" },
    ],
    testimonial: {
      quote: "FuturLabs built us a platform that rivals Shopify in functionality but costs a fraction to operate. We own everything.",
      name: "Penni Cart Team",
      title: "Founding Team",
    },
    metaTitle: "Penni Cart Case Study | Custom E-commerce Platform | FuturLabs",
    metaDescription:
      "How FuturLabs built a custom e-commerce platform with AI recommendations, zero per-transaction fees, and complete code ownership.",
  },

  "pinnacle-fertility": {
    slug: "pinnacle-fertility",
    client: "Pinnacle Fertility",
    industry: "Healthcare",
    color: "#71CFA3",
    saasReplaced: "Multiple SaaS Tools",
    headline: "Consolidated 6 SaaS tools into one custom platform — saving $180K/year",
    summary:
      "Replaced a patchwork of disconnected SaaS tools with a unified operations platform. Automated patient communication, reporting, and cross-location data synchronization.",
    challenge:
      "Pinnacle Fertility operated across multiple clinic locations, each using a different combination of CRM, scheduling, reporting, and communication tools. Total SaaS spend exceeded $240K/year with significant data silos and manual reconciliation between systems.",
    solution:
      "We built a unified operations platform that replaced six separate SaaS subscriptions. The custom platform handles patient communication, appointment scheduling, cross-location reporting, and automated follow-up sequences — all connected to a single data layer.",
    techStack: ["Next.js", "React", "Python", "PostgreSQL", "AWS", "Twilio", "OpenAI"],
    metrics: [
      { label: "Annual Savings", value: "$180K", description: "Eliminated licensing for 6 separate SaaS tools" },
      { label: "Manual Work Reduced", value: "75%", description: "Automated reporting and cross-location data sync" },
      { label: "Inbound Leads", value: "20x", description: "From 2 to 40 inbound leads per month within 90 days" },
      { label: "Time to Build", value: "16 weeks", description: "Full platform from discovery to production" },
    ],
    testimonial: {
      quote: "They didn't just build us software. They eliminated $180K/year in SaaS licensing and gave us a platform that actually fits how we work.",
      name: "Rachel Moran",
      title: "VP of Operations",
    },
    metaTitle: "Pinnacle Fertility Case Study | SaaS Consolidation | FuturLabs",
    metaDescription:
      "How Pinnacle Fertility replaced 6 SaaS tools with one custom platform, saving $180K/year and automating 75% of manual work.",
  },

  "far-north-crane": {
    slug: "far-north-crane",
    client: "Far North Crane",
    industry: "Construction / Heavy Equipment",
    color: "#BCEFFF",
    saasReplaced: "Legacy Operations System",
    headline: "Replaced a 15-year-old legacy system with a modern, AI-ready platform",
    summary:
      "Modernized a decades-old operations system into a modern platform with real-time fleet tracking, automated dispatch, and predictive maintenance — without disrupting active operations.",
    challenge:
      "Far North Crane's core operations ran on a 15-year-old custom system built on end-of-life technology. Maintenance costs were escalating, integration with modern tools was impossible, and they couldn't find developers willing to work on the legacy stack. A vendor quoted $300K just to migrate to their platform — with ongoing licensing on top.",
    solution:
      "We performed an incremental modernization — migrating module by module while keeping the legacy system running. The new platform includes real-time fleet GPS tracking, automated dispatch optimization, digital safety inspections, and predictive maintenance alerts powered by equipment sensor data.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS IoT", "Python", "MapboxGL"],
    metrics: [
      { label: "Maintenance Cost Reduction", value: "65%", description: "From $120K/year to $42K/year in system maintenance" },
      { label: "Dispatch Efficiency", value: "+40%", description: "Automated dispatch reduced scheduling time by 40%" },
      { label: "Zero Downtime", value: "0 days", description: "Phased migration with zero operational disruption" },
      { label: "Break-Even", value: "14 months", description: "Total project cost recovered in maintenance savings alone" },
    ],
    testimonial: {
      quote: "Our old vendor wanted $300K to migrate to their new version. FuturLabs built us a better system for less — and we own it.",
      name: "David Harmon",
      title: "General Manager",
    },
    metaTitle: "Far North Crane Case Study | Legacy Modernization | FuturLabs",
    metaDescription:
      "How Far North Crane replaced a 15-year-old legacy system with a modern AI-ready platform — zero downtime, 65% cost reduction.",
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudyMap[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudyMap);
}

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudyMap);
}
