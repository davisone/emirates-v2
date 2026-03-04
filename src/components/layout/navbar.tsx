"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { MegaMenu } from "@/components/layout/mega-menu";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useClickOutside(navRef, () => setActiveMenu(null));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeSection = mainNav.find((s) => s.title === activeMenu);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-shadow duration-200",
          isScrolled ? "shadow-md" : ""
        )}
      >
        <div className="bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <svg viewBox="0 0 200 40" className="h-8 w-auto" aria-label="Emirates">
                <text
                  x="0"
                  y="30"
                  fill="#D71921"
                  fontFamily="Helvetica Neue, sans-serif"
                  fontSize="28"
                  fontWeight="bold"
                >
                  Emirates
                </text>
              </svg>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNav.map((section) => (
                <button
                  key={section.title}
                  onMouseEnter={() => setActiveMenu(section.title)}
                  onClick={() =>
                    setActiveMenu(activeMenu === section.title ? null : section.title)
                  }
                  className={cn(
                    "px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer",
                    activeMenu === section.title
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Actions droite */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                <span className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-[10px]">
                  AE
                </span>
              </button>
              <button
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hidden sm:flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Log in
              </button>

              {/* Hamburger mobile */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-gray-300 hover:text-white cursor-pointer"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mega-menu desktop */}
        {activeSection && (
          <div onMouseLeave={() => setActiveMenu(null)}>
            <MegaMenu section={activeSection} isOpen={!!activeMenu} />
          </div>
        )}
      </nav>

      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Panel mobile */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 overflow-y-auto lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <span className="text-lg font-bold text-emirates-red">Emirates</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-emirates-gray hover:text-emirates-black cursor-pointer"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="py-2">
          {mainNav.map((section) => (
            <div key={section.title} className="border-b border-gray-100">
              <button
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === section.title ? null : section.title
                  )
                }
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-emirates-black cursor-pointer"
              >
                {section.title}
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    mobileAccordion === section.title ? "rotate-180" : ""
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
                  mobileAccordion === section.title ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-4 pb-3 space-y-1">
                  {section.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href ?? "#"}
                      className="block py-1.5 pl-4 text-sm text-emirates-gray hover:text-emirates-red transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 space-y-3">
          <button className="flex items-center gap-2 text-sm text-emirates-black cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Log in
          </button>
        </div>
      </div>
    </>
  );
};
