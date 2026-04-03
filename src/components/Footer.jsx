import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' }
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'http://facebook.com/milanosbicton', icon: 'M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z' },
    { label: 'Instagram', href: 'https://www.instagram.com/milanosbicton/', icon: 'M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z' }
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#D4A853]/20 text-[#FDF8F3] py-20 md:py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-16 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://milanosbicton.com.au/wp-content/themes/g5_helium/images/intro/Milanos_Positive_Colour_Linear_2.png" 
                alt="Milano's Logo" 
                className="h-18 mb-6"
              />
            </div>
            <p className="text-[#FDF8F3]/60 font-light leading-relaxed text-lg">
              Authentic Italian cuisine in the heart of Bicton since 2017. 
              Wood-fired pizzas, handmade pastas, and Mediterranean flavors.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-[#D4A853] mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-[#FDF8F3]/60 hover:text-[#D4A853] transition-colors duration-300 font-light text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-[#D4A853] mb-8">
              Contact
            </h4>
            <ul className="space-y-4 text-[#FDF8F3]/60 font-light text-lg">
              <li>Shop 28, Melville Plaza</li>
              <li>380 Canning Highway</li>
              <li>Bicton WA 6157</li>
              <li className="pt-3">
                <a href="tel:0893192940" className="hover:text-[#D4A853] transition-colors">
                  (08) 9319 2940
                </a>
              </li>
              <li>
                <a href="mailto:info@milanosbicton.com.au" className="hover:text-[#D4A853] transition-colors">
                  info@milanosbicton.com.au
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-[#D4A853] mb-8">
              Follow Us
            </h4>
            <p className="text-[#FDF8F3]/60 font-light mb-8 text-lg">
              Stay updated with our latest news and special offers
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center hover:bg-[#D4A853] hover:text-[#0D0D0D] transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4A853]/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#FDF8F3]/40 text-base font-light">
              © {currentYear} Milano's Restaurant & Pizzeria. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[#FDF8F3]/40 text-base hover:text-[#D4A853] transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-[#FDF8F3]/40 text-base hover:text-[#D4A853] transition-colors font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}