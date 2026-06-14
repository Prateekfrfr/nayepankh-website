import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { donationTiers, site } from "@/lib/site-data";

export default function Donate() {
  return (
    <main>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow="Donate" title="Give once. Create impact that keeps moving." align="left">
              Your donations are tax exempted under 80G of the Indian Income Tax Act and help
              fund education, healthcare, essentials and field logistics.
            </SectionTitle>
            <div className="mt-8 flex flex-wrap gap-3">
              {[site.registration, "Transparent field support", "Student-led execution"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-naye-blue">
                  <ShieldCheck size={17} className="text-naye-green" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <FadeIn className="rounded-[2rem] bg-naye-blue p-6 text-white premium-shadow">
            <div className="rounded-[1.5rem] bg-white p-6 text-naye-blue">
              <HeartHandshake className="text-naye-orange" size={36} />
              <h2 className="mt-5 text-2xl font-black">Donation desk</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Use this section as the polished donation intent flow. Connect Razorpay,
                Cashfree or any payment gateway when the organisation shares account details.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-naye-orange px-6 py-4 font-black text-white transition hover:bg-orange-500"
              >
                Request donation details
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="soft-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Giving options" title="Suggested contribution tiers." />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {donationTiers.map((tier, index) => (
              <FadeIn key={tier.amount} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] bg-white p-7 shadow-sm">
                <BadgeIndianRupee className="text-naye-green" size={30} />
                <p className="mt-5 text-3xl font-black text-naye-blue">{tier.amount}</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{tier.impact}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 p-8 sm:p-10">
          <h2 className="text-3xl font-black text-naye-blue">Donor assurance</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["80G tax exemption", "Registered NGO compliance", "Impact-led utilisation", "Direct community support"].map((item) => (
              <p key={item} className="flex items-center gap-3 font-bold text-slate-700">
                <CheckCircle2 className="text-naye-green" size={21} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
