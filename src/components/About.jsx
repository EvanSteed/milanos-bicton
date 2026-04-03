import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      if (statsRef.current) {
        gsap.fromTo(statsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '8+', label: 'Years of Excellence' },
    { value: '50K+', label: 'Happy Guests' },
    { value: '100+', label: 'Signature Dishes' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 md:py-48 bg-gradient-cream relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute top-20 -right-20 w-96 h-96 bg-[#D4A853]/3 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#991B1B]/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div ref={contentRef} className="lg:col-span-7">
            <span className="text-[#991B1B] text-sm font-semibold tracking-[0.25em] uppercase mb-6 block">
              Our Story
            </span>
            <h2 id="about-heading" className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 md:mb-12 leading-[1.05]">
              Authentic Italian in <span className="text-[#991B1B]">Bicton</span>
            </h2>
            <p className="text-xl text-[#2D2D2D] mb-8 leading-relaxed font-light max-w-xl">
              Since 2017, Milano's has been serving authentic Italian cuisine in the heart of Bicton. 
              Our dishes are crafted with the finest ingredients and a dedication to traditional Italian cooking.
            </p>
            <p className="text-xl text-[#2D2D2D] mb-12 leading-relaxed font-light max-w-xl">
              From our wood-fired pizzas baked in our traditional oven to our handmade pastas prepared 
              daily, every dish showcases the flavors and techniques of Italy.
            </p>
            <div ref={statsRef} className="flex flex-wrap gap-12 mb-12" role="list" aria-label="Restaurant statistics">
              {stats.map((stat, index) => (
                <div key={index} role="listitem">
                  <span className="block text-5xl font-bold text-[#D4A853] font-display">
                    {stat.value}
                  </span>
                  <span className="text-[#2D2D2D]/70 text-base mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>
            <a href="#location" className="btn-primary inline-block text-lg px-10 py-5">
              Visit Our Restaurant
            </a>
          </div>

          <div ref={imageRef} className="lg:col-span-5 relative">
            <div className="relative lg:ml-12">
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#D4A853]/30 rounded-lg" aria-hidden="true"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#991B1B]/30 rounded-lg" aria-hidden="true"></div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Milano's Restaurant Interior - elegant dining room with wooden tables and warm lighting" 
                className="rounded-2xl shadow-2xl w-full h-[350px] lg:h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-4 lg:-left-16 bg-[#991B1B] text-[#FDF8F3] p-8 rounded-xl shadow-xl">
              <p className="font-display text-3xl font-bold">2017</p>
              <p className="text-sm text-[#FDF8F3]/80">Established</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}