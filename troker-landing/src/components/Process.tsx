"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { getProcessSteps } from "@/content/shared";

const stepColors = ["#F79C42", "#FFDF40", "#BCEFFF", "#C4EF7A"];

export function Process({ slug }: { slug: string }) {
  const processSteps = getProcessSteps(slug);
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".process-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".process-step", {
          y: 30,
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
    <section ref={ref} id="process" className="section-space-main" style={{ backgroundColor: "#FFF9F0" }}>
      <div className="u-container">
        <div className="text-center mb-12">
          <p className="process-heading eyebrow text-brand mb-4">How We Work</p>
          <h2 className="process-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-dark max-w-[20ch] mx-auto">
            From discovery to launch, we keep it simple.
          </h2>
        </div>

        {/* Horizontal 4-step row with connecting lines */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {processSteps.map((step, i) => (
            <div key={step.step} className="process-step text-center px-3">
              {/* Number + line */}
              <div className="flex items-center justify-center mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: stepColors[i % stepColors.length] }}
                >
                  <span className="font-display text-[1.1rem] leading-none text-dark">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <h3 className="font-sans font-medium text-fluid-h6 text-dark mb-1">
                {step.title}
              </h3>
              <p className="font-sans text-fluid-small text-dark opacity-50 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
