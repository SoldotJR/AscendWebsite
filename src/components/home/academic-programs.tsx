"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { programs } from "@/data/content";

const courseOrder = ["igcse", "a-levels", "ossd", "ged", "pre-igcse"] as const;

function getVisibleCount(width: number) {
  if (width < 768) return 1;
  if (width < 1100) return 2;
  return 3;
}

export function AcademicPrograms() {
  const orderedPrograms = useMemo(
    () =>
      courseOrder
        .map((slug) => programs.find((program) => program.slug === slug))
        .filter((program): program is (typeof programs)[number] => Boolean(program)),
    []
  );

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      const nextVisible = getVisibleCount(window.innerWidth);
      setVisibleCount(nextVisible);
      setIndex((current) => Math.min(current, Math.max(0, orderedPrograms.length - nextVisible)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [orderedPrograms.length]);

  const maxIndex = Math.max(0, orderedPrograms.length - visibleCount);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  const prev = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1));

  const gapPercent = 1.5;
  const cardWidth = (100 - gapPercent * (visibleCount - 1)) / visibleCount;

  return (
    <section
      className="section-padding relative overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-ascend">
        <p className="eyebrow">Programmes</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0B1220] md:text-4xl">
          Our Programmes
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0B1220] md:text-base">
          International high school pathways designed for ambitious students, with a clear route to
          university.
        </p>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous programme"
            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-gold text-[#0B1220] shadow-soft transition hover:scale-105 sm:-translate-x-1/3"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next programme"
            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-gold text-[#0B1220] shadow-soft transition hover:scale-105 sm:translate-x-1/3"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden px-2 sm:px-6">
            <div
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{
                gap: `${gapPercent}%`,
                transform: `translateX(-${safeIndex * (cardWidth + gapPercent)}%)`,
              }}
            >
              {orderedPrograms.map((program) => (
                <article
                  key={program.slug}
                  className="flex h-full min-h-[28rem] shrink-0 flex-col overflow-hidden rounded-[1.25rem] bg-[#0f3d8c] shadow-soft sm:min-h-[30rem]"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-primary">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="inline-flex w-fit rounded-full bg-accent-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-gold">
                      {program.duration}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                      {program.slug === "a-levels" ? "IAL" : program.shortTitle}
                    </h3>
                    <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-white">
                      {program.overview}
                    </p>
                    <Link
                      href={program.href}
                      aria-label={`Learn more about ${program.shortTitle}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-gold"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 text-accent-gold" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to programmes slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === safeIndex ? "bg-accent-gold" : "bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
