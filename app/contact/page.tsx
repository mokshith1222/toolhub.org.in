import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ToolHub team. Send us your feedback, tool suggestions, or questions.",
  alternates: { canonical: "https://toolhub.org.in/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-white mb-3">Contact Us</h1>
      <p className="text-gray-400 mb-10">
        Have a question, tool suggestion, or feedback? We&#39;d love to hear from
        you. Fill in the form below or email us directly.
      </p>

      {/* Direct email */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-8 flex items-center gap-4">
        <span className="text-3xl">✉️</span>
        <div>
          <div className="text-white font-semibold mb-0.5">Email us directly</div>
          <a
            href="mailto:mokshithnaik67@gmail.com"
            className="text-blue-400 hover:underline text-sm"
          >
            mokshithnaik67@gmail.com
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        action="mailto:mokshithnaik67@gmail.com"
        method="GET"
        encType="text/plain"
        className="space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Ramesh Kumar"
            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-600"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Tool suggestion / Feedback / Question"
            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-600"
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-300 mb-1.5">
            Message
          </label>
          <textarea
            id="body"
            name="body"
            rows={5}
            required
            placeholder="Tell us your idea or question..."
            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-600 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Send Message →
        </button>
      </form>

      <p className="text-gray-600 text-xs mt-6 text-center">
        We typically reply within 1–3 business days.
      </p>
    </div>
  );
}
