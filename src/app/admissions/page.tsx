import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Admissions", description: "Begin your Ascend application with a clear, supportive admissions process." };
const steps = [["01", "Connect", "Share your interests and speak with our admissions team."], ["02", "Assess", "We review your background and recommend the right pathway."], ["03", "Apply", "Complete your application and submit the required documents."], ["04", "Begin", "Confirm enrollment and start your Ascend journey."]];

export default function AdmissionsPage() {
  return <><PageHero eyebrow="Admissions" title="Your next step starts here." description="Our team makes the admissions process personal, clear, and focused on your goals." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]} />
    <section className="section-padding"><div className="container-ascend"><SectionHeading eyebrow="How to apply" title="A thoughtful process, from first question to first day." /><div className="mt-10 grid gap-4 md:grid-cols-4">{steps.map(([number, title, detail]) => <div key={number} className="rounded-[1.5rem] border border-border p-6"><p className="font-serif text-4xl text-accent-gold">{number}</p><h2 className="mt-5 font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</p></div>)}</div></div></section>
    <section className="section-padding bg-surface-muted/50"><div className="container-ascend grid gap-10 lg:grid-cols-2"><div><SectionHeading eyebrow="What to prepare" title="Requirements that help us understand your potential." /><ul className="mt-8 space-y-3 text-sm text-muted-foreground">{["Completed inquiry or application form", "Recent academic transcripts or school records", "Identification and contact details", "A conversation with our admissions team"].map((item) => <li key={item} className="rounded-2xl border border-border bg-card px-5 py-4">{item}</li>)}</ul><div className="mt-8 rounded-[1.5rem] border border-accent-gold/40 bg-card p-6"><p className="eyebrow">Campus visits</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Meet our team, tour learning spaces, and discuss the right program for your family.</p><Button asChild variant="secondary" className="mt-5"><Link href="/contact">Schedule a visit</Link></Button></div></div><div><p className="eyebrow">Application inquiry</p><h2 className="mt-3 font-serif text-4xl">Tell us where you want to go.</h2><p className="mt-4 text-muted-foreground">We will respond with a pathway recommendation, timeline, and next steps.</p><div className="mt-7"><InquiryForm intent="application" /></div></div></div></section>
    <section className="section-padding"><div className="container-ascend max-w-4xl"><SectionHeading eyebrow="Common questions" title="Admissions FAQ" align="center" /><Accordion items={faqs} className="mt-10" /></div></section></>;
}
