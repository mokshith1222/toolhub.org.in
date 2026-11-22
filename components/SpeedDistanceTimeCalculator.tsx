"use client";

import { useState } from "react";

type CalcMode = "speed" | "distance" | "time";

export default function SpeedDistanceTimeCalculator() {
  const [mode, setMode] = useState<CalcMode>("speed");

  // Inputs
  const [distance, setDistance] = useState<string>("100");
  const [distanceUnit, setDistanceUnit] = useState<"km" | "miles" | "meters">("km");

  const [timeHours, setTimeHours] = useState<string>("1");
  const [timeMinutes, setTimeMinutes] = useState<string>("30");

  const [speed, setSpeed] = useState<string>("60");
  const [speedUnit, setSpeedUnit] = useState<"kmh" | "mph">("kmh");

  // Calculations
  const parseNum = (v: string): number => {
    const n = parseFloat(v);
    return isNaN(n) || n < 0 ? 0 : n;
  };

  // Convert distance to standard km
  const getDistanceInKm = (): number => {
    const d = parseNum(distance);
    if (distanceUnit === "miles") return d * 1.609344;
    if (distanceUnit === "meters") return d / 1000;
    return d;
  };

  // Total time in hours
  const getTimeInHours = (): number => {
    const h = parseNum(timeHours);
    const m = parseNum(timeMinutes);
    return h + m / 60;
  };

  // Convert speed to km/h
  const getSpeedInKmh = (): number => {
    const s = parseNum(speed);
    if (speedUnit === "mph") return s * 1.609344;
    return s;
  };

  let resultDisplay = "";
  let formulaDisplay = "";
  let secondaryDisplay = "";

  if (mode === "speed") {
    const totalHours = getTimeInHours();
    const km = getDistanceInKm();
    if (totalHours > 0) {
      const calcKmh = km / totalHours;
      const calcMph = calcKmh / 1.609344;
      resultDisplay = `${calcKmh.toFixed(2)} km/h`;
      secondaryDisplay = `Equivalent to ${calcMph.toFixed(2)} mph (${(calcKmh / 3.6).toFixed(2)} m/s)`;
      formulaDisplay = `Speed = Distance ÷ Time = ${km.toFixed(2)} km ÷ ${totalHours.toFixed(2)} hours`;
    } else {
      resultDisplay = "Time must be greater than 0";
    }
  } else if (mode === "distance") {
    const totalHours = getTimeInHours();
    const kmh = getSpeedInKmh();
    const calcKm = kmh * totalHours;
    const calcMiles = calcKm / 1.609344;
    resultDisplay = `${calcKm.toFixed(2)} km`;
    secondaryDisplay = `Equivalent to ${calcMiles.toFixed(2)} miles (${(calcKm * 1000).toLocaleString()} meters)`;
    formulaDisplay = `Distance = Speed × Time = ${kmh.toFixed(2)} km/h × ${totalHours.toFixed(2)} hours`;
  } else if (mode === "time") {
    const km = getDistanceInKm();
    const kmh = getSpeedInKmh();
    if (kmh > 0) {
      const totalHours = km / kmh;
      let hours = Math.floor(totalHours);
      let minutes = Math.round((totalHours - hours) * 60);
      if (minutes >= 60) {
        hours += 1;
        minutes = 0;
      }
      resultDisplay = `${hours} hr ${minutes} min`;
      secondaryDisplay = `Total: ${totalHours.toFixed(2)} decimal hours (${Math.round(totalHours * 3600)} seconds)`;
      formulaDisplay = `Time = Distance ÷ Speed = ${km.toFixed(2)} km ÷ ${kmh.toFixed(2)} km/h`;
    } else {
      resultDisplay = "Speed must be greater than 0";
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2">
              <label htmlFor="calc-dist" className="block text-sm font-medium text-gray-300 mb-1.5">
                Distance
              </label>
              <input
                id="calc-dist"
                type="number"
                min="0"
                step="any"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none focus:border-blue-500"
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
                className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500"
              >
                <option value="km">Kilometers (km)</option>
                <option value="miles">Miles (mi)</option>
                <option value="meters">Meters (m)</option>
              </select>
            </div>
          </div>
        )}

        {/* Speed Input (shown for Distance and Time calculation) */}
        {mode !== "speed" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2">
              <label htmlFor="calc-speed" className="block text-sm font-medium text-gray-300 mb-1.5">
                Speed
              </label>
              <input
                id="calc-speed"
                type="number"
                min="0"
                step="any"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none focus:border-blue-500"
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
                className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500"
              >
                <option value="kmh">km/h</option>
                <option value="mph">mph</option>
              </select>
            </div>
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
                    type="number"
                    min="0"
                    value={timeHours}
                    onChange={(e) => setTimeHours(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none focus:border-blue-500"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400">hours</span>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    id="calc-minutes"
                    type="number"
                    min="0"
                    max="59"
                    value={timeMinutes}
                    onChange={(e) => setTimeMinutes(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-4 py-2.5 font-mono focus:outline-none focus:border-blue-500"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400">minutes</span>
                </div>
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
    </div>
  );
}
