import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ToolHub – Our Purpose and Mission",
  description:
    "Learn about ToolHub, an independent collection of free online tools and calculators built by Mokshith Naik for everyday use.",
  alternates: { canonical: "https://toolhub.org.in/about" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in/about",
    title: "About ToolHub – Mission and Background",
    description:
      "Learn why ToolHub was created: fast, browser-based utilities with zero registration, zero app downloads, and client-side processing.",
  },
  twitter: {
    card: "summary",
    title: "About ToolHub – Mission and Background",
    description:
      "Learn why ToolHub was created: fast, browser-based utilities with zero registration, zero app downloads, and client-side processing.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About ToolHub</h1>

      <div className="space-y-8 text-gray-300 leading-relaxed text-base">
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">What is ToolHub?</h2>
          <p>
            <strong className="text-white">ToolHub</strong> is an independent online platform dedicated
            to providing lightweight, accurate, and completely free web utilities. We build tools that
            help users perform quick calculations, unit conversions, and measurements directly in the
            browser without installing applications or registering accounts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Why We Are Building It</h2>
          <p className="mb-4">
            Many basic everyday digital utilities—such as unit converters, speed calculators, or
            simple math tools—frequently require separate application downloads, account registrations,
            or cumbersome multi-step interfaces.
          </p>
          <p>
            ToolHub was created to offer a clean, direct alternative: fast-loading, browser-based
            utilities designed to be accessible instantly on any device with zero friction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">What Utilities You Can Expect</h2>
          <p className="mb-3">
            Our tool catalog focuses on practical, mathematically sound utilities:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <strong className="text-gray-200">Velocity & Conversion Tools:</strong> Interactive unit
              converters for kilometers per hour (km/h), miles per hour (mph), knots, and meters per second.
            </li>
            <li>
              <strong className="text-gray-200">Kinematics & Travel Math:</strong> Calculators to solve for
              speed, distance, or travel time for commuters, drivers, and students.
            </li>
            <li>
              <strong className="text-gray-200">GPS Speedometer:</strong> Our companion utility, the{" "}
              <a
                href="https://speedometer.toolhub.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Online GPS Speedometer
              </a>
              , which utilizes device GPS and browser location services to compute and display real-time travel speed.
            </li>
            <li>
              <strong className="text-gray-200">Upcoming Utilities:</strong> Fuel mileage calculators,
              text analysis counters, and connection diagnostics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-1.5">Client-Side Computation</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Whenever technically feasible, calculations run directly in your browser using local JavaScript.
                Your numerical inputs, selections, and travel parameters are processed on your device rather than sent to remote ToolHub servers.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-1.5">No Mandatory Accounts</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                You never need to log in, provide an email address, or create a password to use our utilities.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-1.5">Transparent Disclosures</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We clearly disclose how tools work, provide the mathematical formulas used, and accurately state
                our data handling and third-party integration practices.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-1.5">Free Accessibility</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                All tools are provided free of charge. ToolHub integrates Google AdSense code in preparation for publisher review; once approved and serving is enabled, non-intrusive advertisements will help support ongoing hosting and maintenance.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">About the Creator</h2>
          <p>
            ToolHub is designed, developed, and maintained by{" "}
            <strong className="text-white">Mokshith Naik</strong>, a Computer Science student and software
            developer based in India. This project represents an ongoing effort to build genuinely
            useful, high-performance web software following modern engineering standards.
          </p>
          <p className="mt-3">
            If you have feedback, feature requests, or mathematical suggestions, we welcome your
            input via our{" "}
            <Link href="/contact" className="text-blue-400 hover:underline">
              Contact Page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
