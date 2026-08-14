import type { Metadata } from "next";
import { clubs } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { ClubCard } from "@/components/campus-life/club-card";

export const metadata: Metadata = {
  title: "Clubs & Activities",
  description:
    "Discover the clubs, activities, and communities that make student life at Ascend International School more exciting.",
};

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="Clubs & Activities"
        description="Discover the clubs, activities, and communities that make student life at Ascend International School more exciting."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clubs & Activities" },
        ]}
      />

      <section className="bg-[#0f3d8c] py-16 sm:py-20">
        <div className="container-ascend">
          <FadeIn>
            <p className="eyebrow text-accent-gold">Explore</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Find the club that fits you.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              From technology and debate to art, science, and community impact, every student can
              join a group, build new skills, and take part in life beyond the classroom.
            </p>
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
