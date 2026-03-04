"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  icon?: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  children: ReactNode;
};

export const Tabs = ({ tabs, activeTab, onTabChange, children }: TabsProps) => {
  return (
    <div>
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 cursor-pointer",
              activeTab === tab.id
                ? "border-emirates-red text-emirates-red"
                : "border-transparent text-emirates-gray hover:text-emirates-black hover:border-gray-300"
            )}
          >
            {tab.icon && <span className="text-lg">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
};
