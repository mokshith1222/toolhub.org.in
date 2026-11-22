import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-black tracking-wide">
                TOOL
              </span>
              <span className="text-blue-400">Hub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fast, privacy-focused online calculators and unit conversion utilities.
              Zero installation, client-side execution, and completely free to use.
            </p>
          </div>

          {/* Tools Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Online Utilities
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/tools/speed-converter" className="hover:text-white transition-colors">
                  🔁 Speed Unit Converter
                </Link>
              </li>
              <li>
                <Link href="/tools/speed-distance-time" className="hover:text-white transition-colors">
                  ⏱️ Speed, Distance & Time
                </Link>
              </li>
              <li>
                <a
                  href="https://speedometer.toolhub.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  🚀 GPS Speedometer (Live)
                </a>
              </li>
              <li>
                <Link href="/tools" className="hover:text-blue-400 text-xs text-gray-500 transition-colors">
                  View All Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About ToolHub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Suggestions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <div>© {year} ToolHub (toolhub.org.in). Built by Mokshith Naik.</div>
          <div className="text-gray-500 text-[11px]">Calculations run client-side in your browser.</div>
        </div>
      </div>
    </footer>
  );
}
