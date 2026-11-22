import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the ToolHub Terms of Service. By using our free online tools, you agree to these terms.",
  alternates: { canonical: "https://toolhub.org.in/terms-of-service" },
  openGraph: {
    url: "https://toolhub.org.in/terms-of-service",
    title: "Terms of Service | ToolHub",
    description:
      "Read the ToolHub Terms of Service. By using our free online tools, you agree to these terms.",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: November 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using ToolHub (<strong className="text-white">toolhub.org.in</strong>)
            and its subdomains, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use our website or tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
          <p>
            ToolHub provides free, browser-based online tools including (but not
            limited to) a GPS speedometer, unit converters, and other utility
            tools. All tools are provided free of charge and require no account
            or registration.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Use of Tools</h2>
          <p>You agree to use ToolHub tools only for lawful purposes. You must not:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
            <li>Use the tools in any way that violates applicable law or regulation</li>
            <li>Attempt to disrupt, overload, or interfere with our servers</li>
            <li>Scrape, crawl, or automate requests in a way that burdens the service</li>
            <li>Use the tools to harm others or for fraudulent purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. GPS Speedometer Disclaimer</h2>
          <p>
            The GPS Speedometer tool is provided <strong className="text-white">for informational
            purposes only</strong>. Speed readings depend on your device&#39;s GPS hardware,
            satellite signal, and environmental conditions. Do not rely solely on
            this tool for safety-critical decisions while driving or operating a vehicle.
            Always observe official traffic laws and use your vehicle&#39;s built-in
            instruments as the primary speed reference.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
          <p>
            All content, design, and code on ToolHub is owned by or licensed to
            Mokshith Naik / ToolHub. You may not copy, reproduce, or distribute
            any part of this website without written permission, except for
            personal, non-commercial use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Disclaimer of Warranties</h2>
          <p>
            ToolHub and its tools are provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, either express or implied. We do not guarantee
            that the tools will be available, error-free, or suitable for any
            particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, ToolHub and its creator shall
            not be liable for any indirect, incidental, or consequential damages
            arising from your use of the website or its tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Third-Party Services</h2>
          <p>
            Our website may display advertisements served by Google AdSense and
            may link to third-party websites. We are not responsible for the
            content or practices of any third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes are
            effective immediately upon posting. Continued use of ToolHub after
            changes are posted constitutes your acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of courts in India.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">11. Contact</h2>
          <p>
            For questions about these Terms, contact us at:{" "}
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
