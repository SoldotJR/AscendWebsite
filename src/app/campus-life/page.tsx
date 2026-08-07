import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CampusGallery } from "@/components/home/campus-gallery";

export const metadata: Metadata = { title: "Campus Life", description: "Discover Ascend's focused, welcoming learning environment in Yangon." };
export default function CampusLifePage() {
  return <><PageHero eyebrow="Campus Life" title="Space to focus. Community to grow." description="Ascend balances calm, purposeful learning spaces with a close-knit school community." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Campus Life" }]} />
    <section className="section-padding"><div className="container-ascend grid gap-12 lg:grid-cols-2"><div className="relative min-h-96 overflow-hidden rounded-[2rem]"><Image src="/images/campus/gallery-8.jpg" alt="Ascend campus exterior" fill className="object-cover" sizes="50vw" /></div><div className="flex flex-col justify-center"><SectionHeading eyebrow="The Ascend experience" title="Designed for purposeful days." description="Our learning environment gives students room to think, collaborate, meet with mentors, and prepare for what comes next." /><div className="mt-7 grid gap-3 sm:grid-cols-2">{["International-standard classrooms", "Collaborative study spaces", "Small, attentive cohorts", "A connected campus community"].map((item) => <p key={item} className="rounded-2xl border border-border p-4 text-sm">{item}</p>)}</div><Button asChild className="mt-8 w-fit"><Link href="/contact">Plan a campus visit</Link></Button></div></div></section><CampusGallery limit={6} /></>;
}
