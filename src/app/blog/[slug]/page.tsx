import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };
const formatDate = (date: string) => new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00`));
export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const post = blogPosts.find((item) => item.slug === slug); return { title: post?.title ?? "Blog", description: post?.excerpt }; }
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; const post = blogPosts.find((item) => item.slug === slug); if (!post) notFound();
  return <article className="pt-28"><header className="bg-surface-muted py-16"><div className="container-ascend max-w-4xl"><p className="eyebrow mt-8">{post.category} · {formatDate(post.date)}</p><h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{post.title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p></div></header><div className="container-ascend max-w-3xl py-14 text-lg leading-relaxed text-muted-foreground"><p>{post.excerpt}</p><p className="mt-6">Every student’s route is different. The most useful decisions begin with an honest understanding of current strengths, future goals, and the support needed to bridge the two.</p><p className="mt-6">Ascend’s counselors and educators help families ask the right questions early, then turn the answers into a clear, achievable plan.</p><Link href="/blog" className="mt-10 inline-block text-sm font-semibold text-royal hover:underline">← More insights</Link></div></article>;
}
