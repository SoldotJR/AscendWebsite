import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Blog", description: "Guidance and insights on international education and university pathways." };
const formatDate = (date: string) => new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00`));
export default function BlogPage() {
  return <><PageHero eyebrow="Insights" title="Guidance for every next step." description="Practical perspectives on pathways, applications, and learning with purpose." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} /><section className="section-padding"><div className="container-ascend"><SectionHeading eyebrow="From Ascend" title="Read, reflect, move forward." /><div className="mt-10 divide-y divide-border border-y border-border">{blogPosts.map((post) => <article key={post.slug} className="grid gap-5 py-8 md:grid-cols-[180px_1fr_auto] md:items-center"><p className="text-sm text-muted-foreground">{post.category}<br />{formatDate(post.date)}</p><div><h2 className="font-serif text-3xl">{post.title}</h2><p className="mt-3 text-muted-foreground">{post.excerpt}</p></div><Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-royal hover:underline">Read article →</Link></article>)}</div></div></section></>;
}
