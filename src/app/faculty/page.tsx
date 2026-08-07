import type { Metadata } from "next";
import Image from "next/image";
import { faculty } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = { title: "Faculty", description: "Meet the educators, leaders, and counselors guiding Ascend students." };
export default function FacultyPage() {
  return <><PageHero eyebrow="Our People" title="Educators who know where you are going." description="Our faculty brings experience, care, and high expectations to every student journey." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]} />
    <section className="section-padding"><div className="container-ascend"><SectionHeading eyebrow="Faculty & leadership" title="A team invested in every student's growth." /><div className="mt-10 grid gap-6 md:grid-cols-2">{faculty.map((member, index) => <FadeIn key={member.name} delay={index * .05}><article className="overflow-hidden rounded-[2rem] border border-border bg-card sm:flex"><Image src={member.image} alt={member.name} width={300} height={360} className="h-60 w-full object-cover sm:h-auto sm:w-48" /><div className="p-6"><p className="eyebrow">{member.position}</p><h2 className="mt-3 font-serif text-2xl">{member.name}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p><div className="mt-5 flex flex-wrap gap-2">{member.subjects.map((subject) => <span key={subject} className="rounded-full bg-surface-muted px-3 py-1 text-xs">{subject}</span>)}</div></div></article></FadeIn>)}</div></div></section></>;
}
