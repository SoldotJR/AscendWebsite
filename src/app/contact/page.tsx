import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { InquiryForm } from "@/components/forms/inquiry-form";

export const metadata: Metadata = { title: "Contact", description: "Contact Ascend International School admissions in Yangon." };
export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Let’s start the conversation." description="Ask a question, request a campus visit, or begin finding the right pathway." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} /><section className="section-padding"><div className="container-ascend grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><SectionHeading eyebrow="Find us" title="Here when you are ready." /><div className="mt-8 space-y-4">{[[MapPin, "Visit", siteConfig.address.full], [Mail, "Email", siteConfig.email], [Phone, "Call", siteConfig.phones.join(" · ")]].map(([Icon, label, value]) => { const IconComponent = Icon as typeof MapPin; return <div key={label as string} className="flex gap-4 rounded-[1.5rem] border border-border p-5"><IconComponent className="mt-1 h-5 w-5 text-royal" /><div><p className="font-semibold">{label as string}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value as string}</p></div></div>; })}</div><div className="mt-6 flex gap-3"><a href={siteConfig.social.facebook} className="rounded-full border border-border px-4 py-2 text-sm font-semibold">Facebook</a><a href={siteConfig.social.linkedin} className="rounded-full border border-border px-4 py-2 text-sm font-semibold">LinkedIn</a></div><p className="mt-7 rounded-2xl border border-accent-gold/40 bg-surface-muted p-4 text-sm">For urgent matters, please call one of our campus numbers directly.</p></div><div><InquiryForm /><iframe title="Ascend International School location" src={siteConfig.mapEmbed} className="mt-6 h-80 w-full rounded-[1.75rem] border border-border" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section></>;
}
