import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { HomeCTA } from "@/components/home/home-cta";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "IGCSE, IAL, OSSD, GED, and Pre-IGCSE courses designed for ambitious high school students.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="A pathway with purpose."
        description="International high school courses, personal attention, and a clear route to university."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />
      <section className="section-padding">
        <div className="container-ascend">
          <FadeIn>
            <SectionHeading
              eyebrow="Choose your route"
              title="Courses for every next step."
              description="Explore the course that fits your current stage, your pace, and your ambitions."
            />
          </FadeIn>
          <div className="mt-12 space-y-6">
            {programs.map((program, index) => (
              <FadeIn key={program.slug} delay={index * 0.05}>
                <article className="grid overflow-hidden rounded-[2rem] border border-border bg-card md:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative min-h-64">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                  </div>
                  <div className="p-7 md:p-10">
                    <p className="eyebrow">{program.duration}</p>
                    <h2 className="mt-3 font-serif text-3xl">{program.title}</h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      {program.overview}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-royal">{program.highlight}</p>
                    <Button asChild variant="secondary" className="mt-7">
                      <Link href={program.href}>Explore {program.shortTitle}</Link>
                    </Button>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <HomeCTA />
    </>
  );
}
