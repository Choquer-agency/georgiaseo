"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { getTier1Services } from "@/content/services";
import { GlowCard } from "@/components/ui/spotlight-card";

const iconMap: Record<string, string> = {
  Users: "/images/icons/Group 1707479797.svg",
  Building2: "/images/icons/Group 1707479803.svg",
  Bot: "/images/icons/Group 1707479804.svg",
  Workflow: "/images/icons/Group 1707479806.svg",
  BarChart3: "/images/icons/Group 1707479807.svg",
  RefreshCcw: "/images/icons/Group 1707479808.svg",
};

/* Unique accent color per service — always visible */
const serviceColors: Record<string, { filter: string; hoverFilter: string }> = {
  Users: {
    filter: "brightness(0) saturate(100%) invert(78%) sepia(52%) saturate(500%) hue-rotate(107deg)",
    hoverFilter: "brightness(0) saturate(100%) invert(68%) sepia(52%) saturate(600%) hue-rotate(107deg)",
  },
  Building2: {
    filter: "brightness(0) saturate(100%) invert(58%) sepia(89%) saturate(400%) hue-rotate(212deg)",
    hoverFilter: "brightness(0) saturate(100%) invert(48%) sepia(89%) saturate(500%) hue-rotate(212deg)",
  },
  Bot: {
    filter: "brightness(0) saturate(100%) invert(88%) sepia(40%) saturate(600%) hue-rotate(30deg)",
    hoverFilter: "brightness(0) saturate(100%) invert(78%) sepia(40%) saturate(700%) hue-rotate(30deg)",
  },
  Workflow: {
    filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(310deg)",
    hoverFilter: "brightness(0) saturate(100%) invert(45%) sepia(80%) saturate(600%) hue-rotate(310deg)",
  },
  BarChart3: {
    filter: "brightness(0) saturate(100%) invert(70%) sepia(60%) saturate(600%) hue-rotate(160deg)",
    hoverFilter: "brightness(0) saturate(100%) invert(60%) sepia(60%) saturate(700%) hue-rotate(160deg)",
  },
  RefreshCcw: {
    filter: "brightness(0) saturate(100%) invert(72%) sepia(50%) saturate(500%) hue-rotate(350deg)",
    hoverFilter: "brightness(0) saturate(100%) invert(62%) sepia(50%) saturate(600%) hue-rotate(350deg)",
  },
};

export function ServicePillars() {
  const ref = useRef<HTMLElement>(null);
  const services = getTier1Services();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".pillars-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="section-space-main" style={{ backgroundColor: "#ffffff" }}>
      <div className="u-container">
        <div className="text-center mb-12">
          <p className="pillars-heading eyebrow text-brand mb-4">What We Build</p>
          <h2 className="pillars-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-dark max-w-[22ch] mx-auto">
            Custom software that replaces your most expensive SaaS tools
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const colors = serviceColors[service.icon] || serviceColors.Users;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group"
              >
                <GlowCard
                  glowColor="green"
                  customSize
                  className="!aspect-auto !shadow-none !p-0 !grid-rows-1 h-full"
                >
                  <div className="p-8 relative z-10">
                    <div className="mb-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={iconMap[service.icon] || "/images/icons/Group 1707479797.svg"}
                        alt={service.shortTitle}
                        className="w-12 h-12 transition-all duration-300 group-hover:brightness-90"
                        style={{ filter: colors.filter }}
                      />
                    </div>
                    <h3 className="font-sans font-medium text-fluid-h5 text-dark mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="font-sans text-fluid-main text-dark opacity-50 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-end justify-between">
                      <div className="flex flex-wrap gap-2">
                        {service.replaces.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-xs px-2 py-1 rounded bg-grey text-dark opacity-60"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/icons/Up_Right_Arrow.svg"
                          alt=""
                          className="w-12 h-12 transition-all duration-300 group-hover:brightness-90"
                          style={{ filter: colors.filter }}
                        />
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
