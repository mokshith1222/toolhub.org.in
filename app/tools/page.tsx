import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Free Online Tools",
  description:
    "Browse all free browser-based tools on ToolHub — GPS speedometer, upcoming unit converter, timer, and more. No download needed.",
  alternates: { canonical: "https://toolhub.org.in/tools" },
  openGraph: {
    url: "https://toolhub.org.in/tools",
    title: "All Free Online Tools | ToolHub",
    description:
      "Browse all free browser-based tools on ToolHub — GPS speedometer, upcoming unit converter, timer, and more. No download needed.",
  },
};

const tools = [
  {
    name: "Free Online GPS Speedometer",
    description:
      "Measure your real-time speed in km/h or mph using your device's GPS. Tracks current speed, maximum speed, average speed, distance covered, and GPS signal strength. Works on mobile phones, tablets, and laptops. Perfect for drivers, cyclists, and runners.",
    href: "https://speedometer.toolhub.org.in/",
    icon: "🚀",
    tags: ["GPS", "Speed", "km/h", "mph"],
    status: "live",
    external: true,
  },
  {
    name: "Unit Converter",
    description:
      "Convert between km/h ↔ mph, meters ↔ feet, kilograms ↔ pounds, Celsius ↔ Fahrenheit and more. A fast, accurate converter for common everyday units.",
    href: "#",
    icon: "🔁",
    tags: ["Converter", "Units", "Math"],
    status: "soon",
    external: false,
  },
  {
    name: "Online Stopwatch & Timer",
    description:
      "A precise browser stopwatch with lap timing, and a countdown timer you can set to any duration. Works offline once loaded.",
    href: "#",
    icon: "⏱️",
    tags: ["Time", "Stopwatch", "Countdown"],
    status: "soon",
    external: false,
  },
  {
    name: "Internet Speed Test",
    description:
      "Check your download and upload speeds without any third-party plugin. Get a clear picture of your connection quality in seconds.",
    href: "#",
    icon: "📡",
    tags: ["Internet", "Speed", "Network"],
    status: "soon",
    external: false,
  },
  {
    name: "Password Strength Checker",
    description:
      "Test how strong your password is in real time. Everything runs locally in your browser — your password is never sent anywhere.",
    href: "#",
    icon: "🔑",
    tags: ["Security", "Password", "Privacy"],
    status: "soon",
    external: false,
  },
  {
    name: "Word & Character Counter",
    description:
      "Count words, characters, sentences, and reading time in any text. Useful for essays, social media posts, and content writing.",
    href: "#",
    icon: "📝",
    tags: ["Writing", "Text", "Counter"],
    status: "soon",
    external: false,
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          All Free Online Tools
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Every tool on ToolHub runs directly in your browser — no account, no
          download, completely free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-700/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-3xl">{tool.icon}</span>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  tool.status === "live"
                    ? "bg-green-600 text-white"
                    : "bg-yellow-600 text-white"
                }`}
              >
                {tool.status === "live" ? "Live" : "Coming Soon"}
              </span>
            </div>
            <div>
              <h2 className="text-white font-bold text-base mb-2">{tool.name}</h2>
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
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors w-fit"
              >
                Open Tool →
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 bg-gray-800 text-gray-500 text-sm font-semibold px-4 py-2 rounded-lg w-fit cursor-not-allowed">
                Notify Me
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-gray-500 text-sm">
          Have a tool idea?{" "}
          <Link href="/contact" className="text-blue-400 hover:underline">
            Let us know →
          </Link>
        </p>
      </div>
    </div>
  );
}
