import { stats } from "@/lib/site-data";
import { FadeIn } from "./Motion";

export function ImpactStats() {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <FadeIn className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-white/80 bg-white/92 p-4 premium-shadow backdrop-blur md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-slate-50 px-6 py-7 text-center">
            <p className="text-3xl font-black text-naye-blue lg:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{stat.label}</p>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
