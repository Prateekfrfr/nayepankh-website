import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { FadeIn } from "./Motion";

type CTASectionProps = {
  variant?: "donate" | "volunteer";
};

export function CTASection({ variant = "donate" }: CTASectionProps) {
  const isDonate = variant === "donate";

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn className="mx-auto overflow-hidden rounded-[2rem] bg-naye-blue premium-shadow">
        <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-200">
              {isDonate ? "Donation focused" : "Volunteer powered"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isDonate
                ? "Your support keeps the next field drive moving."
                : "Bring your time, skill or campus network to the movement."}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100">
              {isDonate
                ? "Donations are tax exempted under 80G of the Indian Income Tax Act. Every contribution helps NayePankh serve with consistency and dignity."
                : "Choose the kind of work you care about, join a chapter, and help convert good intent into measurable impact."}
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white/10 p-5">
            <Link
              href={isDonate ? "/donate" : "/volunteer"}
              className="flex items-center justify-between rounded-[1.25rem] bg-naye-orange px-6 py-5 font-black text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-1 hover:bg-orange-500"
            >
              <span className="inline-flex items-center gap-3">
                <HeartHandshake size={22} />
                {isDonate ? "Donate now" : "Become a volunteer"}
              </span>
              <ArrowRight size={22} />
            </Link>
            <p className="mt-4 text-sm leading-6 text-blue-100">
              {isDonate
                ? "Suggested giving starts at ₹501, but every amount matters."
                : "Remote, campus and on-ground opportunities are available."}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
