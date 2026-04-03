export const AGENCY_NAME = "FuturLabs";
export const SITE_URL = "https://futurlabs.dev";
export const CONTACT_EMAIL = "hello@futurlabs.dev";
export const PHONE = "+17782374700";

export const siteConfig = {
  name: AGENCY_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  phone: PHONE,
  tagline: "Own Your Code. Replace Your SaaS.",
  description:
    "We build AI-powered custom software that replaces your expensive SaaS subscriptions. You own the code. Zero recurring licensing fees.",
  founder: "Bryce Choquer",
  location: "Canada",
  social: {
    linkedin: "https://linkedin.com/company/futurlabs",
    twitter: "https://x.com/futurlabs",
    github: "https://github.com/futurlabs",
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
};
