import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ToolHub – Free Browser-Based Online Tools & Utilities",
  description:
    "ToolHub offers free, browser-based online tools including a Speed Unit Converter, Speed-Distance-Time Calculator, and real-time GPS Speedometer. No apps or signups needed.",
  alternates: { canonical: "https://toolhub.org.in" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in",
    title: "ToolHub – Free Browser-Based Online Tools",
    description:
      "Instant, lightweight web utilities — speed conversion, travel calculations, and live GPS metrics. 100% free with no install.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolHub – Free Browser-Based Online Tools",
    description:
      "Instant, lightweight web utilities — speed conversion, travel calculations, and live GPS metrics. 100% free with no install.",
  },
};

const workingTools = [
  {
    name: "Speed Unit Converter",
    description:
      "Convert speed values between km/h, mph, m/s, knots, ft/s, and Mach in real time with formula breakdowns and reference tables.",
    href: "/tools/speed-converter",
    icon: "🔁",
    badge: "Available Now",
    badgeColor: "bg-green-950 text-green-300 border-green-800/60",
    external: false,
  },
  {
    name: "Speed, Distance & Time Calculator",
    description:
      "Solve for average speed, travel distance, or trip duration with flexible unit inputs and step-by-step mathematical explanations.",
    href: "/tools/speed-distance-time",
    icon: "⏱️",
    badge: "Available Now",
    badgeColor: "bg-green-950 text-green-300 border-green-800/60",
    external: false,
  },
  {
    name: "Fuel Cost & Mileage Calculator",
    description:
      "Calculate trip fuel expenses, total litres/kg/units needed, and cost per kilometre across Petrol, Diesel, CNG, and EVs with passenger bill splitting.",
    href: "/tools/fuel-cost-calculator",
    icon: "⛽",
    badge: "New Tool",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800/60",
    external: false,
  },
  {
    name: "GPS Speedometer",
    description:
      "Measure real-time traveling speed in km/h or mph directly using device GPS and location services in your mobile browser. Displays live speed and signal metrics.",
    href: "https://speedometer.toolhub.org.in/",
    icon: "🚀",
    badge: "Independent Tool",
    badgeColor: "bg-blue-950 text-blue-300 border-blue-800/60",
    external: true,
  },
];

const upcomingTools = [
  {
    name: "Indian Land Area Converter",
    description: "Convert regional land units including Guntha, Cent, Bigha, and Ankanam to Square Feet.",
    icon: "📐",
  },
  {
    name: "Internet Speed Test",
    description: "Measure browser network throughput and ping without third-party plugins.",
    icon: "📡",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://toolhub.org.in/#website",
      url: "https://toolhub.org.in/",
      name: "ToolHub",
      description: "Free browser-based online tools and utilities for everyday calculations",
      publisher: { "@id": "https://toolhub.org.in/#organization" },
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": "https://toolhub.org.in/#organization",
      name: "ToolHub",
      url: "https://toolhub.org.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://toolhub.org.in/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "mokshithnaik67@gmail.com",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            100% Free • No Registration Required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Fast, Free Online Tools for{" "}
            <span className="text-blue-400">Everyday Tasks</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            ToolHub provides browser-based calculators and conversion utilities designed for simplicity and speed.
            Zero software installation, zero account requirements, and client-side execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/speed-converter"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base shadow-lg"
            >
              Try Speed Converter →
            </Link>
            <Link
              href="/tools"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base border border-gray-700"
            >
              Browse All Utilities
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Metrics */}
      <section className="bg-gray-900 border-y border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Active Utilities", value: "3" },
            { label: "App Download", value: "Zero" },
            { label: "Account Required", value: "None" },
            { label: "Cost", value: "100% Free" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-blue-400 mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Working Tools Section */}
      <section className="py-16 px-4" id="tools">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Featured Online Tools</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ready-to-use tools designed to work instantly in your browser with zero latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {workingTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-600/50 transition-colors shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{tool.icon}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                {tool.external ? (
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit"
                  >
                    Open Speedometer →
                  </a>
                ) : (
                  <Link
                    href={tool.href}
                    className="mt-auto inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit"
                  >
                    Open Tool →
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Planned additions overview */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <div className="text-xs font-semibold uppercase text-yellow-400 mb-2 tracking-wider">
              Roadmap & Planned Utilities
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingTools.map((u) => (
                <div key={u.name} className="flex items-start gap-3">
                  <span className="text-2xl">{u.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{u.name}</h4>
                    <p className="text-xs text-gray-400">{u.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Why Use ToolHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌐",
                title: "Client-Side Processing",
                desc: "Calculations run directly inside your browser via local JavaScript. Inputs are processed on your device.",
              },
              {
                icon: "🔒",
                title: "Privacy Focused",
                desc: "We do not require user accounts or store calculation inputs. Your conversion parameters remain on your device.",
              },
              {
                icon: "⚡",
                title: "Zero Setup Needed",
                desc: "No mobile app installation, no sign-in walls, and no paywalls. Open the website and start working immediately.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
