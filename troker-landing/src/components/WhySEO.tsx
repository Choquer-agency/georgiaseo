"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { warmPalette } from "@/lib/colors";

const benefits = [
  {
    title: "Organic Traffic That Compounds",
    description:
      "Unlike paid ads that stop the moment you stop paying, SEO builds an asset that grows over time. Every page we optimize, every link we earn, and every piece of content we create compounds — delivering more traffic and leads month after month.",
    color: warmPalette[0],
  },
  {
    title: "Highest ROI Marketing Channel",
    description:
      "SEO delivers the highest return on investment of any digital marketing channel. While Google Ads cost $2-$50+ per click, organic traffic is free. Our clients see an average 221% traffic increase within 12 months — with leads that keep coming without per-click costs.",
    color: warmPalette[1],
  },
  {
    title: "Qualified Leads on Autopilot",
    description:
      "People who find you through Google search are actively looking for your service. These are the highest-intent leads you can get — they convert at 8x the rate of outbound marketing because they came to you, not the other way around.",
    color: warmPalette[2],
  },
  {
    title: "Dominate Your Local Market",
    description:
      "46% of Google searches have local intent. Our local SEO strategies put your business in the Map Pack and top organic results so customers in your area find you first — whether they're searching on mobile, desktop, or voice.",
    color: warmPalette[3],
  },
  {
    title: "Outrank Your Competitors",
    description:
      "Your competitors are investing in SEO right now. Every day you wait, they build more authority and widen the gap. We analyze exactly what's working for them and build a strategy to overtake their rankings systematically.",
    color: warmPalette[4],
  },
  {
    title: "Data-Driven Decisions",
    description:
      "No guesswork. Every strategy is backed by keyword data, competitor analysis, and performance metrics. Monthly reports show exactly what's working, what's improving, and where your revenue is coming from — so you always know your ROI.",
    color: warmPalette[5],
  },
];

export function WhySEO() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".why-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".why-card", {
          y: 50,
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
    <section ref={ref} id="why-seo" className="theme-dark section-space-large">
      <div className="u-container">
        <div className="text-center mb-16">
          <p className="why-heading eyebrow text-brand mb-4">Why SEO</p>
          <h2 className="why-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-white max-w-[28ch] mx-auto mb-6">
            The marketing channel that{" "}
            <span className="opacity-40">pays for itself.</span>
          </h2>
          <p className="why-heading font-sans text-fluid-main text-white opacity-50 leading-relaxed max-w-[55ch] mx-auto">
            SEO is the only marketing investment that compounds over time.
            Every month builds on the last — delivering more traffic, more
            leads, and more revenue without increasing your spend.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="why-card p-8 rounded-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-2 h-2 rounded-full mb-5"
                style={{ backgroundColor: benefit.color }}
              />
              <h3 className="font-sans font-medium text-fluid-h6 text-white mb-3">
                {benefit.title}
              </h3>
              <p className="font-sans text-fluid-main text-white opacity-50 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
