"use client";

import { useState } from "react";
import { footerSections } from "@/data/navigation";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "X", href: "#", icon: "𝕏" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "YouTube", href: "#", icon: "▶" },
  { label: "Instagram", href: "#", icon: "📷" },
];

const legalLinks = [
  "Accessibility",
  "Contact us",
  "Privacy policy",
  "Terms of use",
  "Cookie policy",
  "Cybersecurity",
  "Sitemap",
];

export const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Colonnes de liens */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        {/* Desktop : grille */}
        <div className="hidden lg:grid grid-cols-4 xl:grid-cols-8 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                      {link.external && (
                        <span className="ml-1 text-[10px]">↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile : accordéon */}
        <div className="lg:hidden">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-gray-700">
              <button
                onClick={() =>
                  setOpenSection(openSection === section.title ? null : section.title)
                }
                className="w-full flex items-center justify-between py-3 text-sm font-medium cursor-pointer"
              >
                {section.title}
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    openSection === section.title ? "rotate-180" : ""
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openSection === section.title ? "max-h-96 pb-3" : "max-h-0"
                )}
              >
                <ul className="space-y-2 pl-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter + App + Social */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Newsletter */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-3">Stay connected</h3>
              <p className="text-xs text-gray-400 mb-3">
                Subscribe to receive exclusive offers and the latest news.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-emirates-red"
                />
                <button className="px-4 py-2 bg-emirates-red text-white text-sm rounded hover:bg-emirates-red-dark transition-colors cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Emirates App */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Emirates App</h3>
              <div className="flex gap-2">
                <a href="#" className="px-3 py-1.5 border border-gray-600 rounded text-xs text-gray-300 hover:text-white hover:border-gray-400 transition-colors">
                  App Store
                </a>
                <a href="#" className="px-3 py-1.5 border border-gray-600 rounded text-xs text-gray-300 hover:text-white hover:border-gray-400 transition-colors">
                  Google Play
                </a>
                <a href="#" className="px-3 py-1.5 border border-gray-600 rounded text-xs text-gray-300 hover:text-white hover:border-gray-400 transition-colors">
                  Huawei
                </a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Connect with us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs text-gray-300 hover:text-white hover:border-gray-400 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre légale */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-gray-500">
                &copy; 2026 The Emirates Group. All Rights Reserved.
              </span>
              <span className="text-emirates-red font-bold text-sm">Emirates</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
