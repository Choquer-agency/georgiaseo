"use client";

import { useEffect } from "react";
import { useContactForm } from "@/context/ContactFormContext";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const { openModal } = useContactForm();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <ClientLayout>
      <Nav />
      <div className="section-space-hero" style={{ backgroundColor: "#EBFFF6" }}>
        <div className="u-container text-center">
          <p className="eyebrow text-brand mb-4">Get Started</p>
          <h1 className="font-sans font-medium text-fluid-h2 leading-[1.1] tracking-tight text-dark max-w-[20ch] mx-auto mb-6">
            Let&apos;s talk about what you could own.
          </h1>
          <p className="font-sans text-fluid-large text-dark opacity-60 max-w-[44ch] mx-auto leading-relaxed">
            Your discovery call form should have opened. If not, click the button below.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-8 inline-flex items-center gap-3 rounded-sm px-8 py-4 font-sans font-medium text-fluid-main transition-all hover:brightness-110"
            style={{ background: "#D0FF71", color: "#193133" }}
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
      <Footer />
    </ClientLayout>
  );
}
