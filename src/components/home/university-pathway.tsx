import { universities } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UniversityPathway() {
  return (
    <section className="section-padding">
      <div className="container-ascend mesh-panel overflow-hidden rounded-2xl border border-border px-5 py-8 md:px-8 md:py-10">
        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="University Pathway"
              title="Counselled toward the world’s leading institutions."
              description="Curriculum and counselling that help students compete for strong universities—with attention to fit, cost, and scholarships."
            />
            <Button asChild className="mt-5">
              <Link href="/university-counseling">Explore Counseling</Link>
            </Button>
          </FadeIn>
          <FadeIn direction="right">
            <div className="rounded-2xl border border-border bg-background/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Destinations include
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {universities.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
