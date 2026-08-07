import type { Metadata } from "next";
import { universities } from "@/lib/site";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { HomeCTA } from "@/components/home/home-cta";

export const metadata: Metadata = { title: "University Counseling", description: "Personalized university planning, testing, applications, and scholarship strategy." };
const support = ["Academic and pathway planning", "University research and shortlist strategy", "SAT, IELTS, and TOEFL preparation", "Personal statement and essay guidance", "Application and scholarship support"];
export default function UniversityCounselingPage() {
  return <><PageHero eyebrow="University Counseling" title="Ambition needs a strategy." description="One-to-one guidance helps every student make confident choices from first plan to final application." breadcrumbs={[{ label: "Home", href: "/" }, { label: "University Counseling" }]} />
    <section className="section-padding"><div className="container-ascend grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><SectionHeading eyebrow="A personal roadmap" title="Counseling that sees the whole student." description="We connect academic choices, extracurricular development, testing, and applications into a strategy that feels purposeful." /></div><ol className="space-y-3">{support.map((item, index) => <li key={item} className="flex gap-5 rounded-[1.5rem] border border-border bg-card p-5"><span className="font-serif text-3xl text-accent-gold">0{index + 1}</span><span className="pt-2 font-medium">{item}</span></li>)}</ol></div></section>
    <section className="section-padding bg-surface-muted/50"><div className="container-ascend"><SectionHeading eyebrow="Global possibilities" title="Aiming toward outstanding institutions." description="We help students build strong, authentic applications for universities across the world." /><div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">{universities.map((university) => <p key={university} className="mb-3 break-inside-avoid rounded-2xl border border-border bg-card px-5 py-4 text-sm">{university}</p>)}</div></div></section><HomeCTA /></>;
}
