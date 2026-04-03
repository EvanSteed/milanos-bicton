import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1.2, delay: 0.9, ease: 'power2.out' }
      );

      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: 'power2.out' }
      );

      gsap.fromTo(buttonsRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 1.4, ease: 'power2.out' }
      );

      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-[100dvh] flex items-center justify-start overflow-hidden"
      aria-label="Welcome to Milano's Restaurant"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
          src="https://milanosbicton.com.au/wp-content/themes/g5_helium/custom/images/header/interior.jpg" 
          alt="Milano's Restaurant Interior with elegant dining atmosphere" 
          className="w-full h-[120%] object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent"></div>
      </div>

      <div 
        ref={contentRef}
        className="relative z-10 px-8 md:px-16 lg:px-24 max-w-5xl ml-auto"
      >
        <div className="mb-8 overflow-hidden">
          <p 
            ref={subtitleRef}
            className="text-[#D4A853] text-base md:text-lg tracking-[0.35em] uppercase font-medium"
          >
            Premium Italian Dining in Bicton
          </p>
        </div>

        <h1 
          ref={titleRef}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-[#FDF8F3] mb-8 md:mb-12 leading-[0.95] text-left"
        >
          Welcome to <br/>
          <span className="text-gradient-gold">Milano's</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#FDF8F3]/70 mb-12 md:mb-16 font-light max-w-lg text-left leading-relaxed">
          Authentic Italian cuisine crafted with passion since 2017. 
          Wood-fired pizzas, handmade pastas, and Mediterranean flavors.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-start items-start">
          <button className="btn-primary text-lg px-10 py-5 cursor-pointer" aria-label="Reserve a table">
            Reserve Your Table
          </button>
          <a href="#menu" className="btn-gold text-lg px-10 py-5" aria-label="View our menu">
            Explore Menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <a 
          href="#about"
          className="flex flex-col items-center text-[#FDF8F3]/50 hover:text-[#D4A853] transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to discover more"
        >
          <span className="text-xs tracking-widest uppercase mb-3">Discover More</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}