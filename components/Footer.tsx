import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-black tracking-wide">TOOL</span>
              <span className="text-blue-400">Hub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Free, browser-based tools for everyday tasks. No download, no signup — just open and use.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Tools</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://speedometer.toolhub.org.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  🚀 GPS Speedometer
                </a>
              </li>
              <li className="text-gray-600">🔧 More tools coming soon...</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          © {year} ToolHub (toolhub.org.in). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
