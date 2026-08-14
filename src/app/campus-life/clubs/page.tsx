import type { Metadata } from "next";
import { clubs } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { ClubCard } from "@/components/campus-life/club-card";

export const metadata: Metadata = {
  title: "Clubs",
  description:
    "From science to debate to the arts, explore student-driven clubs at Ascend International School.",
};

export default function ClubsPage() {
  return (
    <>
      <PageHero eyebrow="Clubs & Activities" title="Clubs" />

      <section className="section-padding bg-white">
        <div className="container-ascend">
          <FadeIn>
            <p className="eyebrow">Our Clubs</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0B1220] md:text-4xl">
              Find the club that fits you
            </h2>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {clubs.map((club, index) => (
              <FadeIn key={club.slug} delay={index * 0.04} className="h-full w-full">
                <ClubCard club={club} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
