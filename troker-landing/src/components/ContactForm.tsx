"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "@/lib/gsap-register";
import { submitForm } from "@/lib/form";
import { useContactForm } from "@/context/ContactFormContext";
import { Check, X, ArrowRight, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";

interface ContactFormModalProps {
  domain: string;
  region: string;
}

const TOTAL_SLIDES = 5;

const projectTypes = [
  "New website from scratch",
  "Redesign of existing website",
  "Migration to Webflow (from WordPress, Squarespace, etc.)",
  "E-commerce store",
  "Webflow CMS build",
  "Ongoing maintenance / support retainer",
  "Other",
];

const budgetRanges = [
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

const timelines = [
  "ASAP (2–4 weeks)",
  "1–2 months",
  "3–6 months",
  "Flexible / no hard deadline",
];

const pageCounts = [
  "1–5 pages",
  "6–15 pages",
  "16–30 pages",
  "30+ pages",
  "Not sure yet",
];

const designStatusOptions = [
  "Yes — we have a designer and brand assets",
  "Yes — we have brand guidelines but need design help",
  "No — we need full design + development",
  "Partially — we have some assets",
];

const referralSources = [
  "Google search",
  "Referred by someone",
  "Social media",
  "Webflow community / forum",
  "Other",
];

const goals = [
  "Generate more leads / inbound inquiries",
  "Sell products or services online",
  "Build brand credibility and awareness",
  "Replace an outdated or underperforming site",
  "Improve site speed and performance",
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

export function ContactFormModal({ domain, region }: ContactFormModalProps) {
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
    website: "",
    role: "",
    projectType: "",
    description: "",
    goals: [] as string[],
    pageCount: "",
    budget: "",
    timeline: "",
    designStatus: "",
    referral: "",
    notes: "",
    _gotcha: "",
  });

  // Reset form after successful submission and close
  const handleClose = useCallback(() => {
    if (isSuccess) {
      setCurrentSlide(0);
      setIsSuccess(false);
      setErrors({});
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        role: "",
        projectType: "",
        description: "",
        goals: [],
        pageCount: "",
        budget: "",
        timeline: "",
        designStatus: "",
        referral: "",
        notes: "",
        _gotcha: "",
      });
    }
    closeModal();
  }, [isSuccess, closeModal]); // eslint-disable-line react-hooks/exhaustive-deps

  // Pre-fill project type when opening from migration pricing
  useEffect(() => {
    if (isOpen && packageInfo) {
      setFormData((prev) => ({
        ...prev,
        projectType: "Migration to Webflow (from WordPress, Squarespace, etc.)",
      }));
    }
  }, [isOpen, packageInfo]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      mountTime.current = Date.now();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) handleClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  // Entrance animation
  useEffect(() => {
    if (isOpen && modalRef.current && backdropRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { y: 40, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out", delay: 0.1 }
      );
    }
  }, [isOpen]);

  function validateSlide(index: number): boolean {
    const newErrors: Record<string, string> = {};

    switch (index) {
      case 0:
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
          newErrors.email = "Please enter a valid email";
        if (!formData.company.trim()) newErrors.company = "Company is required";
        if (!formData.role.trim()) newErrors.role = "Role is required";
        break;
      case 1:
        if (!formData.projectType)
          newErrors.projectType = "Please select a project type";
        if (!formData.description.trim())
          newErrors.description = "Please describe your project";
        break;
      case 3:
        if (!formData.budget) newErrors.budget = "Please select a budget range";
        if (!formData.timeline) newErrors.timeline = "Please select a timeline";
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
      x: xOut,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        callback();
        gsap.set(slideRef.current, { x: xIn });
        gsap.to(slideRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      },
    });
  }

  function goNext() {
    if (!validateSlide(currentSlide)) return;
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
        goals: formData.goals.join(", "),
        websiteSource: domain,
        websiteRegion: region,
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        ...(packageInfo && {
          selectedPackage: packageInfo.packageName,
          migrationPageCount: packageInfo.pageCount,
          estimatedTotal: packageInfo.estimatedTotal,
          ...(packageInfo.calculatorDetails && {
            calculatorDetails: packageInfo.calculatorDetails,
          }),
        }),
      });
      setIsSuccess(true);
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

  function toggleGoal(goal: string) {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  }

  if (!isOpen) return null;

  const inputClasses =
    "w-full px-4 py-3 rounded-md border border-dark-faded bg-light text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-fluid-main font-sans";
  const selectClasses =
    "w-full px-4 py-3 rounded-md border border-dark-faded bg-light text-dark focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all text-fluid-main font-sans appearance-none";
  const labelClasses = "block text-sm font-sans font-medium text-dark mb-1.5";
  const errorClasses = "text-bg-red text-xs mt-1 font-sans";

  function renderSlide() {
    switch (currentSlide) {
      case 0:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">
              About You
            </h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">
              Let&apos;s start with the basics.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>
              <div>
                <label className={labelClasses}>Email Address *</label>
                <input
                  type="email"
                  className={inputClasses}
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>
              <div>
                <label className={labelClasses}>Phone Number</label>
                <input
                  type="tel"
                  className={inputClasses}
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Company Name *</label>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                />
                {errors.company && (
                  <p className={errorClasses}>{errors.company}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>Current Website URL</label>
                <input
                  type="url"
                  className={inputClasses}
                  placeholder="https://yoursite.com"
                  value={formData.website}
                  onChange={(e) => updateField("website", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Your Role / Title *</label>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="Marketing Director"
                  value={formData.role}
                  onChange={(e) => updateField("role", e.target.value)}
                />
                {errors.role && <p className={errorClasses}>{errors.role}</p>}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">
              About Your Project
            </h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">
              Tell us what you&apos;re looking to build.
            </p>
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>
                  What type of project is this? *
                </label>
                <select
                  className={selectClasses}
                  value={formData.projectType}
                  onChange={(e) => updateField("projectType", e.target.value)}
                >
                  <option value="">Select project type...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className={errorClasses}>{errors.projectType}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>
                  Tell us about your project *
                </label>
                <textarea
                  className={`${inputClasses} resize-none`}
                  rows={5}
                  placeholder="Describe what you're building, any specific features, design inspiration..."
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                />
                {errors.description && (
                  <p className={errorClasses}>{errors.description}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">
              Goals & Scope
            </h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">
              What are you hoping to achieve?
            </p>
            <div className="space-y-6">
              <div>
                <label className={labelClasses}>Primary goal?</label>
                <div className="grid sm:grid-cols-2 gap-2 mt-2">
                  {goals.map((goal) => (
                    <label
                      key={goal}
                      className={clsx(
                        "flex items-center gap-3 px-4 py-3 rounded-md border cursor-pointer transition-all",
                        formData.goals.includes(goal)
                          ? "border-brand bg-brand/5"
                          : "border-dark-faded hover:border-dark/20"
                      )}
                      style={{ transitionDuration: "0.2s" }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => toggleGoal(goal)}
                        className="rounded border-dark-faded text-brand focus:ring-brand/30"
                      />
                      <span className="font-sans text-sm text-dark opacity-70">
                        {goal}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClasses}>
                  Approximate number of pages
                </label>
                <select
                  className={selectClasses}
                  value={formData.pageCount}
                  onChange={(e) => updateField("pageCount", e.target.value)}
                >
                  <option value="">Select...</option>
                  {pageCounts.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">
              Budget & Timeline
            </h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">
              Help us understand your investment and timing.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Project Budget *</label>
                <select
                  className={selectClasses}
                  value={formData.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                >
                  <option value="">Select budget range...</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className={errorClasses}>{errors.budget}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>
                  Desired Launch Timeline *
                </label>
                <select
                  className={selectClasses}
                  value={formData.timeline}
                  onChange={(e) => updateField("timeline", e.target.value)}
                >
                  <option value="">Select timeline...</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.timeline && (
                  <p className={errorClasses}>{errors.timeline}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="font-sans font-medium text-fluid-h4 text-dark mb-2">
              A Few More Details
            </h3>
            <p className="font-sans text-fluid-main text-dark opacity-40 mb-6">
              Almost done — just a couple more things.
            </p>
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>
                  Do you have a designer or brand assets?
                </label>
                <select
                  className={selectClasses}
                  value={formData.designStatus}
                  onChange={(e) => updateField("designStatus", e.target.value)}
                >
                  <option value="">Select...</option>
                  {designStatusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClasses}>How did you find us?</label>
                <select
                  className={selectClasses}
                  value={formData.referral}
                  onChange={(e) => updateField("referral", e.target.value)}
                >
                  <option value="">Select...</option>
                  {referralSources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClasses}>Anything else?</label>
                <textarea
                  className={`${inputClasses} resize-none`}
                  rows={3}
                  placeholder="Additional context, links, inspiration..."
                  value={formData.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                />
              </div>
            </div>
            {errors.submit && (
              <p className="text-bg-red text-sm mt-4 font-sans">
                {errors.submit}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  }

  const firstName = formData.name.split(" ")[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[85vh] bg-light rounded-lg border border-dark-faded overflow-hidden flex flex-col"
      >
        {/* Honeypot */}
        <input
          type="text"
          name="_gotcha"
          value={formData._gotcha}
          onChange={(e) => updateField("_gotcha", e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {isSuccess ? (
          /* Success Screen */
          <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-bg-green/30 flex items-center justify-center mb-6">
              <Check size={32} className="text-bg-green" />
            </div>
            <h2 className="font-sans font-medium text-fluid-h3 text-dark mb-3">
              Hey, {firstName}! Thank you.
            </h2>
            <p className="font-sans text-fluid-main text-dark opacity-60 mb-2 max-w-md">
              Someone from our team will reach out to you within 24 hours.
            </p>
            <p className="font-sans text-fluid-small text-dark opacity-40 mb-8 max-w-md leading-relaxed">
              Usually, the next step is booking a quick discovery call to discuss
              your project in detail. We&apos;re looking forward to learning more
              about what you&apos;re building.
            </p>
            <button onClick={handleClose} className="btn">
              <span className="text-sm">Close</span>
              <span className="btn-arrow">
                <X size={14} />
              </span>
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-4">
              <ProgressIndicator current={currentSlide} />
              <button
                onClick={handleClose}
                aria-label="Close"
                className="p-1 text-dark opacity-40 hover:opacity-100 transition-opacity"
                style={{ transitionDuration: "0.2s" }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Slide Content */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-4">
              <div ref={slideRef}>{renderSlide()}</div>
            </div>

            {/* Navigation Footer */}
            <div className="px-6 md:px-8 py-5 border-t border-dark-faded flex justify-between items-center">
              {currentSlide > 0 ? (
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 font-sans text-fluid-main text-dark opacity-50 hover:opacity-100 transition-opacity"
                  style={{ transitionDuration: "0.2s" }}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentSlide < TOTAL_SLIDES - 1 ? (
                <button
                  onClick={goNext}
                  className="btn-secondary flex items-center gap-2"
                >
                  Next
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="btn-secondary flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
