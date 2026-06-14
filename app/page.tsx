import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { CauseCards } from "@/components/CauseCards";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { FadeIn } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { images, testimonials } from "@/lib/site-data";

const Home = () => {
  return (
    <main>
      <Hero />
      <ImpactStats />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-[2rem] premium-shadow">
              <Image
                src={images.smile}
                alt="Smiling child during a NayePankh outreach activity"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 max-w-xs rounded-[1.5rem] bg-white p-5 shadow-2xl sm:right-8">
              <p className="text-4xl font-black text-naye-orange">100%</p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                local, transparent and volunteer-driven field action
              </p>
            </div>
          </FadeIn>

          <div>
            <SectionTitle
              eyebrow="About NayePankh"
              title="A grassroots movement built by students and sustained by trust."
              align="left"
            >
              NayePankh Foundation works with a simple belief: service becomes powerful
              when it is local, consistent and accountable.
            </SectionTitle>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Education support", "Health awareness", "Relief drives", "Youth leadership"].map(
                (item) => (
                  <FadeIn key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <CheckCircle2 className="text-naye-green" size={21} />
                    <span className="font-bold text-slate-700">{item}</span>
                  </FadeIn>
                ),
              )}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-naye-blue px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-naye-blue-900"
            >
              Learn more
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our Causes" title="Focused work where small actions create visible change.">
            Every initiative is designed for practical outcomes: children learning,
            families supported, volunteers trained and communities seen.
          </SectionTitle>
          <div className="mt-12">
            <CauseCards />
          </div>
        </div>
      </section>

      <section className="soft-grid px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Gallery" title="Real people. Real chapters. Real field work." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[images.hero, images.community, images.smile].map((image, index) => (
              <FadeIn
                key={image}
                transition={{ delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[1.75rem] premium-shadow ${
                  index === 0 ? "h-80 md:col-span-2" : "h-80"
                }`}
              >
                <Image
                  src={image}
                  alt="NayePankh Foundation field work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Testimonials" title="Why people choose to stand with NayePankh." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeIn
                key={item.name}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7"
              >
                <Quote className="text-naye-orange" size={28} />
                <p className="mt-5 text-lg font-bold leading-8 text-naye-blue">{item.quote}</p>
                <p className="mt-6 font-black text-slate-800">{item.name}</p>
                <p className="text-sm font-semibold text-slate-500">{item.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="volunteer" />
      <CTASection variant="donate" />
    </main>
  );
};

export default Home;
