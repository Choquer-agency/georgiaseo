"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { ProcessStep } from "@/content/config";

const stepColors = ["#F79C42", "#FFDF40", "#BCEFFF", "#C4EF7A"];

interface ServiceProcessProps {
  steps: ProcessStep[];
  heading: string;
}

export function ServiceProcess({ steps, heading }: ServiceProcessProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".sproc-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".sproc-step", {
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
    <section
      ref={ref}
      id="process"
      className="section-space-main"
      style={{ backgroundColor: "#FFF9F0" }}
    >
      <div className="u-container">
        <div className="text-center mb-12">
          <p className="sproc-heading eyebrow text-brand mb-4">
            Migration Process
          </p>
          <h2 className="sproc-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-dark max-w-[22ch] mx-auto">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {steps.map((step, i) => (
            <div key={step.step} className="sproc-step text-center px-3">
              <div className="flex items-center justify-center mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: stepColors[i % stepColors.length],
                  }}
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
