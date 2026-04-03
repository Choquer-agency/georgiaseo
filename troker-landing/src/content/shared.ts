import { ProcessStep, Testimonial, FAQItem, PricingTier, ComparisonRow } from "./config";

/* ─── Process Steps ─── */

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Audit",
    description:
      "We audit your SaaS stack and calculate true total cost of ownership.",
  },
  {
    step: 2,
    title: "Architecture & Design",
    description:
      "We design the system around your exact requirements — not a generic template.",
  },
  {
    step: 3,
    title: "Build & Iterate",
    description:
      "You see working software within weeks, with AI baked in from day one.",
  },
  {
    step: 4,
    title: "Launch & Migrate",
    description:
      "We handle data migration, training, and go-live with zero disruption.",
  },
  {
    step: 5,
    title: "Own & Evolve",
    description:
      "You own every line of code with ongoing support at a fixed monthly rate.",
  },
];

/* ─── Testimonials ─── */

export const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't just build us software. They eliminated $180K/year in SaaS licensing and gave us a platform that actually fits how we work.",
    name: "Rachel Moran",
    title: "VP of Operations",
    company: "Pinnacle Fertility",
    color: "#EBFFF6",
    featured: true,
  },
  {
    quote:
      "We went from paying $12K/month across six different tools to one platform we own. The ROI was obvious within the first quarter.",
    name: "Tom Vasquez",
    title: "CEO",
    company: "Pedigree Painting",
    color: "#D0FF71",
  },
  {
    quote:
      "The team understood our business from day one. We got a custom CRM that our sales team actually uses — adoption was 95% in the first month.",
    name: "Kate Nguyen",
    title: "Operations Manager",
    company: "DFI Forensics",
    color: "#EBFFF6",
  },
  {
    quote:
      "Our old vendor wanted $300K to migrate to their new version. FuturLabs built us a better system for less — and we own it.",
    name: "David Harmon",
    title: "General Manager",
    company: "Far North Crane",
    color: "#27EAA6",
  },
  {
    quote:
      "Hands down the best technology partner we've worked with. They think about our business, not just the code.",
    name: "Slaton Carter",
    title: "COO",
    company: "Ahara Med",
    color: "#8F93FF",
  },
  {
    quote:
      "We replaced three SaaS tools with one custom platform. Our team is faster, our data is cleaner, and we're saving $8K/month.",
    name: "James Baldwin",
    title: "Founder",
    company: "Select Decks",
    color: "#D0FF71",
  },
];

/* ─── Stats ─── */

export const stats = {
  saasReplaced: 25,
  avgSavings: 180,
  clientsServed: 40,
  codeOwnership: 100,
};

/* ─── Pain Points (SaaS Problem) ─── */

export const saasProblems = [
  {
    stat: "$75K–$1.5M",
    label: "Annual SaaS spend",
    description:
      "That number grows 11%+ every year — and you own none of it.",
  },
  {
    stat: "53%",
    label: "Licenses go unused",
    description:
      "You're paying for features and seats nobody touches.",
  },
  {
    stat: "11.4%",
    label: "Annual SaaS price increase",
    description:
      "A subscription model designed to extract maximum revenue from you.",
  },
];

/* ─── Custom vs SaaS Comparison ─── */

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Upfront cost",
    custom: "Higher initial investment",
    saas: "Low monthly subscription",
  },
  {
    feature: "5-year total cost",
    custom: "$525K–$1.75M (one-time + maintenance)",
    saas: "$2.3M–$8.6M (recurring + increases)",
  },
  {
    feature: "Code ownership",
    custom: "You own 100% of the code and IP",
    saas: "Zero — vendor owns everything",
  },
  {
    feature: "Price trajectory",
    custom: "Fixed maintenance costs",
    saas: "+5–15% annual increases",
  },
  {
    feature: "Per-user pricing",
    custom: "Unlimited users included",
    saas: "Per-seat, per-user, per-agent fees",
  },
  {
    feature: "Customization",
    custom: "Built exactly for your workflows",
    saas: "Limited to vendor's configuration",
  },
  {
    feature: "AI capabilities",
    custom: "Custom models on your data",
    saas: "Generic AI, per-interaction pricing",
  },
  {
    feature: "Data control",
    custom: "Your infrastructure, your rules",
    saas: "Vendor's servers, vendor's terms",
  },
  {
    feature: "Vendor lock-in",
    custom: "None — you own the code",
    saas: "High switching costs and data portability issues",
  },
  {
    feature: "Upgrade control",
    custom: "You decide when and what changes",
    saas: "Forced upgrades on vendor's schedule",
  },
];

/* ─── FAQ ─── */

export const faqs: FAQItem[] = [
  {
    category: "general",
    question: "What does FuturLabs do?",
    answer:
      "We build custom, AI-powered software that replaces expensive SaaS subscriptions. Instead of paying recurring licensing fees to Salesforce, SAP, or similar vendors, you get software built for your exact business needs — and you own every line of code.",
  },
  {
    category: "ownership",
    question: "Do we actually own the code?",
    answer:
      "100%. Full intellectual property transfer on delivery. You own every line of code, every design asset, and every AI model. No licensing fees, no usage restrictions, no vendor lock-in. You can modify, extend, or redeploy the software with any development team — including your own.",
  },
  {
    category: "pricing",
    question: "How much does custom software cost vs. SaaS?",
    answer:
      "Custom software has a higher upfront investment ($75K–$400K depending on scope) but eliminates recurring licensing that compounds over time. A typical mid-market company spending $200K/year on SaaS breaks even on a custom build in 18–30 months. Over 5 years, savings range from $500K to over $2M.",
  },
  {
    category: "process",
    question: "How long does a project take?",
    answer:
      "MVP in 6–12 weeks. Full platform in 3–6 months. We deploy in phases so you get working software early — not a 12-month wait for a big-bang launch. AI-accelerated development has cut timelines by 60% compared to traditional development.",
  },
  {
    category: "technical",
    question: "What technology stack do you use?",
    answer:
      "We build with modern, proven technologies: Next.js, React, Node.js, Python, PostgreSQL, and cloud infrastructure (AWS/Vercel). AI capabilities use the latest models from OpenAI, Anthropic, and open-source alternatives. Every choice is made for long-term maintainability and performance.",
  },
  {
    category: "process",
    question: "What if I need changes after launch?",
    answer:
      "You own the code, so you can modify it anytime — with us or any development team. Most clients choose our Growth Retainer ($10K–$25K/month) for ongoing development, new features, and support. But you're never locked in.",
  },
  {
    category: "general",
    question: "What industries do you work with?",
    answer:
      "We specialize in mid-market companies ($10M–$250M revenue) across manufacturing, professional services, healthcare, financial services, logistics, and construction. Our SaaS replacement approach works for any industry where software subscription costs have become a significant line item.",
  },
  {
    category: "pricing",
    question: "What does pricing look like?",
    answer:
      "Discovery & audit: $15K–$25K. MVP development: $75K–$150K. Full platform: $150K–$400K. Ongoing support retainer: $10K–$25K/month. We also offer equity/revenue-share arrangements for select high-potential projects.",
  },
  {
    category: "process",
    question: "How do we get started?",
    answer:
      "Book a free Discovery Call. We'll discuss your current SaaS stack, identify the highest-ROI replacement opportunities, and provide a preliminary cost comparison. If it makes sense, we start with a paid SaaS Replacement Assessment ($5K–$15K) that delivers a detailed roadmap.",
  },
  {
    category: "ownership",
    question: "What happens if FuturLabs goes away?",
    answer:
      "You own the code and all documentation. Your software runs on your infrastructure (or standard cloud providers like AWS). Any qualified development team can maintain and extend it. This is the entire point — you're not dependent on any vendor, including us.",
  },
];

/* ─── Pricing Tiers ─── */

export const pricingTiers: PricingTier[] = [
  {
    name: "Discovery",
    priceRange: "$15K – $25K",
    description:
      "SaaS Replacement Assessment — audit your tech stack, calculate true TCO, and deliver a detailed roadmap for custom ownership.",
    includes: [
      "Full SaaS stack audit",
      "True TCO calculation (3 & 5-year)",
      "Feature utilization analysis",
      "Custom build vs. SaaS comparison",
      "Prioritized replacement roadmap",
      "Executive-ready business case",
    ],
    color: "#BCEFFF",
  },
  {
    name: "MVP",
    priceRange: "$75K – $1.5M",
    description:
      "First production-ready version of your custom platform. Core features, AI capabilities, and data migration included.",
    includes: [
      "Core feature development",
      "AI/ML capabilities built-in",
      "Data migration from existing SaaS",
      "User training & documentation",
      "60-day post-launch support",
      "Full code & IP ownership",
    ],
    color: "#D0FF71",
    featured: true,
  },
  {
    name: "Full Platform",
    priceRange: "$150K – $400K",
    description:
      "Complete custom platform replacing one or more SaaS tools. Advanced AI, integrations, and all departments covered.",
    includes: [
      "Everything in MVP",
      "Advanced AI & automation",
      "Multi-department coverage",
      "Third-party integrations",
      "Performance optimization",
      "90-day post-launch support",
    ],
    color: "#C4EF7A",
  },
  {
    name: "Growth Retainer",
    priceRange: "$10K – $25K/mo",
    description:
      "Ongoing development, new features, AI improvements, and dedicated technical support. Scale your platform as your business grows.",
    includes: [
      "Dedicated development team",
      "New feature development",
      "AI model improvements",
      "Performance monitoring",
      "Priority support (4hr SLA)",
      "Quarterly strategy reviews",
    ],
    color: "#71CFA3",
    retainer: true,
  },
];
