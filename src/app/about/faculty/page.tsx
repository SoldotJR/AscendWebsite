import type { Metadata } from "next";
import Image from "next/image";
import { facultyGroups } from "@/data/content";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Faculty Members",
  description: "Meet the leadership, teaching staff, and counseling team at Ascend International School.",
};

export default function FacultyMembersPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-white pt-28">
        <div className="container-ascend">
          <FadeIn>
            <h1 className="text-center text-4xl font-bold tracking-tight text-[#0B1220] md:text-5xl">
              Faculty Members
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#1f2a3d] md:text-lg">
              Educators, mentors, and counselors dedicated to every student&apos;s growth.
            </p>
          </FadeIn>

          <div className="mt-16 space-y-16">
            {facultyGroups.map((group) => (
              <section key={group.title}>
                <FadeIn>
                  <h2 className="text-2xl font-bold tracking-tight text-[#0B1220] md:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#1f2a3d]">
                    {group.description}
                  </p>
                </FadeIn>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member, index) => (
                    <FadeIn key={member.name} delay={index * 0.04}>
                      <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-soft">
                        <div className="relative h-56">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                            {member.position}
                          </p>
                          <h3 className="mt-2 text-xl font-bold text-[#0B1220]">{member.name}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-[#1f2a3d]">{member.bio}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {member.subjects.map((subject) => (
                              <span
                                key={subject}
                                className="rounded-full bg-[#f3f6fb] px-3 py-1 text-xs font-medium text-[#0B1220]"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
