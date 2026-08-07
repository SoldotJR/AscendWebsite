import {
  BadgeCheck,
  BookOpen,
  Compass,
  Globe2,
  GraduationCap,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { features, stats } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { Counter } from "@/components/ui/counter";

const icons = {
  BadgeCheck,
  BookOpen,
  Globe2,
  GraduationCap,
  Users,
  Sparkles,
  Target,
  Compass,
} as const;

export function WhyAscend() {
  return (
    <section className="section-padding">
      <div className="container-ascend">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Ascend"
            title="A calm, ambitious path to global universities."
            description="Pearson-approved pathways, small cohorts, and counselling that treats every student’s future as a crafted plan—not a checklist."
          />
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.04}>
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <FadeIn key={feature.title} delay={index * 0.03}>
                <article className="group h-full rounded-2xl border border-border bg-surface p-4 transition duration-300 hover:-translate-y-0.5 hover:border-royal/30 hover:shadow-soft">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
