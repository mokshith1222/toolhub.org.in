import type { Metadata } from "next";
import Link from "next/link";
import SpeedDistanceTimeCalculator from "@/components/SpeedDistanceTimeCalculator";

export const metadata: Metadata = {
  title: "Speed Distance Time Calculator – Online Travel Math Tool",
  description:
    "Calculate speed, travel distance, or trip duration with instant unit conversions (km, miles, hours, minutes). Step-by-step formula breakdown included.",
  alternates: { canonical: "https://toolhub.org.in/tools/speed-distance-time" },
  openGraph: {
    url: "https://toolhub.org.in/tools/speed-distance-time",
    title: "Speed Distance Time Calculator | ToolHub",
    description:
      "Calculate your average speed, total distance, or journey travel time instantly in your browser.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Speed Distance Time Calculator",
  url: "https://toolhub.org.in/tools/speed-distance-time",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Free online calculator to compute speed, distance, or travel time with automatic unit conversions.",
};

export default function SpeedDistanceTimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/tools" className="hover:text-white transition-colors">
                Tools
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-200" aria-current="page">
              Speed Distance Time Calculator
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Speed, Distance & Time Calculator
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Solve for speed, total distance, or journey travel duration. Enter any two variables to
            automatically compute the third, complete with step-by-step formulas.
          </p>
        </div>

        {/* Calculator Component */}
        <div className="mb-14">
          <SpeedDistanceTimeCalculator />
        </div>

        {/* Educational Content */}
        <div className="space-y-10 text-gray-300 leading-relaxed border-t border-gray-800 pt-10">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Understanding the Speed Triangle
            </h2>
            <p className="mb-4">
              The relationship between speed, distance, and time forms the foundational equation of kinematics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="text-sm font-semibold text-white mb-1">To find Speed:</div>
                <div className="font-mono text-sm text-blue-400 mb-2 font-bold">s = d ÷ t</div>
                <p className="text-xs text-gray-400">
                  Divide total distance traveled by total duration taken. Example: 150 km in 3 hours = 50 km/h.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="text-sm font-semibold text-white mb-1">To find Distance:</div>
                <div className="font-mono text-sm text-blue-400 mb-2 font-bold">d = s × t</div>
                <p className="text-xs text-gray-400">
                  Multiply average velocity by total journey duration. Example: 80 km/h for 2.5 hours = 200 km.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="text-sm font-semibold text-white mb-1">To find Time:</div>
                <div className="font-mono text-sm text-blue-400 mb-2 font-bold">t = d ÷ s</div>
                <p className="text-xs text-gray-400">
                  Divide total route distance by average travel speed. Example: 300 km at 60 km/h = 5 hours.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Practical Real-World Scenarios
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
              <li>
                <strong className="text-gray-200">Road Trip Planning:</strong> Estimate your arrival time
                before leaving by dividing the highway distance by your planned average speed.
              </li>
              <li>
                <strong className="text-gray-200">Running & Cycling Training:</strong> Determine your average
                pace in km/h or mph over a measured route to monitor fitness progress.
              </li>
              <li>
                <strong className="text-gray-200">Commute Calculations:</strong> Calculate how much time you save
                by adjusting travel speed during daily office commutes.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
