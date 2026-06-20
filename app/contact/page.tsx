"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/site-data";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");
    setSuccess(true);
    // Clear fields after successful submit
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <main>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle
            eyebrow="Contact"
            title="Partner, donate, volunteer or start a chapter."
          >
            Reach the NayePankh team and take the next step toward supporting a
            drive.
          </SectionTitle>
        </div>
      </section>

      <section className="soft-grid px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn className="rounded-[2rem] bg-naye-blue p-8 text-white premium-shadow">
            <h2 className="text-3xl font-black">Get in touch</h2>

            <div className="mt-8 space-y-5">
              <p className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-orange-200" />
                <span>{site.email}</span>
              </p>

              <p className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-orange-200" />
                <span>{site.phone}</span>
              </p>

              <p className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-orange-200" />
                <span>{site.cities}</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn className="rounded-[2rem] bg-white p-6 premium-shadow sm:p-8">
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-black text-naye-blue">
                Full name
                <input
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 outline-none transition focus:border-naye-green focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-black text-naye-blue">
                Email address
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 outline-none transition focus:border-naye-green focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-black text-naye-blue">
                Phone number
                <input
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 outline-none transition focus:border-naye-green focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-black text-naye-blue">
                Message
                <textarea
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 outline-none transition focus:border-naye-green focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              {error && (
                <p className="text-sm font-semibold text-red-500">{error}</p>
              )}
              {success && (
                <p className="text-sm font-semibold text-green-600">
                  Message sent successfully.
                </p>
              )}

              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-naye-orange px-6 py-4 font-black text-white transition hover:bg-orange-500"
                type="submit"
              >
                <Send size={19} />
                Send message
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
