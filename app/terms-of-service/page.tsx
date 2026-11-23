import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – ToolHub",
  description:
    "Read the ToolHub Terms of Service. Clear terms governing the use of our free web utilities and calculators.",
  alternates: { canonical: "https://toolhub.org.in/terms-of-service" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ToolHub",
    url: "https://toolhub.org.in/terms-of-service",
    title: "Terms of Service | ToolHub",
    description:
      "Terms of service governing the usage of ToolHub conversion tools, calculators, and informational resources.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | ToolHub",
    description:
      "Terms of service governing the usage of ToolHub conversion tools, calculators, and informational resources.",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-10">Effective Date: November 22, 2026</p>

      <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using <strong className="text-white">toolhub.org.in</strong> (referred to as
            &quot;ToolHub&quot;, &quot;the Service&quot;), you acknowledge that you have read, understood, and agree to
            be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the
            website and its utilities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Description of Utilities</h2>
          <p>
            ToolHub is an independent personal software project created and operated by Mokshith Naik in India.
            The platform provides browser-based mathematical calculators, speed unit converters, and educational
            reference content free of charge for informational, educational, and general utility purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Permitted & Prohibited Uses</h2>
          <p>You agree to use ToolHub only for lawful purposes. You agree not to:</p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-400 mt-2">
            <li>Engage in automated scraping, denial-of-service attacks, or excessive querying that impairs server availability</li>
            <li>Attempt to reverse-engineer, exploit vulnerabilities, or inject malicious scripts into the platform</li>
            <li>Misrepresent the outputs of our calculations for fraudulent or safety-critical engineering certifications</li>
            <li>Use the site in violation of any applicable local, state, national, or international regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Mathematical Accuracy & Utility Disclaimer</h2>
          <p>
            While we take care to ensure our calculation algorithms and unit conversion constants (such as
            km/h to mph conversion factors) reflect accepted mathematical and SI definitions:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-400 mt-2">
            <li>
              All tools, equations, and outputs are provided on an <strong className="text-white">&quot;as is&quot;</strong> and{" "}
              <strong className="text-white">&quot;as available&quot;</strong> basis for informational, educational, and general estimation purposes.
            </li>
            <li>
              ToolHub utilities are not certified instruments and should not be used as primary reference tools for safety-critical aviation,
              commercial automotive calibration, structural engineering, medical, or life-critical applications.
            </li>
            <li>
              For satellite-based speedometers linked via subdomains, speed readings depend on external hardware,
              satellite lock, atmospheric conditions, and mobile device sensors.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
          <p>
            The original website design, layout, component code, brand markings, and educational explanations
            are the intellectual property of Mokshith Naik / ToolHub. You may not republish, mirror, or repackage
            our code or content without prior written permission, except for normal personal, non-commercial use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall ToolHub, its creator, or affiliates
            be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in
            any way connected with the use or inability to use this website, even if advised of the possibility of
            such damages.
          </p>
          <p className="mt-2 font-medium text-gray-200">
            Nothing in these Terms of Service shall limit or exclude any liability that cannot be legally excluded or limited under applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of India.
            Any legal dispute, claim, or controversy arising out of or relating to these Terms or the use of ToolHub
            shall be subject to the jurisdiction of the competent courts in India.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Contact Information</h2>
          <p>
            If you have questions regarding these Terms of Service, please contact:{" "}
            <a href="mailto:mokshithnaik67@gmail.com" className="text-blue-400 hover:underline font-mono">
              mokshithnaik67@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
