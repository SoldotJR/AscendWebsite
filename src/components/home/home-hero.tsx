"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="overflow-hidden bg-white">
      <div className="relative aspect-[16/9] w-full min-h-[420px] max-h-[88svh] sm:min-h-[560px]">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/images/campus/hero.jpg"
            alt="Ascend International School students and campus"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B1220]/15" />
        </motion.div>
      </div>

      <div className="relative overflow-hidden bg-white px-4 py-28 sm:py-36 md:min-h-[420px] md:py-44">
        <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 rounded-br-[4rem] border-b-[10px] border-r-[10px] border-b-accent-gold border-r-primary sm:h-36 sm:w-36" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-tl-[4rem] border-l-[10px] border-t-[10px] border-l-primary border-t-accent-gold sm:h-36 sm:w-36" />

        <div className="container-ascend relative mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-serif text-3xl font-semibold leading-tight tracking-tight text-[#0B1220] sm:text-4xl md:text-5xl"
          >
            Welcome to {siteConfig.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-6 text-base leading-relaxed text-[#1f2a3d] sm:text-lg md:text-xl"
          >
            {siteConfig.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="mt-8"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-royal"
            >
              Read More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
