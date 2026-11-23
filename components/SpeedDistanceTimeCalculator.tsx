"use client";

import { useState } from "react";

type CalcMode = "speed" | "distance" | "time";

const MAX_SUPPORTED_VALUE = 1e15;

const isSafeValue = (v: number): boolean => {
  return typeof v === "number" && Number.isFinite(v) && !isNaN(v) && v >= 0 && v <= MAX_SUPPORTED_VALUE;
};

export default function SpeedDistanceTimeCalculator() {
  const [mode, setMode] = useState<CalcMode>("speed");

  // Inputs
  const [distance, setDistance] = useState<string>("100");
  const [distanceUnit, setDistanceUnit] = useState<"km" | "miles" | "meters">("km");

  const [timeHours, setTimeHours] = useState<string>("1");
  const [timeMinutes, setTimeMinutes] = useState<string>("30");

  const [speed, setSpeed] = useState<string>("60");
  const [speedUnit, setSpeedUnit] = useState<"kmh" | "mph">("kmh");

  // Helper validation functions validating complete input strings
  const validateDecimal = (val: string, label: string) => {
    const trimmed = val.trim();
    if (trimmed === "") {
      return { isValid: false, num: 0, error: `Please enter ${label.toLowerCase()}.` };
    }

    // Explicitly reject non-numeric keywords
    if (/^[+-]?infinity$/i.test(trimmed) || /^nan$/i.test(trimmed)) {
      return { isValid: false, num: 0, error: `Please enter a valid numeric ${label.toLowerCase()}.` };
    }

    // Check for negative sign
    if (trimmed.startsWith("-")) {
      if (/^-(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(trimmed)) {
        return { isValid: false, num: 0, error: `${label} cannot be negative.` };
      }
      return { isValid: false, num: 0, error: `Please enter a valid numeric ${label.toLowerCase()}.` };
    }

    // Validate complete positive number format (rejects partially numeric inputs such as 12abc)
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
    if (!isSafeValue(num)) {
      return { isValid: false, num: 0, error: `${label} exceeds supported calculation range.` };
    }
    return { isValid: true, num, error: "" };
  };

  const validateMinutes = (val: string) => {
    const trimmed = val.trim();
    if (trimmed === "") {
      return { isValid: false, num: 0, error: "Please enter minutes (0 to 59)." };
    }

    if (trimmed.startsWith("-")) {
      if (/^-\d+$/.test(trimmed)) {
        return { isValid: false, num: 0, error: "Minutes cannot be negative." };
      }
      return { isValid: false, num: 0, error: "Minutes must be a whole number between 0 and 59." };
    }

    // Validate complete whole number format
    const isValidFormat = /^\d+$/.test(trimmed);
    if (!isValidFormat) {
      return { isValid: false, num: 0, error: "Minutes must be a whole number between 0 and 59." };
    }

    const num = Number(trimmed);
    if (isNaN(num) || !Number.isInteger(num) || num < 0 || num > 59) {
      return { isValid: false, num: 0, error: "Minutes must be between 0 and 59." };
    }
    return { isValid: true, num, error: "" };
  };

  // Perform validation according to active mode
  const distCheck = validateDecimal(distance, "Distance");
  const speedCheck = validateDecimal(speed, "Speed");
  const hoursCheck = validateDecimal(timeHours, "Hours");
  const minsCheck = validateMinutes(timeMinutes);

  // Conversions
  const getDistanceInKm = (d: number): number => {
    if (distanceUnit === "miles") return d * 1.609344;
    if (distanceUnit === "meters") return d / 1000;
    return d;
  };

  const getSpeedInKmh = (s: number): number => {
    if (speedUnit === "mph") return s * 1.609344;
    return s;
  };

  let resultDisplay = "—";
  let formulaDisplay = "";
  let secondaryDisplay = "";

  if (mode === "speed") {
    if (!distCheck.isValid) {
      secondaryDisplay = distCheck.error;
    } else if (!hoursCheck.isValid) {
      secondaryDisplay = hoursCheck.error;
    } else if (!minsCheck.isValid) {
      secondaryDisplay = minsCheck.error;
    } else {
      const totalHours = hoursCheck.num + minsCheck.num / 60;
      if (!isSafeValue(totalHours) || totalHours <= 0) {
        secondaryDisplay = "Total duration must be greater than zero to calculate speed.";
      } else {
        const km = getDistanceInKm(distCheck.num);
        if (!isSafeValue(km)) {
          secondaryDisplay = "Distance value exceeds supported calculation range.";
        } else {
          const calcKmh = km / totalHours;
          const calcMph = calcKmh / 1.609344;
          const calcMs = calcKmh / 3.6;

          if (
            !isSafeValue(calcKmh) ||
            !isSafeValue(calcMph) ||
            !isSafeValue(calcMs)
          ) {
            secondaryDisplay = "Calculated speed exceeds supported calculation range.";
          } else {
            resultDisplay = `${calcKmh.toFixed(2)} km/h`;
            secondaryDisplay = `Equivalent to ${calcMph.toFixed(2)} mph (${calcMs.toFixed(2)} m/s)`;
            formulaDisplay = `Speed = Distance ÷ Time = ${km.toFixed(2)} km ÷ ${totalHours.toFixed(2)} hours`;
          }
        }
      }
    }
  } else if (mode === "distance") {
    if (!speedCheck.isValid) {
      secondaryDisplay = speedCheck.error;
    } else if (!hoursCheck.isValid) {
      secondaryDisplay = hoursCheck.error;
    } else if (!minsCheck.isValid) {
      secondaryDisplay = minsCheck.error;
    } else {
      const totalHours = hoursCheck.num + minsCheck.num / 60;
      if (!isSafeValue(totalHours)) {
        secondaryDisplay = "Duration value exceeds supported calculation range.";
      } else {
        const kmh = getSpeedInKmh(speedCheck.num);
        if (!isSafeValue(kmh)) {
          secondaryDisplay = "Speed value exceeds supported calculation range.";
        } else {
          const calcKm = kmh * totalHours;
          const calcMiles = calcKm / 1.609344;
          const calcMeters = calcKm * 1000;

          if (
            !isSafeValue(calcKm) ||
            !isSafeValue(calcMiles) ||
            !isSafeValue(calcMeters)
          ) {
            secondaryDisplay = "Calculated distance exceeds supported calculation range.";
          } else {
            resultDisplay = `${calcKm.toFixed(2)} km`;
            secondaryDisplay = `Equivalent to ${calcMiles.toFixed(2)} miles (${calcMeters.toLocaleString("en-US", { maximumFractionDigits: 1 })} meters)`;
            formulaDisplay = `Distance = Speed × Time = ${kmh.toFixed(2)} km/h × ${totalHours.toFixed(2)} hours`;
          }
        }
      }
    }
  } else if (mode === "time") {
    if (!distCheck.isValid) {
      secondaryDisplay = distCheck.error;
    } else if (!speedCheck.isValid) {
      secondaryDisplay = speedCheck.error;
    } else if (speedCheck.num <= 0) {
      secondaryDisplay = "Speed must be greater than zero to calculate travel time.";
    } else {
      const km = getDistanceInKm(distCheck.num);
      const kmh = getSpeedInKmh(speedCheck.num);
      if (!isSafeValue(km)) {
        secondaryDisplay = "Distance value exceeds supported calculation range.";
      } else if (!isSafeValue(kmh)) {
        secondaryDisplay = "Speed value exceeds supported calculation range.";
      } else {
        const totalHours = km / kmh;
        const totalSeconds = totalHours * 3600;

        if (
          !isSafeValue(totalHours) ||
          !isSafeValue(totalSeconds)
        ) {
          secondaryDisplay = "Calculated time exceeds supported calculation range.";
        } else {
          let hours = Math.floor(totalHours);
          let minutes = Math.round((totalHours - hours) * 60);
          if (minutes >= 60) {
            hours += 1;
            minutes = 0;
          }
          if (!isSafeValue(hours) || !isSafeValue(minutes)) {
            secondaryDisplay = "Calculated time exceeds supported calculation range.";
          } else {
            resultDisplay = `${hours} hr ${minutes} min`;
            secondaryDisplay = `Total: ${totalHours.toFixed(2)} decimal hours (${Math.round(totalSeconds).toLocaleString("en-US")} seconds)`;
            formulaDisplay = `Time = Distance ÷ Speed = ${km.toFixed(2)} km ÷ ${kmh.toFixed(2)} km/h`;
          }
        }
      }
    }
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          Speed, Distance & Time Calculator
        </h2>
        <p className="text-gray-400 text-sm">
          Select what you want to calculate, enter the two known values, and get instant results with formulas.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 p-1.5 bg-gray-950 rounded-xl mb-8 border border-gray-800">
        {[
          { id: "speed" as CalcMode, label: "Calculate Speed" },
          { id: "distance" as CalcMode, label: "Calculate Distance" },
          { id: "time" as CalcMode, label: "Calculate Time" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setMode(tab.id)}
            className={`py-2.5 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${
              mode === tab.id
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Inputs Section */}
      <div className="space-y-5 mb-8">
        {/* Distance Input (shown for Speed and Time calculation) */}
        {mode !== "distance" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <label htmlFor="calc-dist" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Distance
                </label>
                <input
                  id="calc-dist"
                  type="text"
                  inputMode="decimal"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="e.g. 100"
                  className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                    distCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="dist-unit" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Unit
                </label>
                <select
                  id="dist-unit"
                  value={distanceUnit}
                  onChange={(e) => setDistanceUnit(e.target.value as "km" | "miles" | "meters")}
                  className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="km">Kilometers (km)</option>
                  <option value="miles">Miles (mi)</option>
                  <option value="meters">Meters (m)</option>
                </select>
              </div>
            </div>
            {distCheck.error && (
              <p className="text-red-400 text-xs mt-1.5">{distCheck.error}</p>
            )}
          </div>
        )}

        {/* Speed Input (shown for Distance and Time calculation) */}
        {mode !== "speed" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <label htmlFor="calc-speed" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Speed
                </label>
                <input
                  id="calc-speed"
                  type="text"
                  inputMode="decimal"
                  value={speed}
                  onChange={(e) => setSpeed(e.target.value)}
                  placeholder="e.g. 60"
                  className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                    speedCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="speed-unit-select" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Unit
                </label>
                <select
                  id="speed-unit-select"
                  value={speedUnit}
                  onChange={(e) => setSpeedUnit(e.target.value as "kmh" | "mph")}
                  className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="kmh">km/h</option>
                  <option value="mph">mph</option>
                </select>
              </div>
            </div>
            {speedCheck.error && (
              <p className="text-red-400 text-xs mt-1.5">{speedCheck.error}</p>
            )}
          </div>
        )}

        {/* Time Input (shown for Speed and Distance calculation) */}
        {mode !== "time" && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Duration / Time
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="relative">
                  <input
                    id="calc-hours"
                    type="text"
                    inputMode="decimal"
                    value={timeHours}
                    onChange={(e) => setTimeHours(e.target.value)}
                    placeholder="0"
                    className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                      hoursCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
                    }`}
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400">hours</span>
                </div>
                {hoursCheck.error && (
                  <p className="text-red-400 text-xs mt-1">{hoursCheck.error}</p>
                )}
              </div>
              <div>
                <div className="relative">
                  <input
                    id="calc-minutes"
                    type="text"
                    inputMode="numeric"
                    value={timeMinutes}
                    onChange={(e) => setTimeMinutes(e.target.value)}
                    placeholder="0"
                    className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none transition-colors ${
                      minsCheck.error ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-blue-500"
                    }`}
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400">minutes</span>
                </div>
                {minsCheck.error && (
                  <p className="text-red-400 text-xs mt-1">{minsCheck.error}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Result Card */}
      <div className="bg-gradient-to-br from-blue-950/50 to-gray-950 border border-blue-800/40 rounded-xl p-6">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          Calculated {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </div>
        <div className="text-3xl md:text-4xl font-extrabold text-white font-mono mb-2">
          {resultDisplay}
        </div>
        {secondaryDisplay && (
          <div className="text-sm text-gray-300 mb-3">{secondaryDisplay}</div>
        )}
        {formulaDisplay && (
          <div className="text-xs text-gray-400 font-mono bg-gray-950/60 rounded-lg p-2.5 border border-gray-800">
            {formulaDisplay}
          </div>
        )}
      </div>

      {/* Running pace note & computation disclaimer */}
      <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>
          <strong>Note:</strong> This tool calculates average speed (e.g. km/h or mph). It does not compute running pace in minutes per kilometer (min/km) or minutes per mile.
        </span>
        <span className="text-gray-500 whitespace-nowrap">Calculated locally in browser</span>
      </div>
    </div>
  );
}
