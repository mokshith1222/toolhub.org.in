import type { Metadata } from "next";
import Link from "next/link";
import SpeedConverter from "@/components/SpeedConverter";

export const metadata: Metadata = {
  title: "Speed Unit Converter – km/h to mph, m/s, Knots & Mach",
  description:
    "Free speed converter: convert km/h to mph, mph to km/h, km/h to m/s, and knots in real time. Features formulas, conversion tables, worked examples, and FAQs.",
  alternates: { canonical: "https://toolhub.org.in/tools/speed-converter" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in/tools/speed-converter",
    title: "Speed Unit Converter – km/h, mph, m/s, Knots | ToolHub",
    description:
      "Convert speed values between km/h, mph, m/s, knots, and ft/s instantly in your browser. Complete conversion formulas and reference tables.",
  },
  twitter: {
    card: "summary",
    title: "Speed Unit Converter – km/h, mph, m/s, Knots | ToolHub",
    description:
      "Convert speed values between km/h, mph, m/s, knots, and ft/s instantly in your browser. Complete conversion formulas and reference tables.",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Speed Unit Converter",
  url: "https://toolhub.org.in/tools/speed-converter",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Free online speed converter to convert between km/h, mph, m/s, knots, ft/s, and Mach with instant calculations.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you convert kmph (km/h) to mph?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To convert kmph (kilometers per hour) to mph (miles per hour), divide the speed by 1.609344 (or multiply by 0.621371). For instance, 100 km/h divided by 1.609344 equals 62.14 mph.",
      },
    },
    {
      "@type": "Question",
      name: "What is 100 km/h in mph?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100 km/h is equal to exactly 62.1371 miles per hour (commonly rounded to 62.14 mph). In terms of SI velocity, 100 km/h also equals 27.78 meters per second (m/s) and 53.99 knots.",
      },
    },
    {
      "@type": "Question",
      name: "Why do some countries use mph while others use km/h?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The majority of the world uses the International System of Units (SI metric system), measuring road speed in kilometers per hour (km/h). A few nations, primarily the United States, the United Kingdom, and several Caribbean nations, continue to use the Imperial / US Customary system measuring distance in miles and speed in miles per hour (mph).",
      },
    },
    {
      "@type": "Question",
      name: "How can I quickly estimate km/h to mph in my head?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quick mental rule of thumb is multiplying the km/h value by 0.6. For example, 100 km/h × 0.6 = 60 mph (actual is 62.14 mph). Another popular shortcut uses the Fibonacci sequence (3, 5, 8, 13, 21, 34, 55, 89) as an approximation: 50 km/h is approximately 31 mph (actual is 31.07 mph), and 80 km/h is approximately 50 mph (actual is 49.71 mph).",
      },
    },
    {
      "@type": "Question",
      name: "What is a knot and where is it used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A knot (kn) equals one nautical mile per hour (exactly 1.852 km/h or approximately 1.151 mph). It is the global standard unit in aviation, marine navigation, and meteorology. While one nautical mile is defined as exactly 1,852 metres, its historical relationship to one minute of latitude is approximate because Earth's latitude geometry varies (Earth is an oblate spheroid, not a perfect sphere).",
      },
    },
    {
      "@type": "Question",
      name: "Is Mach speed a constant number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mach 1 represents the local speed of sound, which in reality varies depending on air temperature and pressure. For standard conversion purposes, this calculator uses a fixed reference speed of sound at sea level in dry air at 20°C (Mach 1 = 1,234.8 km/h, 343 m/s, or approximately 767.3 mph). The calculator does not dynamically adjust Mach conversion for changing altitude or temperature.",
      },
    },
  ],
};

export default function SpeedConverterPage() {
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
              Speed Unit Converter
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Speed Unit Converter
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Convert speed values across kilometers per hour (km/h), miles per hour (mph),
            meters per second (m/s), knots, feet per second (ft/s), and Mach.
            Instant, client-side calculations with comprehensive formulas.
          </p>
        </div>

        {/* Converter Tool */}
        <div className="mb-14">
          <SpeedConverter />
        </div>

        {/* Informational & Educational Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed border-t border-gray-800 pt-10">
          {/* Supported Units Explanation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Supported Speed Units Explained
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white text-base mb-1">
                  Kilometers per Hour (km/h)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The standard speed measurement used for road transport in India, the European Union, Canada,
                  Australia, and most nations worldwide. Defined as the distance of 1,000 meters covered in one hour (3,600 seconds).
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white text-base mb-1">
                  Miles per Hour (mph)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The primary speed metric in the United States and the United Kingdom. One international statute mile
                  equals exactly 1,609.344 meters, making 1 mph equal to 1.609344 km/h.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white text-base mb-1">
                  Meters per Second (m/s)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The fundamental base unit of velocity in the International System of Units (SI). Used extensively
                  in physics, ballistics, meteorology (wind speed), and civil engineering.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white text-base mb-1">
                  Knots (kn / kt)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Equal to one nautical mile per hour (exactly 1.852 km/h). Mandated globally for aircraft airspeed,
                  flight navigation, ocean vessels, and maritime weather advisories.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white text-base mb-1">
                  Feet per Second (ft/s)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Used in aeronautical engineering and ballistic velocities in countries utilizing
                  Imperial standards. One foot per second equals exactly 1.09728 km/h (or 0.3048 m/s).
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white text-base mb-1">
                  Mach (Ma)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A dimensionless ratio representing speed relative to the local speed of sound. This converter uses a standard fixed reference speed of sound at sea level and 20°C (Mach 1 = 1,234.8 km/h or 343 m/s). It does not dynamically adjust for altitude or temperature variations.
                </p>
              </div>
            </div>
          </section>

          {/* Mathematical Formulas & Step-by-Step Examples */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Mathematical Conversion Formulas & Step-by-Step Examples
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-semibold text-white">Converting km/h to mph</h3>
                  <span className="font-mono text-xs text-blue-400">Formula: mph = km/h ÷ 1.609344</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Worked Example:</strong> Convert 120 km/h (expressway speed) to mph.
                </p>
                <div className="bg-gray-950 p-3 rounded-lg font-mono text-xs text-gray-300">
                  mph = 120 ÷ 1.609344 = 120 × 0.62137119 = <strong>74.56 mph</strong>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-semibold text-white">Converting mph to km/h</h3>
                  <span className="font-mono text-xs text-blue-400">Formula: km/h = mph × 1.609344</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Worked Example:</strong> Convert 65 mph (US interstate speed) to km/h.
                </p>
                <div className="bg-gray-950 p-3 rounded-lg font-mono text-xs text-gray-300">
                  km/h = 65 × 1.609344 = <strong>104.61 km/h</strong>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-semibold text-white">Converting km/h to m/s</h3>
                  <span className="font-mono text-xs text-blue-400">Formula: m/s = km/h ÷ 3.6</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Worked Example:</strong> Convert a 90 km/h vehicle speed into physics SI units (m/s).
                </p>
                <div className="bg-gray-950 p-3 rounded-lg font-mono text-xs text-gray-300">
                  m/s = (90 × 1,000 m) ÷ 3,600 s = 90 ÷ 3.6 = <strong>25.00 m/s</strong>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-semibold text-white">Converting m/s to km/h</h3>
                  <span className="font-mono text-xs text-blue-400">Formula: km/h = m/s × 3.6</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Worked Example:</strong> Convert 15 m/s wind speed into road driving speed (km/h).
                </p>
                <div className="bg-gray-950 p-3 rounded-lg font-mono text-xs text-gray-300">
                  km/h = 15 × 3.6 = <strong>54.00 km/h</strong>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-semibold text-white">Converting Knots to km/h</h3>
                  <span className="font-mono text-xs text-blue-400">Formula: km/h = kn × 1.852</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Worked Example:</strong> Convert 450 knots (cruising jet speed) to km/h.
                </p>
                <div className="bg-gray-950 p-3 rounded-lg font-mono text-xs text-gray-300">
                  km/h = 450 × 1.852 = <strong>833.40 km/h</strong> (approx. 517.85 mph)
                </div>
              </div>
            </div>
          </section>

          {/* Real-World Use Cases */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Common Real-World Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">🚗 Driving & Car Rentals Abroad</h3>
                <p className="text-xs">
                  Travelers renting a car in the UK or US encounter road signs in mph, while visitors driving in India,
                  Europe, or Canada see limits in km/h. This converter prevents speeding violations when reading unfamiliar speedometer dials.
                </p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">✈️ Aviation & Sailing Planning</h3>
                <p className="text-xs">
                  Pilots and boat captains measure vessel speed in knots. Converting to km/h or mph helps passengers
                  and shore crews easily understand journey progress and arrival schedules.
                </p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">🔬 Science, Engineering & STEM</h3>
                <p className="text-xs">
                  Physics problems routinely require vehicle speeds expressed in km/h to be converted to m/s before
                  calculating kinetic energy ($E_k = \frac{1}{2}mv^2$) or stopping distance.
                </p>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-1">🏃 Athletics, Cycling & Fitness</h3>
                <p className="text-xs">
                  Runners and cyclists often switch between metric pace (min/km) and treadmill speed presets (mph or km/h)
                  to set targeted interval workout speeds.
                </p>
              </div>
            </div>
          </section>

          {/* Reference Table */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Everyday Speed Reference Points
            </h2>
            <p className="text-xs text-gray-400 mb-3 italic">
              Note: The speed figures listed below are illustrative everyday reference examples and general approximations, not fixed or universal standards.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-800 text-sm">
                <thead className="bg-gray-900 text-gray-200">
                  <tr>
                    <th className="p-3 border-b border-gray-800">Activity / Scenario</th>
                    <th className="p-3 border-b border-gray-800">km/h</th>
                    <th className="p-3 border-b border-gray-800">mph</th>
                    <th className="p-3 border-b border-gray-800">m/s</th>
                    <th className="p-3 border-b border-gray-800">Knots</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-xs md:text-sm">
                  <tr>
                    <td className="p-3 text-white">Average Human Walking Pace</td>
                    <td className="p-3 font-mono">5.0 km/h</td>
                    <td className="p-3 font-mono">3.1 mph</td>
                    <td className="p-3 font-mono">1.39 m/s</td>
                    <td className="p-3 font-mono">2.7 kn</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Moderate Bicycle Commute</td>
                    <td className="p-3 font-mono">20.0 km/h</td>
                    <td className="p-3 font-mono">12.4 mph</td>
                    <td className="p-3 font-mono">5.56 m/s</td>
                    <td className="p-3 font-mono">10.8 kn</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Urban City Driving Limit</td>
                    <td className="p-3 font-mono">50.0 km/h</td>
                    <td className="p-3 font-mono">31.1 mph</td>
                    <td className="p-3 font-mono">13.89 m/s</td>
                    <td className="p-3 font-mono">27.0 kn</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Expressway / Highway Speed</td>
                    <td className="p-3 font-mono">100.0 km/h</td>
                    <td className="p-3 font-mono">62.1 mph</td>
                    <td className="p-3 font-mono">27.78 m/s</td>
                    <td className="p-3 font-mono">54.0 kn</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">High-Speed Train (e.g. Vande Bharat Express)</td>
                    <td className="p-3 font-mono">160.0 km/h</td>
                    <td className="p-3 font-mono">99.4 mph</td>
                    <td className="p-3 font-mono">44.44 m/s</td>
                    <td className="p-3 font-mono">86.4 kn</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Commercial Airliner Cruising Speed</td>
                    <td className="p-3 font-mono">900.0 km/h</td>
                    <td className="p-3 font-mono">559.2 mph</td>
                    <td className="p-3 font-mono">250.00 m/s</td>
                    <td className="p-3 font-mono">485.9 kn</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Speed of Sound at Sea Level, 20°C (Mach 1)</td>
                    <td className="p-3 font-mono">1,234.8 km/h</td>
                    <td className="p-3 font-mono">767.3 mph</td>
                    <td className="p-3 font-mono">343.00 m/s</td>
                    <td className="p-3 font-mono">666.7 kn</td>
                  </tr>
                </tbody>
              </table>
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
                  How do you convert kmph (km/h) to mph?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  To convert kmph (kilometers per hour) to mph (miles per hour), divide the speed by 1.609344 (or multiply by 0.621371). For instance, 100 km/h divided by 1.609344 equals 62.14 mph.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  What is 100 km/h in mph?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  100 km/h is equal to exactly 62.1371 miles per hour (commonly rounded to 62.14 mph). In terms of SI velocity, 100 km/h also equals 27.78 meters per second (m/s) and 53.99 knots.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  Why do some countries use mph while others use km/h?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  The majority of the world uses the International System of Units (SI metric system), measuring road speed in kilometers per hour (km/h). A few nations, primarily the United States, the United Kingdom, and several Caribbean nations, continue to use the Imperial / US Customary system measuring distance in miles and speed in miles per hour (mph).
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  How can I quickly estimate km/h to mph in my head?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  A quick mental rule of thumb is multiplying the km/h value by 0.6. For example, 100 km/h × 0.6 = 60 mph (actual is 62.14 mph). Another popular shortcut uses the Fibonacci sequence (3, 5, 8, 13, 21, 34, 55, 89) as an approximation: 50 km/h is approximately 31 mph (actual is 31.07 mph), and 80 km/h is approximately 50 mph (actual is 49.71 mph).
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  What is a knot and where is it used?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  A knot (kn) equals one nautical mile per hour (exactly 1.852 km/h or approximately 1.151 mph). It is the global standard unit in aviation, marine navigation, and meteorology. While one nautical mile is defined as exactly 1,852 metres, its historical relationship to one minute of latitude is approximate because Earth&apos;s latitude geometry varies (Earth is an oblate spheroid, not a perfect sphere).
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-base">
                  Is Mach speed a constant number?
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Mach 1 represents the local speed of sound, which in reality varies depending on air temperature and pressure. For standard conversion purposes, this calculator uses a fixed reference speed of sound at sea level in dry air at 20°C (Mach 1 = 1,234.8 km/h, 343 m/s, or approximately 767.3 mph). The calculator does not dynamically adjust Mach conversion for changing altitude or temperature.
                </p>
              </div>
            </div>
          </section>

          {/* Contextual Links to Other Travel Calculators */}
          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Explore Related Travel & Calculation Tools</h3>
            <p className="text-xs text-gray-400 mb-4">
              Need to compute trip duration, journey distance, or fuel expenditure for your route?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/tools/speed-distance-time"
                className="bg-gray-950 border border-gray-800 hover:border-blue-500/50 p-3.5 rounded-xl transition-all group"
              >
                <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  ⏱️ Speed Distance Time
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Solve for speed, journey distance, or travel time with automatic conversions.
                </div>
              </Link>
              <Link
                href="/tools/fuel-cost-calculator"
                className="bg-gray-950 border border-gray-800 hover:border-blue-500/50 p-3.5 rounded-xl transition-all group"
              >
                <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  ⛽ Fuel Cost Calculator
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Calculate fuel expenses, mileage, and cost per km for Petrol, Diesel, CNG & EVs.
                </div>
              </Link>
              <a
                href="https://speedometer.toolhub.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-950 border border-gray-800 hover:border-blue-500/50 p-3.5 rounded-xl transition-all group"
              >
                <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  🚀 GPS Speedometer ↗
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Track live travel velocity using device GPS in your mobile browser.
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
