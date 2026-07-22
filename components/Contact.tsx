"use client";

import {  contactLinks } from "@/data";
import { ContactLink } from "@/types";
import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true); // ← add this
  try {
    const res = await fetch("https://formspree.io/f/xeebpezp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSubmitted(true);
  } catch (error) {
    console.error("Failed to send:", error);
  } finally {
    setLoading(false); // ← add this
  }
};

  return (
    <section id="contact" className="w-full bg-[#1A3A6B] py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#C9A84C]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
              Get in touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Book an <span className="text-[#C9A84C]">Appointment</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
            Reach out to book a consultation, ask a question, or discuss your health needs.
            Responses within 24 hours.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {contactLinks.map((link: ContactLink) => (
              <a
                key={link.label}
                href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A84C]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-lg flex-shrink-0">
                  {link.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">{link.label}</p>
                  <p className="text-sm font-semibold text-white">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <p className="text-sm text-white/60">
              <strong className="text-white font-semibold">Currently accepting</strong> new patients — Mon to Sat
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
              <div className="w-14 h-14 rounded-full bg-[#EBF2FB] flex items-center justify-center text-2xl">✅</div>
              <h4 className="text-lg font-bold text-[#1A3A6B]">Message sent!</h4>
              <p className="text-sm text-gray-500">Thank you. Dr. Adekunle will get back to you within 24 hours.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="text-sm text-[#C9A84C] font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold text-[#1A3A6B] mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "name",  label: "Full name",      type: "text",  placeholder: "Your name" },
                    { name: "email", label: "Email address",  type: "email", placeholder: "your@email.com" },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        required
                        placeholder={f.placeholder}
                        className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#1A3A6B] transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Appointment booking"
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#1A3A6B] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell Dr. Adekunle about your health concern..."
                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#1A3A6B] transition-colors resize-none"
                  />
                </div>
              <button
  type="submit"
  disabled={loading}
  className="w-full py-3.5 rounded-full bg-[#1A3A6B] text-white text-sm font-semibold hover:bg-[#2B5BA8] transition-colors duration-300 shadow-lg shadow-blue-900/20 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Sending..." : "Send message →"}
</button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};