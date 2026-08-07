import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { events } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Events", description: "Upcoming Ascend International School events, workshops, and campus gatherings." };
const formatDate = (date: string) => new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00`));
export default function EventsPage() {
  return <><PageHero eyebrow="Community" title="Join us at Ascend." description="Open days, workshops, and gatherings designed for students and families." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]} />
    <section className="section-padding"><div className="container-ascend"><SectionHeading eyebrow="Upcoming events" title="Learn, meet, and explore." /><div className="mt-10 space-y-5">{events.map((event) => <article key={event.slug} className="grid gap-6 rounded-[2rem] border border-border bg-card p-6 md:grid-cols-[180px_1fr_auto] md:items-center"><div><p className="font-serif text-2xl text-royal">{formatDate(event.date)}</p></div><div><h2 className="font-serif text-3xl">{event.title}</h2><p className="mt-3 text-muted-foreground">{event.description}</p><div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{formatDate(event.date)}</span><span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{event.location}</span></div></div><Button asChild variant="secondary"><Link href="/contact">Register interest</Link></Button></article>)}</div></div></section></>;
}
