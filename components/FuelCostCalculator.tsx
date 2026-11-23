"use client";

import { useState } from "react";

type FuelType = "petrol" | "diesel" | "cng" | "ev";

interface FuelConfig {
  label: string;
  unit: string;
  priceUnit: string;
  efficiencyUnit: string;
  defaultPrice: string;
  defaultEfficiency: string;
  consumptionLabel: string;
}

const FUEL_CONFIGS: Record<FuelType, FuelConfig> = {
  petrol: {
    label: "Petrol",
    unit: "litres",
    priceUnit: "₹ / litre",
    efficiencyUnit: "km / litre",
    defaultPrice: "102",
    defaultEfficiency: "16",
    consumptionLabel: "Total Petrol Needed",
  },
  diesel: {
    label: "Diesel",
    unit: "litres",
    priceUnit: "₹ / litre",
    efficiencyUnit: "km / litre",
    defaultPrice: "88",
    defaultEfficiency: "20",
    consumptionLabel: "Total Diesel Needed",
  },
  cng: {
    label: "CNG",
    unit: "kg",
    priceUnit: "₹ / kg",
    efficiencyUnit: "km / kg",
    defaultPrice: "82",
    defaultEfficiency: "24",
    consumptionLabel: "Total CNG Needed",
  },
  ev: {
    label: "Electric (EV)",
    unit: "kWh (units)",
    priceUnit: "₹ / kWh",
    efficiencyUnit: "km / kWh",
    defaultPrice: "9",
    defaultEfficiency: "7",
    consumptionLabel: "Total Electricity Needed",
  },
};

const MAX_SUPPORTED_VALUE = 1e15;

const isSafeValue = (v: number): boolean => {
  return typeof v === "number" && Number.isFinite(v) && !isNaN(v) && v >= 0 && v <= MAX_SUPPORTED_VALUE;
};

export default function FuelCostCalculator() {
  const [fuelType, setFuelType] = useState<FuelType>("petrol");
  const [distance, setDistance] = useState<string>("100");
  const [efficiency, setEfficiency] = useState<string>(FUEL_CONFIGS.petrol.defaultEfficiency);
  const [price, setPrice] = useState<string>(FUEL_CONFIGS.petrol.defaultPrice);
  const [passengers, setPassengers] = useState<string>("1");
  const [copied, setCopied] = useState<boolean>(false);

  const activeConfig = FUEL_CONFIGS[fuelType];

  const handleFuelTypeChange = (type: FuelType) => {
    setFuelType(type);
    setEfficiency(FUEL_CONFIGS[type].defaultEfficiency);
    setPrice(FUEL_CONFIGS[type].defaultPrice);
  };

  const handleReset = () => {
    setFuelType("petrol");
    setDistance("100");
    setEfficiency(FUEL_CONFIGS.petrol.defaultEfficiency);
    setPrice(FUEL_CONFIGS.petrol.defaultPrice);
    setPassengers("1");
    setCopied(false);
  };

  // Helper validation functions validating complete input strings
  const validateDecimal = (val: string, label: string, allowZero = false) => {
    const trimmed = val.trim();
    if (trimmed === "") {
      return { isValid: false, num: 0, error: `Please enter ${label.toLowerCase()}.` };
    }

    if (/^[+-]?infinity$/i.test(trimmed) || /^nan$/i.test(trimmed)) {
      return { isValid: false, num: 0, error: `Please enter a valid numeric ${label.toLowerCase()}.` };
    }

    if (trimmed.startsWith("-")) {
      return { isValid: false, num: 0, error: `${label} cannot be negative.` };
    }

    const isValidFormat = /^(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(trimmed);
    if (!isValidFormat) {
      return { isValid: false, num: 0, error: `Please enter a valid numeric ${label.toLowerCase()}.` };
    }

    const num = Number(trimmed);
    if (isNaN(num)) {
      return { isValid: false, num: 0, error: `Please enter a valid numeric ${label.toLowerCase()}.` };
    }
    if (num < 0) {
      return { isValid: false, num: 0, error: `${label} cannot be negative.` };
    }
    if (!allowZero && num === 0) {
      return { isValid: false, num: 0, error: `${label} must be greater than zero.` };
    }
    if (!isSafeValue(num)) {
      return { isValid: false, num: 0, error: `${label} exceeds supported calculation range.` };
    }
    return { isValid: true, num, error: "" };
  };

  const validatePassengers = (val: string) => {
    const trimmed = val.trim();
    if (trimmed === "") {
      return { isValid: false, num: 1, error: "Please enter passenger count (at least 1)." };
    }
    const isValidFormat = /^\d+$/.test(trimmed);
    if (!isValidFormat) {
      return { isValid: false, num: 1, error: "Passengers must be a whole number (1 or more)." };
    }
    const num = Number(trimmed);
    if (num < 1) {
      return { isValid: false, num: 1, error: "Number of passengers must be at least 1." };
    }
    if (num > 100) {
      return { isValid: false, num: 1, error: "Passenger split limit is 100." };
    }
    return { isValid: true, num, error: "" };
  };

  const distCheck = validateDecimal(distance, "Distance", true);
  const effCheck = validateDecimal(efficiency, "Mileage / Efficiency", false);
  const priceCheck = validateDecimal(price, "Fuel price", true);
  const passCheck = validatePassengers(passengers);

  const isValid = distCheck.isValid && effCheck.isValid && priceCheck.isValid && passCheck.isValid;

  let totalFuel = 0;
  let totalCost = 0;
  let costPerKm = 0;
  let costPerPassenger = 0;

  if (isValid) {
    const distNum = distCheck.num;
    const effNum = effCheck.num;
    const priceNum = priceCheck.num;
    const passNum = passCheck.num;

    if (effNum > 0) {
      totalFuel = distNum / effNum;
      totalCost = totalFuel * priceNum;
      costPerKm = distNum > 0 ? totalCost / distNum : 0;
      costPerPassenger = passNum > 0 ? totalCost / passNum : totalCost;
    }
  }

  const formatCurrency = (val: number): string => {
    if (!isSafeValue(val)) return "—";
    return val.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatUnits = (val: number): string => {
    if (!isSafeValue(val)) return "—";
    return val.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleCopySummary = async () => {
    if (!isValid) return;
    const text = `Trip Fuel Summary (${activeConfig.label}):
• Distance: ${distance} km
• Mileage: ${efficiency} ${activeConfig.efficiencyUnit}
• Price: ₹${price} / ${activeConfig.unit.split(" ")[0]}
• Total Fuel: ${formatUnits(totalFuel)} ${activeConfig.unit}
• Total Cost: ₹${formatCurrency(totalCost)}
• Cost / km: ₹${formatCurrency(costPerKm)} / km
${passCheck.num > 1 ? `• Per Person (${passCheck.num} people): ₹${formatCurrency(costPerPassenger)}\n` : ""}Calculated via ToolHub (https://toolhub.org.in/tools/fuel-cost-calculator)`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
      {/* Fuel Type Tabs */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
          Select Vehicle Fuel / Energy Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(["petrol", "diesel", "cng", "ev"] as FuelType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleFuelTypeChange(type)}
              className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                fuelType === type
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                  : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white"
              }`}
            >
              {type === "petrol" && "⛽ Petrol"}
              {type === "diesel" && "🛢️ Diesel"}
              {type === "cng" && "💨 CNG"}
              {type === "ev" && "⚡ Electric (EV)"}
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Distance Input */}
        <div>
          <label htmlFor="fuel-distance" className="block text-sm font-medium text-gray-300 mb-1.5">
            Trip Distance
          </label>
          <div className="relative">
            <input
              id="fuel-distance"
              type="text"
              inputMode="decimal"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="e.g. 250"
              className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                distCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
              }`}
            />
            <span className="absolute right-3 top-2.5 text-xs text-gray-400">km</span>
          </div>
          {distCheck.error && <p className="text-red-400 text-xs mt-1">{distCheck.error}</p>}
        </div>

        {/* Mileage / Efficiency Input */}
        <div>
          <label htmlFor="fuel-efficiency" className="block text-sm font-medium text-gray-300 mb-1.5">
            Vehicle Mileage / Efficiency
          </label>
          <div className="relative">
            <input
              id="fuel-efficiency"
              type="text"
              inputMode="decimal"
              value={efficiency}
              onChange={(e) => setEfficiency(e.target.value)}
              placeholder="e.g. 16"
              className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                effCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
              }`}
            />
            <span className="absolute right-3 top-2.5 text-xs text-gray-400">{activeConfig.efficiencyUnit}</span>
          </div>
          {effCheck.error && <p className="text-red-400 text-xs mt-1">{effCheck.error}</p>}
        </div>

        {/* Price Input */}
        <div>
          <label htmlFor="fuel-price" className="block text-sm font-medium text-gray-300 mb-1.5">
            Fuel Price
          </label>
          <div className="relative">
            <input
              id="fuel-price"
              type="text"
              inputMode="decimal"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 102"
              className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                priceCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
              }`}
            />
            <span className="absolute right-3 top-2.5 text-xs text-gray-400">{activeConfig.priceUnit}</span>
          </div>
          {priceCheck.error && <p className="text-red-400 text-xs mt-1">{priceCheck.error}</p>}
        </div>

        {/* Passengers / Split Cost */}
        <div>
          <label htmlFor="fuel-passengers" className="block text-sm font-medium text-gray-300 mb-1.5">
            Split Between Passengers
          </label>
          <div className="relative">
            <input
              id="fuel-passengers"
              type="text"
              inputMode="numeric"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              placeholder="1"
              className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                passCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
              }`}
            />
            <span className="absolute right-3 top-2.5 text-xs text-gray-400">person(s)</span>
          </div>
          {passCheck.error && <p className="text-red-400 text-xs mt-1">{passCheck.error}</p>}
        </div>
      </div>

      {/* Results Display Box */}
      <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 mb-6">
        <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Estimated Total Fuel Cost</div>
        <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-4">
          {isValid ? `₹${formatCurrency(totalCost)}` : "—"}
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-800/80">
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">{activeConfig.consumptionLabel}</span>
            <span className="text-base font-semibold text-white font-mono">
              {isValid ? `${formatUnits(totalFuel)} ${activeConfig.unit}` : "—"}
            </span>
          </div>
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">Running Cost / km</span>
            <span className="text-base font-semibold text-green-400 font-mono">
              {isValid ? `₹${formatCurrency(costPerKm)} / km` : "—"}
            </span>
          </div>
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">
              {passCheck.num > 1 ? `Cost per Person (${passCheck.num})` : "Cost per Person"}
            </span>
            <span className="text-base font-semibold text-yellow-400 font-mono">
              {isValid ? `₹${formatCurrency(costPerPassenger)}` : "—"}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopySummary}
            disabled={!isValid}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
              isValid
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-800/40 text-gray-500 cursor-not-allowed"
            }`}
          >
            {copied ? (
              <>
                <span className="text-green-400">✓</span> Copied to Clipboard
              </>
            ) : (
              <>
                <span>📋</span> Copy Trip Summary
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-gray-400 hover:text-white bg-transparent hover:bg-gray-800/60 transition-colors"
          >
            Reset
          </button>
        </div>

        <span className="text-xs text-gray-500">Calculated locally in browser</span>
      </div>
    </div>
  );
}
