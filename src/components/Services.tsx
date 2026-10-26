"use client";

import React from "react";
import { Globe, Smartphone, Cpu, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface ServicesProps {
  onSelectProjectType?: (type: string) => void;
}

const serviceIcons = {
  websites: Globe,
  "mobile-apps": Smartphone,
  "custom-software": Cpu,
};

export const Services: React.FC<ServicesProps> = ({ onSelectProjectType }) => {
  const handleServiceClick = (projectType: string) => {
    if (onSelectProjectType) {
      onSelectProjectType(projectType);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-labelledby="services-heading"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-4">
          <span>{SITE_CONFIG.servicesSection.eyebrow}</span>
        </div>
        <h2
          id="services-heading"
          className="font-[family-name:var(--font-outfit)] text-3xl sm:text-5xl font-medium tracking-tight text-[#F1F3EB] mb-6"
        >
          {SITE_CONFIG.servicesSection.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
          {SITE_CONFIG.servicesSection.description}
        </p>
      </div>

      {/* 3 Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SITE_CONFIG.servicesSection.services.map((service) => {
          const Icon =
            serviceIcons[service.id as keyof typeof serviceIcons] || Globe;

          return (
            <div
              key={service.id}
              className="card-hover-border group relative flex flex-col justify-between p-8 rounded-2xl bg-[#0D2421]/90 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(8,27,25,0.7)]"
            >
              {/* Card Top: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm tracking-widest text-[#8DE0C1] px-2.5 py-1 rounded-md bg-[#153833]/70 border border-[#8DE0C1]/20">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#153833]/60 text-[#8DE0C1] border border-[#A4B7AF]/10 group-hover:border-[#8DE0C1]/40 group-hover:text-[#F1F3EB] group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-medium text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-[#A4B7AF] leading-relaxed mb-6 font-light">
                  {service.shortDescription}
                </p>

                {/* Deliverables Checklist */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-[#A4B7AF]/10">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#A4B7AF]/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Interactive CTA */}
              <div className="pt-4 border-t border-[#A4B7AF]/10">
                <button
                  type="button"
                  onClick={() => handleServiceClick(service.projectType)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors focus:outline-none focus-visible:underline"
                  aria-label={`${service.ctaLabel} for ${service.title}`}
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8DE0C1] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
