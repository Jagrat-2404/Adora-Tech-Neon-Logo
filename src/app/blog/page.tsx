"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar, Tag, X, CheckCircle2, Share2, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceStrip } from "@/components/ServiceStrip";
import { SITE_CONFIG } from "@/data/content";

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

      <main id="main-content" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
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

        {/* 2. Category Filter Pills */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 border-b border-[#A4B7AF]/15 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#8DE0C1] text-[#081B19] font-semibold shadow-md shadow-[#8DE0C1]/20"
                    : "bg-[#102A26] border border-[#A4B7AF]/20 text-[#A4B7AF] hover:text-[#F1F3EB] hover:border-[#8DE0C1]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 3. Featured Article (when viewing All) */}
        {selectedCategory === "All" && featuredPost && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
            <div
              onClick={() => setActiveArticle(featuredPost)}
              className="cursor-pointer group relative rounded-3xl bg-gradient-to-br from-[#102A26] via-[#153833] to-[#0A1F1C] border border-[#8DE0C1]/30 p-8 sm:p-12 overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#8DE0C1]/60 hover:shadow-black/60"
            >
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DE0C1]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8DE0C1]/20 transition-all duration-500" />

              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A4B7AF]">
                  <span className="px-3 py-1 rounded-full bg-[#081B19] border border-[#8DE0C1]/30 text-[#8DE0C1]">
                    FEATURED DISPATCH
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-[#D5A17D]" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-light text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-base sm:text-lg text-[#A4B7AF] font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 flex items-center gap-2 text-sm font-medium text-[#8DE0C1] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Grid of Articles */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => setActiveArticle(post)}
                className="cursor-pointer group flex flex-col justify-between p-7 rounded-2xl bg-[#102A26] border border-[#A4B7AF]/15 hover:border-[#8DE0C1]/50 hover:bg-[#13332E] transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A4B7AF]/80 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#081B19] border border-[#8DE0C1]/20 text-[#8DE0C1]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-[#F1F3EB] group-hover:text-[#8DE0C1] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#A4B7AF] font-light leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A4B7AF]/10 flex items-center justify-between text-xs font-mono text-[#A4B7AF]">
                  <span>{post.date}</span>
                  <span className="text-[#8DE0C1] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read &rarr;
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Marquee Ticker */}
        <ServiceStrip />

        {/* 6. Newsletter / Studio Dispatch Signup */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-[#102A26] via-[#153833] to-[#102A26] border border-[#8DE0C1]/30 p-10 sm:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081B19] border border-[#8DE0C1]/30 text-[#8DE0C1] text-xs font-mono uppercase tracking-widest">
                <span>[ MONTHLY DISPATCH ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#F1F3EB]">
                Receive our private{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8DE0C1] via-[#B8F2DC] to-[#D5A17D]">
                  architecture notes
                </span>
                .
              </h2>
              <p className="text-[#A4B7AF] text-sm sm:text-base leading-relaxed">
                Zero marketing spam. Only concrete technical breakdowns, performance benchmarks, and
                design system patterns delivered once a month.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to ADORA TECH Studio Dispatches.");
                }}
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="px-4 py-3 rounded-xl bg-[#081B19] border border-[#A4B7AF]/20 text-[#F1F3EB] placeholder-[#A4B7AF]/50 text-sm focus:outline-none focus:border-[#8DE0C1] focus:ring-1 focus:ring-[#8DE0C1]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#8DE0C1] text-[#081B19] font-medium text-sm hover:bg-[#A3E8D0] transition-all whitespace-nowrap shadow-md shadow-[#8DE0C1]/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Interactive Full Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#081B19] border border-[#8DE0C1]/40 p-6 sm:p-10 shadow-2xl shadow-black/80 text-[#F1F3EB]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#102A26] border border-[#A4B7AF]/20 text-[#A4B7AF] hover:text-[#F1F3EB] hover:border-[#8DE0C1] transition-all"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="space-y-4 mb-8 pr-12">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A4B7AF]">
                <span className="px-3 py-1 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 text-[#8DE0C1]">
                  {activeArticle.category}
                </span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-light text-[#F1F3EB] leading-tight">
                {activeArticle.title}
              </h2>
            </div>

            {/* Article Body */}
            <div className="space-y-6 text-[#A4B7AF] text-base sm:text-lg font-light leading-relaxed border-t border-[#A4B7AF]/15 pt-8">
              <p className="text-xl text-[#F1F3EB] font-normal leading-relaxed">
                {activeArticle.excerpt}
              </p>

              <p>{activeArticle.content}</p>

              {/* Architectural Key Takeaway Box */}
              <div className="my-8 p-6 rounded-2xl bg-[#102A26] border border-[#8DE0C1]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8DE0C1] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Architectural Takeaway</span>
                </div>
                <p className="text-sm text-[#F1F3EB] leading-relaxed">
                  Avoid premature abstraction. Build each feature with direct zero-overhead primitives first,
                  measure latency metrics under peak concurrent load, and isolate state mutations to local island boundaries.
                </p>
              </div>

              <p>
                At ADORA TECH, our engineering process centers on continuous profiling. We deliver
                clean, well-commented codebases that your internal teams can maintain, extend, and deploy with confidence.
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-10 pt-6 border-t border-[#A4B7AF]/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#102A26] border border-[#8DE0C1]/30 flex items-center justify-center text-xs font-mono text-[#8DE0C1]">
                  AT
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F1F3EB]">ADORA TECH Engineering Team</div>
                  <div className="text-xs text-[#A4B7AF]">Studio Research &amp; Architecture Group</div>
                </div>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Article link copied to clipboard!");
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#102A26] border border-[#A4B7AF]/20 text-xs text-[#A4B7AF] hover:text-[#8DE0C1] hover:border-[#8DE0C1]/40 transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
