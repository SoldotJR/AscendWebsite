import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers to common questions about Ascend programs, admissions, and campus life." };
export default function FAQPage() {
  return <><PageHero eyebrow="FAQ" title="Helpful answers, clearly explained." description="Everything families commonly ask about Ascend, our programs, and how to get started." breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]} /><section className="section-padding"><div className="container-ascend max-w-4xl"><SectionHeading eyebrow="Questions & answers" title="How can we help?" align="center" /><Accordion items={faqs} className="mt-10" /><div className="mt-10 rounded-[1.5rem] bg-primary p-8 text-center text-white"><h2 className="font-serif text-3xl">Still have a question?</h2><p className="mt-3 text-white/75">Our admissions team would be glad to help.</p><Button asChild variant="gold" className="mt-6"><Link href="/contact">Contact us</Link></Button></div></div></section></>;
}
