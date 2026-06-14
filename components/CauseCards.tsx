import { causes } from "@/lib/site-data";
import { FadeIn } from "./Motion";

export function CauseCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {causes.map((cause, index) => {
        const Icon = cause.icon;
        return (
          <FadeIn
            key={cause.title}
            transition={{ delay: index * 0.08 }}
            className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100"
          >
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${cause.accent}`}>
              <Icon size={26} />
            </div>
            <h3 className="text-xl font-black text-naye-blue">{cause.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{cause.description}</p>
          </FadeIn>
        );
      })}
    </div>
  );
}
