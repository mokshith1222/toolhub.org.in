import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ToolHub – Our Purpose and Mission",
  description:
    "Learn about ToolHub, an independent collection of free, privacy-first online tools and calculators built by Mokshith Naik for everyday use.",
  alternates: { canonical: "https://toolhub.org.in/about" },
  openGraph: {
    url: "https://toolhub.org.in/about",
    title: "About ToolHub – Mission and Background",
    description:
      "Learn why ToolHub was created: fast, browser-based utilities with zero registration, zero app downloads, and complete client-side data privacy.",
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
            simple math tools—have become cluttered with intrusive popups, forced mobile app downloads,
            unnecessary user signups, or heavy tracking scripts that slow down devices.
          </p>
          <p>
            ToolHub was created to solve this frustration. Our goal is to provide clean, minimalist,
            and fast-loading utilities that respect user time and device resources.
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
              <strong className="text-gray-200">Browser Satellite Metrics:</strong> Our companion utility, the{" "}
              <a
                href="https://speedometer.toolhub.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Online GPS Speedometer
              </a>
              , which utilizes standard device geolocation sensors without transmitting location data.
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
                Whenever technically feasible, all calculations run in your browser using local JavaScript.
                Your numbers, conversions, and travel inputs stay on your device.
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
                We clearly disclose how tools work, provide the mathematical formulas used, and clearly state
                data handling practices.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-1.5">Free Accessibility</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                All tools are provided free of charge, supported in the future by standard, non-intrusive
                advertisements in accordance with publisher policies.
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
