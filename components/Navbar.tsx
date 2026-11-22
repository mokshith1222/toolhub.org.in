"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-black tracking-wide">
            TOOL
          </span>
          <span className="text-blue-400">Hub</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/tools" className="hover:text-white transition-colors">
              Tools
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/tools"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Try a Tool
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm text-gray-300 mt-3">
            <li><Link href="/" onClick={() => setOpen(false)} className="hover:text-white block">Home</Link></li>
            <li><Link href="/tools" onClick={() => setOpen(false)} className="hover:text-white block">Tools</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)} className="hover:text-white block">About</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)} className="hover:text-white block">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
