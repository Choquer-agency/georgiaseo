"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { getSEOComparison } from "@/content/shared";

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: "rgba(113,207,163,0.15)" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7.5L5.5 11L12 3" stroke="#71CFA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: "rgba(229,57,53,0.1)" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 3L11 11M11 3L3 11" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return <span>{value}</span>;
}

export function SEOComparison({ slug }: { slug: string }) {
  const seoComparison = getSEOComparison(slug);
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".compare-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".compare-row", {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 60%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="seo-comparison"
      className="section-space-main"
      style={{ backgroundColor: "#FFF9F0" }}
    >
      <div className="u-container">
        <div className="text-center mb-16">
          <p className="compare-heading eyebrow text-brand mb-4">
            SEO Comparison
          </p>
          <h2 className="compare-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-dark max-w-[28ch] mx-auto mb-6">
            Professional SEO vs DIY{" "}
            <span className="opacity-40">vs No SEO</span>
          </h2>
          <p className="compare-heading font-sans text-fluid-main text-dark opacity-50 leading-relaxed max-w-[55ch] mx-auto">
            See how professional SEO compares across the metrics that
            matter most to your business growth.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-dark/10">
                <th className="font-sans font-medium text-fluid-meta text-dark opacity-50 uppercase tracking-wider py-4 pr-6">
                  Feature
                </th>
                <th className="font-sans font-medium text-fluid-meta uppercase tracking-wider py-4 px-6" style={{ color: "#F79C42" }}>
                  Professional SEO
                </th>
                <th className="font-sans font-medium text-fluid-meta text-dark opacity-50 uppercase tracking-wider py-4 px-6">
                  DIY SEO
                </th>
                <th className="font-sans font-medium text-fluid-meta text-dark opacity-50 uppercase tracking-wider py-4 px-6">
                  No SEO
                </th>
              </tr>
            </thead>
            <tbody>
              {seoComparison.map((row) => (
                <tr
                  key={row.feature}
                  className="compare-row border-b border-dark/5"
                >
                  <td className="font-sans font-medium text-sm text-dark py-3.5 pr-6">
                    {row.feature}
                  </td>
                  <td className="font-sans text-sm text-dark py-3.5 px-6">
                    <CellValue value={row.professionalSEO} />
                  </td>
                  <td className="font-sans text-sm text-dark opacity-60 py-3.5 px-6">
                    <CellValue value={row.diySEO} />
                  </td>
                  <td className="font-sans text-sm text-dark opacity-60 py-3.5 px-6">
                    <CellValue value={row.noSEO} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {(["professionalSEO", "diySEO", "noSEO"] as const).map((approach) => (
            <div
              key={approach}
              className="compare-row rounded-sm p-6"
              style={{
                backgroundColor:
                  approach === "professionalSEO"
                    ? "rgba(247,156,66,0.08)"
                    : "rgba(0,0,0,0.02)",
                border:
                  approach === "professionalSEO"
                    ? "1px solid rgba(247,156,66,0.2)"
                    : "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3
                className="font-sans font-medium text-fluid-h5 mb-4"
                style={{
                  color: approach === "professionalSEO" ? "#F79C42" : undefined,
                }}
              >
                {approach === "professionalSEO"
                  ? "Professional SEO"
                  : approach === "diySEO"
                    ? "DIY SEO"
                    : "No SEO"}
              </h3>
              <div className="space-y-3">
                {seoComparison.map((row) => (
                  <div
                    key={row.feature}
                    className="flex justify-between items-center"
                  >
                    <span className="font-sans text-sm text-dark opacity-60">
                      {row.feature}
                    </span>
                    <span className="font-sans text-sm text-dark font-medium ml-4 text-right">
                      <CellValue value={row[approach]} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans text-fluid-main text-dark opacity-50 leading-relaxed max-w-[65ch] mx-auto text-center mt-12">
          Professional SEO delivers the highest ROI by combining expert strategy,
          consistent execution, and data-driven optimization — turning organic
          search into your most reliable growth channel.
        </p>
      </div>
    </section>
  );
}
