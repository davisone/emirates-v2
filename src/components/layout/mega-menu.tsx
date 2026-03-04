"use client";

import type { NavSection } from "@/types";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  section: NavSection;
  isOpen: boolean;
};

export const MegaMenu = ({ section, isOpen }: MegaMenuProps) => {
  return (
    <div
      className={cn(
        "absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-200 z-40",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
          {section.items.map((item) => (
            <a
              key={item.label}
              href={item.href ?? "#"}
              className="text-sm text-emirates-gray hover:text-emirates-red transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
