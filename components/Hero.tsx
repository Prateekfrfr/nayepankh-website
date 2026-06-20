import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, HeartHandshake, PlayCircle } from "lucide-react";
import { images, site, trustPoints } from "@/lib/site-data";
import { MotionDiv } from "./Motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-naye-blue-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="NayePankh volunteers with children during an education activity"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.42]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-naye-blue-900 via-naye-blue-900/86 to-naye-blue-900/30" />
      </div>

      <div className="relative mx-auto grid min-h-[520px] sm:min-h-[760px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-50 backdrop-blur">
            <BadgeCheck size={18} className="text-naye-green" />
            {site.registration}
          </div>
          <h1 className="mt-7 max-w-4xl text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Bring a smile where it is needed most.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
            NayePankh Foundation is a student-led NGO turning donations,
            volunteer time and community trust into local action across Indian
            cities.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-naye-orange px-7 py-4 font-black text-white shadow-2xl shadow-orange-950/25 transition hover:-translate-y-1 hover:bg-orange-500"
            >
              <HeartHandshake size={21} />
              Donate now
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/18"
            >
              <PlayCircle size={21} />
              Join as volunteer
            </Link>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
          className="rounded-[2rem] border border-white/20 bg-white/12 p-4 backdrop-blur-xl"
        >
          <div className="overflow-hidden rounded-[1.5rem] bg-white text-naye-blue shadow-2xl">
            <div className="relative h-72 sm:h-96">
              <Image
                src={images.community}
                alt="NayePankh community outreach with children and volunteers"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.text}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                  >
                    <Icon
                      className="mt-0.5 shrink-0 text-naye-green"
                      size={20}
                    />
                    <span className="text-sm font-bold leading-6">
                      {point.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionDiv>
      </div>

      <div className="relative h-10 bg-background" />
    </section>
  );
}
