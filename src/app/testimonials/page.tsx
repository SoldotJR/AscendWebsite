import type { Metadata } from "next";
import Image from "next/image";
import { testimonials } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Testimonials", description: "Hear from Ascend students about their academic and university journeys." };
export default function TestimonialsPage() {
  return <><PageHero eyebrow="Student Voices" title="Stories of growth, in their own words." description="Students share what it means to learn with ambition, support, and direction." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} /><section className="section-padding"><div className="container-ascend"><SectionHeading eyebrow="The Ascend experience" title="Confidence built one step at a time." /><div className="mt-10 grid gap-6 md:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.name} className="flex flex-col rounded-[2rem] border border-border bg-card p-7"><blockquote className="font-serif text-2xl leading-relaxed">“{testimonial.quote}”</blockquote><figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-5"><Image src={testimonial.image} alt={testimonial.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" /><div><p className="font-semibold">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></div></figcaption></figure>)}</div></div></section></>;
}
