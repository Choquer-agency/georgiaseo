"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { trackFormOpen } from "@/lib/analytics";

export interface PackageInfo {
  packageName: string;
  pageCount: number;
  estimatedTotal: string;
  /** Optional detailed breakdown from cost calculator */
  calculatorDetails?: string;
}

interface ContactFormContextValue {
  isOpen: boolean;
  openModal: (packageInfo?: PackageInfo, source?: string) => void;
  closeModal: () => void;
  packageInfo: PackageInfo | null;
}

const ContactFormContext = createContext<ContactFormContextValue>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  packageInfo: null,
});

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);

  const openModal = useCallback((info?: PackageInfo, source?: string) => {
    trackFormOpen(source, info ? { packageName: info.packageName, estimatedTotal: info.estimatedTotal } : undefined);
    setPackageInfo(info || null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactFormContext.Provider value={{ isOpen, openModal, closeModal, packageInfo }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  return useContext(ContactFormContext);
}
