"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

export function HamburgerMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && buttonRef.current) {
        if (!menuRef.current.contains(event.target as Node) && 
            !buttonRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-[#FDF8F3] cursor-pointer bg-transparent border-0"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-controls="mobile-menu"
        type="button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          className="fixed left-0 right-0 top-20 z-[9999] bg-[#1A1A1A] shadow-2xl overflow-y-auto"
        >
          <ul className="py-4 px-4 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#FDF8F3] text-lg font-medium py-3 min-h-[48px] flex items-center border-b border-[#D4A853]/20 hover:text-[#D4A853] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <Link
              href="/book-a-table"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 min-h-[48px] bg-[#991B1B] text-[#FDF8F3] rounded-lg font-semibold text-center"
            >
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
