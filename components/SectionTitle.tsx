import type { ReactNode } from "react";
import { FadeIn } from "./Motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, children, align = "center" }: SectionTitleProps) {
  return (
    <FadeIn className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-naye-green">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-naye-blue sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{children}</p>}
    </FadeIn>
  );
}
