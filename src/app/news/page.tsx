import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "News", description: "Latest news, announcements, and school updates from Ascend." };
const formatDate = (date: string) => new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00`));
export default function NewsPage() {
  return <><PageHero eyebrow="News" title="What is happening at Ascend." description="Announcements, academic updates, and community news." breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]} /><section className="section-padding"><div className="container-ascend"><SectionHeading eyebrow="Latest updates" title="News from our community." /><div className="mt-10 grid gap-6 md:grid-cols-3">{newsArticles.map((article) => <article key={article.slug} className="overflow-hidden rounded-[2rem] border border-border bg-card"><div className="relative aspect-[16/10]"><Image src={article.image} alt="" fill className="object-cover" sizes="33vw" /></div><div className="p-6"><p className="eyebrow">{article.category} · {formatDate(article.date)}</p><h2 className="mt-3 font-serif text-2xl">{article.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p><Link href={`/news/${article.slug}`} className="mt-5 inline-block text-sm font-semibold text-royal hover:underline">Read update →</Link></div></article>)}</div></div></section></>;
}
