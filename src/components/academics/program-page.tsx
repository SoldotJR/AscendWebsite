import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
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

      <section className="bg-[#0f3d8c] py-16 sm:py-20">
        <div className="container-ascend grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <p className="eyebrow text-accent-gold">Overview</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              {program.title} at Ascend
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              {program.overview}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a67c0a]">
                  Tuition
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#0B1220]">{program.tuition}</p>
              </div>
              {program.scholarship ? (
                <div className="rounded-[1.25rem] bg-white p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a67c0a]">
                    Scholarships
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#0B1220]">
                    {program.scholarship}
                  </p>
                </div>
              ) : null}
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-white shadow-soft">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </FadeIn>
        </div>

        <div className="container-ascend mt-12 grid gap-10 md:grid-cols-3">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Subjects</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {program.subjects.map((subject) => (
                <li
                  key={subject}
                  className="rounded-2xl bg-white px-4 py-3 text-[#0B1220] shadow-soft"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Learning Outcomes</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {program.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-2xl bg-white px-4 py-3 text-[#0B1220] shadow-soft"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Requirements</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {program.requirements.map((requirement) => (
                <li
                  key={requirement}
                  className="rounded-2xl bg-white px-4 py-3 text-[#0B1220] shadow-soft"
                >
                  {requirement}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="container-ascend mt-10">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#0B1220] transition hover:-translate-y-0.5"
          >
            Contact Admissions
          </Link>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
