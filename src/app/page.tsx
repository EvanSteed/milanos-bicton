"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(bgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 2 }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=1.5"
      )
      .fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      if (buttonsRef.current) {
        gsap.fromTo(buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", position: "-=0.4" }
        );
      }

      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <img 
          src="https://milanosbicton.com.au/wp-content/themes/g5_helium/custom/images/header/interior.jpg" 
          alt="Milano's Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent"></div>
      </div>

      <div ref={contentRef} className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p ref={subtitleRef} className="text-[#D4A853] text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-6">
            Premium Italian Dining in Bicton
          </p>
          
          <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#FDF8F3] mb-6 md:mb-8 leading-tight">
            Welcome to <span className="text-gradient-gold">Milano's</span>
          </h1>

          <p ref={descRef} className="text-xl text-[#FDF8F3]/70 mb-10 md:mb-12 font-light max-w-lg leading-relaxed mx-auto">
            Authentic Italian cuisine crafted with passion since 2017. 
            Wood-fired pizzas, handmade pastas, and Mediterranean flavors.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="/book-a-table"
              className="btn-primary"
            >
              Reserve Your Table
            </Link>
            <Link 
              href="/menu"
              className="btn-gold"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
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

      <style jsx>{`
        .text-gradient-gold {
          background: linear-gradient(135deg, #D4A853 0%, #E8C87A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}
