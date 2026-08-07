import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { programs } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export function AcademicPrograms() {
  return (
    <section className="section-padding bg-surface-muted/70">
      <div className="container-ascend">
        <FadeIn>
          <SectionHeading
            eyebrow="Academic Programs"
            title="Pathways for examination excellence and university ambition."
            description="From Pre-IGCSE to A Levels, GED, and OSSD—each program is intensive, personal, and counselled toward the next destination."
          />
        </FadeIn>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <FadeIn key={program.slug} delay={index * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-royal">
                    {program.duration}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{program.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {program.overview}
                  </p>
                  <p className="mt-3 text-sm font-medium text-foreground">{program.highlight}</p>
                  <Link
                    href={program.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
