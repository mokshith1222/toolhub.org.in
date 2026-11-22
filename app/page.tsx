import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Tools – GPS Speedometer & More",
  description:
    "ToolHub gives you free, instant browser tools — a real-time GPS speedometer, and more tools launching soon. No app download needed. Works on mobile and desktop.",
  alternates: { canonical: "https://toolhub.org.in" },
  openGraph: {
    url: "https://toolhub.org.in",
    title: "ToolHub – Free Online Tools for Everyday Use",
    description:
      "Free browser-based tools — GPS speedometer, converters, and more. No signup, no app. Just open and use.",
  },
};

const tools = [
  {
    name: "GPS Speedometer",
    description:
      "Check your real-time speed in km/h or mph using your device's GPS. Tracks max speed, average speed, and GPS signal strength. Works on cars, bikes, and walking.",
    href: "https://speedometer.toolhub.org.in/",
    icon: "🚀",
    badge: "Live",
    badgeColor: "bg-green-600",
    external: true,
  },
  {
    name: "Unit Converter",
    description:
      "Convert between km/h and mph, meters and feet, kilograms and pounds, Celsius and Fahrenheit — all in one place. Coming soon.",
    href: "#",
    icon: "🔁",
    badge: "Coming Soon",
    badgeColor: "bg-yellow-600",
    external: false,
  },
  {
    name: "Stopwatch & Timer",
    description:
      "A precise browser-based stopwatch and countdown timer. No install, no fuss — just start timing from your browser.",
    href: "#",
    icon: "⏱️",
    badge: "Coming Soon",
    badgeColor: "bg-yellow-600",
    external: false,
  },
  {
    name: "Internet Speed Test",
    description:
      "Test your internet download and upload speed directly from your browser. No Flash plugin required.",
    href: "#",
    icon: "📡",
    badge: "Coming Soon",
    badgeColor: "bg-yellow-600",
    external: false,
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
      description: "Free browser-based online tools for everyday use",
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
            Free tools, no signup required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Free Online Tools for{" "}
            <span className="text-blue-400">Everyday Use</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            ToolHub gives you fast, free, browser-based tools — no app download,
            no account needed. Open your browser and get to work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-base"
            >
              Browse All Tools →
            </Link>
            <a
              href="https://speedometer.toolhub.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-base border border-gray-700"
            >
              🚀 Try Speedometer
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 border-y border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Tools Available", value: "1+" },
            { label: "App Download Required", value: "Zero" },
            { label: "Signup Needed", value: "None" },
            { label: "Cost", value: "Free" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-blue-400 mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4" id="tools">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Our Tools</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every tool is designed to work instantly in your browser — fast,
              private, and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-700/50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{tool.icon}</span>
                  <span
                    className={`${tool.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}
                  >
                    {tool.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">
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
                    className="mt-auto inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors w-fit"
                  >
                    Open Tool →
                  </a>
                ) : (
                  <span className="mt-auto inline-flex items-center gap-2 bg-gray-800 text-gray-500 text-sm font-semibold px-4 py-2 rounded-lg w-fit cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ToolHub */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Why Use ToolHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌐",
                title: "Works in Any Browser",
                desc: "All tools run directly in your browser using standard web APIs. No plugins or installs.",
              },
              {
                icon: "🔒",
                title: "Privacy First",
                desc: "We don't collect or store your personal data. GPS and sensor data stays on your device.",
              },
              {
                icon: "⚡",
                title: "Instant & Free",
                desc: "Open a tool and use it immediately. No account, no payment, no waiting.",
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

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-7">
            Try the GPS Speedometer right now — check your speed in km/h or mph
            without installing anything.
          </p>
          <a
            href="https://speedometer.toolhub.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            🚀 Open GPS Speedometer
          </a>
        </div>
      </section>
    </>
  );
}
