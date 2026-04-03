"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

export function HamburgerMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#FDF8F3] cursor-pointer"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1A1A1A]/98 backdrop-blur-xl shadow-2xl border-t border-[#D4A853]/20">
          <ul className="py-8 px-8 space-y-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#FDF8F3] text-xl font-medium py-2 border-b border-[#D4A853]/10 hover:text-[#D4A853] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-8 pb-8">
            <Link
              href="/book-a-table"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 bg-[#991B1B] text-[#FDF8F3] rounded-lg font-semibold text-center"
            >
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
