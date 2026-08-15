"use client";

import { useState } from "react";
import { Compass, Eye, GraduationCap } from "lucide-react";
import { educationalApproach, pillars } from "@/data/content";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "vision", label: "Vision and Mission" },
  { id: "pillars", label: "The Four Pillars / Core Values" },
  { id: "approach", label: "Ascend's Educational Approach" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ValuesPanel() {
  const [tab, setTab] = useState<TabId>("vision");

  return (
    <div>
      <div
        className="flex flex-col overflow-hidden rounded-t-[1.5rem] border border-b-0 border-border bg-white sm:flex-row"
        role="tablist"
        aria-label="Our values"
      >
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            className={cn(
              "flex-1 px-4 py-4 text-sm font-bold text-[#0B1220] transition sm:px-5",
              tab === item.id
                ? "bg-primary text-white"
                : "bg-white hover:bg-[#f3f6fb]"
            )}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        className="min-h-[28rem] rounded-b-[1.5rem] border border-border bg-white p-6 shadow-soft md:p-10"
      >
        {tab === "vision" ? (
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f6fb] text-primary">
                <Eye className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-[#0B1220]">Our Vision</h3>
              <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-[#1f2a3d] md:text-lg">
                To be a globally recognized institution of educational excellence, shaping creative,
                compassionate, and resilient leaders who drive positive change in an interconnected
                world.
              </p>
            </div>
            <div className="flex flex-col items-center text-center md:border-l md:border-border md:pl-12">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f6fb] text-primary">
                <Compass className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-[#0B1220]">Our Mission</h3>
              <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-[#1f2a3d] md:text-lg">
                To provide a balanced, student-centered education that challenges intellect, fosters
                ethical leadership, respects diversity, and encourages continuous self-improvement.
              </p>
            </div>
          </div>
        ) : null}

        {tab === "pillars" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="flex min-h-[22rem] flex-col items-center rounded-[1.25rem] bg-[#f8fafc] px-5 pb-8 pt-0 text-center shadow-soft"
              >
                <div className="h-3 w-16 rounded-b-md bg-accent-gold" />
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  0{index + 1}
                </div>
                <div className="mt-5 h-full w-full rounded-b-[1.5rem] border-x-4 border-b-4 border-primary/15 px-2 pb-4 pt-2">
                  <h3 className="text-lg font-bold leading-snug text-[#0B1220]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1f2a3d]">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {tab === "approach" ? (
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f6fb] text-primary">
                <GraduationCap className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-2xl font-bold text-[#0B1220]">How we teach and support students</h3>
            </div>
            <ul className="space-y-4">
              {educationalApproach.map((item) => (
                <li
                  key={item}
                  className="relative rounded-2xl bg-[#f3f6fb] py-4 pl-12 pr-5 text-sm leading-relaxed text-[#1f2a3d] md:text-base"
                >
                  <span className="absolute left-5 top-5 h-2.5 w-2.5 rounded-full bg-accent-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
