import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { HomeCTA } from "@/components/home/home-cta";

export function ProgramPage({ program }: { program: Program }) {
  return (
    <>
      <PageHero
        eyebrow={program.duration}
        title={program.title}
        description={program.overview}
        image={program.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/academics" },
          { label: program.title },
        ]}
      />

      <section className="section-padding">
        <div className="container-ascend grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Overview"
              title={`${program.title} at Ascend`}
              description={program.overview}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Tuition</p>
                <p className="mt-3 text-sm leading-relaxed">{program.tuition}</p>
              </div>
              {program.scholarship ? (
                <div className="rounded-[1.5rem] border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Scholarships</p>
                  <p className="mt-3 text-sm leading-relaxed">{program.scholarship}</p>
                </div>
              ) : null}
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src={program.image} alt={program.title} fill className="object-cover" sizes="40vw" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface-muted/50">
        <div className="container-ascend grid gap-10 md:grid-cols-3">
          <FadeIn>
            <h2 className="font-serif text-3xl">Subjects</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {program.subjects.map((subject) => (
                <li key={subject} className="rounded-2xl border border-border bg-card px-4 py-3">
                  {subject}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="font-serif text-3xl">Learning Outcomes</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {program.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-2xl border border-border bg-card px-4 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl">Requirements</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {program.requirements.map((requirement) => (
                <li key={requirement} className="rounded-2xl border border-border bg-card px-4 py-3">
                  {requirement}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <div className="container-ascend mt-10">
          <Button asChild size="lg">
            <Link href="/admissions">Apply for {program.shortTitle}</Link>
          </Button>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
