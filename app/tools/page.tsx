import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Web Tools Directory – Calculators & Converters",
  description:
    "Explore free online browser tools on ToolHub — Speed Converter, Speed Distance Time Calculator, and real-time GPS Speedometer. No downloads or signups required.",
  alternates: { canonical: "https://toolhub.org.in/tools" },
  openGraph: {
    url: "https://toolhub.org.in/tools",
    title: "Online Web Tools Directory | ToolHub",
    description:
      "Explore free browser-based tools on ToolHub. Instant calculators, converters, and travel utilities.",
  },
};

const workingTools = [
  {
    name: "Speed Unit Converter",
    description:
      "Convert speed values between km/h, mph, m/s, knots, ft/s, and Mach in real time. Features comprehensive conversion formulas and real-world reference tables.",
    href: "/tools/speed-converter",
    icon: "🔁",
    tags: ["Converter", "km/h", "mph", "knots"],
    external: false,
  },
  {
    name: "Speed, Distance & Time Calculator",
    description:
      "Solve for speed, journey distance, or travel duration with flexible unit selections (km, miles, meters, hours, minutes). Includes step-by-step mathematical explanations.",
    href: "/tools/speed-distance-time",
    icon: "⏱️",
    tags: ["Calculator", "Physics", "Travel Math"],
    external: false,
  },
  {
    name: "Free Online GPS Speedometer",
    description:
      "Measure your real-time travel speed in km/h or mph directly via satellite GPS in your mobile browser. Tracks current speed, peak speed, and signal diagnostics.",
    href: "https://speedometer.toolhub.org.in/",
    icon: "🚀",
    tags: ["GPS", "Live Velocity", "Mobile Utility"],
    external: true,
  },
];

const plannedTools = [
  {
    name: "Fuel Cost & Mileage Calculator",
    description:
      "Calculate total fuel consumption, trip expenses, and mileage in Indian Rupees (INR) based on distance, vehicle fuel efficiency, and local petrol/diesel prices.",
    icon: "⛽",
    tags: ["Automotive", "Expense", "Trip Planning"],
  },
  {
    name: "Internet Speed Test",
    description:
      "Measure download and upload bandwidth directly in your browser without requiring external plugins or apps.",
    icon: "📡",
    tags: ["Network", "Diagnostics"],
  },
  {
    name: "Text & Character Counter",
    description:
      "Accurately calculate word count, character density, sentence count, and reading duration for essays and articles.",
    icon: "📝",
    tags: ["Writing", "Productivity"],
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Free Online Tools Directory
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          Every active utility on ToolHub runs directly inside your web browser.
          Zero downloads, zero registration, and complete client-side data privacy.
        </p>
      </div>

      {/* Working Tools Section */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <h2 className="text-xl font-bold text-white tracking-wide">
            Available Online Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workingTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-600/50 transition-all shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl">{tool.icon}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-950 text-green-300 border border-green-800/60">
                  Ready to Use
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {tool.external ? (
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit"
                >
                  Open Speedometer →
                </a>
              ) : (
                <Link
                  href={tool.href}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit"
                >
                  Launch Tool →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Planned Tools Section (Clearly segregated) */}
      <div className="border-t border-gray-800/80 pt-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <h2 className="text-xl font-bold text-white tracking-wide">
            Under Development
          </h2>
          <span className="text-xs text-gray-500">(Planned additions)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plannedTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gray-900/60 border border-gray-800/70 rounded-2xl p-6 flex flex-col gap-4 opacity-75"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl grayscale">{tool.icon}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-950/60 text-yellow-300 border border-yellow-800/50">
                  In Progress
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-gray-500 text-xs px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
