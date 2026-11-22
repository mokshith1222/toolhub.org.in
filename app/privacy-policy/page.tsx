import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the ToolHub Privacy Policy. We are committed to protecting your privacy. No personal data is collected or sold.",
  alternates: { canonical: "https://toolhub.org.in/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: November 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
          <p>
            ToolHub (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website{" "}
            <strong className="text-white">toolhub.org.in</strong> and its
            subdomains (including <em>speedometer.toolhub.org.in</em>). We are
            committed to protecting your privacy. This Privacy Policy explains
            what information we collect, how we use it, and your rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
          <h3 className="text-white font-semibold mb-2">2.1 Information You Provide</h3>
          <p>
            If you contact us via email or our contact form, we collect the name,
            email address, and message you provide. We use this solely to respond
            to your enquiry.
          </p>
          <h3 className="text-white font-semibold mt-4 mb-2">2.2 Automatically Collected Information</h3>
          <p>
            When you visit our website, our hosting provider (Vercel) may
            automatically log basic technical information such as your IP address,
            browser type, and pages visited, for security and performance purposes.
            We do not use this data for advertising or profiling.
          </p>
          <h3 className="text-white font-semibold mt-4 mb-2">2.3 GPS / Location Data</h3>
          <p>
            Our GPS Speedometer tool requests access to your device&#39;s location
            via the standard browser Geolocation API. <strong className="text-white">
            Your location data is processed entirely on your device and is never
            transmitted to our servers.</strong> We do not store, share, or sell
            any GPS data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Cookies</h2>
          <p>
            ToolHub does not use tracking cookies. We may use minimal
            session-based cookies required for the website to function. We do not
            use cookies for advertising or cross-site tracking.
          </p>
          <p className="mt-3">
            Third-party services on our website (such as Google AdSense) may set
            their own cookies. Please refer to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Google&#39;s Privacy Policy
            </a>{" "}
            for details on how Google uses data when you interact with AdSense ads.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Google AdSense</h2>
          <p>
            We use Google AdSense to display advertisements on our website.
            Google AdSense uses cookies and similar technologies to serve ads
            based on your previous visits to this and other websites. You can opt
            out of personalised advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>To respond to contact form enquiries</li>
            <li>To improve website performance and security</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p className="mt-3">
            We do <strong className="text-white">not</strong> sell, trade, or
            transfer your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
          <p>
            Emails and contact form messages are retained only as long as
            necessary to respond to your enquiry, after which they are deleted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct,
            or delete any personal information we hold about you. To exercise
            these rights, contact us at{" "}
            <a
              href="mailto:mokshithnaik67@gmail.com"
              className="text-blue-400 hover:underline"
            >
              mokshithnaik67@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Children&#39;s Privacy</h2>
          <p>
            ToolHub is not directed at children under the age of 13. We do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date. Continued use of ToolHub
            after changes are posted constitutes your acceptance of the revised
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{" "}
            <a
              href="mailto:mokshithnaik67@gmail.com"
              className="text-blue-400 hover:underline"
            >
              mokshithnaik67@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
