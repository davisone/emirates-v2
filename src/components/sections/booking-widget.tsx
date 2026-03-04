"use client";

import { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import { Autocomplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { airports } from "@/data/airports";
import type { Airport } from "@/types";

const bookingTabs = [
  { id: "search", label: "Search flights", icon: <span>✈</span> },
  { id: "manage", label: "Manage / Check in", icon: <span>🎫</span> },
  { id: "onboard", label: "What's on your flight", icon: <span>💺</span> },
  { id: "status", label: "Flight status", icon: <span>🕐</span> },
];

// --- Onglet Search flights ---
const SearchFlightsTab = () => {
  const [departure, setDeparture] = useState<Airport | null>(null);
  const [arrival, setArrival] = useState<Airport | null>(null);
  const [searchType, setSearchType] = useState<"flight" | "flight-hotel">("flight");

  const handleSwap = () => {
    const temp = departure;
    setDeparture(arrival);
    setArrival(temp);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              checked={searchType === "flight"}
              onChange={() => setSearchType("flight")}
              className="accent-emirates-red"
            />
            Flight
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              checked={searchType === "flight-hotel"}
              onChange={() => setSearchType("flight-hotel")}
              className="accent-emirates-red"
            />
            Flight + Hotel
          </label>
        </div>
        <a href="#" className="text-xs text-emirates-red hover:underline">
          Advanced search: multi-city, promo codes...
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <div className="flex-1">
          <label className="block text-xs text-emirates-gray mb-1">Departure airport</label>
          <Autocomplete
            items={airports}
            placeholder="City or airport"
            value={departure ? `${departure.city} (${departure.code})` : ""}
            onChange={setDeparture}
          />
        </div>

        <button
          onClick={handleSwap}
          className="self-center sm:self-end sm:mb-1 p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer shrink-0"
          aria-label="Swap airports"
        >
          <svg className="w-4 h-4 text-emirates-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>

        <div className="flex-1">
          <label className="block text-xs text-emirates-gray mb-1">Arrival airport</label>
          <Autocomplete
            items={airports}
            placeholder="City or airport"
            value={arrival ? `${arrival.city} (${arrival.code})` : ""}
            onChange={setArrival}
          />
        </div>

        <Button size="lg" className="sm:self-end sm:mb-0 mt-2 sm:mt-0">
          Continue
        </Button>
      </div>
    </div>
  );
};

// --- Onglet Manage booking / Check in ---
const ManageBookingTab = () => {
  const [bookingRef, setBookingRef] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs text-emirates-gray mb-1">Booking reference</label>
          <input
            type="text"
            value={bookingRef}
            onChange={(e) => setBookingRef(e.target.value)}
            placeholder="e.g. A1B2C3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs text-emirates-gray mb-1">Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="As on your booking"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
          />
        </div>
        <Button size="lg" className="sm:self-end">
          Retrieve booking
        </Button>
      </div>
      <a href="#" className="inline-block mt-3 text-xs text-emirates-red hover:underline">
        Retrieve with Emirates Skywards
      </a>
    </div>
  );
};

// --- Onglet What's on your flight ---
const OnboardTab = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs text-emirates-gray mb-1">Flight number</label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            placeholder="e.g. EK001"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs text-emirates-gray mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
          />
        </div>
        <Button size="lg" className="sm:self-end">
          Search
        </Button>
      </div>
    </div>
  );
};

// --- Onglet Flight status ---
const FlightStatusTab = () => {
  const [mode, setMode] = useState<"route" | "number">("route");
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");
  const [departure, setDeparture] = useState<Airport | null>(null);
  const [arrival, setArrival] = useState<Airport | null>(null);

  return (
    <div>
      <div className="flex gap-4 mb-4 text-sm">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="radio"
            name="statusMode"
            checked={mode === "route"}
            onChange={() => setMode("route")}
            className="accent-emirates-red"
          />
          By route
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="radio"
            name="statusMode"
            checked={mode === "number"}
            onChange={() => setMode("number")}
            className="accent-emirates-red"
          />
          By flight number
        </label>
      </div>

      {mode === "route" ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs text-emirates-gray mb-1">Departure</label>
            <Autocomplete
              items={airports}
              placeholder="City or airport"
              value={departure ? `${departure.city} (${departure.code})` : ""}
              onChange={setDeparture}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-emirates-gray mb-1">Arrival</label>
            <Autocomplete
              items={airports}
              placeholder="City or airport"
              value={arrival ? `${arrival.city} (${arrival.code})` : ""}
              onChange={setArrival}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-emirates-gray mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
            />
          </div>
          <Button size="lg" className="sm:self-end">
            Search
          </Button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs text-emirates-gray mb-1">Flight number</label>
            <input
              type="text"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              placeholder="e.g. EK001"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-emirates-gray mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emirates-red focus:ring-1 focus:ring-emirates-red"
            />
          </div>
          <Button size="lg" className="sm:self-end">
            Search
          </Button>
        </div>
      )}
    </div>
  );
};

// --- Composant principal ---
export const BookingWidget = () => {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 -mt-16 sm:-mt-24">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <Tabs tabs={bookingTabs} activeTab={activeTab} onTabChange={setActiveTab}>
          {activeTab === "search" && <SearchFlightsTab />}
          {activeTab === "manage" && <ManageBookingTab />}
          {activeTab === "onboard" && <OnboardTab />}
          {activeTab === "status" && <FlightStatusTab />}
        </Tabs>
      </div>
    </section>
  );
};
