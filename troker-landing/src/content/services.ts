import { ServicePillar } from "./config";

export const serviceMap: Record<string, ServicePillar> = {
  "custom-crm": {
    slug: "custom-crm",
    title: "Custom CRM & Sales Intelligence",
    shortTitle: "Custom CRM",
    description:
      "Replace Salesforce and HubSpot with a CRM built for your exact sales process. No per-seat licensing, no forced features, no vendor lock-in.",
    icon: "Users",
    color: "#F79C42",
    replaces: ["Salesforce", "HubSpot", "Microsoft Dynamics 365", "Zoho CRM"],
    heroH1: "Stop Paying Rent on Your Customer Data",
    heroSubhead:
      "A 100-person company on Salesforce Enterprise pays ~$198K/year in licensing alone. That's nearly $1M over five years before add-ons. We build CRM platforms you own — with AI features built for your specific sales process.",
    problemHeading: "Your CRM is costing more than it should.",
    problemSubhead:
      "Per-seat pricing punishes growth. Hidden costs multiply. And your most valuable asset — customer data — lives on someone else's servers.",
    painPoints: [
      {
        title: "$198K+/year in licensing",
        description:
          "Salesforce Enterprise at 100 users costs $198K/year — nearly $1M over 5 years before customization, add-ons, or admin staff.",
      },
      {
        title: "20-70% CRM failure rate",
        description:
          "CRM implementations fail because the tool doesn't match actual workflows. You adapt to the software instead of the software adapting to you.",
      },
      {
        title: "Hidden cost explosion",
        description:
          "One company budgeted $5M/year for Salesforce only to discover true TCO was $9M annually once hidden expenses were included.",
      },
      {
        title: "Vendor lock-in on your data",
        description:
          "Your most valuable asset — customer relationships and data — lives on a vendor's servers under their terms and their pricing.",
      },
      {
        title: "Per-seat pricing punishes growth",
        description:
          "Every new hire, every new team, every expansion means more seats and higher costs. Growth becomes a licensing penalty.",
      },
    ],
    benefits: [
      {
        title: "Zero per-seat licensing",
        description: "Add unlimited users without incremental cost. Growth isn't penalized.",
      },
      {
        title: "AI built for your sales process",
        description:
          "Custom AI features trained on your data — not generic models shared across millions of accounts.",
      },
      {
        title: "Complete data ownership",
        description:
          "Your customer data lives on your infrastructure, under your control, forever.",
      },
      {
        title: "Exact workflow match",
        description:
          "Built around how your team actually sells — not how a vendor thinks you should.",
      },
    ],
    processSteps: [
      { step: 1, title: "Sales Process Audit", description: "We map your current sales workflow, data flows, and integration points to understand exactly what your CRM needs to do." },
      { step: 2, title: "Architecture & Design", description: "We design the data model, AI features, and user experience around your specific sales process — not a generic template." },
      { step: 3, title: "Build & Iterate", description: "Phased development with your team testing and providing feedback at every milestone. Your CRM evolves with real usage." },
      { step: 4, title: "Migration & Launch", description: "We handle full data migration from your existing CRM, train your team, and ensure zero disruption to active deals." },
      { step: 5, title: "Ongoing Support", description: "Continuous improvements, new AI features, and technical support — at a fixed monthly rate, not per-seat pricing." },
    ],
    faqs: [
      {
        category: "pricing",
        question: "How much does a custom CRM cost compared to Salesforce?",
        answer:
          "A custom CRM typically costs $150K–$400K to build. For a 100-person company paying $198K/year for Salesforce, the custom build breaks even in 12–24 months. Over 5 years, the savings are $500K–$800K+ when you eliminate per-seat licensing, add-on fees, and admin overhead.",
      },
      {
        category: "process",
        question: "How long does it take to build a custom CRM?",
        answer:
          "MVP in 8–12 weeks. Full platform with AI features in 4–6 months. We phase the build so your team can start using core features while we develop advanced capabilities.",
      },
      {
        category: "technical",
        question: "Can you migrate our data from Salesforce?",
        answer:
          "Yes. We handle complete data migration — contacts, deals, activities, custom fields, attachments, and historical data. We've migrated companies with 500K+ records without disrupting active sales operations.",
      },
      {
        category: "ownership",
        question: "Do we own the code?",
        answer:
          "100%. You own every line of code, every design asset, and every AI model. Full IP transfer on delivery. No licensing fees, no usage restrictions, no vendor lock-in. Ever.",
      },
      {
        category: "general",
        question: "What if we need features Salesforce has?",
        answer:
          "Most companies use only 20–30% of Salesforce features. We build the features you actually use, plus custom AI capabilities Salesforce doesn't offer. The result is a simpler, faster tool that your team actually adopts.",
      },
    ],
    bestFitCompanies: [
      "B2B services firms",
      "Professional services",
      "Financial advisors",
      "Wholesale distributors",
      "Real estate brokerages",
    ],
    metaTitle: "Custom CRM Development | Replace Salesforce | FuturLabs",
    metaDescription:
      "Build a custom CRM that replaces Salesforce. Zero per-seat licensing, AI built for your sales process, complete data ownership. Break even in 2 years.",
    tier: 1,
  },

  "custom-erp": {
    slug: "custom-erp",
    title: "Custom ERP Systems",
    shortTitle: "Custom ERP",
    description:
      "Replace SAP, NetSuite, and Dynamics with an ERP built for your operations. Own your business backbone instead of renting it.",
    icon: "Building2",
    color: "#71CFA3",
    replaces: ["SAP S/4HANA", "Oracle NetSuite", "Microsoft Dynamics 365", "Acumatica"],
    heroH1: "Your Operations Deserve Better Than SAP",
    heroSubhead:
      "SAP's forced migration costs $300K–$800K. NetSuite charges $150K/year with zero ownership. We build ERP systems tailored to your operations — and you own every line of code.",
    problemHeading: "Enterprise ERP is built for enterprises. Not for you.",
    problemSubhead:
      "Mid-market companies are trapped between 'too complex' enterprise ERP and 'too basic' small-business solutions.",
    painPoints: [
      {
        title: "$300K–$800K migration costs",
        description:
          "SAP's forced migration from ECC to S/4HANA is a financial earthquake. And the new system still won't fit your processes.",
      },
      {
        title: "48% struggle with legacy ERP",
        description:
          "Nearly half of organizations report their ERP systems can't keep up with business needs. Customization costs more than the original license.",
      },
      {
        title: "$150K+/year for NetSuite",
        description:
          "A mid-market manufacturer pays $150K/year for NetSuite plus customization — $750K over five years with zero ownership.",
      },
      {
        title: "Forced upgrade cycles",
        description:
          "Vendor-dictated upgrades break customizations, require retraining, and cost months of productivity — on their schedule, not yours.",
      },
    ],
    benefits: [
      {
        title: "Exact process mapping",
        description: "Built around your actual operations — not a generic template you have to bend your business around.",
      },
      {
        title: "No forced upgrades",
        description: "You control when and what changes. No vendor-dictated timelines breaking your workflows.",
      },
      {
        title: "Eliminate per-user pricing",
        description: "Scale your team without scaling your software bill. Every employee has access.",
      },
      {
        title: "AI-powered operations",
        description: "Intelligent automation, demand forecasting, and anomaly detection built for your specific data.",
      },
    ],
    processSteps: [
      { step: 1, title: "Operations Audit", description: "Deep dive into your workflows, data flows, and pain points across departments to map exactly what your ERP needs to handle." },
      { step: 2, title: "System Architecture", description: "Design modular architecture covering your core needs — inventory, finance, procurement, HR — without the bloat of features you'll never use." },
      { step: 3, title: "Phased Development", description: "Build core modules first, then layer on complexity. Your team validates each module before we move to the next." },
      { step: 4, title: "Data Migration & Go-Live", description: "Migrate historical data, integrate with existing systems, train your team, and go live with zero downtime." },
      { step: 5, title: "Continuous Improvement", description: "Ongoing support, new modules, and AI enhancements at a predictable monthly cost." },
    ],
    faqs: [
      {
        category: "pricing",
        question: "How much does a custom ERP cost vs. SAP or NetSuite?",
        answer:
          "A custom ERP typically costs $200K–$500K to build. Compare that to SAP ($300K–$800K just to migrate, plus $200K+/year in licensing) or NetSuite ($150K/year). The custom build breaks even in 18–30 months and saves $1M+ over 5 years.",
      },
      {
        category: "process",
        question: "How long does a custom ERP take to build?",
        answer:
          "Core modules (inventory, finance, order management) in 3–4 months. Full platform with all departments in 6–9 months. We deploy in phases so you get value immediately rather than waiting for a 12-month big bang launch.",
      },
      {
        category: "technical",
        question: "Can it integrate with our existing systems?",
        answer:
          "Yes. We build APIs to connect with your existing accounting software, e-commerce platforms, shipping providers, payment processors, and any other systems. Custom ERP means custom integrations — not pre-built connectors that sort of work.",
      },
      {
        category: "ownership",
        question: "What happens if we outgrow the system?",
        answer:
          "You own the code, so you can extend it anytime — with us or any development team. Custom ERP scales with your business because it was designed for your business. No artificial limits, no tier upgrades, no vendor negotiations.",
      },
    ],
    bestFitCompanies: [
      "Manufacturing",
      "Distribution & wholesale",
      "Multi-location retail",
      "Construction firms",
      "Food & beverage producers",
    ],
    metaTitle: "Custom ERP Development | Replace SAP & NetSuite | FuturLabs",
    metaDescription:
      "Build a custom ERP that replaces SAP and NetSuite. Own your operations backbone. Break even in 18 months, save $1M+ over 5 years.",
    tier: 1,
  },

  "ai-agents": {
    slug: "ai-agents",
    title: "AI Agents & Intelligent Automation",
    shortTitle: "AI Agents",
    description:
      "Build custom AI agents that automate customer service, sales, and operations — without per-conversation pricing that kills your margins.",
    icon: "Bot",
    color: "#BCEFFF",
    replaces: ["Salesforce Agentforce", "ServiceNow", "Intercom", "Drift", "Zendesk AI"],
    heroH1: "AI Agents That Actually Know Your Business",
    heroSubhead:
      "Off-the-shelf AI chatbots give generic answers and charge per conversation. We build AI agents trained on your data that handle complex workflows — and you own them.",
    problemHeading: "Per-conversation pricing is a tax on customer service.",
    problemSubhead:
      "SaaS vendors charge $0.50–$2.00 per AI interaction. At scale, that's more expensive than human agents.",
    painPoints: [
      {
        title: "$0.50–$2.00 per conversation",
        description:
          "Per-conversation pricing from SaaS vendors becomes punishingly expensive at scale. 100K conversations/month = $50K–$200K/month.",
      },
      {
        title: "Generic, unhelpful responses",
        description:
          "Off-the-shelf AI agents don't understand your products, processes, or customers. They escalate 60%+ of interactions to humans.",
      },
      {
        title: "No deep integration",
        description:
          "SaaS chatbots sit on top of your systems. They can answer questions but can't take action — check inventory, process returns, update accounts.",
      },
      {
        title: "Your data trains their model",
        description:
          "Your customer interactions improve the vendor's AI for everyone, including your competitors. Your data should benefit you.",
      },
    ],
    benefits: [
      {
        title: "Zero per-interaction fees",
        description: "Fixed infrastructure costs. Handle 1K or 1M conversations at the same price.",
      },
      {
        title: "Trained on your data",
        description: "AI agents that understand your products, policies, and customers deeply — not generic models.",
      },
      {
        title: "Deep system integration",
        description: "Agents that can take action — process orders, update accounts, check inventory, schedule appointments.",
      },
      {
        title: "Proprietary competitive advantage",
        description: "Your AI gets smarter on your data. That intelligence stays with you, not the vendor.",
      },
    ],
    processSteps: [
      { step: 1, title: "Use Case Mapping", description: "Identify the highest-impact automation opportunities across customer service, sales, and operations." },
      { step: 2, title: "Knowledge Base & Training", description: "Build the AI's knowledge foundation from your documentation, past interactions, and domain expertise." },
      { step: 3, title: "Agent Development", description: "Build, test, and refine AI agents with your team. Each agent is validated against real scenarios before deployment." },
      { step: 4, title: "Integration & Deployment", description: "Connect agents to your systems (CRM, inventory, billing) and deploy across your customer touchpoints." },
      { step: 5, title: "Learning & Optimization", description: "Continuous monitoring, retraining, and expansion of agent capabilities based on real interaction data." },
    ],
    faqs: [
      {
        category: "pricing",
        question: "How much does a custom AI agent cost vs. Intercom or Zendesk AI?",
        answer:
          "A custom AI agent platform costs $100K–$250K to build. Compare that to Intercom Fin at $0.99/resolution — a company handling 50K resolutions/month pays $50K/month ($600K/year). The custom build breaks even in 3–6 months.",
      },
      {
        category: "technical",
        question: "How accurate are custom AI agents?",
        answer:
          "Custom agents trained on your specific data typically achieve 85–95% resolution rates, compared to 40–60% for generic chatbots. They handle your specific edge cases because they were built for your specific business.",
      },
      {
        category: "process",
        question: "How long does it take to build an AI agent?",
        answer:
          "A focused customer service agent: 6–8 weeks. A multi-channel agent handling sales, support, and operations: 3–4 months. We deploy iteratively so you see results within the first month.",
      },
      {
        category: "ownership",
        question: "Do we own the AI models?",
        answer:
          "Yes. You own the fine-tuned models, the training data, and the entire agent infrastructure. You can modify, extend, or redeploy without our involvement.",
      },
    ],
    bestFitCompanies: [
      "E-commerce",
      "Customer-service-heavy businesses",
      "Insurance",
      "Healthcare",
      "Property management",
      "Logistics",
    ],
    metaTitle: "Custom AI Agent Development | Replace Intercom & Zendesk | FuturLabs",
    metaDescription:
      "Build AI agents trained on your data with zero per-conversation fees. Replace Intercom, Zendesk AI, and Drift. Own your automation.",
    tier: 1,
  },

  "workflow-automation": {
    slug: "workflow-automation",
    title: "AI-Powered Workflow & Process Automation",
    shortTitle: "Workflow Automation",
    description:
      "Replace Zapier, Make, and ServiceNow with automation built for your exact processes. No per-task pricing, no platform limits.",
    icon: "Workflow",
    color: "#FFDF40",
    replaces: ["Zapier", "Make", "ServiceNow", "Power Automate", "UiPath RPA"],
    heroH1: "Automate Without Per-Task Pricing",
    heroSubhead:
      "Zapier charges $6K+/year for 50,000 tasks. ServiceNow averages $340K/year. We build automation that scales infinitely without incremental cost — because you own it.",
    problemHeading: "No-code automation has a ceiling. You've hit it.",
    problemSubhead:
      "Per-task pricing, platform limitations, and fragile integrations are holding your operations back.",
    painPoints: [
      {
        title: "$6K+/year for Zapier at scale",
        description:
          "Running 50,000 automated tasks/month on Zapier costs $6K+/year — and that number only grows as you automate more.",
      },
      {
        title: "$340K/year for ServiceNow",
        description:
          "Enterprise automation platforms price mid-market companies out of serious process automation.",
      },
      {
        title: "Fragile integrations",
        description:
          "No-code automation breaks when APIs change, fields update, or edge cases appear. You spend more time fixing automations than building them.",
      },
      {
        title: "Platform limitations",
        description:
          "Complex multi-step workflows with conditional logic, error handling, and data transformation hit the ceiling of no-code tools fast.",
      },
    ],
    benefits: [
      {
        title: "Zero per-task pricing",
        description: "Run unlimited automations at a fixed infrastructure cost. Scale without incremental fees.",
      },
      {
        title: "AI-powered intelligence",
        description: "Automations that make decisions, handle exceptions, and learn from patterns — not just if/then rules.",
      },
      {
        title: "Rock-solid reliability",
        description: "Custom error handling, retry logic, and monitoring built for your critical business processes.",
      },
      {
        title: "Unlimited complexity",
        description: "No platform limitations. Build workflows as complex as your business needs them to be.",
      },
    ],
    processSteps: [
      { step: 1, title: "Process Mapping", description: "Document your manual workflows, identify automation candidates, and prioritize by ROI impact." },
      { step: 2, title: "Automation Architecture", description: "Design reliable, scalable automation pipelines with proper error handling and monitoring." },
      { step: 3, title: "Development & Testing", description: "Build automations, test with real data, and validate edge cases before deployment." },
      { step: 4, title: "Deployment & Monitoring", description: "Deploy to production with comprehensive monitoring, alerting, and fallback procedures." },
      { step: 5, title: "Expansion", description: "Continuously identify and automate new processes as your team discovers new opportunities." },
    ],
    faqs: [
      {
        category: "pricing",
        question: "How much does custom automation cost vs. Zapier?",
        answer:
          "Custom automation platforms cost $75K–$200K to build. A company running 50K+ tasks/month on Zapier pays $6K–$12K/year and growing. The custom build eliminates per-task pricing entirely and handles complexity Zapier can't.",
      },
      {
        category: "process",
        question: "What processes can you automate?",
        answer:
          "Anything with a repeatable pattern: invoice processing, lead routing, order fulfillment, document generation, approval workflows, data synchronization between systems, reporting, and compliance checks. If a human does it repeatedly, we can automate it.",
      },
      {
        category: "technical",
        question: "How is this different from Zapier or Make?",
        answer:
          "No-code tools are great for simple A-to-B automations. Custom automation handles complex multi-step workflows with conditional logic, error recovery, data transformation, and AI-powered decision-making. No per-task pricing, no rate limits, no platform constraints.",
      },
      {
        category: "ownership",
        question: "What if Zapier or Make adds the features we need?",
        answer:
          "No-code platforms will always have per-task pricing and platform constraints. Custom automation gives you complete control over cost, complexity, and capability. You're not waiting on a vendor's roadmap.",
      },
    ],
    bestFitCompanies: [
      "Financial services",
      "Healthcare",
      "Law firms",
      "Accounting firms",
      "Real estate",
      "Logistics",
    ],
    metaTitle: "Custom Workflow Automation | Replace Zapier & ServiceNow | FuturLabs",
    metaDescription:
      "Build custom workflow automation with zero per-task pricing. Replace Zapier, Make, and ServiceNow. AI-powered processes you own.",
    tier: 1,
  },

  "bi-analytics": {
    slug: "bi-analytics",
    title: "Business Intelligence & Analytics Platforms",
    shortTitle: "BI & Analytics",
    description:
      "Replace Tableau and Power BI with analytics built into your workflows. Real-time dashboards, AI insights, no per-user licensing.",
    icon: "BarChart3",
    color: "#C4EF7A",
    replaces: ["Tableau", "Power BI", "Looker", "Qlik", "Domo"],
    heroH1: "Analytics That Live Inside Your Business",
    heroSubhead:
      "Tableau at $75/user/month costs $90K/year for 100 users. And your data still lives in a silo. We build analytics embedded in your workflows — with AI that actually understands your business.",
    problemHeading: "Your BI tool is an expensive silo.",
    problemSubhead:
      "Per-user licensing limits who can access data. Generic dashboards don't reflect your actual KPIs.",
    painPoints: [
      {
        title: "$90K/year for 100 Tableau users",
        description:
          "Tableau Creator at $75/user/month becomes a significant cost — and that pricing penalizes broad data access across your organization.",
      },
      {
        title: "37% cloud spending is waste",
        description:
          "Companies pay for BI capacity they don't use. Generic platforms include features irrelevant to your business.",
      },
      {
        title: "Data lives in silos",
        description:
          "Your BI tool pulls data into its own environment. Insights are disconnected from the systems where decisions happen.",
      },
      {
        title: "Generic dashboards",
        description:
          "Pre-built templates don't reflect your specific KPIs, metrics, or business logic. Customization costs extra.",
      },
    ],
    benefits: [
      {
        title: "Unlimited user access",
        description: "Everyone in your organization can access data without per-seat costs limiting visibility.",
      },
      {
        title: "Embedded in your workflows",
        description: "Analytics live inside your existing tools — not in a separate platform people forget to check.",
      },
      {
        title: "AI-powered insights",
        description: "Anomaly detection, forecasting, and natural language queries trained on your specific data.",
      },
      {
        title: "Complete data ownership",
        description: "Your data stays in-house. Critical for compliance and competitive advantage.",
      },
    ],
    processSteps: [
      { step: 1, title: "Data Audit", description: "Map your data sources, identify key metrics, and understand how decisions are made across your organization." },
      { step: 2, title: "Dashboard & Insight Design", description: "Design dashboards and AI insights around your actual KPIs and decision-making workflows." },
      { step: 3, title: "Data Pipeline & Platform Build", description: "Build real-time data pipelines and the analytics platform with embedded AI capabilities." },
      { step: 4, title: "Integration & Training", description: "Embed analytics into your existing workflows and train your team on the new capabilities." },
      { step: 5, title: "Evolve & Expand", description: "Add new data sources, dashboards, and AI models as your business intelligence needs grow." },
    ],
    faqs: [
      {
        category: "pricing",
        question: "How much does a custom BI platform cost vs. Tableau?",
        answer:
          "A custom BI platform costs $100K–$300K to build. Tableau for 100 users costs $90K/year. The custom build breaks even in 12–18 months and eliminates per-user pricing permanently.",
      },
      {
        category: "technical",
        question: "Can it connect to all our data sources?",
        answer:
          "Yes. Custom connectors for any data source — databases, APIs, spreadsheets, SaaS tools, IoT devices. No limitations on data source types or volumes.",
      },
      {
        category: "process",
        question: "How long does it take to build?",
        answer:
          "Core dashboards and data pipelines in 6–10 weeks. Full platform with AI insights in 3–5 months. We deploy iteratively so you get value from week one.",
      },
      {
        category: "ownership",
        question: "Is our data secure?",
        answer:
          "Your data never leaves your infrastructure. Custom BI means complete control over data residency, access controls, and compliance requirements — critical for regulated industries.",
      },
    ],
    bestFitCompanies: [
      "Retail chains",
      "Manufacturing",
      "Healthcare",
      "Financial services",
      "Logistics",
    ],
    metaTitle: "Custom BI & Analytics Platform | Replace Tableau | FuturLabs",
    metaDescription:
      "Build custom BI and analytics that replace Tableau and Power BI. AI-powered insights, zero per-user licensing, complete data ownership.",
    tier: 1,
  },

  "legacy-modernization": {
    slug: "legacy-modernization",
    title: "Legacy Software Modernization",
    shortTitle: "Legacy Modernization",
    description:
      "Modernize aging systems into AI-powered platforms you own. Migrate off legacy tech stacks without disrupting operations.",
    icon: "RefreshCcw",
    color: "#DDA0DD",
    replaces: ["Legacy on-prem systems", "Outdated custom software", "End-of-life platforms"],
    heroH1: "Modernize Without Starting Over",
    heroSubhead:
      "Your legacy systems work — they're just slow, expensive to maintain, and impossible to extend. We modernize them into modern, AI-ready platforms without the big-bang risk.",
    problemHeading: "Legacy systems are a ticking clock.",
    problemSubhead:
      "Every year you wait, maintenance costs rise, talent gets harder to find, and the gap between your tech and your competitors widens.",
    painPoints: [
      {
        title: "Rising maintenance costs",
        description:
          "Legacy systems consume 60–80% of IT budgets just to maintain. That's money that could fund innovation.",
      },
      {
        title: "Talent shortage",
        description:
          "Finding developers who know COBOL, Classic ASP, or legacy frameworks gets harder and more expensive every year.",
      },
      {
        title: "Integration roadblocks",
        description:
          "Modern tools, AI capabilities, and new business requirements can't connect to systems built 15+ years ago.",
      },
      {
        title: "Security vulnerabilities",
        description:
          "Outdated frameworks and unsupported languages are prime targets for security breaches. Compliance gets harder every audit.",
      },
    ],
    benefits: [
      {
        title: "Incremental modernization",
        description: "We modernize module by module — no risky big-bang rewrites. Your business runs uninterrupted.",
      },
      {
        title: "AI-ready architecture",
        description: "Modern stack designed to leverage AI, automation, and real-time data from day one.",
      },
      {
        title: "Reduced maintenance costs",
        description: "Modern tech stacks cost 50–70% less to maintain and attract better talent.",
      },
      {
        title: "Future-proof foundation",
        description: "Clean, modular architecture that evolves with your business for years to come.",
      },
    ],
    processSteps: [
      { step: 1, title: "System Assessment", description: "Comprehensive audit of your current systems — architecture, data, dependencies, and business logic that must be preserved." },
      { step: 2, title: "Modernization Roadmap", description: "Prioritized plan for incremental modernization — which modules to modernize first based on risk, ROI, and dependencies." },
      { step: 3, title: "Phased Migration", description: "Module-by-module modernization with thorough testing. Each phase delivers working software before we move to the next." },
      { step: 4, title: "Data Migration & Validation", description: "Migrate historical data with complete validation. Every record verified, every relationship preserved." },
      { step: 5, title: "Handoff & Enablement", description: "Full documentation, team training, and knowledge transfer. Your team owns and maintains the modern system." },
    ],
    faqs: [
      {
        category: "process",
        question: "Do we have to rewrite everything from scratch?",
        answer:
          "No. We assess which components can be modernized incrementally and which need replacement. Most projects preserve 40–60% of existing business logic while modernizing the architecture around it.",
      },
      {
        category: "pricing",
        question: "How much does legacy modernization cost?",
        answer:
          "Depending on complexity, $100K–$500K+. But compare that to rising maintenance costs ($50K–$200K/year and growing), plus the opportunity cost of being unable to adopt AI, automation, or modern integrations.",
      },
      {
        category: "technical",
        question: "What about our historical data?",
        answer:
          "Every record is migrated and validated. We build data migration pipelines that handle format changes, data cleaning, and relationship mapping. Nothing gets lost.",
      },
      {
        category: "general",
        question: "How do you minimize business disruption?",
        answer:
          "Phased approach with parallel running. New modules go live alongside old ones until validated. We never turn off a working system until its replacement is proven.",
      },
    ],
    bestFitCompanies: [
      "Companies with 10+ year-old custom software",
      "Organizations on end-of-life platforms",
      "Businesses blocked by legacy integration limits",
      "Companies facing compliance issues from outdated tech",
    ],
    metaTitle: "Legacy Software Modernization | AI-Ready Platforms | FuturLabs",
    metaDescription:
      "Modernize legacy systems into AI-powered platforms you own. Incremental migration, zero disruption, future-proof architecture.",
    tier: 1,
  },

  // ── Tier 2 Service Pillars (data ready, pages built later) ──

  "supply-chain": {
    slug: "supply-chain",
    title: "Supply Chain & Inventory Management",
    shortTitle: "Supply Chain",
    description:
      "Replace SAP SCM and Blue Yonder with supply chain systems built for your operations. AI-powered demand forecasting you own.",
    icon: "Truck",
    color: "#FFB347",
    replaces: ["SAP SCM", "Oracle SCM Cloud", "Blue Yonder", "Kinaxis", "Manhattan Associates"],
    heroH1: "Supply Chain Software That Fits Your Operations",
    heroSubhead:
      "Enterprise SCM vendors charge per-module and per-user. Custom middleware consumes 60% of project budgets. We build exactly what you need — nothing more, nothing less.",
    problemHeading: "You're paying for an entire suite. You need 3 modules.",
    problemSubhead: "Mid-market companies are forced to buy entire suites when they need targeted solutions.",
    painPoints: [
      { title: "60% budget goes to middleware", description: "Custom integration between enterprise SCM modules consumes most of the project budget." },
      { title: "Per-module pricing", description: "WMS, TMS, procurement — each module is a separate line item. Costs compound rapidly." },
      { title: "Post-pandemic complexity", description: "Reshoring, regulatory compliance (UFLPA, CSRD), and supply chain disruptions demand agile systems." },
      { title: "Slow to adapt", description: "Enterprise SCM systems take months to reconfigure when supply chain realities change." },
    ],
    benefits: [
      { title: "Pay for what you need", description: "Build only the modules your operations require. No bloated suites." },
      { title: "AI demand forecasting", description: "Predictive models trained on your historical data, not industry averages." },
      { title: "Real-time visibility", description: "End-to-end supply chain visibility built into your daily operations." },
      { title: "Rapid adaptation", description: "Modify your system in days when supply chain realities change." },
    ],
    processSteps: [
      { step: 1, title: "Supply Chain Audit", description: "Map your supply chain from procurement to delivery, identifying bottlenecks and automation opportunities." },
      { step: 2, title: "System Design", description: "Design modular architecture covering exactly the supply chain functions you need." },
      { step: 3, title: "Build & Integrate", description: "Develop core modules with integrations to your ERP, warehouse, and logistics systems." },
      { step: 4, title: "Deploy & Optimize", description: "Go live with AI-powered forecasting and real-time tracking. Continuously optimize based on actual performance." },
    ],
    faqs: [
      { category: "pricing", question: "How much does custom SCM cost?", answer: "Custom SCM solutions range from $150K–$400K depending on scope. Compare that to SAP SCM at $200K+/year in licensing alone." },
      { category: "process", question: "How long does it take?", answer: "Core modules in 3–4 months. Full platform with AI forecasting in 5–7 months." },
    ],
    bestFitCompanies: ["Manufacturing", "Distribution", "E-commerce", "Food & beverage", "Pharmaceutical"],
    metaTitle: "Custom Supply Chain Software | Replace SAP SCM | FuturLabs",
    metaDescription: "Build custom supply chain and inventory management systems. AI demand forecasting, real-time visibility, zero per-module pricing.",
    tier: 2,
  },

  "hr-platform": {
    slug: "hr-platform",
    title: "HR & Talent Management Platforms",
    shortTitle: "HR Platform",
    description:
      "Replace Workday and BambooHR with HR software built for your workforce. Complete control over your most sensitive data.",
    icon: "UserCog",
    color: "#E8A0BF",
    replaces: ["Workday", "BambooHR", "ADP", "Paylocity", "SAP SuccessFactors"],
    heroH1: "HR Software That Grows With Your Team",
    heroSubhead:
      "Workday costs $120K–$360K/year for 300 employees. BambooHR caps out at 18 months. We build HR platforms in the sweet spot — powerful enough to scale, simple enough to use.",
    problemHeading: "The mid-market HR gap is real.",
    problemSubhead: "Workday targets enterprises. BambooHR targets startups. You're stuck in the middle.",
    painPoints: [
      { title: "$120K–$360K/year for Workday", description: "A 300-person company pays $34–$100/user/month. Enterprise-grade pricing for mid-market needs." },
      { title: "Outgrow BambooHR in 18 months", description: "Small-business HR tools can't handle the complexity of a growing mid-market organization." },
      { title: "Most sensitive data", description: "Employee records, compensation, performance reviews — HR data demands the highest level of control." },
      { title: "12-month implementations", description: "Enterprise HR platforms take a year to implement. Your team can't wait that long." },
    ],
    benefits: [
      { title: "Right-sized solution", description: "Powerful enough for mid-market complexity, simple enough for daily use." },
      { title: "Complete data control", description: "Your employee data on your infrastructure. No third-party access." },
      { title: "Custom workflows", description: "Onboarding, reviews, approvals — built around how your HR team actually works." },
      { title: "Rapid deployment", description: "Core HR platform live in 8–12 weeks, not 12 months." },
    ],
    processSteps: [
      { step: 1, title: "HR Process Audit", description: "Map your HR workflows, compliance requirements, and integration needs." },
      { step: 2, title: "Platform Design", description: "Design the HR platform around your specific processes — onboarding, reviews, time tracking, benefits." },
      { step: 3, title: "Build & Configure", description: "Develop core modules with your HR team providing feedback at every stage." },
      { step: 4, title: "Launch & Train", description: "Deploy, migrate employee data, and train your HR team on the new platform." },
    ],
    faqs: [
      { category: "pricing", question: "How much does a custom HR platform cost?", answer: "Custom HR platforms range from $100K–$300K. Compare to Workday at $120K–$360K/year." },
      { category: "technical", question: "Can it handle payroll?", answer: "We integrate with payroll providers (ADP, Gusto) or build custom payroll processing depending on your compliance requirements." },
    ],
    bestFitCompanies: ["Multi-location businesses", "200–2,000 employees", "Staffing agencies", "Healthcare", "Hospitality chains"],
    metaTitle: "Custom HR Platform | Replace Workday & BambooHR | FuturLabs",
    metaDescription: "Build custom HR and talent management platforms. Replace Workday and BambooHR with software you own.",
    tier: 2,
  },

  "document-processing": {
    slug: "document-processing",
    title: "Intelligent Document Processing",
    shortTitle: "Document Processing",
    description:
      "Automate document processing with AI that understands your specific document types. No per-page pricing, complete accuracy.",
    icon: "FileSearch",
    color: "#87CEEB",
    replaces: ["ABBYY", "Kofax", "UiPath Document Understanding", "AWS Textract"],
    heroH1: "Stop Processing Documents By Hand",
    heroSubhead:
      "Manual document processing costs 20–30% of operational budgets in finance-heavy industries. We build AI that reads, extracts, and processes your specific document types — without per-page pricing.",
    problemHeading: "Manual data entry is your most expensive hidden cost.",
    problemSubhead: "Your team spends hours on documents that AI could process in seconds.",
    painPoints: [
      { title: "20–30% of operational costs", description: "Manual document processing consumes a massive share of operational budgets in finance and legal." },
      { title: "Per-page pricing at scale", description: "SaaS document processing charges per page. Volume scales, costs scale with it." },
      { title: "Generic models miss nuance", description: "Off-the-shelf OCR doesn't understand your specific document formats, terminology, or validation rules." },
      { title: "Error-prone manual entry", description: "Human data entry has 1–4% error rates. At volume, that compounds into costly mistakes." },
    ],
    benefits: [
      { title: "3x operational efficiency", description: "Companies report 3x improvement in efficiency and 70% reduction in manual labor after AI document processing." },
      { title: "Custom-trained accuracy", description: "AI models trained on your specific document types — invoices, contracts, claims, applications." },
      { title: "Zero per-page pricing", description: "Fixed infrastructure cost. Process 100 or 100,000 documents at the same price." },
      { title: "Full audit trail", description: "Every extraction logged, validated, and traceable for compliance requirements." },
    ],
    processSteps: [
      { step: 1, title: "Document Analysis", description: "Catalog your document types, extraction requirements, and validation rules." },
      { step: 2, title: "AI Model Training", description: "Train extraction models on your specific document formats with your validation criteria." },
      { step: 3, title: "Pipeline Development", description: "Build end-to-end processing pipelines from intake to extraction to downstream system integration." },
      { step: 4, title: "Deploy & Monitor", description: "Deploy with human-in-the-loop validation for edge cases. Continuously improve accuracy over time." },
    ],
    faqs: [
      { category: "technical", question: "What document types can you handle?", answer: "Invoices, contracts, insurance claims, medical records, legal filings, applications, purchase orders — any structured or semi-structured document." },
      { category: "process", question: "How accurate is the AI extraction?", answer: "Custom models typically achieve 95–99% accuracy on trained document types, compared to 70–85% for generic OCR solutions." },
    ],
    bestFitCompanies: ["Accounting firms", "Law firms", "Insurance agencies", "Healthcare", "Banks", "Logistics"],
    metaTitle: "Intelligent Document Processing | AI Document Extraction | FuturLabs",
    metaDescription: "Automate document processing with custom AI. Replace ABBYY and Kofax with extraction trained on your documents.",
    tier: 2,
  },

  "customer-portals": {
    slug: "customer-portals",
    title: "Customer Portals & Self-Service Platforms",
    shortTitle: "Customer Portals",
    description:
      "Replace Salesforce Experience Cloud with customer portals built for your business. No per-login fees, real-time backend integration.",
    icon: "LayoutDashboard",
    color: "#98D8C8",
    replaces: ["Salesforce Experience Cloud", "Zendesk Guide", "ServiceNow Customer Portal"],
    heroH1: "Customer Portals Without Per-Login Pricing",
    heroSubhead:
      "Salesforce Experience Cloud charges $10–$25 per member per month. At 10,000 users, that's $100K–$300K/year. We build portals that integrate directly with your backend — no per-user fees.",
    problemHeading: "Your customer portal shouldn't cost more than your product.",
    problemSubhead: "Per-login pricing at scale makes self-service more expensive than phone support.",
    painPoints: [
      { title: "$100K–$300K/year for 10K users", description: "Salesforce Experience Cloud per-member pricing becomes untenable at scale." },
      { title: "Template constraints", description: "Vendor portals look generic. Your customer experience is constrained by their templates." },
      { title: "Shallow integration", description: "Pre-built portals show cached data, not real-time information from your backend systems." },
      { title: "Vendor controls the experience", description: "Your most important customer touchpoint is controlled by a third party's roadmap." },
    ],
    benefits: [
      { title: "Zero per-login fees", description: "Unlimited customers, unlimited access, fixed infrastructure cost." },
      { title: "Real-time backend integration", description: "Portals connected directly to your systems for live data — not cached snapshots." },
      { title: "Your brand, fully", description: "Complete control over design, UX, and functionality. No template limitations." },
      { title: "Custom workflows", description: "Order tracking, account management, support tickets — built for your specific business processes." },
    ],
    processSteps: [
      { step: 1, title: "Customer Journey Mapping", description: "Map every interaction your customers need through the portal." },
      { step: 2, title: "UX & Architecture Design", description: "Design the portal experience and backend integration architecture." },
      { step: 3, title: "Development & Integration", description: "Build the portal with real-time connections to your backend systems." },
      { step: 4, title: "Launch & Iterate", description: "Deploy, gather customer feedback, and continuously improve the experience." },
    ],
    faqs: [
      { category: "pricing", question: "How much does a custom portal cost?", answer: "Custom portals range from $75K–$250K depending on complexity. Compare to Salesforce Experience Cloud at $100K–$300K/year." },
      { category: "process", question: "How long does it take?", answer: "Core portal in 8–12 weeks. Full-featured platform with self-service and account management in 3–4 months." },
    ],
    bestFitCompanies: ["B2B distributors", "Professional services", "Insurance brokers", "Property management", "Healthcare providers"],
    metaTitle: "Custom Customer Portal Development | Replace Salesforce Experience Cloud | FuturLabs",
    metaDescription: "Build customer portals without per-login pricing. Replace Salesforce Experience Cloud with portals you own.",
    tier: 2,
  },
};

export function getServiceConfig(slug: string): ServicePillar | undefined {
  return serviceMap[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceMap);
}

export function getTier1Services(): ServicePillar[] {
  return Object.values(serviceMap).filter((s) => s.tier === 1);
}

export function getTier2Services(): ServicePillar[] {
  return Object.values(serviceMap).filter((s) => s.tier === 2);
}

export function getAllServices(): ServicePillar[] {
  return Object.values(serviceMap);
}
