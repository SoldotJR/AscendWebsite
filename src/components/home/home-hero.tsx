"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0f3d8c]">
      <div className="relative aspect-[16/9] w-full min-h-[420px] max-h-[92svh] sm:min-h-[520px]">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/images/campus/hero.jpg"
            alt="Ascend International School campus learning environment"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/88 via-[#0f3d8c]/45 to-[#1e60b5]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/55 via-transparent to-[#0B1220]/25" />
        </motion.div>

        <div className="container-ascend relative z-10 flex h-full min-h-[420px] flex-col justify-end pb-8 pt-28 sm:min-h-[520px] sm:pb-10">
          <p className="eyebrow mb-3 text-accent-sky">
            Pearson-Approved International School · Yangon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="gold">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/55 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              <Link href="/academics">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
