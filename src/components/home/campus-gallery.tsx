"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = ["All", "Academics", "Campus", "Student Life", "Counseling", "Events"] as const;

export function CampusGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered =
      filter === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === filter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <section className="section-padding">
      <div className="container-ascend">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <FadeIn>
            <SectionHeading
              eyebrow="Campus Life"
              title="A focused environment for ambitious learners."
              description="International-standard classrooms, collaborative spaces, and a community oriented toward growth."
            />
          </FadeIn>
          {limit ? (
            <Button asChild variant="secondary">
              <Link href="/gallery">View full gallery</Link>
            </Button>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition",
                filter === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-5 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {items.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className="group relative mb-3 block w-full overflow-hidden rounded-xl focus-ring"
              onClick={() => setActive(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={index % 3 === 0 ? 1000 : 700}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition group-hover:opacity-100">
                {image.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white"
              aria-label="Close lightbox"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[active].src}
                alt={items[active].alt}
                width={1600}
                height={1200}
                className="h-auto max-h-[85vh] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
