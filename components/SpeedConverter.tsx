"use client";

import { useState } from "react";

type SpeedUnit = "kmh" | "mph" | "ms" | "knot" | "fts" | "mach";

interface UnitDef {
  id: SpeedUnit;
  name: string;
  symbol: string;
  toKmh: (v: number) => number;
  fromKmh: (v: number) => number;
}

const UNITS: Record<SpeedUnit, UnitDef> = {
  kmh: {
    id: "kmh",
    name: "Kilometers per hour",
    symbol: "km/h",
    toKmh: (v) => v,
    fromKmh: (v) => v,
  },
  mph: {
    id: "mph",
    name: "Miles per hour",
    symbol: "mph",
    toKmh: (v) => v * 1.609344,
    fromKmh: (v) => v / 1.609344,
  },
  ms: {
    id: "ms",
    name: "Meters per second",
    symbol: "m/s",
    toKmh: (v) => v * 3.6,
    fromKmh: (v) => v / 3.6,
  },
  knot: {
    id: "knot",
    name: "Knots (Nautical miles/h)",
    symbol: "kn",
    toKmh: (v) => v * 1.852,
    fromKmh: (v) => v / 1.852,
  },
  fts: {
    id: "fts",
    name: "Feet per second",
    symbol: "ft/s",
    toKmh: (v) => v * 1.09728,
    fromKmh: (v) => v / 1.09728,
  },
  mach: {
    id: "mach",
    name: "Mach (Speed of sound at 20°C)",
    symbol: "Ma",
    toKmh: (v) => v * 1234.8,
    fromKmh: (v) => v / 1234.8,
  },
};

export default function SpeedConverter() {
  const [inputValue, setInputValue] = useState<string>("100");
  const [sourceUnit, setSourceUnit] = useState<SpeedUnit>("kmh");

  const numVal = parseFloat(inputValue);
  const isValid = !isNaN(numVal) && numVal >= 0;

  // Convert input value to base km/h
  const baseKmh = isValid ? UNITS[sourceUnit].toKmh(numVal) : 0;

  const formatResult = (v: number): string => {
    if (v === 0) return "0";
    if (v >= 1000) return v.toLocaleString("en-US", { maximumFractionDigits: 2 });
    if (v < 0.001) return v.toExponential(4);
    return v.toLocaleString("en-US", { maximumFractionDigits: 4 });
  };

  const handleQuickSelect = (val: string, unit: SpeedUnit) => {
    setInputValue(val);
    setSourceUnit(unit);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          Interactive Speed Converter
        </h2>
        <p className="text-gray-400 text-sm">
          Enter any speed value and choose the source unit. Conversions update instantly across all standard metrics.
        </p>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2">
          <label htmlFor="speed-input" className="block text-sm font-medium text-gray-300 mb-2">
            Enter Speed Value
          </label>
          <input
            id="speed-input"
            type="number"
            min="0"
            step="any"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g. 100"
            className="w-full bg-gray-950 border border-gray-700 text-white text-lg font-mono rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
          {!isValid && inputValue.trim() !== "" && (
            <p className="text-red-400 text-xs mt-1">Please enter a valid positive number.</p>
          )}
        </div>

        <div>
          <label htmlFor="source-unit" className="block text-sm font-medium text-gray-300 mb-2">
            From Unit
          </label>
          <select
            id="source-unit"
            value={sourceUnit}
            onChange={(e) => setSourceUnit(e.target.value as SpeedUnit)}
            className="w-full bg-gray-950 border border-gray-700 text-white rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-500 transition-colors"
          >
            {Object.values(UNITS).map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick sample chips */}
      <div className="mb-8">
        <span className="text-xs text-gray-400 block mb-2 font-medium uppercase tracking-wider">
          Quick presets:
        </span>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Walking (5 km/h)", val: "5", unit: "kmh" as SpeedUnit },
            { label: "City limit (50 km/h)", val: "50", unit: "kmh" as SpeedUnit },
            { label: "US Highway (65 mph)", val: "65", unit: "mph" as SpeedUnit },
            { label: "India Highway (100 km/h)", val: "100", unit: "kmh" as SpeedUnit },
            { label: "Airplane (500 kn)", val: "500", unit: "knot" as SpeedUnit },
          ].map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => handleQuickSelect(preset.val, preset.unit)}
              className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700 transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.values(UNITS).map((u) => {
          const isSelected = u.id === sourceUnit;
          const converted = isValid ? u.fromKmh(baseKmh) : 0;

          return (
            <div
              key={u.id}
              className={`p-4 rounded-xl border transition-all ${
                isSelected
                  ? "bg-blue-950/40 border-blue-600/70 shadow-md"
                  : "bg-gray-950 border-gray-800 hover:border-gray-700"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                <span>{u.name}</span>
                <span className="font-mono font-semibold text-blue-400">{u.symbol}</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tracking-tight">
                {isValid ? formatResult(converted) : "—"}
              </div>
              {isSelected && (
                <span className="inline-block mt-2 text-[10px] uppercase font-semibold text-blue-400 tracking-wider">
                  Source Unit
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Formula summary */}
      {isValid && (
        <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            Formula: 1 km/h = 0.621371 mph | 1 mph = 1.609344 km/h | 1 m/s = 3.6 km/h
          </span>
          <span className="text-gray-500">All conversions computed locally in your browser</span>
        </div>
      )}
    </div>
  );
}
