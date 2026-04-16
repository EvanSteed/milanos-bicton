import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { HamburgerMenu } from "@/components/HamburgerMenu";

export const metadata: Metadata = {
  title: "Milano's Restaurant & Pizzeria - Bicton, WA",
  description: "Authentic Italian cuisine in Bicton since 2017. Wood-fired pizzas, handmade pastas, and Mediterranean flavors.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1A1A1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/book-a-table", label: "Book a Table" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-xl border-b border-[#D4A853]/20">
          <div className="container mx-auto px-6 md:px-12">
            <nav className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="Milano's Logo" 
                  className="h-20 md:h-24"
                />
              </Link>

              <ul className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm font-medium tracking-wider uppercase text-[#FDF8F3] hover:text-[#D4A853] transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A853] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:flex items-center gap-4">
                <Link 
                  href="/book-a-table"
                  className="px-6 py-3 bg-[#991B1B] text-[#FDF8F3] rounded-lg font-semibold text-sm hover:bg-[#7F1D1D] transition-all hover:scale-105"
                >
                  Book a Table
                </Link>
              </div>

              <div className="lg:hidden">
                <HamburgerMenu links={navLinks} />
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1 pt-20">
          {children}
        </main>

        <footer className="bg-[#0D0D0D] border-t border-[#D4A853]/20 text-[#FDF8F3] py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <img 
                  src="/images/logo.png" 
                  alt="Milano's Logo" 
                  className="h-20 mb-6"
                />
                <p className="text-[#FDF8F3]/60 font-light">
                  Authentic Italian cuisine in the heart of Bicton since 2017.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#D4A853] mb-6">Hours</h4>
                <ul className="space-y-2 text-[#FDF8F3]/60 font-light">
                  <li>Mon - Thu: 7am - 9pm</li>
                  <li>Fri - Sat: 7am - Late</li>
                  <li>Sunday: 7am - 8pm</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#D4A853] mb-6">Contact</h4>
                <ul className="space-y-2 text-[#FDF8F3]/60 font-light">
                  <li>Shop 28, Melville Plaza</li>
                  <li>380 Canning Highway, Bicton</li>
                  <li>(08) 9319 2940</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#D4A853]/10 pt-8 mt-12 text-center text-[#FDF8F3]/40 text-sm">
              © {new Date().getFullYear()} Milano's Restaurant & Pizzeria. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
