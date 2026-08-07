import { journeySteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export function StudentJourney() {
  return (
    <section className="section-padding">
      <div className="container-ascend">
        <FadeIn>
          <SectionHeading
            eyebrow="Student Journey"
            title="From admission to offer—one coherent ascent."
            description="Learning, activities, counselling, and applications working as a single system."
          />
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.03}>
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-xs font-bold text-accent-gold">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
