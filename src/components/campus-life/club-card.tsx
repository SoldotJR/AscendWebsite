import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Club } from "@/data/content";
import { cn } from "@/lib/utils";

const rasterPattern = /\.(jpe?g|png|webp|avif)$/i;

export function ClubCard({ club, className }: { club: Club; className?: string }) {
  const href = club.href ?? "/contact";
  const isRaster = Boolean(club.image && rasterPattern.test(club.image));

  return (
    <article
      id={club.slug}
      className={cn(
        "group flex h-full w-full flex-col overflow-hidden rounded-[1.25rem] border border-border bg-card shadow-[0_10px_28px_rgba(15,45,95,0.06)] transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_40px_rgba(15,45,95,0.12)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-primary">
        {club.image ? (
          <Image
            src={club.image}
            alt={club.name}
            fill
            unoptimized={!isRaster}
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b1220_0%,#0f3d8c_58%,#1e60b5_100%)]" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="inline-flex w-fit rounded-full bg-accent-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a67c0a] dark:text-accent-gold">
          {club.category}
        </span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-primary">{club.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{club.description}</p>
        <Link
          href={href}
          aria-label={`Learn more about ${club.name}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 hover:text-royal"
        >
          Learn More
          <ArrowRight className="h-4 w-4 text-accent-gold transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
