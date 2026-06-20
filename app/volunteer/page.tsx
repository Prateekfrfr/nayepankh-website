import { ArrowRight, CalendarCheck, GraduationCap, HandHeart, Users } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { VolunteerRegistrationForm } from "@/components/VolunteerRegistrationForm";

const roles = [
  { icon: GraduationCap, title: "Teach", text: "Support learning drives, reading circles and mentoring sessions." },
  { icon: HandHeart, title: "Serve", text: "Help with food, hygiene, clothing and local relief distribution." },
  { icon: Users, title: "Lead", text: "Build a campus chapter, coordinate volunteers and document impact." },
  { icon: CalendarCheck, title: "Organise", text: "Plan campaigns, outreach days, partnerships and field logistics." },
];

export default function Volunteer() {
  return (
    <main>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionTitle eyebrow="Volunteer" title="Turn your time, skill and network into community impact.">
            Join a student-led NGO where volunteering is structured, warm and genuinely useful.
          </SectionTitle>
          <a
            href="#volunteer-registration"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-naye-orange px-7 py-4 font-black text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1"
          >
            Apply to volunteer
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <section
        id="volunteer-registration"
        className="soft-grid px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <FadeIn key={role.title} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] bg-white p-7 premium-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-naye-green">
                  <Icon size={27} />
                </div>
                <h2 className="mt-6 text-2xl font-black text-naye-blue">{role.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{role.text}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-naye-blue p-8 text-white sm:p-12">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-200">Volunteer journey</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Choose a role", "Join a chapter", "Create impact"].map((step, index) => (
              <FadeIn key={step} className="rounded-[1.5rem] bg-white/10 p-6">
                <p className="text-4xl font-black text-naye-orange">0{index + 1}</p>
                <p className="mt-4 font-black">{step}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle
              eyebrow="Register"
              title="Share your details and our team will review your interest."
              align="left"
            >
              Tell us how you would like to contribute so NayePankh can connect
              you with the right chapter, drive or volunteer role.
            </SectionTitle>
          </div>

          <FadeIn className="rounded-[2rem] bg-white p-6 premium-shadow sm:p-8">
            <VolunteerRegistrationForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
