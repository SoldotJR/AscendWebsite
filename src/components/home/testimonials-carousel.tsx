"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding bg-surface-muted/70">
      <div className="container-ascend">
        <SectionHeading
          eyebrow="Student Voices"
          title="Why they chose Ascend."
          description="Friendly classrooms, serious ambition, and counselling that makes studying abroad feel practical."
        />

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 md:p-6">
            <Quote className="h-7 w-7 text-accent-gold" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.quote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-xl font-medium leading-relaxed md:text-2xl"
              >
                “{item.quote}”
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
