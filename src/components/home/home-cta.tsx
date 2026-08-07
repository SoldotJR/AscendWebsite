import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HomeCTA() {
  return (
    <section className="section-padding pt-0">
      <div className="container-ascend">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-border bg-primary px-6 py-8 text-primary-foreground md:px-10 md:py-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
              Next Step
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
              Book a campus visit. Apply with clarity. Speak with admissions.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/75 md:text-base">
              Exploring Pre-IGCSE, A Levels, GED, or OSSD? We’ll help you choose the pathway that
              matches your university ambitions.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Button asChild variant="gold" size="lg">
                <Link href="/contact">Book Campus Visit</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
                <Link href="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
