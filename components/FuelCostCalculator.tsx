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
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);
  const [efficiency, setEfficiency] = useState<string>(FUEL_CONFIGS.petrol.defaultEfficiency);
  const [price, setPrice] = useState<string>(FUEL_CONFIGS.petrol.defaultPrice);
  const [passengers, setPassengers] = useState<string>("1");
  const [copied, setCopied] = useState<boolean>(false);

  // Commute projection state (independent of main trip round-trip)
  const [commuteDays, setCommuteDays] = useState<string>("22");
  const [commuteIncludeReturn, setCommuteIncludeReturn] = useState<boolean>(true);

  const activeConfig = FUEL_CONFIGS[fuelType];

  const handleFuelTypeChange = (type: FuelType) => {
    setFuelType(type);
    setEfficiency(FUEL_CONFIGS[type].defaultEfficiency);
    setPrice(FUEL_CONFIGS[type].defaultPrice);
  };

  const handleReset = () => {
    setFuelType("petrol");
    setDistance("100");
    setIsRoundTrip(false);
    setEfficiency(FUEL_CONFIGS.petrol.defaultEfficiency);
    setPrice(FUEL_CONFIGS.petrol.defaultPrice);
    setPassengers("1");
    setCommuteDays("22");
    setCommuteIncludeReturn(true);
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

  const validateCommuteDays = (val: string) => {
    const trimmed = val.trim();
    if (trimmed === "") {
      return { isValid: false, num: 22, error: "Please enter working days (1 to 31)." };
    }
    const isValidFormat = /^\d+$/.test(trimmed);
    if (!isValidFormat) {
      return { isValid: false, num: 22, error: "Days must be a whole number between 1 and 31." };
    }
    const num = Number(trimmed);
    if (num < 1 || num > 31) {
      return { isValid: false, num: 22, error: "Days must be between 1 and 31." };
    }
    return { isValid: true, num, error: "" };
  };

  const distCheck = validateDecimal(distance, "Distance", true);
  const effCheck = validateDecimal(efficiency, "Mileage / Efficiency", false);
  const priceCheck = validateDecimal(price, "Fuel price", true);
  const passCheck = validatePassengers(passengers);
  const commuteDaysCheck = validateCommuteDays(commuteDays);

  const isTripValid = distCheck.isValid && effCheck.isValid && priceCheck.isValid && passCheck.isValid;

  // Single Trip Calculations
  let effectiveDistance = 0;
  let totalFuel = 0;
  let totalCost = 0;
  let costPerKm = 0;
  let costPerPassenger = 0;

  if (isTripValid) {
    const enteredDist = distCheck.num;
    effectiveDistance = isRoundTrip ? enteredDist * 2 : enteredDist;
    const effNum = effCheck.num;
    const priceNum = priceCheck.num;
    const passNum = passCheck.num;

    if (effNum > 0) {
      totalFuel = effectiveDistance / effNum;
      totalCost = totalFuel * priceNum;
      // Cost per km is price / mileage, or totalCost / effectiveDistance when > 0
      costPerKm = effectiveDistance > 0 ? totalCost / effectiveDistance : (priceNum / effNum);
      costPerPassenger = passNum > 0 ? totalCost / passNum : totalCost;
    }
  }

  // Commute Projections Calculations
  // Uses entered one-way distance * (commuteIncludeReturn ? 2 : 1)
  const isCommuteValid = isTripValid && commuteDaysCheck.isValid;
  let dailyCommuteDistance = 0;
  let dailyCommuteCost = 0;
  let monthlyCommuteCost = 0;
  let yearlyCommuteCost = 0;

  if (isCommuteValid) {
    const enteredDist = distCheck.num;
    dailyCommuteDistance = commuteIncludeReturn ? enteredDist * 2 : enteredDist;
    const effNum = effCheck.num;
    const priceNum = priceCheck.num;
    const daysNum = commuteDaysCheck.num;

    if (effNum > 0) {
      const dailyFuel = dailyCommuteDistance / effNum;
      dailyCommuteCost = dailyFuel * priceNum;
      monthlyCommuteCost = dailyCommuteCost * daysNum;
      yearlyCommuteCost = monthlyCommuteCost * 12;
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
    if (!isTripValid) return;
    const tripTypeLabel = isRoundTrip ? "Round Trip (2-Way)" : "One-Way Trip";
    const text = `Trip Fuel Summary (${activeConfig.label}):
• Entered Distance: ${distance} km (${tripTypeLabel})
• Effective Total Distance: ${formatUnits(effectiveDistance)} km
• Mileage: ${efficiency} ${activeConfig.efficiencyUnit}
• Price: ₹${price} / ${activeConfig.unit.split(" ")[0]}
• Total Fuel: ${formatUnits(totalFuel)} ${activeConfig.unit}
• Total Cost: ₹${formatCurrency(totalCost)}
• Running Cost / km: ₹${formatCurrency(costPerKm)} / km
${passCheck.num > 1 ? `• Per Person (${passCheck.num} people): ₹${formatCurrency(costPerPassenger)}\n` : ""}${
      isCommuteValid
        ? `\nCommute Expense Projection:
• Daily Commute (${commuteIncludeReturn ? "Round-Trip 2x" : "One-Way"}): ${formatUnits(dailyCommuteDistance)} km = ₹${formatCurrency(dailyCommuteCost)}
• Monthly (${commuteDaysCheck.num} days): ₹${formatCurrency(monthlyCommuteCost)}
• Yearly (12 months): ₹${formatCurrency(yearlyCommuteCost)}\n`
        : ""
    }Calculated via ToolHub (https://toolhub.org.in/tools/fuel-cost-calculator)`;

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
        {/* Distance Input & Round Trip Toggle */}
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
              placeholder="e.g. 100"
              className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                distCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
              }`}
            />
            <span className="absolute right-3 top-2.5 text-xs text-gray-400">km</span>
          </div>
          {distCheck.error && <p className="text-red-400 text-xs mt-1">{distCheck.error}</p>}

          {/* Round-Trip Checkbox */}
          <div className="mt-2.5 flex items-center justify-between flex-wrap gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-300 hover:text-white select-none">
              <input
                id="fuel-round-trip"
                type="checkbox"
                checked={isRoundTrip}
                onChange={(e) => setIsRoundTrip(e.target.checked)}
                className="w-4 h-4 rounded border-gray-700 bg-gray-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer"
              />
              <span>Round Trip (Return Journey)</span>
            </label>
            {isTripValid && isRoundTrip && (
              <span className="text-xs font-mono font-medium text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2 py-0.5 rounded">
                Effective: {formatUnits(effectiveDistance)} km ({formatUnits(distCheck.num)} × 2)
              </span>
            )}
          </div>
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

      {/* Main Single Trip Result Display Box */}
      <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
          <span className="text-xs uppercase tracking-wider text-gray-400">
            Estimated Trip Fuel Cost {isRoundTrip && <span className="text-blue-400 font-semibold">(Round Trip)</span>}
          </span>
          {isTripValid && (
            <span className="text-xs text-gray-500">
              Distance: <strong className="text-gray-300">{formatUnits(effectiveDistance)} km</strong>
            </span>
          )}
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-4">
          {isTripValid ? `₹${formatCurrency(totalCost)}` : "—"}
        </div>

        {/* Trip Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-800/80">
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">{activeConfig.consumptionLabel}</span>
            <span className="text-base font-semibold text-white font-mono">
              {isTripValid ? `${formatUnits(totalFuel)} ${activeConfig.unit}` : "—"}
            </span>
          </div>
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">Running Cost / km</span>
            <span className="text-base font-semibold text-green-400 font-mono">
              {isTripValid ? `₹${formatCurrency(costPerKm)} / km` : "—"}
            </span>
          </div>
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">
              {passCheck.num > 1 ? `Cost per Person (${passCheck.num})` : "Cost per Person"}
            </span>
            <span className="text-base font-semibold text-yellow-400 font-mono">
              {isTripValid ? `₹${formatCurrency(costPerPassenger)}` : "—"}
            </span>
          </div>
        </div>
      </div>

      {/* Commute Expense Projection Section */}
      <div className="bg-gray-950/70 border border-gray-800 rounded-xl p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>📅</span> Regular Commute Expense Projection
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Estimate recurring fuel expenses based on your daily one-way distance ({distCheck.isValid ? `${distCheck.num} km` : "entered distance"}).
            </p>
          </div>
        </div>

        {/* Commute Controls & Assumptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 pb-4 border-t border-gray-800/80 text-xs">
          {/* Include Return Journey Toggle */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white select-none">
              <input
                id="commute-return-journey"
                type="checkbox"
                checked={commuteIncludeReturn}
                onChange={(e) => setCommuteIncludeReturn(e.target.checked)}
                className="w-4 h-4 rounded border-gray-700 bg-gray-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer"
              />
              <span className="font-medium">Include return journey in daily commute (2-way)</span>
            </label>
            <p className="text-gray-500 mt-1 pl-6">
              Daily distance: <strong className="text-gray-300">{isTripValid ? `${formatUnits(dailyCommuteDistance)} km` : "—"}</strong>{" "}
              {commuteIncludeReturn ? `(${distCheck.num} km × 2)` : "(one-way only)"}
            </p>
          </div>

          {/* Commute Days Selector & Presets */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <label htmlFor="commute-days" className="font-medium text-gray-300">
                Working Days / Month:
              </label>
              <div className="flex items-center gap-1">
                {["20", "22", "26"].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCommuteDays(preset)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      commuteDays === preset
                        ? "bg-blue-600 text-white font-bold"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {preset}d
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <input
                id="commute-days"
                type="text"
                inputMode="numeric"
                value={commuteDays}
                onChange={(e) => setCommuteDays(e.target.value)}
                placeholder="22"
                className={`w-full bg-gray-950 border text-white rounded-lg px-3 py-1.5 font-mono text-xs focus:outline-none transition-colors ${
                  commuteDaysCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
                }`}
              />
              <span className="absolute right-3 top-1.5 text-gray-500">days/month</span>
            </div>
            {commuteDaysCheck.error && (
              <p className="text-red-400 text-[11px] mt-1">{commuteDaysCheck.error}</p>
            )}
          </div>
        </div>

        {/* Commute Projections Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-gray-900/80 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">Daily Commute</span>
            <span className="text-base font-bold text-white font-mono">
              {isCommuteValid ? `₹${formatCurrency(dailyCommuteCost)}` : "—"}
            </span>
            <span className="block text-[11px] text-gray-500 mt-0.5">
              {isCommuteValid ? `${formatUnits(dailyCommuteDistance)} km / day` : "—"}
            </span>
          </div>

          <div className="bg-gray-900/80 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">
              Monthly Cost ({commuteDaysCheck.isValid ? `${commuteDaysCheck.num} days` : "—"})
            </span>
            <span className="text-base font-bold text-blue-400 font-mono">
              {isCommuteValid ? `₹${formatCurrency(monthlyCommuteCost)}` : "—"}
            </span>
            <span className="block text-[11px] text-gray-500 mt-0.5">
              {isCommuteValid ? `${formatUnits(dailyCommuteDistance * commuteDaysCheck.num)} km / mo` : "—"}
            </span>
          </div>

          <div className="bg-gray-900/80 p-3 rounded-lg border border-gray-800">
            <span className="block text-xs text-gray-400">Yearly Projection (12 mo)</span>
            <span className="text-base font-bold text-green-400 font-mono">
              {isCommuteValid ? `₹${formatCurrency(yearlyCommuteCost)}` : "—"}
            </span>
            <span className="block text-[11px] text-gray-500 mt-0.5">
              {isCommuteValid ? `${formatUnits(dailyCommuteDistance * commuteDaysCheck.num * 12)} km / yr` : "—"}
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
            disabled={!isTripValid}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
              isTripValid
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
