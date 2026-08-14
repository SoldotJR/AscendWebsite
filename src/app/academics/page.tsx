import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/ui/fade-in";

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
      <section className="section-padding bg-white">
        <div className="container-ascend">
          <FadeIn>
            <p className="eyebrow">Choose your route</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0B1220] md:text-4xl">
              Courses for every next step
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-6">
            {programs.map((program, index) => (
              <FadeIn key={program.slug} delay={index * 0.05}>
                <article className="grid overflow-hidden rounded-[1.25rem] bg-[#0f3d8c] shadow-soft md:grid-cols-[0.8fr_1.2fr]">
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
                    <span className="inline-flex w-fit rounded-full bg-accent-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-gold">
                      {program.duration}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {program.title}
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-white">
                      {program.overview}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-accent-gold">{program.highlight}</p>
                    <Link
                      href={program.href}
                      className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-gold"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 text-accent-gold" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
