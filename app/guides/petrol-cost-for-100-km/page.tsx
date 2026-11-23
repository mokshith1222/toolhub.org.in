import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Petrol Will a 100 km Trip Cost? Formula, Mileage & Examples",
  description:
    "Learn how to calculate petrol cost and litres needed for a 100 km journey. Includes step-by-step math formulas, vehicle mileage comparison, and practical Indian driving examples.",
  alternates: { canonical: "https://toolhub.org.in/guides/petrol-cost-for-100-km" },
  openGraph: {
    type: "article",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in/guides/petrol-cost-for-100-km",
    title: "How Much Petrol Will a 100 km Trip Cost? Formula & Real Examples | ToolHub",
    description:
      "Find out exactly how much fuel and money you need for a 100 km car or motorcycle trip in India. Step-by-step formulas, mileage charts, and interactive calculator.",
  },
  twitter: {
    card: "summary",
    title: "How Much Petrol Will a 100 km Trip Cost? Formula & Examples | ToolHub",
    description:
      "Calculate petrol cost and fuel required for a 100 km trip in India. Step-by-step math, mileage benchmarks, and cost per km breakdown.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Petrol Will a 100 km Trip Cost? Formula and Examples",
  description:
    "A practical, mathematical guide explaining how to calculate petrol volume, total fuel expenditure, and cost per kilometre for a 100 km trip in India.",
  url: "https://toolhub.org.in/guides/petrol-cost-for-100-km",
  inLanguage: "en-IN",
  author: {
    "@type": "Organization",
    name: "ToolHub Editorial Team",
    url: "https://toolhub.org.in/about",
  },
  publisher: {
    "@type": "Organization",
    name: "ToolHub",
    url: "https://toolhub.org.in",
  },
  datePublished: "2026-11-23T00:00:00.000Z",
  dateModified: "2026-11-23T00:00:00.000Z",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many litres of petrol do I need for 100 km?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The litres of petrol required for 100 km equals 100 divided by your vehicle's mileage (km/L). For example, a car delivering 15 km/L requires 100 ÷ 15 = 6.67 litres. A commuter motorcycle achieving 50 km/L requires 100 ÷ 50 = 2.0 litres.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula to calculate car fuel expenses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The universal formula is: Total Trip Cost = (Distance in km ÷ Mileage in km/L) × Fuel Price per Litre. To find your running cost per kilometre, use: Running Cost/km = Fuel Price per Litre ÷ Mileage in km/L.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my actual petrol cost differ from the theoretical calculation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real-world driving conditions affect fuel consumption. Stop-and-go urban traffic, prolonged idling at traffic signals, aggressive acceleration, under-inflated tires, heavy vehicle payloads, and continuous air-conditioning all lower mileage compared to smooth highway cruising.",
      },
    },
    {
      "@type": "Question",
      name: "How can I calculate mileage for my car or bike in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To find your actual car or bike mileage, use the tank-to-tank method: fill your tank completely and reset your trip meter to zero. Drive normally for 100 to 200 km, then refill your tank to full. Divide the trip kilometres by the litres refuelled (Distance ÷ Litres = km/L). Once you know your vehicle's real-world mileage, plug it into our Fuel Cost & Mileage Calculator to project exact journey expenses and running cost per kilometre.",
      },
    },
    {
      "@type": "Question",
      name: "How can I estimate fuel costs for distances other than 100 km?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use ToolHub's free Fuel Cost & Mileage Calculator to input any exact distance (e.g. 250 km, 600 km), custom fuel price, and vehicle mileage. It instantly computes total fuel, total cost in ₹, cost per kilometre, and passenger splits.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://toolhub.org.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://toolhub.org.in/tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How Much Petrol for 100 km",
      item: "https://toolhub.org.in/guides/petrol-cost-for-100-km",
    },
  ],
};

export default function PetrolCostFor100KmGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/tools" className="hover:text-blue-400 transition-colors">
                Tools
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-200 font-medium">Guides</li>
            <li>/</li>
            <li className="text-gray-400 truncate max-w-xs sm:max-w-none">Petrol Cost for 100 km</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="inline-block text-xs uppercase tracking-wider font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full mb-3">
            Practical Travel Economics
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            How Much Petrol Will a 100 km Trip Cost? Formula, Mileage & Examples
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Planning a weekend road trip, city commute, or intercity drive across India? 
            Here is a clear, step-by-step breakdown of how to calculate the petrol quantity and rupee expenditure 
            for exactly 100 kilometres based on your vehicle&apos;s real-world fuel economy.
          </p>
        </header>

        {/* Quick Answer Callout */}
        <div className="bg-blue-950/40 border border-blue-800/60 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span>⚡</span> Quick Answer (Illustrative Examples at ₹102 / Litre)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="bg-gray-900/80 p-3.5 rounded-xl border border-gray-800">
              <span className="block text-xs text-gray-400">Motorcycle (Assumed 50 km/L)</span>
              <span className="text-base font-bold text-white font-mono">2.00 L • ₹204</span>
              <span className="block text-xs text-green-400 mt-1">₹2.04 / km</span>
            </div>
            <div className="bg-gray-900/80 p-3.5 rounded-xl border border-gray-800">
              <span className="block text-xs text-gray-400">Hatchback / Sedan (Assumed 15 km/L)</span>
              <span className="text-base font-bold text-white font-mono">6.67 L • ₹680</span>
              <span className="block text-xs text-green-400 mt-1">₹6.80 / km</span>
            </div>
            <div className="bg-gray-900/80 p-3.5 rounded-xl border border-gray-800">
              <span className="block text-xs text-gray-400">SUV / City Traffic (Assumed 11 km/L)</span>
              <span className="text-base font-bold text-white font-mono">9.09 L • ₹927</span>
              <span className="block text-xs text-green-400 mt-1">₹9.27 / km</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            <em>Note: The mileage numbers above and fuel price (₹102/L) are illustrative assumptions. Actual fuel consumption varies significantly based on driving conditions, vehicle health, and local fuel pump rates.</em>
          </p>
        </div>

        {/* Interactive Tool Banner */}
        <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-800/50 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold text-base mb-1">
              Want instant calculations for any distance or fuel type?
            </h3>
            <p className="text-xs text-gray-300">
              Use our interactive Fuel Cost Calculator for Petrol, Diesel, CNG, and EVs with passenger bill splitting.
            </p>
          </div>
          <Link
            href="/tools/fuel-cost-calculator"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            Open Fuel Calculator →
          </Link>
        </div>

        {/* Step-by-Step Calculation Guide */}
        <section className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed mb-10">
          <h2 className="text-2xl font-bold text-white">
            The Two-Step Calculation Formula
          </h2>
          <p>
            You do not need complex formulas or specialized software to forecast fuel expenditure. 
            The math breaks down into two straightforward arithmetic steps:
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2 text-blue-400">
              Step 1: Calculate Litres of Petrol Required
            </h3>
            <p className="text-sm mb-3 text-gray-300">
              Divide total travel distance by your vehicle&apos;s true average mileage (kilometres per litre):
            </p>
            <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm text-yellow-300 border border-gray-800">
              Litres Needed = Distance (km) ÷ Mileage (km/L)
            </div>
            <p className="text-xs text-gray-400 mt-2">
              For a 100 km drive at 16 km/L: <code className="text-white">100 ÷ 16 = 6.25 Litres</code>.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2 text-green-400">
              Step 2: Calculate the Total Trip Cost in ₹
            </h3>
            <p className="text-sm mb-3 text-gray-300">
              Multiply the litres from Step 1 by the current price of fuel per litre:
            </p>
            <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm text-yellow-300 border border-gray-800">
              Total Cost (₹) = Litres Needed × Petrol Price (₹/L)
            </div>
            <p className="text-xs text-gray-400 mt-2">
              At an illustrative price of ₹102 per litre: <code className="text-white">6.25 L × ₹102 = ₹637.50</code>.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2 text-purple-400">
              Bonus Metric: Running Cost Per Kilometre
            </h3>
            <p className="text-sm mb-3 text-gray-300">
              To understand your vehicle&apos;s running rate on a per-km basis:
            </p>
            <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm text-yellow-300 border border-gray-800">
              Running Cost (₹/km) = Petrol Price (₹/L) ÷ Mileage (km/L)
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Example: <code className="text-white">₹102 ÷ 16 km/L = ₹6.38 / km</code>.
            </p>
          </div>
        </section>

        {/* Benchmark Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Illustrative 100 km Petrol Consumption Across Common Vehicle Types
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            The table below demonstrates illustrative calculations for a 100 km trip across representative vehicle categories in India, assuming an illustrative petrol rate of <strong>₹102 per litre</strong>. These figures are illustrative baseline models to help explain the math; they are not universal manufacturer guarantees:
          </p>

          <div className="overflow-x-auto border border-gray-800 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm text-gray-300">
              <thead className="bg-gray-900 text-gray-400 uppercase text-xs border-b border-gray-800 font-semibold">
                <tr>
                  <th className="p-3.5">Vehicle Category</th>
                  <th className="p-3.5">Assumed Mileage</th>
                  <th className="p-3.5">Petrol Needed</th>
                  <th className="p-3.5">Cost for 100 km</th>
                  <th className="p-3.5">Cost per km</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-950/60 font-mono">
                <tr>
                  <td className="p-3.5 font-sans font-medium text-white">Commuter Motorcycle (100–125cc)</td>
                  <td className="p-3.5">55 km/L (approx.)</td>
                  <td className="p-3.5 text-blue-400">1.82 L</td>
                  <td className="p-3.5 text-white font-bold">₹185.64</td>
                  <td className="p-3.5 text-green-400">₹1.85 / km</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-sans font-medium text-white">Automatic Scooter (110–125cc)</td>
                  <td className="p-3.5">42 km/L (approx.)</td>
                  <td className="p-3.5 text-blue-400">2.38 L</td>
                  <td className="p-3.5 text-white font-bold">₹242.76</td>
                  <td className="p-3.5 text-green-400">₹2.43 / km</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-sans font-medium text-white">Compact Hatchback (Petrol Manual)</td>
                  <td className="p-3.5">18 km/L (approx.)</td>
                  <td className="p-3.5 text-blue-400">5.56 L</td>
                  <td className="p-3.5 text-white font-bold">₹567.12</td>
                  <td className="p-3.5 text-green-400">₹5.67 / km</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-sans font-medium text-white">Midsize Sedan / Compact SUV</td>
                  <td className="p-3.5">14 km/L (approx.)</td>
                  <td className="p-3.5 text-blue-400">7.14 L</td>
                  <td className="p-3.5 text-white font-bold">₹728.28</td>
                  <td className="p-3.5 text-green-400">₹7.28 / km</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-sans font-medium text-white">Full-size SUV / Heavy City Traffic</td>
                  <td className="p-3.5">10 km/L (approx.)</td>
                  <td className="p-3.5 text-blue-400">10.00 L</td>
                  <td className="p-3.5 text-white font-bold">₹1,020.00</td>
                  <td className="p-3.5 text-green-400">₹10.20 / km</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Fuel Consumption Varies */}
        <section className="mb-10 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Does 100 km Fuel Cost Fluctuate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-300">
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">1. City Traffic vs. Expressway Cruising</h3>
              <p className="text-gray-400 leading-relaxed">
                Driving 100 km inside congested city traffic (e.g. Mumbai, Delhi, Bengaluru) involves frequent idling and first/second gear starts, dropping vehicle mileage by 20% to 35% compared to steady 80 km/h highway driving.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">2. State Fuel Tax Variations</h3>
              <p className="text-gray-400 leading-relaxed">
                Fuel prices in India include central excise duty, state VAT, and dealer commissions. Petrol in states with lower VAT can cost significantly less per litre than in states with higher local levies.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">3. Air Conditioner Utilization</h3>
              <p className="text-gray-400 leading-relaxed">
                Operating the vehicle compressor continuously during peak Indian summer months creates engine load, increasing fuel consumption by approximately 5% to 12%.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">4. Vehicle Payload & Tire Pressure</h3>
              <p className="text-gray-400 leading-relaxed">
                Driving 100 km with four adult passengers and luggage increases rolling resistance. Regularly inspecting cold tire pressure helps maintain maximum kilometres per litre.
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-10 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                How many litres of petrol do I need for 100 km?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The litres of petrol required for 100 km equals 100 divided by your vehicle&apos;s mileage (km/L). For example, a car delivering 15 km/L requires 100 ÷ 15 = 6.67 litres. A commuter motorcycle achieving 50 km/L requires 100 ÷ 50 = 2.0 litres.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                What is the formula to calculate car fuel expenses?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The universal formula is: Total Trip Cost = (Distance in km ÷ Mileage in km/L) × Fuel Price per Litre. To find your running cost per kilometre, use: Running Cost/km = Fuel Price per Litre ÷ Mileage in km/L.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                Why does my actual petrol cost differ from the theoretical calculation?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Real-world driving conditions affect fuel consumption. Stop-and-go urban traffic, prolonged idling at traffic signals, aggressive acceleration, under-inflated tires, heavy vehicle payloads, and continuous air-conditioning all lower mileage compared to smooth highway cruising.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                How can I calculate mileage for my car or bike in India?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                To find your actual car or bike mileage, use the tank-to-tank method: fill your tank completely and reset your trip meter to zero. Drive normally for 100 to 200 km, then refill your tank to full. Divide the trip kilometres by the litres refuelled (Distance ÷ Litres = km/L). Once you know your vehicle&apos;s real-world mileage, plug it into our <Link href="/tools/fuel-cost-calculator" className="text-blue-400 hover:underline">Fuel Cost &amp; Mileage Calculator</Link> to project exact journey expenses and running cost per kilometre.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                How can I estimate fuel costs for distances other than 100 km?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                You can use ToolHub&apos;s free <Link href="/tools/fuel-cost-calculator" className="text-blue-400 hover:underline">Fuel Cost & Mileage Calculator</Link> to input any exact distance (e.g. 250 km, 600 km), custom fuel price, and vehicle mileage. It instantly computes total fuel, total cost in ₹, cost per kilometre, and passenger splits.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/tools/fuel-cost-calculator"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-medium"
          >
            ← Calculate Fuel for Custom Distance in the Fuel Cost Calculator
          </Link>
          <Link
            href="/tools"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Explore all ToolHub Tools →
          </Link>
        </div>
      </article>
    </>
  );
}
