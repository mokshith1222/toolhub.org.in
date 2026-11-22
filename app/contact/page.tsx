import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact ToolHub – Inquiries & Suggestions",
  description:
    "Get in touch with the creator of ToolHub. Send feedback, suggest new mathematical or conversion utilities, or report an issue.",
  alternates: { canonical: "https://toolhub.org.in/contact" },
  openGraph: {
    url: "https://toolhub.org.in/contact",
    title: "Contact ToolHub – Feedback & Inquiries",
    description:
      "Send feedback or suggestions directly to the creator of ToolHub. We typically reply within 1–2 business days.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Have an idea for a new utility? Found a bug? Or have a suggestion for improving ToolHub?
          We welcome your feedback.
        </p>
      </div>

      {/* Direct email card */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-3xl p-3 bg-blue-950/60 border border-blue-800/40 rounded-xl">✉️</span>
          <div>
            <div className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
              Primary Contact Email
            </div>
            <a
              href="mailto:mokshithnaik67@gmail.com"
              className="text-white hover:text-blue-400 transition-colors font-mono font-semibold text-base"
            >
              mokshithnaik67@gmail.com
            </a>
          </div>
        </div>
        <a
          href="mailto:mokshithnaik67@gmail.com?subject=ToolHub%20Inquiry"
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          Email Directly →
        </a>
      </div>

      {/* Interactive Form */}
      <ContactForm />

      <div className="mt-8 text-center text-xs text-gray-500">
        ToolHub is an independent personal project. Messages are reviewed by Mokshith Naik.
      </div>
    </div>
  );
}
