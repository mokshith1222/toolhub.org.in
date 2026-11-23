"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [prepared, setPrepared] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = "Please enter your name.";
    }

    if (!email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!subject.trim()) {
      errs.subject = "Please enter a subject.";
    }

    if (!message.trim()) {
      errs.message = "Please enter your message.";
    } else if (message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getMailtoUrl = () => {
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    return `mailto:mokshithnaik67@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setPrepared(true);
    // Open user's default email client
    window.location.href = getMailtoUrl();
  };

  const handleCopy = () => {
    if (!validate()) return;
    const fullText = `To: mokshithnaik67@gmail.com\nSubject: ${subject}\nFrom: ${name} (${email})\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Prepare a Message</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          Fill out the fields below to prepare your message. This form does not submit data to a ToolHub server or database. Clicking &quot;Open in Email Client&quot; creates a pre-filled draft in your device&apos;s email program, where you can review and send the email yourself.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1.5">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
              errors.name ? "border-red-500" : "border-gray-700 focus:border-blue-500"
            }`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1.5">
            Your Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            placeholder="you@example.com"
            className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
              errors.email ? "border-red-500" : "border-gray-700 focus:border-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-300 mb-1.5">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
            }}
            placeholder="Tool request / Suggestion / Feedback"
            className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
              errors.subject ? "border-red-500" : "border-gray-700 focus:border-blue-500"
            }`}
          />
          {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1.5">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
            }}
            placeholder="Describe your suggestion or feedback in detail..."
            className={`w-full bg-gray-950 border text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none ${
              errors.message ? "border-red-500" : "border-gray-700 focus:border-blue-500"
            }`}
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
          >
            Open in Email Client →
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-4 rounded-xl border border-gray-700 transition-colors text-sm"
          >
            {copied ? "✓ Copied to Clipboard" : "Copy Formatted Text"}
          </button>
        </div>

        {prepared && (
          <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-xs text-blue-300 mt-2">
            Your email client has been triggered with your pre-filled message. Please review and click send in your email application. If your mail client did not open automatically, click <strong>Copy Formatted Text</strong> above and send directly to{" "}
            <a href="mailto:mokshithnaik67@gmail.com" className="underline font-semibold">
              mokshithnaik67@gmail.com
            </a>
            .
          </div>
        )}
      </form>
    </div>
  );
}
