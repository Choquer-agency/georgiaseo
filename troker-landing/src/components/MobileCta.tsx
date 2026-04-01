"use client";

import { useContactForm } from "@/context/ContactFormContext";

export function MobileCta() {
  const { openModal } = useContactForm();

  return (
    <div className="md:hidden py-10 text-center" style={{ backgroundColor: "#FFF9F0" }}>
      <button
        onClick={() => openModal()}
        className="inline-flex items-center gap-3 bg-brand text-dark rounded-sm px-8 py-4 font-sans font-medium text-fluid-main transition-all hover:brightness-110"
        style={{ transitionDuration: "0.3s" }}
      >
        Book a Free Strategy Call
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
