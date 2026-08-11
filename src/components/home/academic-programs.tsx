"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { programs } from "@/data/content";

const courseOrder = ["igcse", "a-levels", "ossd", "ged", "pre-igcse"] as const;

function getVisibleCount(width: number) {
  if (width < 768) return 1;
  if (width < 1100) return 2;
  return 3;
}

export function AcademicPrograms() {
  const orderedPrograms = courseOrder
    .map((slug) => programs.find((program) => program.slug === slug))
    .filter((program): program is (typeof programs)[number] => Boolean(program));

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, orderedPrograms.length - visibleCount);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

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
      className="relative overflow-hidden bg-[#0f3d8c] py-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-ascend">
        <h2 className="text-center font-serif text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          Our Programmes
        </h2>

        <div className="relative mt-12">
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
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: `${gapPercent}%`,
                transform: `translateX(-${index * (cardWidth + gapPercent)}%)`,
              }}
            >
              {orderedPrograms.map((program) => (
                <article
                  key={program.slug}
                  className="flex min-h-[420px] shrink-0 flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft sm:min-h-[460px]"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div className="relative h-56 shrink-0 sm:h-64">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-royal">
                      {program.duration}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#0B1220]">
                      {program.slug === "a-levels" ? "IAL" : program.shortTitle}
                    </h3>
                    <p className="mt-3 line-clamp-5 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {program.overview}
                    </p>
                    <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-5">
                      <Link
                        href={program.href}
                        className="inline-flex rounded-md bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-primary-foreground transition hover:opacity-90"
                      >
                        Explore Programme
                      </Link>
                      <span className="font-serif text-4xl leading-none text-accent-gold/70">”</span>
                    </div>
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
                i === index ? "bg-accent-gold" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
