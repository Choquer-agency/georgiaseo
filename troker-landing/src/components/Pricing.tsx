"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { useContactForm } from "@/context/ContactFormContext";
import { pricingTiers } from "@/content/shared";
import { Check } from "lucide-react";
import { trackCtaClick, trackPricingClick } from "@/lib/analytics";

export function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const { openModal } = useContactForm();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".pricing-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });
        gsap.from(".pricing-card", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id="pricing" className="section-space-main theme-dark">
      <div className="u-container">
        <div className="text-center mb-12">
          <p className="pricing-heading eyebrow text-brand">Pricing</p>
          <h2 className="pricing-heading font-sans font-medium text-fluid-h2 leading-[1.1] max-w-[22ch] mx-auto">
            Invest once. Own forever.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="pricing-card rounded-lg p-6 flex flex-col"
              style={{
                backgroundColor: tier.retainer
                  ? "transparent"
                  : tier.featured
                    ? tier.color
                    : "rgba(255,255,255,0.08)",
                color: tier.featured && !tier.retainer ? "#193133" : "inherit",
                border: tier.retainer
                  ? `2px dashed ${tier.color}`
                  : tier.featured
                    ? "none"
                    : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <p className="font-mono text-xs uppercase tracking-wider" style={{ opacity: tier.featured && !tier.retainer ? 0.7 : 0.5 }}>
                  {tier.name}
                </p>
                {tier.retainer && (
                  <span
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: tier.color, color: "#193133" }}
                  >
                    Ongoing
                  </span>
                )}
              </div>
              <p className="font-sans font-medium text-fluid-h4 mb-3">
                {tier.priceRange}
              </p>
              <p
                className="font-sans text-fluid-main leading-relaxed mb-6"
                style={{ opacity: tier.featured && !tier.retainer ? 0.8 : 0.6 }}
              >
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: tier.featured && !tier.retainer ? "#004D43" : tier.retainer ? tier.color : "#D0FF71", opacity: tier.featured && !tier.retainer ? 0.8 : 0.7 }}
                    />
                    <span
                      className="font-sans text-sm"
                      style={{ opacity: tier.featured && !tier.retainer ? 0.9 : 0.7 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  trackPricingClick(tier.name, tier.priceRange, !!tier.retainer);
                  trackCtaClick("pricing", tier.retainer ? "Learn More" : "Get Started", `${tier.name} (${tier.priceRange})`);
                  openModal({ packageName: `${tier.name} (${tier.priceRange})`, pageCount: 0, estimatedTotal: tier.priceRange }, "pricing");
                }}
                className="w-full py-3 rounded-sm font-sans font-medium text-fluid-main text-center transition-all hover:brightness-110"
                style={
                  tier.retainer
                    ? { background: tier.color, color: "#193133" }
                    : tier.featured
                      ? { background: "#193133", color: "#ffffff" }
                      : { background: "#D0FF71", color: "#193133" }
                }
              >
                {tier.retainer ? "Learn More" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
