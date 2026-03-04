"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import type { Airport } from "@/types";
import { useDebounce } from "@/hooks/use-debounce";
import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";

type AutocompleteProps = {
  items: Airport[];
  placeholder: string;
  value: string;
  onChange: (airport: Airport | null) => void;
};

export const Autocomplete = ({
  items,
  placeholder,
  value,
  onChange,
}: AutocompleteProps) => {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query, 300);

  const filtered = debouncedQuery.length > 0
    ? items.filter((airport) => {
        const q = debouncedQuery.toLowerCase();
        return (
          airport.code.toLowerCase().includes(q) ||
          airport.city.toLowerCase().includes(q) ||
          airport.country.toLowerCase().includes(q) ||
          airport.name.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : [];

  useClickOutside(containerRef, () => setIsOpen(false));

  // Synchroniser la valeur externe
  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleSelect = useCallback(
    (airport: Airport) => {
      setQuery(`${airport.city} (${airport.code})`);
      onChange(airport);
      setIsOpen(false);
      setHighlightedIndex(-1);
    },
    [onChange]
  );

  const handleClear = () => {
    setQuery("");
    onChange(null);
    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" && filtered.length > 0) {
        setIsOpen(true);
        setHighlightedIndex(0);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filtered.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filtered[highlightedIndex]) {
          handleSelect(filtered[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emirates-gray"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(-1);
          }}
          onFocus={() => {
            if (query.length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-emirates-gray hover:text-emirates-black cursor-pointer"
            aria-label="Clear"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && debouncedQuery.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((airport, index) => (
              <li key={airport.code}>
                <button
                  onClick={() => handleSelect(airport)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors cursor-pointer",
                    highlightedIndex === index
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  )}
                >
                  <svg
                    className="w-4 h-4 text-emirates-gray shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <span className="font-medium">{airport.city}</span>
                    <span className="text-emirates-gray ml-1">({airport.code})</span>
                    <p className="text-xs text-emirates-gray">{airport.country}</p>
                  </div>
                </button>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-emirates-gray">
              No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
