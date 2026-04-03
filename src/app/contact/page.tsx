"use client";

export default function ContactPage() {
  return (
    <section className="min-h-screen py-24 md:py-32 bg-[#FDF8F3]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#991B1B] text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Contact Us
            </h1>
            <p className="text-[#2D2D2D]/70 text-xl max-w-xl mx-auto">
              We'd love to hear from you. Reach out with any questions or feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#D4A853]/20">
              <h2 className="font-display text-3xl font-bold text-[#1A1A1A] mb-8">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                    placeholder="(08) 1234 5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-[#991B1B] text-[#FDF8F3] rounded-lg font-semibold text-lg hover:bg-[#7F1D1D] transition-all hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 text-[#FDF8F3]">
                <h3 className="font-display text-2xl font-bold text-[#D4A853] mb-8">
                  Location & Hours
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[#D4A853] font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Address
                    </h4>
                    <p className="text-[#FDF8F3]/70 text-lg leading-relaxed">
                      Shop 28, Melville Plaza<br/>
                      380 Canning Highway<br/>
                      Bicton WA 6157
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#D4A853] font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone
                    </h4>
                    <p className="text-[#FDF8F3]/70 text-lg">
                      <a href="tel:0893192940" className="hover:text-[#D4A853] transition-colors">
                        (08) 9319 2940
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#D4A853] font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </h4>
                    <p className="text-[#FDF8F3]/70 text-lg">
                      <a href="mailto:info@milanosbicton.com.au" className="hover:text-[#D4A853] transition-colors">
                        info@milanosbicton.com.au
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#D4A853] font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Opening Hours
                    </h4>
                    <div className="text-[#FDF8F3]/70 text-lg space-y-1">
                      <p>Monday - Thursday: 11am - 9pm</p>
                      <p>Friday - Saturday: 11am - Late</p>
                      <p>Sunday: 11am - 8pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl">
                <iframe 
                  src="https://maps.google.com/maps?q=380%20Canning%20Highway%20Bicton%20WA%206157&z=15&output=embed"
                  width="100%" 
                  height="100%"
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Milano's Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
