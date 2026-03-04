"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => {
  return localStorage.getItem(STORAGE_KEY);
};

const getServerSnapshot = () => {
  return "pending";
};

export const CookieBanner = () => {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleAccept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  }, []);

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-emirates-gray flex-1">
          We use cookies to give you the best experience on our website. By continuing to browse,
          you agree to our{" "}
          <a href="#" className="text-emirates-red hover:underline">
            cookie policy
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <a href="#" className="text-sm text-emirates-red hover:underline self-center">
            Cookie preferences
          </a>
          <Button size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
