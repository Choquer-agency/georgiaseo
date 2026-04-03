"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "@/lib/gsap-register";
import { submitForm } from "@/lib/form";
import { useContactForm } from "@/context/ContactFormContext";
import { Check, X, ArrowRight, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import { AGENCY_NAME } from "@/lib/siteConfig";
import { trackFormStep, trackFormSubmit, trackFormAbandon } from "@/lib/analytics";

const TOTAL_SLIDES = 4;

const projectTypes = [
  "Replace a SaaS tool with custom software",
  "Build a custom CRM",
  "Build a custom ERP",
  "AI agent or automation platform",
  "Business intelligence / analytics",
  "Legacy system modernization",
  "Customer portal / self-service platform",
  "Other custom software project",
];

const budgetRanges = [
  "$15,000 – $25,000 (Discovery only)",
  "$75,000 – $150,000 (MVP)",
  "$150,000 – $400,000 (Full Platform)",
  "$400,000+ (Enterprise)",
];

const timelines = [
  "ASAP (6–8 weeks)",
  "1–3 months",
  "3–6 months",
  "Flexible / exploring options",
];

const companySizes = [
  "1–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–2,000 employees",
  "2,000+ employees",
];

const referralSources = [
  "AI assistant (ChatGPT, Claude, Perplexity, etc.)",
  "Google search",
  "LinkedIn",
  "Referred by someone",
  "Conference or event",
  "Blog or article",
  "Other",
];

function ProgressIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            "h-1.5 rounded-full transition-all",
            i === current
              ? "w-8 bg-brand"
              : i < current
                ? "w-4 bg-brand/40"
                : "w-4 bg-dark/10"
          )}
          style={{ transitionDuration: "0.3s" }}
        />
      ))}
      <span className="ml-3 font-mono text-xs text-dark opacity-40">
        {current + 1} / {TOTAL_SLIDES}
      </span>
    </div>
  );
}

export function ContactFormModal() {
  const { isOpen, closeModal, packageInfo } = useContactForm();
  const mountTime = useRef(Date.now());
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    website: "",
    role: "",
    projectType: "",
    description: "",
    currentSaasTools: "",
    annualSaasSpend: "",
    budget: "",
    timeline: "",
    referral: "",
    notes: "",
    _gotcha: "",
  });

  const handleClose = useCallback(() => {
    if (!isSuccess && currentSlide > 0) {
      trackFormAbandon(currentSlide, !!packageInfo);
    }
    if (isSuccess) {
      setCurrentSlide(0);
      setIsSuccess(false);
      setErrors({});
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        companySize: "",
        website: "",
        role: "",
        projectType: "",
        description: "",
        currentSaasTools: "",
        annualSaasSpend: "",
        budget: "",
        timeline: "",
        referral: "",
        notes: "",
        _gotcha: "",
      });
    }
    closeModal();
  }, [isSuccess, currentSlide, packageInfo, closeModal]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      mountTime.current = Date.now();
      trackFormStep(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) handleClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen && modalRef.current && backdropRef.current) {
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(modalRef.current, { y: 40, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out", delay: 0.1 });
    }
  }, [isOpen]);

  function validateSlide(index: number): boolean {
    const newErrors: Record<string, string> = {};
    switch (index) {
      case 0:
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
        if (!formData.company.trim()) newErrors.company = "Company is required";
        break;
      case 1:
        if (!formData.projectType) newErrors.projectType = "Please select a project type";
        if (!formData.description.trim()) newErrors.description = "Please describe your project";
        if (!formData.currentSaasTools.trim()) newErrors.currentSaasTools = "Please list your current SaaS tools";
        if (!formData.annualSaasSpend.trim()) newErrors.annualSaasSpend = "Please estimate your annual SaaS spend";
        break;
      case 2:
        if (!formData.budget) newErrors.budget = "Please select a budget range";
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function animateSlide(direction: "next" | "back", callback: () => void) {
    if (!slideRef.current || isAnimating.current) return;
    isAnimating.current = true;
    const xOut = direction === "next" ? -60 : 60;
    const xIn = direction === "next" ? 60 : -60;
    gsap.to(slideRef.current, {
      x: xOut, opacity: 0, duration: 0.2, ease: "power2.in",
      onComplete: () => {
        callback();
        gsap.set(slideRef.current, { x: xIn });
        gsap.to(slideRef.current, {
          x: 0, opacity: 1, duration: 0.3, ease: "power3.out",
          onComplete: () => { isAnimating.current = false; },
        });
      },
    });
  }

  function goNext() {
    if (!validateSlide(currentSlide)) return;
    trackFormStep(currentSlide + 1);
    animateSlide("next", () => setCurrentSlide((s) => s + 1));
  }

  function goBack() {
    animateSlide("back", () => setCurrentSlide((s) => s - 1));
  }

  async function handleSubmit() {
    if (formData._gotcha || Date.now() - mountTime.current < 3000) return;
    if (!validateSlide(currentSlide)) return;
    setIsSubmitting(true);
    try {
      await submitForm({
        ...formData,
        selectedPackage: packageInfo?.packageName || "",
        websiteSource: AGENCY_NAME,
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      });
      setIsSuccess(true);
      trackFormSubmit({
        projectType: formData.projectType,
        budget: formData.budget,
        companySize: formData.companySize,
        timeline: formData.timeline,
        referral: formData.referral,
        hasPackage: !!packageInfo,
        pricingTier: packageInfo?.packageName,
      });
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  if (!isOpen) return null;

  const inputClasses = "w-full px-4 py-3 rounded-md border border-dark-faded bg-light text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-fluid-main font-sans";
  const selectClasses = "w-full px-4 py-3 rounded-md border border-dark-faded bg-light text-dark focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-fluid-main font-sans appearance-none";
  const labelClasses = "block text-sm font-sans font-medium text-dark mb-1.5";
  const errorClasses = "text-bg-red text-xs mt-1 font-sans";

  function renderSlide() {
    switch (currentSlide) {
      case 0:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">About You</h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">Let&apos;s start with the basics.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input type="text" className={inputClasses} placeholder="John Smith" value={formData.name} onChange={(e) => updateField("name", e.target.value)} />
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>
              <div>
                <label className={labelClasses}>Email Address *</label>
                <input type="email" className={inputClasses} placeholder="john@company.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>
              <div>
                <label className={labelClasses}>Phone Number</label>
                <input type="tel" className={inputClasses} placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />
              </div>
              <div>
                <label className={labelClasses}>Company Name *</label>
                <input type="text" className={inputClasses} placeholder="Acme Inc." value={formData.company} onChange={(e) => updateField("company", e.target.value)} />
                {errors.company && <p className={errorClasses}>{errors.company}</p>}
              </div>
              <div>
                <label className={labelClasses}>Company Size</label>
                <select className={selectClasses} value={formData.companySize} onChange={(e) => updateField("companySize", e.target.value)}>
                  <option value="">Select...</option>
                  {companySizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClasses}>Your Role / Title</label>
                <input type="text" className={inputClasses} placeholder="VP of Operations" value={formData.role} onChange={(e) => updateField("role", e.target.value)} />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">About Your Project</h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">Tell us what you&apos;re looking to build.</p>
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>What type of project? *</label>
                <select className={selectClasses} value={formData.projectType} onChange={(e) => updateField("projectType", e.target.value)}>
                  <option value="">Select project type...</option>
                  {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
                {errors.projectType && <p className={errorClasses}>{errors.projectType}</p>}
              </div>
              <div>
                <label className={labelClasses}>Tell us about your project *</label>
                <textarea className={`${inputClasses} resize-none`} rows={4} placeholder="Describe what you're building, what SaaS tools you'd like to replace, any specific requirements..." value={formData.description} onChange={(e) => updateField("description", e.target.value)} />
                {errors.description && <p className={errorClasses}>{errors.description}</p>}
              </div>
              <div>
                <label className={labelClasses}>Current SaaS tools you&apos;re using *</label>
                <input type="text" className={inputClasses} placeholder="Salesforce, HubSpot, Zapier, etc." value={formData.currentSaasTools} onChange={(e) => updateField("currentSaasTools", e.target.value)} />
                {errors.currentSaasTools && <p className={errorClasses}>{errors.currentSaasTools}</p>}
              </div>
              <div>
                <label className={labelClasses}>Estimated annual SaaS spend *</label>
                <input type="text" className={inputClasses} placeholder="$100K, $250K, etc." value={formData.annualSaasSpend} onChange={(e) => updateField("annualSaasSpend", e.target.value)} />
                {errors.annualSaasSpend && <p className={errorClasses}>{errors.annualSaasSpend}</p>}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">Budget & Timeline</h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">Help us understand your investment.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Project Budget *</label>
                <select className={selectClasses} value={formData.budget} onChange={(e) => updateField("budget", e.target.value)}>
                  <option value="">Select budget range...</option>
                  {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                </select>
                {errors.budget && <p className={errorClasses}>{errors.budget}</p>}
              </div>
              <div>
                <label className={labelClasses}>Desired Timeline</label>
                <select className={selectClasses} value={formData.timeline} onChange={(e) => updateField("timeline", e.target.value)}>
                  <option value="">Select timeline...</option>
                  {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">Almost Done</h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">A couple more things.</p>
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>How did you find us?</label>
                <select className={selectClasses} value={formData.referral} onChange={(e) => updateField("referral", e.target.value)}>
                  <option value="">Select...</option>
                  {referralSources.map((source) => <option key={source} value={source}>{source}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClasses}>Anything else?</label>
                <textarea className={`${inputClasses} resize-none`} rows={3} placeholder="Additional context, specific SaaS pain points, integration needs..." value={formData.notes} onChange={(e) => updateField("notes", e.target.value)} />
              </div>
            </div>
            {errors.submit && <p className="text-bg-red text-sm mt-4 font-sans">{errors.submit}</p>}
          </div>
        );
      default:
        return null;
    }
  }

  const firstName = formData.name.split(" ")[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div ref={backdropRef} className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={handleClose} />
      <div ref={modalRef} className="relative w-full max-w-3xl max-h-[85vh] bg-light rounded-lg border border-dark-faded overflow-hidden flex flex-col">
        <input type="text" name="_gotcha" value={formData._gotcha} onChange={(e) => updateField("_gotcha", e.target.value)} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {isSuccess ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-bg-green/30 flex items-center justify-center mb-6">
              <Check size={32} className="text-bg-green" />
            </div>
            <h2 className="font-sans font-medium text-fluid-h3 text-dark mb-3">
              Hey{firstName ? `, ${firstName}` : ""}! Thank you.
            </h2>
            <p className="font-sans text-fluid-main text-dark opacity-60 mb-2 max-w-md">
              Someone from our team will reach out within 24 hours.
            </p>
            <p className="font-sans text-fluid-small text-dark opacity-40 mb-8 max-w-md leading-relaxed">
              We&apos;ll review your SaaS stack and prepare a preliminary cost comparison before our call.
            </p>
            <button onClick={handleClose} className="btn">
              <span className="text-sm">Close</span>
              <span className="btn-arrow"><X size={14} /></span>
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-4">
              <ProgressIndicator current={currentSlide} />
              <button onClick={handleClose} aria-label="Close" className="p-1 text-dark opacity-40 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-4">
              <div ref={slideRef}>{renderSlide()}</div>
            </div>
            <div className="px-6 md:px-8 py-5 border-t border-dark-faded flex justify-between items-center">
              {currentSlide > 0 ? (
                <button onClick={goBack} className="flex items-center gap-2 font-sans text-fluid-main text-dark opacity-50 hover:opacity-100 transition-opacity" style={{ transitionDuration: "0.2s" }}>
                  <ArrowLeft size={16} /> Back
                </button>
              ) : <div />}
              {currentSlide < TOTAL_SLIDES - 1 ? (
                <button onClick={goNext} className="btn-secondary flex items-center gap-2">
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-secondary flex items-center gap-2" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"} {!isSubmitting && <ArrowRight size={16} />}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
