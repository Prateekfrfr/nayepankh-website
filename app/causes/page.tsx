import { CauseCards } from "@/components/CauseCards";
import { CTASection } from "@/components/CTASection";
import { SectionTitle } from "@/components/SectionTitle";

export default function Causes() {
  return (
    <main>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Causes" title="Programs designed around dignity, access and local action." />
          <div className="mt-12">
            <CauseCards />
          </div>
        </div>
      </section>
      <CTASection variant="donate" />
    </main>
  );
}
