import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };
const formatDate = (date: string) => new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00`));
export function generateStaticParams() { return newsArticles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const article = newsArticles.find((item) => item.slug === slug); return { title: article?.title ?? "News", description: article?.excerpt }; }
export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params; const article = newsArticles.find((item) => item.slug === slug); if (!article) notFound();
  return <article><header className="bg-primary pt-32 text-white"><div className="container-ascend py-16"><p className="eyebrow text-accent-sky">{article.category} · {formatDate(article.date)}</p><h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">{article.title}</h1><p className="mt-6 max-w-2xl text-lg text-white/75">{article.excerpt}</p></div></header><div className="container-ascend max-w-5xl py-12"><div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]"><Image src={article.image} alt={article.title} fill className="object-cover" sizes="100vw" /></div><div className="prose-ascend mx-auto mt-10 max-w-3xl text-lg leading-relaxed"><p>{article.excerpt}</p><p>At Ascend, each update reflects our commitment to ambitious learning, thoughtful support, and meaningful pathways for students and families.</p></div><Link href="/news" className="mt-10 inline-block text-sm font-semibold text-royal hover:underline">← All news</Link></div></article>;
}
