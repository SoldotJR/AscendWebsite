import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";

export function LatestNews() {
  const [featured, ...rest] = newsArticles;

  return (
    <section className="section-padding bg-surface-muted/70">
      <div className="container-ascend">
        <FadeIn>
          <SectionHeading
            eyebrow="Latest News"
            title="Announcements, pathways, and campus updates."
          />
        </FadeIn>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <Link
              href={`/news/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
            >
              <div className="relative min-h-48">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-royal">
                  Featured · {featured.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight">{featured.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
              </div>
            </Link>
          </FadeIn>

          <div className="space-y-3">
            {rest.map((article, index) => (
              <FadeIn key={article.slug} delay={index * 0.04}>
                <Link
                  href={`/news/${article.slug}`}
                  className="flex gap-3 rounded-2xl border border-border bg-card p-3 transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                    <Image src={article.image} alt="" fill className="object-cover" sizes="96px" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-muted">{article.category}</p>
                    <h3 className="mt-1 text-base font-semibold leading-snug">{article.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
