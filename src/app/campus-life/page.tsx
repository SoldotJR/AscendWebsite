import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { extracurriculars } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Clubs & Activities",
  description:
    "At Ascend, learning doesn’t stop when the bell rings. Explore internships, student council, clubs, and field trips.",
};

export default function CampusLifePage() {
  return (
    <>
      <PageHero eyebrow="Extracurriculars" title="Clubs & Activities" />

      <section className="section-padding bg-white">
        <div className="container-ascend">
          <FadeIn>
            <p className="eyebrow">Student Life</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0B1220] md:text-4xl">
              Extracurriculars
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#1f2a3d] md:text-lg">
              At Ascend, learning doesn’t stop when the bell rings. Our extracurricular programs are
              designed to give students real-world skills, leadership experience, and a chance to
              explore their passions beyond the classroom.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-12 md:space-y-16">
            {extracurriculars.map((item, index) => {
              const imageLeft = index % 2 === 0;
              const href = "href" in item ? item.href : undefined;
              return (
                <FadeIn key={item.slug} delay={index * 0.04}>
                  <article
                    id={item.slug}
                    className="grid overflow-hidden rounded-[1.5rem] bg-[#0f3d8c] shadow-soft md:grid-cols-2"
                  >
                    <div className={`relative min-h-64 ${imageLeft ? "md:order-1" : "md:order-2"}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div
                      className={`flex flex-col justify-center p-7 md:p-10 ${imageLeft ? "md:order-2" : "md:order-1"}`}
                    >
                      <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                        {item.text}
                      </p>
                      {href ? (
                        <Link
                          href={href}
                          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-gold"
                        >
                          View All Clubs
                          <ArrowRight className="h-4 w-4 text-accent-gold" />
                        </Link>
                      ) : null}
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
