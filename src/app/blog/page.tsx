"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar, Tag, X, CheckCircle2, Share2, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceStrip } from "@/components/ServiceStrip";
import { ITProofMetrics } from "@/components/ITProofMetrics";
import { ClientReviews } from "@/components/ClientReviews";
import { SITE_CONFIG } from "@/data/content";
import { useIntro } from "@/components/PageTransitionProvider";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const { isIntroActive } = useIntro();

  const posts = SITE_CONFIG.blog.posts;
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const featuredPost = posts[0];
  const gridPosts = selectedCategory === "All" ? posts.slice(1) : filteredPosts;

  return (
    <div className="relative min-h-screen bg-[#081B19] text-[#F1F3EB] selection:bg-[#8DE0C1]/20 selection:text-[#8DE0C1]">
      <Header />

      <main
        id="main-content"
        className={`pt-28 pb-16 sm:pt-36 transition-all duration-1000 ease-out ${
          isIntroActive
            ? "opacity-0 translate-y-16 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
      >
        {/* 1. Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DE0C1] animate-pulse" />
            <span>[ JOURNAL &amp; ENGINEERING NOTES ]</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#F1F3EB] tracking-tight leading-[1.08] max-w-5xl mb-8">
            Notes on Craft, Architecture, and{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
              Purposeful Code
            </span>
            .
          </h1>

          <p className="text-lg sm:text-2xl text-[#A4B7AF] font-light max-w-3xl leading-relaxed">
            Observations, architectural blueprints, and lessons from building websites, apps, and
            custom software engines at ADORA TECH.
          </p>
        </section>

        {/* 2. Marquee Ticker */}
        <ServiceStrip />

        {/* 3. Typographic Proof Ribbon (No Cards) */}
        <div className="reveal-section">
          <ITProofMetrics />
        </div>

        {/* 4. Featured Article Panoramic Stage */}
        {selectedCategory === "All" && featuredPost && (
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 reveal-section">
            <div
              onClick={() => setActiveArticle(featuredPost)}
              className="cursor-pointer group relative rounded-3xl bg-gradient-to-br from-[#102A26] via-[#153833] to-[#0A1F1C] border border-[#8DE0C1]/30 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#8DE0C1] hover:shadow-black/70"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DE0C1]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8DE0C1]/20 transition-all duration-500" />

              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A4B7AF]">
                  <span className="px-3 py-1 rounded-full bg-[#081B19] border border-[#8DE0C1]/30 text-[#8DE0C1]">
                    FEATURED ESSAY // {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8DE0C1]" />
                    {featuredPost.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D5A17D]" />
                    {featuredPost.date}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-light text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors leading-[1.1]">
                  {featuredPost.title}
                </h2>

                <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 flex items-center gap-3 text-sm font-semibold text-[#8DE0C1]">
                  <span>Read Full Technical Essay</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 5. Filter Chips & Articles Grid */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#A4B7AF]/10 reveal-section">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#F1F3EB]">
                Engineering Insights
              </h2>
              <p className="text-sm text-[#A4B7AF] font-light mt-1">
                Deep architectural breakdowns and system patterns.
              </p>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#8DE0C1] text-[#081B19] font-semibold shadow-md shadow-[#8DE0C1]/20"
                      : "bg-[#102A26] border border-[#A4B7AF]/20 text-[#A4B7AF] hover:text-[#F1F3EB] hover:border-[#8DE0C1]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => setActiveArticle(post)}
                className="cursor-pointer group rounded-3xl p-8 bg-[#0B201D]/60 border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/40 hover:bg-[#102A26]/80 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A4B7AF] mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#081B19] text-[#8DE0C1] border border-[#8DE0C1]/20">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-light text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#A4B7AF] font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A4B7AF]/15 flex items-center justify-between text-xs font-mono text-[#8DE0C1]">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. Client Reviews & Verified 5.0 Rating Score Bar */}
        <div className="reveal-section">
          <ClientReviews />
        </div>
      </main>

      {/* Article Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        >
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0D2421] border border-[#8DE0C1]/40 p-8 sm:p-12 shadow-2xl text-left">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#A4B7AF] hover:text-[#8DE0C1] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8DE0C1]">
                <span className="px-3 py-1 rounded-full bg-[#081B19] border border-[#8DE0C1]/30">
                  {activeArticle.category}
                </span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-light text-[#F1F3EB] leading-tight">
                {activeArticle.title}
              </h2>

              <p className="text-base text-[#8DE0C1] font-mono leading-relaxed pb-4 border-b border-[#A4B7AF]/15">
                {activeArticle.excerpt}
              </p>

              <div className="text-base text-[#F1F3EB]/90 leading-relaxed font-light space-y-4">
                <p>{activeArticle.content}</p>
                <p>
                  At ADORA TECH, our production methodology centers on reproducible pipelines.
                  Whether structuring a zero-loss database cutover or tuning WebGL shader uniforms,
                  we ensure every technical choice creates compounding reliability for your team.
                </p>
              </div>

              <div className="pt-6 border-t border-[#A4B7AF]/15 flex items-center justify-between">
                <span className="text-xs font-mono text-[#A4B7AF]">
                  WRITTEN BY ADORA TECH ENGINEERING LABS
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#8DE0C1] hover:underline"
                >
                  <span>Discuss This Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer with Giant "ADORA TECH" Watermark */}
      <Footer />
    </div>
  );
}
