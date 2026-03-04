"use client";

import { useState } from "react";

export const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <svg className="w-4 h-4 text-emirates-red shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <strong className="text-emirates-red">Important:</strong>{" "}
            <span className="text-emirates-black">
              Travel requirements may vary by destination.{" "}
              <a href="#" className="underline hover:text-emirates-red">
                Check the latest updates
              </a>
            </span>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-emirates-gray hover:text-emirates-black shrink-0 cursor-pointer"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
