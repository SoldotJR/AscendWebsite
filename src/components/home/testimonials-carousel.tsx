"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/content";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1e60b5] to-[#0f3d8c] py-16 text-white sm:py-20">
      <button
        type="button"
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/30 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:inline-flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/30 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:inline-flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="container-ascend">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Why They Chose Ascend
        </h2>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="order-2 lg:order-1"
            >
              <blockquote className="text-base leading-relaxed text-white/95 sm:text-lg md:text-xl">
                “{item.quote}”
              </blockquote>
              <div className="mt-6 h-px w-16 bg-white/70" />
              <p className="mt-4 text-lg font-semibold">{item.name}</p>
              <p className="mt-1 text-sm text-white/70">{item.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[1.5rem] shadow-soft">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full border border-white/30 p-2 text-white/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full border border-white/30 p-2 text-white/80"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
