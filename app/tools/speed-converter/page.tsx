import type { Metadata } from "next";
import Link from "next/link";
import SpeedConverter from "@/components/SpeedConverter";

export const metadata: Metadata = {
  title: "Speed Unit Converter – km/h, mph, m/s, Knots",
  description:
    "Convert between kilometers per hour (km/h), miles per hour (mph), meters per second (m/s), and knots. Free instant online tool with conversion formulas.",
  alternates: { canonical: "https://toolhub.org.in/tools/speed-converter" },
  openGraph: {
    url: "https://toolhub.org.in/tools/speed-converter",
    title: "Speed Unit Converter – km/h, mph, m/s, Knots | ToolHub",
    description:
      "Convert speed values between km/h, mph, m/s, knots, and ft/s instantly in your browser.",
  },
};

const jsonLd = {
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
    "Free online speed converter to convert between km/h, mph, m/s, knots, ft/s, and Mach.",
};

export default function SpeedConverterPage() {
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
            Convert speed measurements across kilometers per hour (km/h), miles per hour (mph),
            meters per second (m/s), knots, and feet per second. All calculations run client-side.
          </p>
        </div>

        {/* Converter Tool */}
        <div className="mb-14">
          <SpeedConverter />
        </div>

        {/* Informational & Educational Content for Users & AdSense */}
        <div className="space-y-10 text-gray-300 leading-relaxed border-t border-gray-800 pt-10">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Common Speed Conversion Formulas
            </h2>
            <p className="mb-4">
              Speed measures the distance traveled per unit of time. Depending on your region or application,
              different standards are used:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="font-semibold text-white mb-1">km/h to mph</div>
                <div className="font-mono text-xs text-blue-400 mb-2">mph = km/h × 0.621371</div>
                <p className="text-xs text-gray-400">
                  Used when converting metric road speeds (common in India, Europe) to Imperial road speeds (USA, UK).
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="font-semibold text-white mb-1">mph to km/h</div>
                <div className="font-mono text-xs text-blue-400 mb-2">km/h = mph × 1.609344</div>
                <p className="text-xs text-gray-400">
                  Essential for international travelers renting vehicles or reading foreign vehicle dashboards.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="font-semibold text-white mb-1">km/h to m/s</div>
                <div className="font-mono text-xs text-blue-400 mb-2">m/s = km/h ÷ 3.6</div>
                <p className="text-xs text-gray-400">
                  Standard International (SI) unit widely used in physics, engineering, and scientific calculations.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="font-semibold text-white mb-1">km/h to Knots</div>
                <div className="font-mono text-xs text-blue-400 mb-2">knots = km/h ÷ 1.852</div>
                <p className="text-xs text-gray-400">
                  One knot represents one nautical mile per hour, standard in maritime navigation and aviation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Everyday Speed Reference Points
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-800 text-sm">
                <thead className="bg-gray-900 text-gray-200">
                  <tr>
                    <th className="p-3 border-b border-gray-800">Activity / Scenario</th>
                    <th className="p-3 border-b border-gray-800">km/h</th>
                    <th className="p-3 border-b border-gray-800">mph</th>
                    <th className="p-3 border-b border-gray-800">m/s</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="p-3 text-white">Average Human Walking</td>
                    <td className="p-3 font-mono">5 km/h</td>
                    <td className="p-3 font-mono">3.1 mph</td>
                    <td className="p-3 font-mono">1.39 m/s</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Moderate Bicycle Commute</td>
                    <td className="p-3 font-mono">20 km/h</td>
                    <td className="p-3 font-mono">12.4 mph</td>
                    <td className="p-3 font-mono">5.56 m/s</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Urban City Driving Limit</td>
                    <td className="p-3 font-mono">50 km/h</td>
                    <td className="p-3 font-mono">31.1 mph</td>
                    <td className="p-3 font-mono">13.89 m/s</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Expressway / Highway Speed</td>
                    <td className="p-3 font-mono">100 km/h</td>
                    <td className="p-3 font-mono">62.1 mph</td>
                    <td className="p-3 font-mono">27.78 m/s</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">High-Speed Passenger Train (Vande Bharat)</td>
                    <td className="p-3 font-mono">160 km/h</td>
                    <td className="p-3 font-mono">99.4 mph</td>
                    <td className="p-3 font-mono">44.44 m/s</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Commercial Airliner Cruising Speed</td>
                    <td className="p-3 font-mono">900 km/h</td>
                    <td className="p-3 font-mono">559.2 mph</td>
                    <td className="p-3 font-mono">250.00 m/s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Need Live GPS Speed Tracking?
            </h2>
            <p className="mb-4">
              If you want to measure your actual current speed in real time using satellite signals while
              traveling in a car, train, or bike, try our dedicated utility:
            </p>
            <a
              href="https://speedometer.toolhub.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-5 py-3 rounded-xl border border-gray-700 transition-colors text-sm"
            >
              🚀 Open Online GPS Speedometer →
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
