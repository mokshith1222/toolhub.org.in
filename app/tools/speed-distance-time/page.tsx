import type { Metadata } from "next";
import Link from "next/link";
import SpeedDistanceTimeCalculator from "@/components/SpeedDistanceTimeCalculator";

export const metadata: Metadata = {
  title: "Speed Distance Time Calculator – Online Travel Math Tool",
  description:
    "Calculate speed, travel distance, or trip duration with instant unit conversions (km, miles, hours, minutes). Step-by-step formula breakdown, examples, and FAQs.",
  alternates: { canonical: "https://toolhub.org.in/tools/speed-distance-time" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in/tools/speed-distance-time",
    title: "Speed Distance Time Calculator | ToolHub",
    description:
      "Calculate your average speed, total distance, or journey travel time instantly in your browser with step-by-step math explanations.",
  },
  twitter: {
    card: "summary",
    title: "Speed Distance Time Calculator | ToolHub",
    description:
      "Calculate your average speed, total distance, or journey travel time instantly in your browser with step-by-step math explanations.",
  },
};

const webAppSchema = {
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
    "Free online calculator to compute speed, distance, or travel time with automatic unit conversions and step-by-step formulas.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is my real driving time usually longer than the calculated time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The theoretical calculation assumes a constant, uninterrupted speed throughout the trip. In real road conditions, traffic signals, congestion, toll plazas, rest stops, and speed limits reduce your overall average speed below your top cruising speed. While some drivers choose to add a buffer to their estimates for unexpected delays, no fixed percentage applies universally to all journeys.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert minutes into decimal hours for travel calculations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the number of minutes by 60. For example: 15 minutes is 15 ÷ 60 = 0.25 hours; 30 minutes is 0.5 hours; and 45 minutes is 0.75 hours. Our calculator automatically handles this conversion for you in real time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between average speed and instantaneous speed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Average speed equals total distance divided by total elapsed time over an entire journey. Instantaneous speed is your rate of travel at a single split-second moment, which is what your car dashboard speedometer displays. Speed is a scalar quantity, distinct from velocity which includes direction.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this calculator for running or cycling pace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This tool calculates your average speed (in km/h and mph) based on your travel distance and elapsed time. However, it does not calculate running pace expressed in minutes per kilometer (min/km) or minutes per mile (min/mi).",
      },
    },
  ],
};

export default function SpeedDistanceTimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            Solve for speed, route distance, or trip duration. Input any two parameters to compute
            the third automatically, with unit conversions and formula explanations.
          </p>
        </div>

        {/* Calculator Component */}
        <div className="mb-14">
          <SpeedDistanceTimeCalculator />
        </div>

        {/* Educational Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed border-t border-gray-800 pt-10">
          {/* Explanation of the 3 Formulas */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              The Three Kinematic Equations Explained
            </h2>
            <p className="mb-4 text-sm text-gray-300">
              The relationship between speed ($s$), distance ($d$), and time ($t$) is represented by the classical
              kinematic speed triangle. By knowing any two quantities, you can determine the unknown value algebraically:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-xs uppercase font-semibold text-blue-400 mb-1">
                  1. Calculating Speed
                </div>
                <div className="font-mono text-xl font-bold text-white mb-2">
                  s = d ÷ t
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Speed is the rate at which distance changes over time. Divide total distance by the time taken to traverse it.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-xs uppercase font-semibold text-blue-400 mb-1">
                  2. Calculating Distance
                </div>
                <div className="font-mono text-xl font-bold text-white mb-2">
                  d = s × t
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Distance is the total path length traveled. Multiply your average constant speed by the total duration of movement.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="text-xs uppercase font-semibold text-blue-400 mb-1">
                  3. Calculating Time
                </div>
                <div className="font-mono text-xl font-bold text-white mb-2">
                  t = d ÷ s
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Time represents the elapsed duration of travel. Divide the journey distance by the average speed maintained.
                </p>
              </div>
            </div>
          </section>

          {/* Worked Step-by-Step Examples */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Worked Step-by-Step Mathematical Examples
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-1 text-base">
                  Example 1: Finding Average Road Trip Speed
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  <strong>Problem:</strong> A family drives 240 kilometers from Bangalore to Mysore, taking exactly 3 hours and 30 minutes. What was their average speed?
                </p>
                <div className="bg-gray-950 p-4 rounded-lg font-mono text-xs space-y-1 text-gray-300">
                  <div>Step 1: Convert time into decimal hours: 3 hours + (30 ÷ 60) = 3.50 hours</div>
                  <div>Step 2: Apply formula: Speed = Distance ÷ Time = 240 km ÷ 3.50 hours</div>
                  <div className="text-blue-400 font-bold">
                    Result: Average Speed = 68.57 km/h (approx. 42.61 mph)
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-1 text-base">
                  Example 2: Calculating Distance Covered
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  <strong>Problem:</strong> An express train cruises at a steady average speed of 110 km/h for 2 hours and 15 minutes. How far does it travel?
                </p>
                <div className="bg-gray-950 p-4 rounded-lg font-mono text-xs space-y-1 text-gray-300">
                  <div>Step 1: Convert minutes to hours: 15 ÷ 60 = 0.25 hours → Total time = 2.25 hours</div>
                  <div>Step 2: Apply formula: Distance = Speed × Time = 110 km/h × 2.25 hours</div>
                  <div className="text-blue-400 font-bold">
                    Result: Total Distance = 247.50 kilometers (approx. 153.79 miles)
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-1 text-base">
                  Example 3: Estimating Arrival Time
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  <strong>Problem:</strong> You need to travel 350 miles on a highway. If your target average speed is 70 mph, how long will the drive take?
                </p>
                <div className="bg-gray-950 p-4 rounded-lg font-mono text-xs space-y-1 text-gray-300">
                  <div>Step 1: Apply formula: Time = Distance ÷ Speed = 350 miles ÷ 70 mph = 5.00 hours</div>
                  <div>Step 2: Convert decimal hours to hours & minutes: 5 hours and 0 minutes</div>
                  <div className="text-blue-400 font-bold">
                    Result: Estimated Travel Time = 5 hours 0 minutes
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Unit Consistency Rules */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Unit Consistency & Conversion Rules
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              To obtain mathematically correct results, units of distance and time must match before division or multiplication:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-1">Metric Standard (km, km/h, hours)</h3>
                <p className="text-gray-400 leading-relaxed">
                  When distance is in kilometers (km) and time in hours (h), speed resolves to kilometers per hour (km/h).
                  If distance is in meters (m) and time in seconds (s), speed resolves to meters per second (m/s).
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="font-semibold text-white mb-1">Imperial Standard (miles, mph, hours)</h3>
                <p className="text-gray-400 leading-relaxed">
                  When distance is in statute miles (mi) and time in hours (h), speed resolves to miles per hour (mph).
                  Our calculator automatically harmonizes supported mixed units (such as distance in miles with time in hours and minutes) seamlessly behind the scenes.
                </p>
              </div>
            </div>
          </section>

          {/* Real-World Practical Scenarios */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Practical Everyday Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-400">
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">🚗 Road Trip Fuel & Stop Planning</h3>
                <p className="text-xs">
                  Calculate required travel durations between fuel stations and scheduled stops on long-distance expressway driving routes.
                </p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">⏱️ Daily Commute Optimization</h3>
                <p className="text-xs">
                  Evaluate whether taking a highway route with higher speeds outweighs a shorter surface road with lower speed limits during heavy traffic hours.
                </p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">🚴 Athletic Training Splits</h3>
                <p className="text-xs">
                  Determine your average speed over a measured 5k, 10k, or cycling route to gauge training endurance and performance milestones.
                </p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">📦 Logistics & Delivery Estimation</h3>
                <p className="text-xs">
                  Fleet managers and delivery dispatchers can estimate arrival windows for transport vehicles across specified regional mileage legs.
                </p>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  Why is my real driving time usually longer than the calculated time?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  The theoretical calculation assumes a constant, uninterrupted speed throughout the trip. In real road conditions, traffic signals, congestion, toll plazas, rest stops, and speed limits reduce your overall average speed below your top cruising speed. While some drivers choose to add a buffer to their estimates for unexpected delays, no fixed percentage applies universally to all journeys.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  How do I convert minutes into decimal hours for travel calculations?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Divide the number of minutes by 60. For example: 15 minutes is 15 ÷ 60 = 0.25 hours; 30 minutes is 0.5 hours; and 45 minutes is 0.75 hours. Our calculator automatically handles this conversion for you in real time.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  What is the difference between average speed and instantaneous speed?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Average speed equals total distance divided by total elapsed time over an entire journey. Instantaneous speed is your rate of travel at a single split-second moment, which is what your car dashboard speedometer displays. Speed is a scalar quantity, distinct from velocity which includes direction.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  Can I use this calculator for running or cycling pace?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  This tool calculates your average speed (in km/h and mph) based on your travel distance and elapsed time. However, it does not calculate running pace expressed in minutes per kilometer (min/km) or minutes per mile (min/mi).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
