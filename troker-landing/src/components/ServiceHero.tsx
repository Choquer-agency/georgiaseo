"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { useContactForm } from "@/context/ContactFormContext";

interface ServiceHeroProps {
  h1: string;
  subhead: string;
  qualifier: string;
  region: string;
  eyebrow: string;
}

export function ServiceHero({ h1, subhead, qualifier, eyebrow }: ServiceHeroProps) {
  const { openModal } = useContactForm();
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".service-hero-heading", {
          y: 60,
          opacity: 0,
          duration: 1,
        })
          .from(
            ".service-hero-body",
            { y: 30, opacity: 0, duration: 0.8 },
            "-=0.5"
          )
          .from(
            ".service-hero-cta",
            { y: 20, opacity: 0, duration: 0.6 },
            "-=0.3"
          );
      });
    },
    { scope: ref }
  );

  return (
    <header
      ref={ref}
      className="service-hero section-space-hero"
      style={{ backgroundColor: "#FFF9F0" }}
    >
      <div className="u-container">
        <div className="max-w-[85rem] mx-auto">
          {/* Eyebrow */}
          <div className="service-hero-heading flex items-center gap-2.5 mb-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-brand"
            >
              <path
                d="M4 10L8 14L16 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-xs uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="service-hero-heading font-sans font-medium text-fluid-h1 leading-[1.1] tracking-tight text-dark max-w-[18ch] mb-6">
            {h1}
          </h1>

          {/* Subhead */}
          <p className="service-hero-body font-sans text-fluid-large text-dark opacity-60 max-w-[48ch] mb-6 leading-relaxed">
            {subhead}
          </p>

          {/* Qualifier */}
          <p className="service-hero-body font-sans text-fluid-main text-dark opacity-40 max-w-[50ch] mb-10 leading-relaxed">
            {qualifier}
          </p>

          {/* CTA */}
          <div className="service-hero-cta flex flex-wrap gap-4">
            <button onClick={() => openModal()} className="btn">
              <span className="text-sm">Get a Free Migration Quote</span>
              <span className="btn-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 13L13 1M13 1H3M13 1V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <a
              href="#pricing"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span className="text-sm">View Pricing</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="opacity-60"
              >
                <path
                  d="M7 1V13M7 13L1 7M7 13L13 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
