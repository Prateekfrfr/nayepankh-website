import Image from "next/image";
import { BadgeCheck, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { images, site, trustPoints } from "@/lib/site-data";

const About = () => {
  return (
    <main>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <FadeIn className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-naye-blue">
              <BadgeCheck size={18} className="text-naye-green" />
              {site.registration}
            </FadeIn>
            <SectionTitle
              eyebrow="About us"
              title="Think global. Act local. Build change that people can feel."
              align="left"
            >
              NayePankh Foundation is a non-governmental organisation with a strong desire
              to make society better through education, healthcare, relief and youth-led action.
            </SectionTitle>
          </div>
          <FadeIn className="relative h-[460px] overflow-hidden rounded-[2rem] premium-shadow">
            <Image
              src={images.community}
              alt="NayePankh outreach"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="soft-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <FadeIn
                  key={point.text}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.5rem] bg-white p-6 shadow-sm"
                >
                  <Icon className="text-naye-green" size={28} />
                  <p className="mt-5 font-black leading-7 text-naye-blue">{point.text}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="How we work" title="Simple operating principles, serious accountability." align="left" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Start with local needs, not assumptions.",
              "Use student energy with trained leadership.",
              "Keep drives practical, documented and repeatable.",
              "Route money, time and material support toward direct action.",
            ].map((item) => (
              <FadeIn key={item} className="flex gap-4 rounded-[1.5rem] border border-slate-200 p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-naye-green" size={22} />
                <p className="font-bold leading-7 text-slate-700">{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="donate" />
    </main>
  );
};

export default About;
