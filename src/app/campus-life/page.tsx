import type { Metadata } from "next";
import { clubs } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Clubs & Activities",
  description: "Discover clubs, activities, and student experiences at Ascend.",
};
export default function CampusLifePage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-ascend">
        <SectionHeading
          eyebrow="Clubs"
          title="Club details coming soon."
          description="Send the club names and descriptions whenever you're ready, and I’ll add them here."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {clubs.length ? (
            clubs.map((club) => (
              <article key={club.name} className="rounded-[1.5rem] border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">{club.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {club.description}
                </p>
              </article>
            ))
          ) : (
            <article className="rounded-[1.5rem] border border-dashed border-border bg-card p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">Ready for your club list</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I have prepared this section so we can add each club name and its description as
                soon as you send the information.
              </p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
