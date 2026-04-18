"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Calculator", href: "#calculator" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/litehouse-logo.png"
            alt="Litehouse"
            width={130}
            height={36}
            className="h-7 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-b border-border px-6 pb-6">
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted hover:text-navy transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors w-fit"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
