import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ToolHub",
  description:
    "Learn about ToolHub — a free online tools platform built to give everyone access to fast, privacy-first browser tools with no app required.",
  alternates: { canonical: "https://toolhub.org.in/about" },
  openGraph: {
    url: "https://toolhub.org.in/about",
    title: "About ToolHub",
    description:
      "Learn about ToolHub — a free online tools platform built to give everyone access to fast, privacy-first browser tools with no app required.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-white mb-5">About ToolHub</h1>

      <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
        <p>
          <strong className="text-white">ToolHub</strong> is a free online tools
          platform that makes everyday digital tasks easier — without requiring
          any app download, account registration, or payment.
        </p>

        <p>
          Every tool on ToolHub runs entirely in your web browser using standard
          browser APIs. This means your data stays on your device, tools work
          offline once loaded, and there is nothing to install or update.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-3">Our First Tool: GPS Speedometer</h2>
        <p>
          We started with what we know best — a real-time GPS speedometer
          available at{" "}
          <a
            href="https://speedometer.toolhub.org.in/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            speedometer.toolhub.org.in
          </a>
          . It measures your current speed in km/h or mph using the HTML5
          Geolocation API, with no server-side processing — your location is
          never transmitted or stored.
        </p>
        <p>
          Thousands of people use the ToolHub speedometer for driving,
          cycling, running, and testing GPS accuracy on their devices.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-3">What&#39;s Coming Next</h2>
        <p>
          We are actively developing more tools — a unit converter, stopwatch
          and timer, internet speed tester, word counter, and more. Each tool
          follows the same principles: fast, free, private, and browser-only.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-3">Our Principles</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>
            <strong className="text-gray-200">Free forever</strong> — all tools
            on ToolHub are free to use with no paywalls.
          </li>
          <li>
            <strong className="text-gray-200">No login required</strong> — open
            any tool and use it immediately.
          </li>
          <li>
            <strong className="text-gray-200">Privacy-first</strong> — we do not
            collect, sell, or share your personal data.
          </li>
          <li>
            <strong className="text-gray-200">Browser-native</strong> — built
            with standard web technologies that work on every modern device.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-3">About the Creator</h2>
        <p>
          ToolHub was built by{" "}
          <strong className="text-white">Mokshith Naik</strong>, a Computer
          Science student passionate about building practical web tools that
          solve real problems. The goal is simple: give everyone access to
          useful digital tools without barriers.
        </p>

        <p>
          If you have a suggestion, a tool idea, or just want to say hello —{" "}
          <Link href="/contact" className="text-blue-400 hover:underline">
            get in touch
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
