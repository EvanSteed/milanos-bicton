import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 will-change-transform">
        <img
          src="/images/interior.jpg"
          alt="Milano's Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#D4A853] text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Premium Italian Dining in Bicton
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#FDF8F3] mb-6 md:mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Welcome to <span className="text-gradient-gold">Milano's</span>
          </h1>

          <p className="text-xl text-[#FDF8F3]/70 mb-10 md:mb-12 font-light max-w-lg leading-relaxed mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Authentic Italian cuisine crafted with passion since 2017.
            Wood-fired pizzas, handmade pastas, and Mediterranean flavors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              href="/book-a-table"
              className="btn-primary min-h-[48px] px-6 py-4"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="btn-gold min-h-[48px] px-6 py-4"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex">
        <Link
          href="/menu"
          className="flex flex-col items-center text-[#FDF8F3]/50 hover:text-[#D4A853] transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase mb-3">Explore Our Menu</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}