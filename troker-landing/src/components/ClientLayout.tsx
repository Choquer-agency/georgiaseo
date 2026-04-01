"use client";

import { ReactNode } from "react";
import { ContactFormProvider } from "@/context/ContactFormContext";
import { ContactFormModal } from "@/components/ContactForm";

interface ClientLayoutProps {
  children: ReactNode;
  domain: string;
  region: string;
}

export function ClientLayout({ children, domain, region }: ClientLayoutProps) {
  return (
    <ContactFormProvider>
      {children}
      <ContactFormModal domain={domain} region={region} />
    </ContactFormProvider>
  );
}
