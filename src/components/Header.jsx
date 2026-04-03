import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const buttonsRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      
      setIsScrolled(scrollY > 50);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );

      gsap.fromTo(navRef.current?.children || [],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.5, ease: 'power2.out' }
      );

      gsap.fromTo(buttonsRef.current?.children || [],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.7, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${scrollProgress}%`,
        duration: 0.2,
        ease: 'none'
      });
    }
  }, [scrollProgress]);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' }
  ];

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#1A1A1A]/95 backdrop-blur-xl shadow-2xl py-4' 
          : 'bg-transparent py-8'
      }`}
      role="banner"
    >
      <div ref={progressRef} className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4A853] to-[#991B1B] w-0"></div>
      <div className="container mx-auto px-8 md:px-16">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
            <a 
              href="#hero" 
              className="flex items-center"
              aria-label="Milano's Restaurant - Home"
            >
              <img 
                ref={logoRef}
                src="https://milanosbicton.com.au/wp-content/themes/g5_helium/images/intro/Milanos_Positive_Colour_Linear_2.png" 
                alt="Milano's Logo" 
                className="h-14 md:h-18 transition-all duration-300 hover:opacity-80"
              />
            </a>

            <ul ref={navRef} className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-sm font-medium tracking-wider uppercase relative group py-2 cursor-pointer"
                  >
                    <span className="text-[#FDF8F3] hover:text-[#D4A853] transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A853] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div ref={buttonsRef} className="hidden lg:flex items-center gap-6">
              <button className="btn-primary text-sm" aria-label="Book a table">
                Book a Table
              </button>
              <a href="#menu" className="btn-gold text-sm">
                View Menu
              </a>
            </div>

            <button 
              className="lg:hidden p-2 text-[#FDF8F3] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
        </nav>

        <div 
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#1A1A1A]/98 backdrop-blur-xl shadow-2xl border-t border-[#D4A853]/20 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <ul className="py-8 px-8 space-y-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#FDF8F3] text-xl font-medium py-3 border-b border-[#D4A853]/10 hover:text-[#D4A853] transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-8 pb-8 flex flex-col gap-4">
            <button className="w-full py-5 btn-primary text-base cursor-pointer">
              Book a Table
            </button>
            <a href="#menu" className="w-full py-5 btn-gold text-base text-center block">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}