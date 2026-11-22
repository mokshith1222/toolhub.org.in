import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ToolHub",
  description:
    "Read the ToolHub Privacy Policy. Transparent information on client-side processing, cookies, advertising preparation, and hosting logs.",
  alternates: { canonical: "https://toolhub.org.in/privacy-policy" },
  openGraph: {
    url: "https://toolhub.org.in/privacy-policy",
    title: "Privacy Policy | ToolHub",
    description:
      "Transparent disclosures regarding client-side data handling, minimal cookies, and future advertising compliance.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Effective Date: November 22, 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
          <p>
            This Privacy Policy applies to the website <strong className="text-white">toolhub.org.in</strong> (referred
            to as &quot;ToolHub&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), founded and maintained by
            Mokshith Naik in India.
          </p>
          <p className="mt-2">
            We are committed to operating our web utilities with transparency, data minimization, and user
            privacy as core design principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Client-Side Tool Processing</h2>
          <p>
            The majority of calculators and conversion utilities hosted on ToolHub (including the Speed Unit
            Converter and the Speed Distance Time Calculator) execute entirely inside your local web browser using
            standard JavaScript.
          </p>
          <p className="mt-2">
            The numerical values, conversion selections, and calculation parameters you enter into these tools are
            processed locally on your device. We do not transmit, record, intercept, or store your calculation inputs
            on any server or database.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Geolocation & Satellite Metrics</h2>
          <p>
            ToolHub links to our independent companion utility, the Online GPS Speedometer located at{" "}
            <em>speedometer.toolhub.org.in</em>. That tool requests access to your device&apos;s physical location via
            the standard browser Geolocation API solely to compute velocity and distance locally in your browser.
            Location coordinates are never transmitted to our servers or stored in any database.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Information Collected Automatically</h2>
          <p>
            When you visit ToolHub, our cloud hosting infrastructure provider (Vercel Inc.) may automatically
            record standard technical connection metadata in routine edge server logs. This may include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400 mt-2">
            <li>Internet Protocol (IP) address</li>
            <li>Browser type, engine version, and operating system</li>
            <li>HTTP referrer headers and request timestamps</li>
            <li>Requested URLs and server response codes</li>
          </ul>
          <p className="mt-2">
            These logs are collected strictly for system reliability, network performance monitoring, distributed
            denial-of-service (DDoS) protection, and security compliance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. User Inquiries & Communications</h2>
          <p>
            If you contact us via email at <em>mokshithnaik67@gmail.com</em> or use our interactive contact interface,
            we collect only the information you voluntarily provide (such as your name, email address, subject,
            and message). We use this information solely to review your inquiry and reply to your feedback.
            We do not sell, rent, or trade your contact information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Cookies & Tracking Technologies</h2>
          <p>
            ToolHub does not deploy first-party profiling cookies, session tracking cookies, or biometric cookies.
            Minimal technical cookies may be set by our hosting provider solely for edge security or content delivery.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Advertising Disclosures (Google AdSense Preparation)</h2>
          <p>
            ToolHub is designed to be supported by online advertising to keep all utilities freely accessible.
            We are actively preparing this website for review under Google AdSense publisher policies.
          </p>
          <p className="mt-2">
            When Google AdSense or authorized third-party ad networks are activated:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-400 mt-2">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits
              to this website or other websites on the internet.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their
              visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Google Ads Settings
              </a>{" "}
              or by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Third-Party Links</h2>
          <p>
            Our website may contain hyperlinks to third-party websites or services (including external reference
            sources or tools). We do not control and are not responsible for the privacy practices or content of
            external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Children&apos;s Online Privacy</h2>
          <p>
            ToolHub provides general-audience utility tools and is not directed to children under 13 years of age.
            We do not knowingly collect personal identifiable information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Policy Updates & Contact</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our tools, technology, or legal
            requirements. Updates will be published on this page with an updated effective date.
          </p>
          <p className="mt-2">
            For questions regarding this policy, please reach out to:{" "}
            <a href="mailto:mokshithnaik67@gmail.com" className="text-blue-400 hover:underline font-mono">
              mokshithnaik67@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
