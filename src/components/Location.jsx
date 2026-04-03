import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -60 },
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

      gsap.fromTo(mapRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="location" 
      className="py-32 md:py-48 bg-gradient-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#991B1B]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="mb-20 md:mb-28">
          <span className="text-[#D4A853] text-sm font-semibold tracking-[0.25em] uppercase mb-6 block">
            Find Us
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#FDF8F3]">
            Visit Milano's
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div ref={contentRef} className="lg:col-span-5">
            <div className="card-dark p-10 md:p-14 rounded-2xl">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#D4A853] mb-10">
                Get in Touch
              </h3>
              
              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-[#D4A853] font-semibold text-lg">Address</span>
                  </div>
                  <p className="text-[#FDF8F3]/60 ml-16 text-lg leading-relaxed">
                    Shop 28, Melville Plaza<br/>
                    380 Canning Highway, Bicton WA 6157
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-[#D4A853] font-semibold text-lg">Phone</span>
                  </div>
                  <p className="text-[#FDF8F3]/60 ml-16 text-lg">
                    (08) 9319 2940
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[#D4A853] font-semibold text-lg">Email</span>
                  </div>
                  <p className="text-[#FDF8F3]/60 ml-16 text-lg">
                    info@milanosbicton.com.au
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[#D4A853] font-semibold text-lg">Opening Hours</span>
                  </div>
                  <div className="text-[#FDF8F3]/60 ml-16 space-y-2 text-lg">
                    <p>Monday - Thursday: 11am - 9pm</p>
                    <p>Friday - Saturday: 11am - Late</p>
                    <p>Sunday: 11am - 8pm</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/search/Milano's+380+Canning+Highway+Bicton+WA+6157" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-12 w-full btn-primary text-center block text-lg py-5"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div ref={mapRef} className="lg:col-span-7 lg:pl-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.123456789012!2d115.7833!3d-32.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2ae2d123456789%3A0x123456789abcdef!2sBicton%2C%20Western%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau" 
                width="100%" 
                height="100%"
                style={{border:0, minHeight: '400px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Milano's Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}