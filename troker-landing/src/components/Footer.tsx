"use client";

import Link from "next/link";
import { useContactForm } from "@/context/ContactFormContext";

const footerTags = [
  { label: "On-Page SEO", color: "#d8e3fd" },
  { label: "Technical SEO", color: "#fff1c6" },
  { label: "Local SEO", color: "#ffe5cd" },
  { label: "Link Building", color: "#d8e3fd" },
  { label: "Content Strategy", color: "#d5ffcd" },
  { label: "Google Business Profile", color: "#e6d8fd" },
  { label: "SEO Reporting", color: "#fdd8f4" },
  { label: "Keyword Research", color: "#fdd8d9" },
  { label: "Conversion Optimization", color: "#d1fffd" },
  { label: "Competitor Analysis", color: "#fff1c6" },
];

export function Footer({ brandName }: { brandName: string }) {
  const { openModal } = useContactForm();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 50%, #FFCC80 100%)",
        color: "#0c0c0c",
      }}
    >
      {/* Big CTA section */}
      <div className="section-space-large">
        <div className="u-container text-center">
          <p className="font-mono text-fluid-small uppercase tracking-wider opacity-60 mb-6">
            Ready to get started?
          </p>
          <p className="font-sans font-medium text-fluid-h1 leading-[1.05] max-w-[16ch] mx-auto mb-8">
            Let&apos;s get you to page 1.
          </p>
          <button
            onClick={() => openModal()}
            className="inline-flex items-center gap-3 bg-brand text-dark rounded-sm px-8 py-4 font-sans font-medium text-fluid-main transition-all hover:brightness-110"
            style={{ transitionDuration: "0.3s" }}
          >
            Get a Free SEO Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="font-sans text-fluid-small opacity-40 mt-6">
            We take on a limited number of clients each month.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
        <div className="u-container py-8">
          {/* Tag cloud */}
          <div className="flex flex-wrap gap-2 mb-8">
            {footerTags.map((tag) => (
              <span
                key={tag.label}
                className="font-mono text-xs md:text-xs px-4 py-2 md:px-3 md:py-1.5 rounded-full"
                style={{ backgroundColor: tag.color, color: "#0c0c0c" }}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-40 mb-3">
                SEO Services
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/local-seo" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Local SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/technical-seo" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Technical SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/content-marketing" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Content Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/link-building" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Link Building
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-40 mb-3">
                Industries
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/industries/healthcare" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Healthcare SEO
                  </Link>
                </li>
                <li>
                  <Link href="/industries/home-services" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Home Services SEO
                  </Link>
                </li>
                <li>
                  <Link href="/industries/legal" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Law Firm SEO
                  </Link>
                </li>
                <li>
                  <Link href="/industries/real-estate" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Real Estate SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-40 mb-3">
                Resources
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="/#portfolio" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    FAQ
                  </a>
                </li>
                <li>
                  <Link href="/tools/seo-roi-calculator" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    SEO ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider opacity-40 mb-3">
                Company
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="/#process" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                    Pricing
                  </a>
                </li>
                <li>
                  <button onClick={() => openModal()} className="font-sans text-sm opacity-60 hover:opacity-100 transition-opacity text-left" style={{ transitionDuration: "0.2s" }}>
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="font-sans font-medium text-base flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt={brandName}
                className="h-5 w-auto"
              />
              {brandName}
            </span>
            <p className="font-sans text-fluid-small opacity-40">
              &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
