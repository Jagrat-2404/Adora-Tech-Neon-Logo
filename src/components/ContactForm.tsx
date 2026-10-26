"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Copy, Check, Info } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface ContactFormProps {
  initialProjectType?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialProjectType,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "unconfigured" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialProjectType,
      }));
    }
  }, [initialProjectType]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please provide your name (minimum 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please describe your project (minimum 10 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.deliveryConfigured === false) {
          // Honest disclosure: validation succeeded, but live email delivery is not configured
          setStatusMessage({
            type: "unconfigured",
            text: data.message,
          });
        } else {
          // Confirmed live email dispatch
          setStatusMessage({
            type: "success",
            text: data.message || "Enquiry sent successfully.",
          });
          // Only clear inputs on genuine confirmed delivery
          setFormData({
            name: "",
            email: "",
            company: "",
            projectType: "Website",
            message: "",
            honeypot: "",
          });
        }
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setStatusMessage({
          type: "error",
          text: data.message || data.error || "Submission could not be completed.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    const summary = `Project Enquiry for ADORA TECH:\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nType: ${formData.projectType}\nDetails:\n${formData.message}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      aria-labelledby="contact-heading"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.contact.eyebrow}</span>
        </div>
        <h2
          id="contact-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-light tracking-tight text-[#F1F3EB] mb-4"
        >
          {SITE_CONFIG.contact.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
          {SITE_CONFIG.contact.supportingCopy}
        </p>
      </div>

      {/* Form Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0D2421]/90 border border-[#A4B7AF]/15 shadow-2xl shadow-black/30 relative">
        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-20 rounded-full opacity-30 blur-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(141, 224, 193, 0.4) 0%, transparent 70%)",
          }}
        />

        {/* Live Status Announcer */}
        <div aria-live="polite" className="mb-6">
          {statusMessage && (
            <div
              tabIndex={0}
              className={`p-4 rounded-xl border text-sm flex items-start gap-3 ${
                statusMessage.type === "success"
                  ? "bg-emerald-950/60 border-[#8DE0C1]/50 text-[#8DE0C1]"
                  : statusMessage.type === "unconfigured"
                  ? "bg-[#153833]/80 border-[#D5A17D]/40 text-[#F1F3EB]"
                  : "bg-red-950/60 border-red-500/40 text-red-200"
              }`}
            >
              {statusMessage.type === "success" && (
                <CheckCircle2 className="w-5 h-5 text-[#8DE0C1] shrink-0 mt-0.5" />
              )}
              {statusMessage.type === "unconfigured" && (
                <Info className="w-5 h-5 text-[#D5A17D] shrink-0 mt-0.5" />
              )}
              {statusMessage.type === "error" && (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 space-y-2">
                <p className="font-medium">{statusMessage.text}</p>
                {statusMessage.type === "unconfigured" && (
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#102A26] border border-[#A4B7AF]/20 text-xs text-[#8DE0C1] hover:bg-[#163631] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {copied ? "Copied to clipboard" : "Copy enquiry text"}
                      </span>
                    </button>
                    <span className="text-xs text-[#A4B7AF]">
                      Add RESEND_API_KEY to your environment variables to enable
                      live transmission.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_honeypot_field">Leave this empty</label>
            <input
              type="text"
              id="company_honeypot_field"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) =>
                setFormData({ ...formData, honeypot: e.target.value })
              }
            />
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-mono uppercase tracking-wider text-[#A4B7AF] mb-2"
              >
                Your Name <span className="text-[#8DE0C1]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#081B19] border border-[#A4B7AF]/20 text-[#F1F3EB] placeholder-[#A4B7AF]/40 focus:outline-none focus:border-[#8DE0C1] focus:ring-1 focus:ring-[#8DE0C1] transition-colors text-sm"
                placeholder="Ada Lovelace"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-mono uppercase tracking-wider text-[#A4B7AF] mb-2"
              >
                Email Address <span className="text-[#8DE0C1]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#081B19] border border-[#A4B7AF]/20 text-[#F1F3EB] placeholder-[#A4B7AF]/40 focus:outline-none focus:border-[#8DE0C1] focus:ring-1 focus:ring-[#8DE0C1] transition-colors text-sm"
                placeholder="ada@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Company (Optional) */}
          <div>
            <label
              htmlFor="contact-company"
              className="block text-xs font-mono uppercase tracking-wider text-[#A4B7AF] mb-2"
            >
              Company / Organization{" "}
              <span className="text-[#A4B7AF]/50 text-[11px]">(Optional)</span>
            </label>
            <input
              id="contact-company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#081B19] border border-[#A4B7AF]/20 text-[#F1F3EB] placeholder-[#A4B7AF]/40 focus:outline-none focus:border-[#8DE0C1] focus:ring-1 focus:ring-[#8DE0C1] transition-colors text-sm"
              placeholder="Organization or Studio"
            />
          </div>

          {/* Project Type Selector */}
          <div>
            <span
              id="project-type-label"
              className="block text-xs font-mono uppercase tracking-wider text-[#A4B7AF] mb-2.5"
            >
              Project Type <span className="text-[#8DE0C1]">*</span>
            </span>
            <div
              role="radiogroup"
              aria-labelledby="project-type-label"
              className="grid grid-cols-2 sm:grid-cols-5 gap-2.5"
            >
              {SITE_CONFIG.contact.projectTypes.map((type) => {
                const isSelected = formData.projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() =>
                      setFormData({ ...formData, projectType: type })
                    }
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all duration-200 border text-center ${
                      isSelected
                        ? "bg-[#153833] border-[#8DE0C1] text-[#8DE0C1] shadow-[0_0_15px_rgba(141,224,193,0.15)]"
                        : "bg-[#081B19] border-[#A4B7AF]/15 text-[#A4B7AF] hover:border-[#A4B7AF]/40 hover:text-[#F1F3EB]"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-mono uppercase tracking-wider text-[#A4B7AF] mb-2"
            >
              Project Details <span className="text-[#8DE0C1]">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#081B19] border border-[#A4B7AF]/20 text-[#F1F3EB] placeholder-[#A4B7AF]/40 focus:outline-none focus:border-[#8DE0C1] focus:ring-1 focus:ring-[#8DE0C1] transition-colors text-sm resize-y"
              placeholder="Tell us about the digital product you're planning, your target timeline, and what you want it to achieve..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#8DE0C1] hover:bg-[#A1E8D0] text-[#081B19] shadow-[0_0_25px_rgba(141,224,193,0.3)] hover:shadow-[0_0_35px_rgba(141,224,193,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0C1]"
            >
              <span>
                {isSubmitting ? "Submitting..." : SITE_CONFIG.contact.submitLabel}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
