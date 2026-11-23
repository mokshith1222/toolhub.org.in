import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ToolHub",
  description:
    "Read the ToolHub Privacy Policy. Transparent information on client-side processing, cookies, advertising integration, and hosting logs.",
  alternates: { canonical: "https://toolhub.org.in/privacy-policy" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in/privacy-policy",
    title: "Privacy Policy | ToolHub",
    description:
      "Transparent disclosures regarding client-side data handling, hosting logs, and advertising integrations.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | ToolHub",
    description:
      "Transparent disclosures regarding client-side data handling, hosting logs, and advertising integrations.",
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
            The calculators and conversion utilities hosted on ToolHub (including the Speed Unit
            Converter and the Speed Distance Time Calculator) execute entirely inside your local web browser using
            client-side JavaScript.
          </p>
          <p className="mt-2">
            The numerical values, conversion selections, and calculation parameters you enter into these tools are
            processed locally on your device. We do not transmit, record, intercept, or store your calculation inputs
            on any server or database.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Geolocation & Speedometer Companion</h2>
          <p>
            ToolHub links to our independent companion utility, the Online GPS Speedometer located at{" "}
            <em>speedometer.toolhub.org.in</em>. That separate utility requests access to your device&apos;s location via
            the browser Geolocation API to compute speed metrics directly on your device. ToolHub itself does not collect,
            receive, or store your geolocation coordinates.
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
            The contact form on this website does not transmit information to a ToolHub backend or database. Instead,
            it prepares a draft message in your device&apos;s default email program via a standard mailto link or allows
            you to copy the formatted text. We only collect personal details (such as your name, email address, and
            message content) if you choose to send an email to <em>mokshithnaik67@gmail.com</em>.
          </p>
          <p className="mt-2">
            We use this information solely to review your message and reply to your inquiry. We do not sell, rent,
            or trade personal email correspondence.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Cookies & Tracking Technologies</h2>
          <p>
            ToolHub does not deploy first-party profiling cookies or user tracking databases. However, third-party
            services—including our cloud hosting platform (for edge security and traffic management) and advertising
            integrations (such as Google AdSense)—may utilize cookies or similar technologies as detailed below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Advertising Disclosures (Google AdSense Integration)</h2>
          <p>
            Google AdSense code is integrated into the ToolHub website to support free access to our utilities.
            The display of advertisements and active ad serving depend on Google AdSense account approval and serving status.
          </p>
          <p className="mt-2">
            When Google AdSense or authorized third-party ad networks are active:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-400 mt-2">
            <li>
              Third-party vendors, including Google, use cookies and similar technologies to serve ads based on a
              user&apos;s prior visits to this website or other websites on the Internet.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their
              visit to our site and/or other sites on the Internet.
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
          <h2 className="text-xl font-bold text-white mb-3">8. Regional Privacy Rights (GDPR & US State Privacy)</h2>
          <p>
            Depending on your geographic location, data protection regulations provide specific privacy rights:
          </p>
          <div className="space-y-3 mt-3 text-xs md:text-sm text-gray-400">
            <div>
              <strong className="text-white">European Economic Area (EEA) & United Kingdom (GDPR):</strong> Users in
              the EEA and UK have the right to request access to, rectification of, or erasure of any personal information
              they have voluntarily provided to us (such as email communications), or to restrict its processing. To exercise
              these rights, you may contact us at <em>mokshithnaik67@gmail.com</em>.
            </div>
            <div>
              <strong className="text-white">California & US State Privacy (CPRA / CCPA):</strong> Residents of California
              and other applicable US states have statutory rights to request information regarding personal data collection and
              request deletion. ToolHub does not sell personal contact information for monetary compensation. Third-party advertising
              partners (such as Google AdSense) may process online identifiers and cookies for advertising purposes as described in
              their policies. Users can manage ad personalization directly through{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Google Ads Settings
              </a>{" "}
              and browser cookie controls.
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Third-Party Links</h2>
          <p>
            Our website may contain hyperlinks to third-party websites or services (including external reference
            sources or our independent speedometer utility). We do not control and are not responsible for the privacy
            practices or content of external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Children&apos;s Online Privacy</h2>
          <p>
            ToolHub provides general-audience utility tools and is not directed to children under 13 years of age.
            We do not knowingly collect personal identifiable information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">11. Policy Updates & Contact</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our tools, technology, advertising status,
            or legal requirements. Updates will be published on this page with an updated effective date.
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
