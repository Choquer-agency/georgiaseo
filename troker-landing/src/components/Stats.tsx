"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";

const stats = [
  {
    number: "$1.3M",
    heading: "Client Revenue Generated",
    body: "One client went from zero online presence to $1.3 million in revenue over three years \u2014 powered by SEO strategies built to convert organic traffic into paying customers.",
    color: "#F79C42",
  },
  {
    number: "221%",
    heading: "Average Organic Growth",
    body: "Across multiple accounts, our SEO strategies drove an average organic traffic increase of 221% \u2014 with leads that keep coming without per-click costs.",
    color: "#BCEFFF",
  },
  {
    number: "#1",
    heading: "Local Search Rankings",
    body: "Multiple clients rank #1 in their local markets \u2014 dominating the Google Map Pack and organic results for their highest-value keywords.",
    color: "#C4EF7A",
  },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Heading fade in
        gsap.from(".stats-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });

        // Cards slide up from bottom with spread, then come together on scroll
        const cards = sectionRef.current?.querySelectorAll(".stats-card");
        if (!cards) return;

        // Initial entrance: slide in from bottom
        gsap.from(cards, {
          y: 120,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        });

        // Scrub animation: cards come closer together + straighten rotation
        gsap.fromTo(
          cards[0],
          { x: -40, rotation: -2 },
          {
            x: 0,
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              end: "bottom 50%",
              scrub: 1,
            },
          }
        );
        gsap.fromTo(
          cards[2],
          { x: 40, rotation: 2 },
          {
            x: 0,
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              end: "bottom 50%",
              scrub: 1,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-space-large theme-dark">
      <div className="u-container">
        <h2 className="stats-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-center max-w-[20ch] mx-auto mb-20">
          Data-driven strategy for measurable growth.
        </h2>

        <div className="max-w-[58rem] mx-auto grid md:grid-cols-3 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="stats-card rounded-lg p-7 md:p-8"
              style={{ backgroundColor: stat.color }}
            >
              <p className="font-display text-[clamp(3.5rem,7vw,8rem)] leading-none text-dark mb-5">
                {stat.number}
              </p>
              <h3 className="font-sans font-medium text-fluid-h4 leading-[1.15] text-dark mb-3">
                {stat.heading}
              </h3>
              <p className="font-sans text-fluid-main text-dark opacity-60 leading-relaxed">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
