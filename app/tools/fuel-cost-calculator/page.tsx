import type { Metadata } from "next";
import Link from "next/link";
import FuelCostCalculator from "@/components/FuelCostCalculator";

export const metadata: Metadata = {
  title: "Fuel Cost Calculator – Petrol, Diesel, CNG & EV Trip Expense",
  description:
    "Calculate journey fuel expenses, total fuel needed, and cost per kilometre in ₹ for Petrol, Diesel, CNG, and EVs. Split fuel costs with travel companions easily.",
  alternates: { canonical: "https://toolhub.org.in/tools/fuel-cost-calculator" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in/tools/fuel-cost-calculator",
    title: "Fuel Cost Calculator – Trip Expense & Mileage | ToolHub",
    description:
      "Estimate fuel costs for your car or bike trip in India. Calculate total petrol/diesel litres, cost per km, and split costs among friends instantly.",
  },
  twitter: {
    card: "summary",
    title: "Fuel Cost Calculator | ToolHub",
    description:
      "Estimate trip fuel expenses, running cost per km, and split costs for Petrol, Diesel, CNG, and EVs in India.",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fuel Cost Calculator",
  url: "https://toolhub.org.in/tools/fuel-cost-calculator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Free browser-based fuel expense calculator to estimate journey costs, fuel quantities, and cost per km across Petrol, Diesel, CNG, and Electric Vehicles.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you calculate trip fuel cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trip fuel cost is calculated in two steps: first, divide total journey distance (in kilometres) by your vehicle's fuel efficiency or mileage (in km/L or km/kg) to get the total fuel required. Next, multiply the total fuel by the current fuel price per litre or kg to find the total expense.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate fuel cost per kilometre (running cost)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To determine your fuel cost per km, divide the current fuel price per litre by your vehicle's average mileage (km per litre). For example, if petrol costs ₹102/litre and your car delivers 17 km/L, your fuel cost is ₹102 ÷ 17 = ₹6.00 per kilometre.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my vehicle's real-world mileage differ from manufacturer claims?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturer figures (such as ARAI ratings in India) are tested under controlled laboratory conditions. Real-world mileage varies based on stop-and-go city traffic, heavy air conditioning usage, driving habits, tire inflation pressure, vehicle load, and steep terrain.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this calculator for electric vehicles (EVs)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Switch the fuel type to Electric (EV). Input your trip distance, your EV's efficiency in kilometres per kWh (typically 6 to 8 km/kWh for passenger cars), and your domestic or commercial charging tariff (₹ per kWh).",
      },
    },
    {
      "@type": "Question",
      name: "How do I split petrol expenses with friends on a road trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your total trip distance, mileage, and fuel price, then set the 'Split Between Passengers' field to the number of people sharing the ride. The calculator immediately divides the total fuel bill equally and displays the per-person amount.",
      },
    },
  ],
};

export default function FuelCostCalculatorPage() {
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-400">
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
            <li className="text-gray-200 font-medium">Fuel Cost Calculator</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Fuel Cost & Mileage Calculator
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Estimate trip fuel expenses, total fuel needed, and cost per kilometre across India.
            Supports <strong>Petrol, Diesel, CNG, and Electric Vehicles (EVs)</strong> with passenger cost-splitting.
          </p>
        </div>

        {/* Interactive Calculator Component */}
        <FuelCostCalculator />

        {/* Content Section: Mathematical Formulas & How to Calculate */}
        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Fuel Expenses Are Calculated
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Calculating your road trip or daily commute fuel budget involves three primary equations.
            Whether you ride a two-wheeler, drive a family hatchback, or commute in a commercial vehicle,
            the relationship between distance, fuel economy, and fuel price remains standard:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-blue-400 mb-1">1. Fuel Needed</h3>
              <p className="font-mono text-sm text-white mb-2">Distance ÷ Mileage</p>
              <p className="text-xs text-gray-400">
                Divides total trip kilometres by vehicle economy (km/L, km/kg, or km/kWh).
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-green-400 mb-1">2. Total Fuel Cost</h3>
              <p className="font-mono text-sm text-white mb-2">Fuel Needed × Fuel Price</p>
              <p className="text-xs text-gray-400">
                Multiplies fuel volume by current fuel price per litre, kg, or energy unit.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-yellow-400 mb-1">3. Cost Per Kilometre</h3>
              <p className="font-mono text-sm text-white mb-2">Fuel Price ÷ Mileage</p>
              <p className="text-xs text-gray-400">
                Gives the running fuel expenditure for every single kilometre driven.
              </p>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4 text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Passenger Cost Split:</strong> If multiple passengers travel together,
            the total fuel bill is divided by the passenger count: <code className="text-blue-400">Total Cost ÷ People</code>.
            This gives a transparent split for shared road trips and carpooling.
          </div>
        </div>

        {/* Worked Examples Section */}
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Real-World Calculation Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">City Commuter (Car)</span>
              <p className="text-sm text-white font-medium mt-1 mb-2">350 km Weekend Trip</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Fuel: Petrol at ₹102/L</li>
                <li>• Mileage: 14 km/L</li>
                <li>• Fuel Required: 25.00 L</li>
                <li>• Total Cost: <strong className="text-white">₹2,550.00</strong></li>
                <li>• Cost/km: <strong className="text-green-400">₹7.29/km</strong></li>
              </ul>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Highway Highway (Diesel)</span>
              <p className="text-sm text-white font-medium mt-1 mb-2">600 km Highway Journey</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Fuel: Diesel at ₹88/L</li>
                <li>• Mileage: 20 km/L</li>
                <li>• Fuel Required: 30.00 L</li>
                <li>• Total Cost: <strong className="text-white">₹2,640.00</strong></li>
                <li>• Cost/km: <strong className="text-green-400">₹4.40/km</strong></li>
              </ul>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Daily Commuter (Bike)</span>
              <p className="text-sm text-white font-medium mt-1 mb-2">120 km Commute</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Fuel: Petrol at ₹102/L</li>
                <li>• Mileage: 50 km/L</li>
                <li>• Fuel Required: 2.40 L</li>
                <li>• Total Cost: <strong className="text-white">₹244.80</strong></li>
                <li>• Cost/km: <strong className="text-green-400">₹2.04/km</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Mileage & Fuel Economy Tips */}
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Tips to Improve Vehicle Mileage in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">Maintain Correct Tire Pressure</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Under-inflated tires increase rolling resistance significantly, causing engine drag and reducing fuel economy by up to 3% to 5%. Check cold tire pressure every two weeks.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">Smooth Throttle & Cruising Speed</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Aggressive acceleration and abrupt braking waste fuel. Maintaining a steady cruising speed between 70–90 km/h in top gear optimizes engine efficiency on highways.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">Moderate AC & Avoid Unneeded Idling</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Running air conditioning on max in standstill traffic noticeably drops fuel mileage. Switch off the engine at long traffic signals (greater than 30 seconds) to conserve fuel.
              </p>
            </div>
            <div className="bg-gray-950 border border-gray-800/80 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-1">Timely Engine Servicing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Clean air filters, fresh engine oil, and properly calibrated spark plugs or fuel injectors ensure optimal combustion and keep running costs low over time.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions (Visible Content Matching Schema) */}
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                How do you calculate trip fuel cost?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Trip fuel cost is calculated in two steps: first, divide total journey distance (in kilometres) by your vehicle&apos;s fuel efficiency or mileage (in km/L or km/kg) to get the total fuel required. Next, multiply the total fuel by the current fuel price per litre or kg to find the total expense.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                How do I calculate fuel cost per kilometre (running cost)?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                To determine your fuel cost per km, divide the current fuel price per litre by your vehicle&apos;s average mileage (km per litre). For example, if petrol costs ₹102/litre and your car delivers 17 km/L, your fuel cost is ₹102 ÷ 17 = ₹6.00 per kilometre.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                Why does my vehicle&apos;s real-world mileage differ from manufacturer claims?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Manufacturer figures (such as ARAI ratings in India) are tested under controlled laboratory conditions. Real-world mileage varies based on stop-and-go city traffic, heavy air conditioning usage, driving habits, tire inflation pressure, vehicle load, and steep terrain.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                Can I use this calculator for electric vehicles (EVs)?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Yes. Switch the fuel type to Electric (EV). Input your trip distance, your EV&apos;s efficiency in kilometres per kWh (typically 6 to 8 km/kWh for passenger cars), and your domestic or commercial charging tariff (₹ per kWh).
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                How do I split petrol expenses with friends on a road trip?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Enter your total trip distance, mileage, and fuel price, then set the &quot;Split Between Passengers&quot; field to the number of people sharing the ride. The calculator immediately divides the total fuel bill equally and displays the per-person amount.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools Navigation */}
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Travel Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/tools/speed-distance-time"
              className="p-4 rounded-xl bg-gray-950 border border-gray-800 hover:border-blue-500/50 transition-all group"
            >
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                ⏱️ Speed, Distance & Time Calculator
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Calculate journey duration, travel speed, or distance before estimating fuel budgets.
              </p>
            </Link>
            <Link
              href="/tools/speed-converter"
              className="p-4 rounded-xl bg-gray-950 border border-gray-800 hover:border-blue-500/50 transition-all group"
            >
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                🔁 Speed Unit Converter
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Convert speed values across km/h, mph, knots, and m/s with mathematical precision.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
